// Update these values when you are ready to add personal media or contact details.
const PORTFOLIO_CONFIG = {
    profileImage: "public/images/moon-avatar.jpg",
    contactUrl: "mailto:moonstonejake232@gmail.com",
    discordUrl: "https://discord.gg/Bb2Ft6yHz",
    projects: [
        {
            name: "Anime Journey",
            role: "GAME TESTER",
            description: "Gameplay testing focused on identifying bugs, documenting reproduction steps, and communicating findings to developers.",
            status: "CURRENT ROLE",
            image: "public/images/anime-journey.png",
            serverIcon: "https://cdn.discordapp.com/icons/1499528357077844180/74f862a9a88c908b5a55a544fdbe2e8b.png?size=256",
            invite: "https://discord.gg/JF5xzf5xs",
            caseStudy: {
                overview: "Game testing experience for Anime Journey, with a focus on useful, reproducible feedback.",
                responsibilities: ["Test gameplay", "Identify bugs", "Write reproduction steps", "Communicate findings to developers"],
                tools: [],
                skills: ["Gameplay testing", "Bug reporting", "Reproduction steps", "Developer communication"],
                challenge: "",
                contribution: "",
                outcome: ""
            }
        },
        {
            name: "A Bizarre Arena",
            role: "GAME TESTER",
            description: "Gameplay-mechanics testing, checking for unexpected behavior, and documenting reproducible issues.",
            status: "CURRENT ROLE",
            image: "public/images/bizarre-arena.png",
            serverIcon: "https://cdn.discordapp.com/icons/1538011912099467295/e7468cc8b0ba15bab7884e41c43c9cdc.png?size=256",
            invite: "https://discord.gg/yQXkaQF5J",
            caseStudy: {
                overview: "Game testing experience centered on gameplay mechanics and clear, reproducible issue reports.",
                responsibilities: ["Test gameplay mechanics", "Check for unexpected behavior", "Document reproducible issues"],
                tools: [],
                skills: ["Gameplay testing", "Exploratory testing", "Issue documentation"],
                challenge: "",
                contribution: "",
                outcome: ""
            }
        },
        {
            name: "Magma Jr",
            role: "JUNIOR MODERATOR",
            description: "Community moderation, server-rule enforcement, and helping maintain a positive environment.",
            status: "CURRENT ROLE",
            image: "public/images/magma-jr.png",
            serverIcon: "https://cdn.discordapp.com/icons/1398828710588584097/51a26271e5f130b8ea6397fc410d8dc6.png?size=256",
            invite: "https://discord.gg/m2e33Un2c",
            caseStudy: {
                overview: "Junior Moderator experience supporting the Magma Jr Discord community.",
                responsibilities: ["Moderate the community", "Enforce server rules", "Help maintain a positive environment"],
                tools: ["Discord"],
                skills: ["Community moderation", "Rule enforcement", "Community support"],
                challenge: "",
                contribution: "",
                outcome: ""
            }
        },
        {
            name: "Paradox",
            role: "LEAD STAFF",
            description: "Staff coordination, moderation oversight, handling staff concerns, and maintaining staff standards.",
            status: "CURRENT ROLE",
            image: "public/images/paradox.png",
            serverIcon: "https://cdn.discordapp.com/icons/1500176830349447308/ed52bd9d32e2d8a174265b82f27eb912.png?size=256",
            invite: "https://discord.gg/xhzFw4psk",
            caseStudy: {
                overview: "Lead Staff experience coordinating staff and supporting consistent moderation standards.",
                responsibilities: ["Coordinate staff", "Oversee moderation", "Handle staff concerns", "Maintain staff standards"],
                tools: ["Discord"],
                skills: ["Staff coordination", "Moderation oversight", "Staff communication", "Standards maintenance"],
                challenge: "",
                contribution: "",
                outcome: ""
            }
        },
        {
            name: "Stands Battleground",
            role: "JUNIOR MODERATOR",
            description: "Community support, rule enforcement, and assisting with moderation.",
            status: "CURRENT ROLE",
            image: "public/images/stands-battleground.png",
            serverIcon: "https://cdn.discordapp.com/icons/1467076090488029297/192deb8373f3c730c495c4f60298e4a0.png?size=256",
            invite: "https://discord.gg/ysSJ5weMC",
            caseStudy: {
                overview: "Junior Moderator experience supporting members and assisting with community moderation.",
                responsibilities: ["Support the community", "Enforce server rules", "Assist with moderation"],
                tools: ["Discord"],
                skills: ["Community support", "Rule enforcement", "Moderation assistance"],
                challenge: "",
                contribution: "",
                outcome: ""
            }
        },
        {
            name: "Hyperions",
            role: "FORMER MODERATOR",
            description: "Former moderation experience involving community issues and support for server operations.",
            status: "FORMER ROLE",
            image: "public/images/hyperions.png",
            serverIcon: "https://cdn.discordapp.com/icons/1422969507734884374/a_5e08df7df263faf284ce685e3564355f.gif?size=256",
            invite: "https://discord.gg/8mQb7Qhhe",
            caseStudy: {
                overview: "Former Moderator experience supporting community operations at Hyperions.",
                responsibilities: ["Handle community issues", "Support server operations"],
                tools: ["Discord"],
                skills: ["Community moderation", "Issue handling", "Server operations"],
                challenge: "",
                contribution: "",
                outcome: ""
            }
        },
        {
            name: "Lumina Order Bot",
            role: "BOT MANAGER",
            description: "Discord bot management involving JavaScript, Node.js, discord.js, ticket workflows, helper management, slash commands, and vouch features where applicable.",
            status: "CURRENT ROLE",
            image: "public/images/lumina-order.png",
            serverIcon: "https://cdn.discordapp.com/icons/1440107554121187452/a_a22542e301bd6327b94c33360f6a6119.gif?size=256",
            invite: "https://discord.gg/epgcys73c",
            caseStudy: {
                overview: "Bot Manager experience for Lumina Order Bot, combining Discord bot operations with community workflows.",
                responsibilities: ["Manage the Discord bot", "Support ticket workflows", "Manage helpers", "Work with slash commands and vouch features where applicable"],
                tools: ["JavaScript", "Node.js", "discord.js"],
                skills: ["Discord bot management", "Ticket workflows", "Helper management", "Slash commands", "Vouch features where applicable"],
                challenge: "",
                contribution: "",
                outcome: ""
            }
        },
        {
            name: "Tales of Elyris",
            role: "LEAD DEVELOPER",
            description: "Lead Developer experience. Project-specific responsibilities and technical details are not yet provided.",
            status: "CURRENT ROLE",
            image: "",
            serverIcon: "https://cdn.discordapp.com/icons/1562177498224005182/0b4ec03b026c3cd513412bc1310b6882.webp?size=256",
            invite: "https://discord.gg/HpVDHVqjM",
            caseStudy: {
                overview: "Lead Developer experience at Tales of Elyris. Project details have not yet been provided.",
                responsibilities: ["Lead Developer"],
                tools: [],
                skills: ["Development", "Team leadership"],
                challenge: "",
                contribution: "",
                outcome: ""
            }
        },
        {
            name: "Grimoire Requiem",
            role: "DEVELOPER",
            description: "Development experience. Add verified technical contributions, tools, features, and project progress.",
            status: "CURRENT ROLE",
            image: "public/images/grimoire-requiem.png",
            serverIcon: "https://cdn.discordapp.com/icons/1544419459153006662/ae8fa5d3cbb13a7f385a7acb7c7a61fb.png?size=256",
            invite: "https://discord.gg/kY6gQq3zy",
            caseStudy: {
                overview: "Developer experience for Grimoire Requiem. Technical details are left open for accurate project-specific examples.",
                responsibilities: ["Contribute as a developer"],
                tools: [],
                skills: ["Software development"],
                challenge: "",
                contribution: "",
                outcome: ""
            }
        },
        {
            name: "Anime Horizon Tower Defence",
            role: "TRIAL TESTER",
            description: "Trial Tester for Anime Horizon Tower Defence.",
            status: "CURRENT ROLE",
            image: "",
            serverIcon: "https://cdn.discordapp.com/icons/1302630402846097540/8447c355fd0d9327d8f63dcc132d1a65.png?size=256",
            invite: "https://discord.gg/CTZFYw6fM",
            link: "https://discord.com/channels/1302630402846097540/1365204177562894336",
            linkLabel: "Open Discord channel",
            caseStudy: {
                overview: "Trial Tester role for Anime Horizon Tower Defence.",
                responsibilities: ["Trial testing"],
                tools: [],
                skills: ["Gameplay testing"],
                challenge: "",
                contribution: "",
                outcome: ""
            }
        }
    ],
    communityLinks: {},
    // Each track uses { src, title, artist, cover, dominantColor }; tracks enables playlist controls.
    music: {
        src: "",
        title: "Configure a local track",
        artist: "",
        volume: 0.55,
        cover: "",
        dominantColor: "",
        tracks: [
            {
                src: "public/audio/blast-off.mp3",
                title: "Blast Off (feat. Juice WRLD & Trippie Redd)",
                artist: "Internet Money",
                cover: "public/images/music/cover-04f1e01fcf9b.png"
            },
            {
                src: "public/audio/hide.mp3",
                title: "Hide",
                artist: "Juice WRLD",
                cover: "public/images/music/cover-77c6003dbddd.png"
            },
            {
                src: "public/audio/empty.mp3",
                title: "Empty",
                artist: "Juice WRLD",
                cover: "public/images/music/cover-39e2361e9142.png"
            },
            {
                src: "public/audio/hemotions.mp3",
                title: "HeMotions",
                artist: "Juice WRLD",
                cover: "public/images/music/cover-39e2361e9142.png"
            },
            {
                src: "public/audio/fast.mp3",
                title: "Fast",
                artist: "Juice WRLD",
                cover: "public/images/music/cover-39e2361e9142.png"
            },
            {
                src: "public/audio/flaws-and-sins.mp3",
                title: "Flaws and Sins",
                artist: "Juice WRLD",
                cover: "public/images/music/cover-39e2361e9142.png"
            },
            {
                src: "public/audio/syphilis.mp3",
                title: "Syphilis",
                artist: "Juice WRLD",
                cover: "public/images/music/cover-049df3ea01e5.png"
            },
            {
                src: "public/audio/who-shot-cupid.mp3",
                title: "Who Shot Cupid?",
                artist: "Juice WRLD",
                cover: "public/images/music/cover-39e2361e9142.png"
            },
            {
                src: "public/audio/hate-me.mp3",
                title: "Hate Me",
                artist: "Ellie Goulding & Juice WRLD",
                cover: "public/images/music/cover-c1bed095a6ba.png"
            },
            {
                src: "public/audio/moonlight.mp3",
                title: "Moonlight",
                artist: "Juice WRLD",
                cover: "public/images/music/cover-282c65a1a9de.png"
            },
            {
                src: "public/audio/lean-wit-me.mp3",
                title: "Lean Wit Me",
                artist: "Juice WRLD",
                cover: "public/images/music/cover-39e2361e9142.png"
            },
            {
                src: "public/audio/lifes-a-dungeon.mp3",
                title: "Life's a Dungeon",
                artist: "Juice WRLD",
                cover: "public/images/music/cover-39e2361e9142.png"
            },
            {
                src: "public/audio/outsiders.mp3",
                title: "Outsiders (Unreleased Album)",
                artist: "Juice WRLD",
                cover: "public/images/music/cover-39e2361e9142.png"
            }
        ],
        youtubePlaylistId: "RDomGrk9CdjfQ",
        youtubeVideoId: "omGrk9CdjfQ"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const select = (selector, root = document) => root.querySelector(selector);
    const selectAll = (selector, root = document) => [...root.querySelectorAll(selector)];
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const stars = select("#stars");
    if (stars) {
        const fragment = document.createDocumentFragment();
        const starCount = prefersReducedMotion ? 24 : 76;
        for (let index = 0; index < starCount; index += 1) {
            const star = document.createElement("span");
            star.className = "sky-star";
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.setProperty("--star-size", `${0.8 + Math.random() * 1.7}px`);
            star.style.setProperty("--twinkle-duration", `${3 + Math.random() * 5}s`);
            star.style.setProperty("--twinkle-delay", `${Math.random() * 8}s`);
            fragment.appendChild(star);
        }
        stars.appendChild(fragment);
    }

    const dust = select("#cosmic-dust");
    if (dust && !prefersReducedMotion) {
        const fragment = document.createDocumentFragment();
        for (let index = 0; index < 22; index += 1) {
            const particle = document.createElement("span");
            particle.className = "dust-particle";
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.setProperty("--drift-duration", `${14 + Math.random() * 22}s`);
            particle.style.setProperty("--drift-delay", `${Math.random() * -24}s`);
            fragment.appendChild(particle);
        }
        dust.appendChild(fragment);
    }

    const revealElements = selectAll(".reveal");
    if ("IntersectionObserver" in window && !prefersReducedMotion) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });
        revealElements.forEach((element) => revealObserver.observe(element));
    } else {
        revealElements.forEach((element) => element.classList.add("is-visible"));
    }

    const nav = select("#primary-navigation");
    const menuToggle = select(".menu-toggle");
    const navLinks = selectAll(".navigation__link");
    const closeMenu = () => {
        if (!nav || !menuToggle) return;
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
    };

    if (nav && menuToggle) {
        menuToggle.addEventListener("click", () => {
            const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
            menuToggle.setAttribute("aria-expanded", String(!isOpen));
            menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
            nav.classList.toggle("is-open", !isOpen);
        });
        navLinks.forEach((link) => link.addEventListener("click", closeMenu));
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") closeMenu();
        });
    }

    const navigationTargets = navLinks
        .map((link) => link.hash ? select(link.hash) : null)
        .filter(Boolean);
    if ("IntersectionObserver" in window && navigationTargets.length) {
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                navLinks.forEach((link) => {
                    const active = link.hash === `#${entry.target.id}`;
                    link.classList.toggle("is-active", active);
                    if (active) link.setAttribute("aria-current", "location");
                    else link.removeAttribute("aria-current");
                });
            });
        }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
        navigationTargets.forEach((target) => navObserver.observe(target));
    }

    selectAll(".project-card").forEach((card, index) => {
        const project = PORTFOLIO_CONFIG.projects[index];
        if (!project) return;
        const title = select("h3", card);
        const role = select(".role-pill", card);
        const description = select(".project-card__body > p", card);
        const status = select(".activity-pill", card);
        const image = select(".project-card__photo", card);
        const invite = select(".project-card__link", card);

        if (title) title.textContent = project.name;
        if (role) role.textContent = project.role;
        if (description) description.textContent = project.description;
        if (status) status.textContent = project.status;
        if (image) {
            const projectImageUrl = project.image.trim();
            const serverIconUrl = project.serverIcon?.trim() || "";
            const showProjectImage = () => {
                image.classList.remove("is-server-icon");
                image.alt = project.imageAlt || `${project.name} thumbnail`;
                if (projectImageUrl && image.src !== new URL(projectImageUrl, document.baseURI).href) {
                    image.src = projectImageUrl;
                    image.hidden = false;
                    return;
                }
                image.hidden = true;
                console.error(`The configured image for ${project.name} could not be loaded.`);
            };
            image.addEventListener("error", showProjectImage);
            if (serverIconUrl) {
                image.alt = `${project.name} Discord server icon`;
                image.classList.add("is-server-icon");
                image.src = serverIconUrl;
                image.hidden = false;
            } else if (projectImageUrl) {
                image.src = projectImageUrl;
                image.alt = project.imageAlt || `${project.name} thumbnail`;
                image.hidden = false;
            }
        }
        const projectLink = project.invite.trim() || project.link?.trim() || "";
        if (invite && projectLink) {
            try {
                const inviteUrl = new URL(projectLink);
                if (inviteUrl.protocol !== "https:" && inviteUrl.protocol !== "http:") {
                    console.error(`The ${project.name} project URL must use HTTP or HTTPS.`);
                    invite.hidden = true;
                } else {
                    invite.href = inviteUrl.href;
                    invite.target = "_blank";
                    invite.rel = "noopener noreferrer";
                    invite.replaceChildren(
                        document.createTextNode(`${project.linkLabel || "Join Server"} `),
                        Object.assign(document.createElement("span"), {
                            textContent: "↗",
                            ariaHidden: "true"
                        })
                    );
                    invite.hidden = false;
                }
            } catch (error) {
                invite.hidden = true;
                console.error(`The ${project.name} project URL is invalid.`, error);
            }
        } else if (invite) {
            invite.hidden = true;
        }

        const caseStudyButton = document.createElement("button");
        caseStudyButton.className = "case-study-trigger";
        caseStudyButton.type = "button";
        caseStudyButton.textContent = "View case study";
        caseStudyButton.setAttribute("aria-haspopup", "dialog");
        caseStudyButton.addEventListener("click", () => {
            const caseStudy = project.caseStudy;
            const dialog = select("#case-study-dialog");
            const dialogTitle = select("#case-study-title");
            const dialogStatus = select("#case-study-status");
            const dialogRole = select("#case-study-role");
            const content = select("#case-study-content");
            if (!caseStudy || !dialog || !dialogTitle || !dialogStatus || !dialogRole || !content) {
                console.error(`The case study for ${project.name} is not configured.`);
                return;
            }

            dialogTitle.textContent = project.name;
            dialogStatus.textContent = project.status;
            dialogRole.textContent = caseStudy.period ? `${project.role} · ${caseStudy.period}` : project.role;
            content.replaceChildren();

            const addParagraphSection = (heading, text) => {
                if (!text || !text.trim()) return;
                const section = document.createElement("section");
                section.className = "case-study-section";
                const title = document.createElement("h3");
                title.textContent = heading;
                const paragraph = document.createElement("p");
                paragraph.textContent = text;
                section.append(title, paragraph);
                content.appendChild(section);
            };
            const addListSection = (heading, items) => {
                if (!Array.isArray(items) || items.length === 0) return;
                const section = document.createElement("section");
                section.className = "case-study-section";
                const title = document.createElement("h3");
                title.textContent = heading;
                const list = document.createElement("ul");
                items.forEach((item) => {
                    const listItem = document.createElement("li");
                    listItem.textContent = item;
                    list.appendChild(listItem);
                });
                section.append(title, list);
                content.appendChild(section);
            };

            addParagraphSection("Overview", caseStudy.overview);
            addListSection("Responsibilities", caseStudy.responsibilities);
            addListSection("Tools & technologies", caseStudy.tools);
            addListSection("Skills", caseStudy.skills);
            addParagraphSection("Challenge", caseStudy.challenge);
            addParagraphSection("Contribution", caseStudy.contribution);
            addParagraphSection("Outcome", caseStudy.outcome);

            const mediaSection = document.createElement("section");
            mediaSection.className = "case-study-section";
            const mediaTitle = document.createElement("h3");
            mediaTitle.textContent = "Project materials";
            const mediaGrid = document.createElement("div");
            mediaGrid.className = "case-study-materials";
            [
                ["Screenshot", "Not shared publicly"],
                ["Video", "Not shared publicly"],
                ["Public demo", "Not available"],
                ["Repository", "Not available"]
            ].forEach(([label, status]) => {
                const material = document.createElement("div");
                material.className = "case-study-material";
                const materialLabel = document.createElement("span");
                materialLabel.textContent = label;
                const materialStatus = document.createElement("p");
                materialStatus.textContent = status;
                material.append(materialLabel, materialStatus);
                mediaGrid.appendChild(material);
            });
            mediaSection.append(mediaTitle, mediaGrid);
            content.appendChild(mediaSection);

            if (project.invite || project.link) {
                try {
                    const inviteUrl = new URL(project.invite || project.link);
                    if (inviteUrl.protocol === "https:" || inviteUrl.protocol === "http:") {
                        const invite = document.createElement("a");
                        invite.className = "case-study-invite";
                        invite.href = inviteUrl.href;
                        invite.target = "_blank";
                        invite.rel = "noopener noreferrer";
                        invite.textContent = `${project.linkLabel || "Open Discord server invitation"} ↗`;
                        content.appendChild(invite);
                    }
                } catch (error) {
                    console.error(`The ${project.name} invite URL is invalid.`, error);
                }
            }
            if (project.invite && project.link) {
                try {
                    const projectUrl = new URL(project.link);
                    if (projectUrl.protocol === "https:" || projectUrl.protocol === "http:") {
                        const projectLink = document.createElement("a");
                        projectLink.className = "case-study-invite";
                        projectLink.href = projectUrl.href;
                        projectLink.target = "_blank";
                        projectLink.rel = "noopener noreferrer";
                        projectLink.textContent = `${project.linkLabel || "Open project link"} ↗`;
                        content.appendChild(projectLink);
                    }
                } catch (error) {
                    console.error(`The ${project.name} project URL is invalid.`, error);
                }
            }

            dialog.showModal();
        });
        const cardBody = select(".project-card__body", card);
        const projectImage = select(".project-card__image", card);
        if (project.invite && projectImage) {
            const memberCount = document.createElement("p");
            memberCount.className = "project-card__members";
            memberCount.setAttribute("role", "status");
            memberCount.textContent = "Loading member count…";
            memberCount.classList.add("is-unavailable");
            projectImage.appendChild(memberCount);
        }
        if (cardBody) {
            cardBody.appendChild(caseStudyButton);
        }
    });

    const formatCountAge = (fetchedAt) => {
        const ageMinutes = Math.max(0, Math.floor((Date.now() - fetchedAt.getTime()) / 60000));
        if (ageMinutes < 1) return "just updated";
        if (ageMinutes < 60) return `updated ${ageMinutes}m ago`;
        const ageHours = Math.floor(ageMinutes / 60);
        if (ageHours < 24) return `updated ${ageHours}h ago`;
        return `updated ${Math.floor(ageHours / 24)}d ago`;
    };
    const loadDiscordMemberCounts = async () => {
        const countElements = selectAll(".project-card__members");
        if (!countElements.length) return;
        try {
            const response = await fetch(`data/discord-counts.json?updated=${Date.now()}`, {
                headers: { Accept: "application/json" },
                cache: "no-store"
            });
            if (!response.ok) {
                throw new Error(`Member-count data returned HTTP ${response.status}.`);
            }
            const data = await response.json();
            for (const element of countElements) {
                const projectName = select("h3", element.closest(".project-card"))?.textContent;
                const entry = data.counts?.[projectName];
                const fetchedAt = entry?.fetchedAt ? new Date(entry.fetchedAt) : null;
                if (!Number.isInteger(entry?.memberCount) || entry.memberCount < 0 || !fetchedAt || Number.isNaN(fetchedAt.getTime())) {
                    element.textContent = "Count refresh pending";
                    element.classList.add("is-unavailable");
                    continue;
                }
                element.textContent = `${entry.memberCount.toLocaleString()} members · ${formatCountAge(fetchedAt)}`;
                element.title = `Discord invite count last refreshed ${fetchedAt.toLocaleString()}. Counts refresh hourly.`;
                element.classList.remove("is-unavailable");
                element.classList.add("is-live");
            }
        } catch (error) {
            countElements.forEach((element) => {
                element.textContent = "Count refresh pending";
                element.classList.add("is-unavailable");
            });
            console.warn("Unable to load the scheduled Discord member counts.", error);
        }
    };
    void loadDiscordMemberCounts();
    window.setInterval(() => void loadDiscordMemberCounts(), 5 * 60 * 1000);

    const caseStudyDialog = select("#case-study-dialog");
    const caseStudyClose = select("#case-study-close");
    caseStudyClose?.addEventListener("click", () => caseStudyDialog?.close());
    caseStudyDialog?.addEventListener("click", (event) => {
        if (event.target === caseStudyDialog) caseStudyDialog.close();
    });

    selectAll("[data-community-link]").forEach((link) => {
        const url = PORTFOLIO_CONFIG.communityLinks[link.dataset.communityLink];
        if (!url) return;

        try {
            const parsedUrl = new URL(url);
            if (parsedUrl.protocol !== "https:" && parsedUrl.protocol !== "http:") {
                console.error(`The configured ${link.dataset.communityLink} URL must use HTTP or HTTPS.`);
                return;
            }

            link.href = parsedUrl.href;
            link.hidden = false;
        } catch (error) {
            console.error(`The configured ${link.dataset.communityLink} URL is invalid.`, error);
        }
    });

    const carousel = select("#project-carousel");
    const carouselButtons = selectAll("[data-carousel]");
    const progress = select("#carousel-progress");
    const updateCarousel = () => {
        if (!carousel || !progress) return;
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        const percentage = maxScroll > 0 ? carousel.scrollLeft / maxScroll : 0;
        progress.style.transform = `scaleX(${Math.max(0.08, percentage)})`;
        const scrollTolerance = 4;
        carouselButtons.forEach((button) => {
            const previous = button.dataset.carousel === "previous";
            button.disabled = previous
                ? carousel.scrollLeft <= scrollTolerance
                : carousel.scrollLeft >= maxScroll - scrollTolerance;
        });
    };

    if (carousel) {
        carouselButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const firstCard = select(".project-card", carousel);
                if (!firstCard) return;
                const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0;
                const distance = firstCard.getBoundingClientRect().width + gap;
                carousel.scrollBy({
                    left: button.dataset.carousel === "next" ? distance : -distance,
                    behavior: prefersReducedMotion ? "auto" : "smooth"
                });
            });
        });
        carousel.addEventListener("scroll", updateCarousel, { passive: true });
        window.addEventListener("resize", updateCarousel);
        updateCarousel();
    }

    const profileImageSource = PORTFOLIO_CONFIG.profileImage.trim();
    const localPublicImage = new URL("public/images/moon-avatar.jpg", document.baseURI).href;
    const profileImages = selectAll(".brand__avatar, #profile-image");
    profileImages.forEach((image) => {
        const fallback = image.id === "profile-image" ? select("#profile-fallback") : null;
        let triedPublicPath = false;

        if (image.id === "profile-image" && profileImageSource) {
            image.src = profileImageSource;
            image.hidden = false;
            if (fallback) fallback.hidden = true;
        }

        image.addEventListener("error", () => {
            if (!triedPublicPath && image.src !== localPublicImage) {
                triedPublicPath = true;
                image.src = localPublicImage;
                return;
            }

            image.hidden = true;
            if (fallback) fallback.hidden = false;
            console.error("The configured profile image could not be loaded.");
        });
    });

    const navbarAvatar = select(".brand__avatar");
    if (navbarAvatar && profileImageSource) {
        navbarAvatar.src = profileImageSource;
    }

    const contactSlot = select("#contact-details");
    const contactUrl = PORTFOLIO_CONFIG.contactUrl.trim();
    if (contactSlot && contactUrl) {
        const contactLink = document.createElement("a");
        contactLink.href = contactUrl;
        contactLink.textContent = contactUrl.startsWith("mailto:") ? contactUrl.slice("mailto:".length) : "Open contact link ↗";
        if (contactUrl.startsWith("http:") || contactUrl.startsWith("https:")) {
            contactLink.target = "_blank";
            contactLink.rel = "noopener noreferrer";
        }
        const discordLink = document.createElement("a");
        discordLink.href = PORTFOLIO_CONFIG.discordUrl;
        discordLink.textContent = "Discord community ↗";
        discordLink.target = "_blank";
        discordLink.rel = "noopener noreferrer";
        contactSlot.replaceChildren(select(".contact-slot__icon", contactSlot), contactLink, discordLink);
    }
    const contactCta = select("#contact-cta");
    if (contactCta && contactUrl) {
        contactCta.href = contactUrl;
        if (contactUrl.startsWith("http:") || contactUrl.startsWith("https:")) {
            contactCta.target = "_blank";
            contactCta.rel = "noopener noreferrer";
        }
    }

    const audio = select("#music-audio");
    const musicToggle = select("#music-toggle");
    const previousTrack = select("#music-previous");
    const nextTrack = select("#music-next");
    const playlist = select("#music-playlist");
    const volume = select("#music-volume");
    const musicStatus = select("#music-status");
    const musicTrack = select("#music-track");
    const artworkLayers = [select("#music-artwork-a"), select("#music-artwork-b")].filter(Boolean);
    let activeArtworkLayer = -1;
    let artworkRequest = 0;
    const artworkPreloads = new Map();
    const preloadArtwork = (source) => {
        if (!source) return Promise.resolve(null);

        let imageUrl;
        try {
            imageUrl = new URL(source, document.baseURI).href;
        } catch (error) {
            console.error(`Invalid album artwork URL: "${source}".`, error);
            return Promise.resolve(null);
        }

        if (artworkPreloads.has(imageUrl)) return artworkPreloads.get(imageUrl);

        const image = new Image();
        const preload = new Promise((resolve) => {
            image.onload = () => resolve(imageUrl);
            image.onerror = () => {
                artworkPreloads.delete(imageUrl);
                console.error(`Album artwork could not be loaded: "${imageUrl}".`);
                resolve(null);
            };
            image.src = imageUrl;
        });
        artworkPreloads.set(imageUrl, preload);
        return preload;
    };
    const showArtwork = (source) => {
        const requestId = ++artworkRequest;
        if (!source || !artworkLayers.length) {
            artworkLayers.forEach((layer) => layer.classList.remove("is-active"));
            activeArtworkLayer = -1;
            document.body.classList.remove("has-track-artwork");
            return;
        }

        void preloadArtwork(source).then((imageUrl) => {
            if (requestId !== artworkRequest || !imageUrl) return;

            const nextLayerIndex = activeArtworkLayer === 0 ? 1 : 0;
            const nextLayer = artworkLayers[nextLayerIndex];
            if (!nextLayer) return;
            nextLayer.style.backgroundImage = `url(${JSON.stringify(imageUrl)})`;
            nextLayer.classList.add("is-active");
            artworkLayers.forEach((layer, index) => {
                if (index !== nextLayerIndex) layer.classList.remove("is-active");
            });
            activeArtworkLayer = nextLayerIndex;
            document.body.classList.add("has-track-artwork");
        });
    };
    const configuredPlaylist = Array.isArray(PORTFOLIO_CONFIG.music.tracks)
        ? PORTFOLIO_CONFIG.music.tracks
        : [];
    const musicTracks = configuredPlaylist.length
        ? configuredPlaylist
        : typeof PORTFOLIO_CONFIG.music.src === "string" && PORTFOLIO_CONFIG.music.src.trim()
            ? [{ ...PORTFOLIO_CONFIG.music, src: PORTFOLIO_CONFIG.music.src.trim() }]
            : [];

    if (musicTracks.some((track) => !track || typeof track.src !== "string" || !track.src.trim())) {
        console.error("Every configured music track must include an audio source.");
    }
    const validMusicTracks = musicTracks.filter((track) =>
        track && typeof track.src === "string" && track.src.trim()
    );

    if (audio && musicToggle && volume && musicStatus && musicTrack && validMusicTracks.length) {
        const trackOptions = validMusicTracks.map((track) => ({
            ...track,
            src: track.src.trim(),
            title: typeof track.title === "string" && track.title.trim() ? track.title.trim() : "Untitled track",
            artist: typeof track.artist === "string" ? track.artist.trim() : "",
            cover: typeof track.cover === "string" ? track.cover.trim() : "",
            dominantColor: typeof track.dominantColor === "string" ? track.dominantColor.trim() : ""
        }));
        let currentTrackIndex = 0;

        const displayTrack = (track) => {
            musicTrack.textContent = track.artist ? `${track.title} · ${track.artist}` : track.title;
        };

        const updateTrackArtwork = (track) => {
            showArtwork(track.cover);
        };

        const playCurrentTrack = async () => {
            try {
                await audio.play();
            } catch (error) {
                musicStatus.textContent = "PLAYBACK UNAVAILABLE";
                console.error("Unable to play the configured audio source.", error);
            }
        };

        const setCurrentTrack = (index, shouldPlay = false) => {
            currentTrackIndex = (index + trackOptions.length) % trackOptions.length;
            const track = trackOptions[currentTrackIndex];
            audio.pause();
            audio.src = track.src;
            audio.load();
            displayTrack(track);
            musicStatus.textContent = shouldPlay ? "LOADING TRACK" : "READY TO PLAY";
            updateTrackArtwork(track);
            preloadArtwork(trackOptions[(currentTrackIndex + 1) % trackOptions.length].cover);
            if (playlist) playlist.value = String(currentTrackIndex);
            if (shouldPlay) void playCurrentTrack();
        };

        audio.volume = Math.min(1, Math.max(0, PORTFOLIO_CONFIG.music.volume));
        volume.value = String(audio.volume);
        volume.disabled = false;
        musicToggle.disabled = false;
        if (trackOptions.length > 1 && previousTrack && nextTrack && playlist) {
            [previousTrack, nextTrack, playlist].forEach((control) => {
                control.hidden = false;
                control.disabled = false;
            });
            playlist.replaceChildren(...trackOptions.map((track, index) => {
                const option = document.createElement("option");
                option.value = String(index);
                option.textContent = track.artist ? `${track.title} · ${track.artist}` : track.title;
                return option;
            }));
            playlist.addEventListener("change", () => {
                setCurrentTrack(Number(playlist.value), !audio.paused);
            });
            previousTrack.addEventListener("click", () => {
                setCurrentTrack(currentTrackIndex - 1, !audio.paused);
            });
            nextTrack.addEventListener("click", () => {
                setCurrentTrack(currentTrackIndex + 1, !audio.paused);
            });
        }

        musicToggle.addEventListener("click", async () => {
            if (audio.paused) {
                await playCurrentTrack();
            } else {
                audio.pause();
            }
        });
        volume.addEventListener("input", () => {
            audio.volume = Number(volume.value);
        });
        audio.addEventListener("play", () => {
            musicToggle.setAttribute("aria-label", "Pause music");
            musicToggle.innerHTML = '<span class="pause-icon" aria-hidden="true">Ⅱ</span>';
            musicStatus.textContent = "NOW PLAYING";
        });
        audio.addEventListener("pause", () => {
            musicToggle.setAttribute("aria-label", "Play music");
            musicToggle.innerHTML = '<span class="play-icon" aria-hidden="true">▶</span>';
            if (!audio.ended) musicStatus.textContent = "PAUSED";
        });
        audio.addEventListener("ended", () => {
            if (trackOptions.length > 1) setCurrentTrack(currentTrackIndex + 1, true);
            else musicStatus.textContent = "TRACK ENDED";
        });
        audio.addEventListener("error", () => {
            musicStatus.textContent = "AUDIO UNAVAILABLE";
            console.error("The configured audio file could not be loaded.");
        });
        setCurrentTrack(0);
    }

    const youtubePlaylistId = typeof PORTFOLIO_CONFIG.music.youtubePlaylistId === "string"
        ? PORTFOLIO_CONFIG.music.youtubePlaylistId.trim()
        : "";
    const youtubeVideoId = typeof PORTFOLIO_CONFIG.music.youtubeVideoId === "string"
        ? PORTFOLIO_CONFIG.music.youtubeVideoId.trim()
        : "";
    const youtubeDialog = select("#youtube-player-dialog");
    const youtubeFrame = select("#youtube-player-frame");
    const youtubeClose = select("#youtube-player-close");

    if (
        !validMusicTracks.length &&
        youtubePlaylistId &&
        /^[\w-]+$/.test(youtubePlaylistId) &&
        youtubeDialog &&
        youtubeFrame &&
        musicToggle &&
        musicStatus &&
        musicTrack &&
        volume
    ) {
        let youtubePlayer = null;
        let youtubeReady = false;
        let playOnReady = false;
        let activeYoutubeVideoId = "";

        const setYoutubeStatus = (status) => {
            musicStatus.textContent = status;
        };
        const updateYoutubePlaylistControls = () => {
            if (!youtubePlayer || !previousTrack || !nextTrack || !playlist) return;
            const tracks = youtubePlayer.getPlaylist() || [];
            if (tracks.length < 2) return;

            previousTrack.hidden = false;
            nextTrack.hidden = false;
            previousTrack.disabled = false;
            nextTrack.disabled = false;
            playlist.hidden = false;
            playlist.disabled = false;
            if (playlist.options.length !== tracks.length) {
                playlist.replaceChildren(...tracks.map((_, index) => {
                    const option = document.createElement("option");
                    option.value = String(index);
                    option.textContent = `Playlist track ${index + 1}`;
                    return option;
                }));
            }
        };
        const updateYoutubeArtwork = (videoId) => {
            if (!videoId || videoId === activeYoutubeVideoId) return;
            const thumbnailUrl = `https://i.ytimg.com/vi/${encodeURIComponent(videoId)}/maxresdefault.jpg`;
            void preloadArtwork(thumbnailUrl).then((imageUrl) => {
                if (!imageUrl) {
                    const fallbackUrl = `https://i.ytimg.com/vi/${encodeURIComponent(videoId)}/hqdefault.jpg`;
                    return preloadArtwork(fallbackUrl);
                }
                return imageUrl;
            }).then((imageUrl) => {
                if (!imageUrl || videoId !== youtubePlayer?.getVideoData().video_id) return;
                activeYoutubeVideoId = videoId;
                showArtwork(imageUrl);
            });
        };
        const preloadNextYoutubeArtwork = () => {
            if (!youtubePlayer) return;
            const tracks = youtubePlayer.getPlaylist() || [];
            const playlistIndex = youtubePlayer.getPlaylistIndex();
            if (tracks.length < 2 || playlistIndex < 0) return;
            const nextVideoId = tracks[(playlistIndex + 1) % tracks.length];
            if (nextVideoId) {
                preloadArtwork(`https://i.ytimg.com/vi/${encodeURIComponent(nextVideoId)}/maxresdefault.jpg`);
            }
        };
        const updateYoutubeTrack = () => {
            if (!youtubePlayer || !youtubeReady) return;
            const video = youtubePlayer.getVideoData();
            const videoId = video.video_id;
            const playlistIndex = youtubePlayer.getPlaylistIndex();
            const fallbackTitle = playlistIndex >= 0 ? `Playlist track ${playlistIndex + 1}` : "YouTube playlist";
            const title = video.title || fallbackTitle;
            updateYoutubePlaylistControls();
            musicTrack.textContent = title;
            if (playlist && playlistIndex >= 0) {
                playlist.value = String(playlistIndex);
                const selectedOption = playlist.options[playlistIndex];
                if (selectedOption && video.title) selectedOption.textContent = video.title;
            }
            if (videoId) updateYoutubeArtwork(videoId);
            preloadNextYoutubeArtwork();
        };
        const initializeYoutubePlayer = () => {
            if (youtubePlayer || !window.YT || !window.YT.Player) return;
            const playerVars = {
                autoplay: 0,
                controls: 1,
                enablejsapi: 1,
                listType: "playlist",
                list: youtubePlaylistId,
                playsinline: 1,
                rel: 0
            };
            if (youtubeVideoId) playerVars.videoId = youtubeVideoId;
            if (window.location.protocol === "http:" || window.location.protocol === "https:") {
                playerVars.origin = window.location.origin;
            }
            youtubePlayer = new window.YT.Player(youtubeFrame, {
                width: "100%",
                height: "100%",
                playerVars,
                events: {
                    onReady: (event) => {
                        youtubeReady = true;
                        event.target.setVolume(Math.round(Math.min(1, Math.max(0, PORTFOLIO_CONFIG.music.volume)) * 100));
                        musicToggle.disabled = false;
                        volume.disabled = false;
                        volume.value = String(Math.min(1, Math.max(0, PORTFOLIO_CONFIG.music.volume)));
                        updateYoutubePlaylistControls();
                        updateYoutubeTrack();
                        setYoutubeStatus("YOUTUBE READY");
                        if (playOnReady) event.target.playVideo();
                    },
                    onStateChange: (event) => {
                        if (event.data === window.YT.PlayerState.PLAYING) {
                            musicToggle.setAttribute("aria-label", "Pause music");
                            musicToggle.innerHTML = '<span class="pause-icon" aria-hidden="true">Ⅱ</span>';
                            setYoutubeStatus("NOW PLAYING");
                            updateYoutubeTrack();
                        } else if (event.data === window.YT.PlayerState.PAUSED) {
                            musicToggle.setAttribute("aria-label", "Play music");
                            musicToggle.innerHTML = '<span class="play-icon" aria-hidden="true">▶</span>';
                            setYoutubeStatus("PAUSED");
                        } else if (event.data === window.YT.PlayerState.ENDED) {
                            updateYoutubeTrack();
                            setYoutubeStatus("PLAYLIST ADVANCING");
                        } else if (event.data === window.YT.PlayerState.CUED) {
                            updateYoutubeTrack();
                        }
                    },
                    onError: (event) => {
                        setYoutubeStatus("YOUTUBE UNAVAILABLE");
                        console.error(`YouTube player error (${event.data}) for playlist ${youtubePlaylistId}.`);
                    }
                }
            });
        };

        musicToggle.disabled = false;
        volume.disabled = false;
        setYoutubeStatus("YOUTUBE PLAYLIST");
        musicTrack.textContent = "Open YouTube playlist";
        const apiScript = document.createElement("script");
        apiScript.src = "https://www.youtube.com/iframe_api";
        apiScript.async = true;
        apiScript.onerror = () => {
            musicToggle.disabled = true;
            volume.disabled = true;
            setYoutubeStatus("YOUTUBE UNAVAILABLE");
            console.error("Unable to load the YouTube IFrame Player API.");
        };
        window.onYouTubeIframeAPIReady = () => {
            if (youtubeDialog.open) initializeYoutubePlayer();
        };
        document.head.appendChild(apiScript);

        musicToggle.addEventListener("click", () => {
            if (!youtubeDialog.open) youtubeDialog.showModal();
            initializeYoutubePlayer();
            if (!youtubeReady) {
                playOnReady = true;
                setYoutubeStatus("LOADING YOUTUBE");
                return;
            }
            if (youtubePlayer.getPlayerState() === window.YT.PlayerState.PLAYING) {
                youtubePlayer.pauseVideo();
            } else {
                youtubePlayer.playVideo();
            }
        });
        if (previousTrack) {
            previousTrack.addEventListener("click", () => {
                if (youtubeReady) youtubePlayer.previousVideo();
            });
        }
        if (nextTrack) {
            nextTrack.addEventListener("click", () => {
                if (youtubeReady) youtubePlayer.nextVideo();
            });
        }
        if (playlist) {
            playlist.addEventListener("change", () => {
                if (youtubeReady) youtubePlayer.playVideoAt(Number(playlist.value));
            });
        }
        volume.addEventListener("input", () => {
            if (youtubeReady) youtubePlayer.setVolume(Math.round(Number(volume.value) * 100));
        });
        const closeYoutubePlayer = () => {
            if (youtubeReady) youtubePlayer.pauseVideo();
            youtubeDialog.close();
        };
        youtubeClose?.addEventListener("click", closeYoutubePlayer);
        youtubeDialog.addEventListener("click", (event) => {
            if (event.target === youtubeDialog) closeYoutubePlayer();
        });
        youtubeDialog.addEventListener("cancel", () => {
            if (youtubeReady) youtubePlayer.pauseVideo();
        });
    }

    const year = select("#year");
    if (year) year.textContent = String(new Date().getFullYear());
});
