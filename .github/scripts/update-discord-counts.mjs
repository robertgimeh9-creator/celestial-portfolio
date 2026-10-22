import { readFile, writeFile } from "node:fs/promises";

const outputPath = new URL("../../data/discord-counts.json", import.meta.url);
const inviteCodes = {
    "Anime Journey": "JF5xzf5xs",
    "A Bizarre Arena": "yQXkaQF5J",
    "Magma Jr": "m2e33Un2c",
    "Paradox": "xhzFw4psk",
    "Stands Battleground": "ysSJ5weMC",
    "Hyperions": "8mQb7Qhhe",
    "Lumina Order Bot": "epgcys73c",
    "Tales of Elyris": "HpVDHVqjM",
    "Grimoire Requiem": "kY6gQq3zy",
    "Anime Horizon Tower Defence": "CTZFYw6fM"
};

const readExistingCounts = async () => {
    try {
        const existing = JSON.parse(await readFile(outputPath, "utf8"));
        if (existing.counts && typeof existing.counts === "object" && !Array.isArray(existing.counts)) {
            return existing.counts;
        }
    } catch (error) {
        if (error.code !== "ENOENT") throw error;
    }
    return {};
};

const fetchInvite = async (code) => {
    for (let attempt = 0; attempt < 4; attempt += 1) {
        const response = await fetch(
            `https://discord.com/api/v10/invites/${encodeURIComponent(code)}?with_counts=true&with_expiration=true`,
            { headers: { Accept: "application/json", "User-Agent": "CelestialMoonPortfolio/1.0" } }
        );
        if (response.status === 429 && attempt < 3) {
            const body = await response.json().catch(() => ({}));
            const retryAfter = Number(response.headers.get("Retry-After")) || Number(body.retry_after) || 2 ** attempt;
            await new Promise((resolve) => setTimeout(resolve, Math.min(retryAfter * 1000, 60000)));
            continue;
        }
        if (!response.ok) throw new Error(`Discord returned HTTP ${response.status}.`);
        const invite = await response.json();
        const memberCount = invite.profile?.member_count ?? invite.approximate_member_count;
        if (!Number.isInteger(memberCount) || memberCount < 0) {
            throw new Error("Discord returned no public member count.");
        }
        return memberCount;
    }
    throw new Error("Discord rate limit retries were exhausted.");
};

if (process.argv.includes("--validate")) {
    const existingCounts = await readExistingCounts();
    const missingCodes = Object.entries(inviteCodes)
        .filter(([, code]) => typeof code !== "string" || !code.trim())
        .map(([name]) => name);
    if (missingCodes.length) throw new Error(`Missing invite codes for: ${missingCodes.join(", ")}`);
    console.log(`Validated ${Object.keys(inviteCodes).length} Discord invite codes and ${Object.keys(existingCounts).length} stored counts.`);
} else {
    const counts = await readExistingCounts();
    let successCount = 0;
    const failures = [];

    for (const [name, code] of Object.entries(inviteCodes)) {
        try {
            counts[name] = {
                memberCount: await fetchInvite(code),
                fetchedAt: new Date().toISOString()
            };
            successCount += 1;
            console.log(`Updated member count for ${name}.`);
        } catch (error) {
            failures.push(`${name}: ${error.message}`);
            console.warn(`Unable to update ${name}: ${error.message}`);
        }
        await new Promise((resolve) => setTimeout(resolve, 1500));
    }

    if (successCount === 0) {
        throw new Error(`No Discord member counts could be refreshed. ${failures.join("; ")}`);
    }

    await writeFile(outputPath, `${JSON.stringify({ updatedAt: new Date().toISOString(), counts }, null, 2)}\n`);
    if (failures.length) {
        console.warn(`${successCount} counts updated; ${failures.length} retained their last successful value.`);
    }
}
