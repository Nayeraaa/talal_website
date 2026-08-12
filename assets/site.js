const REPO_NAME = "talaal_website";
const PORTRAIT_IMAGE = "./assets/media/talal-portrait.jpg";

const topLevelRoutes = [
  { route: "/", title: "Home", label: "Overview" },
  { route: "/mini-biographies", title: "Mini-Biographies", label: "Profiles" },
  { route: "/illustrations", title: "Illustrations", label: "Artwork" },
  {
    route: "/work-in-progress",
    title: "Work-In-Progress",
    label: "Current project",
  },
  { route: "/blog", title: "Blog", label: "Essays" },
  { route: "/about", title: "About", label: "Biography" },
  { route: "/contact", title: "Contact", label: "Socials" },
];

const miniBiographyCards = [
  "José Saramago",
  "Bessie Head",
  "L. L. Zamenhof",
  "Bruno Bozzetto",
  "Fela Kuti",
  "Aldous Huxley",
  "Arthur Rimbaud",
  "Salah Hamadah",
].map((title) => ({
  title,
  href: `/mini-biographies/${slugify(title)}`,
  description: "A concise spotlight page from the artist's mini-biography archive.",
  meta: "Mini-biography",
}));

const illustrationCards = [
  {
    title: "Portraits",
    href: "/illustrations/portraits",
    description: "Studies in face, gesture, likeness, and black-and-white texture.",
    meta: "Illustration archive",
  },
  {
    title: "Cartoons",
    href: "/illustrations/cartoons",
    description: "Political cartoons and satirical visual commentary.",
    meta: "Illustration archive",
  },
  {
    title: "Random",
    href: "/illustrations/random",
    description: "Loose experiments, stylistic sketches, and one-off visual ideas.",
    meta: "Illustration archive",
  },
];

const englishEssayCards = [
  "The Faith of the Cicada",
  "Three Crows and Suffering",
].map((title) => ({
  title,
  href: `/blog/english/${slugify(title)}`,
  description: "Essay page rebuilt from the original portfolio's English writing archive.",
  meta: "English",
}));

const germanEssayCards = [
  "Der Glaube der Zikade",
  "Drei Krähen und das Leiden",
  "Das Begräbnis Seiner Majestät",
].map((title) => ({
  title,
  href: `/blog/deutsch/${slugify(title)}`,
  description: "Essay page rebuilt from the original portfolio's German writing archive.",
  meta: "Deutsch",
}));

const socialCards = [
  {
    title: "X",
    href: "https://x.com/The_Nayer",
    description: "Follow public commentary and portfolio updates.",
    meta: "External",
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com/@The_Nayer",
    description: "Watch the artist's video channel and related material.",
    meta: "External",
  },
];

const pages = {
  "/": {
    title: "Political Cartoonist and Writer | Talal Nayer",
    eyebrow: "Nayer",
    description:
      "A black-and-white portfolio rebuilt as a static GitHub Pages experience, preserving the original site's editorial tone, navigation, and archive structure.",
    links: topLevelRoutes.map((item) => ({ title: item.title, href: item.route })),
    sections: [
      {
        kicker: "Browse",
        heading: "Portfolio sections",
        description:
          "The original site foregrounds a direct archive of books, biographies, illustrations, work in progress, essays, and artist information.",
        type: "cards",
        items: [
          {
            title: "Books",
            href: "/books",
            description:
              "Long-form projects, illustrated book ideas, and publication-focused work.",
            meta: "Archive section",
          },
          ...topLevelRoutes
            .filter((item) => item.route !== "/")
            .map((item) => ({
              title: item.title,
              href: item.route,
              description: item.label,
              meta: "Archive section",
            })),
        ],
      },
      {
        kicker: "Portrait",
        heading: "Artist image",
        description:
          "The portfolio's stark palette and bold typography are anchored by a monochrome portrait treatment.",
        type: "split",
        image: {
          src: PORTRAIT_IMAGE,
          alt: "Portrait illustration of Talal Nayer",
          caption: "Monochrome portrait used across the reconstructed portfolio.",
        },
        paragraphs: [
          "This rebuild keeps the reference site's spare composition: wide breathing room, oversized headings, monochrome surfaces, and a compact route list that behaves more like an index than a marketing homepage.",
          "Each route below is fully rendered from static data so the site works cleanly on GitHub Pages without a framework or build step.",
        ],
      },
    ],
  },
  "/home": {
    aliasFor: "/",
  },
  "/books": {
    title: "Books",
    eyebrow: "Archive",
    description:
      "A books landing page styled to match the source site's broader publishing-oriented section structure.",
    sections: [
      {
        kicker: "Section",
        heading: "Book projects and long-form work",
        description:
          "The original site exposes Books as a top-level route. In this static rebuild, it anchors the broader publishing side of the portfolio.",
        type: "list",
        items: [
          "Illustrated book concepts and serialized visual writing.",
          "Long-form narrative or essay collections connected to the portfolio.",
          "A stable home for future publication announcements on GitHub Pages.",
        ],
      },
    ],
  },
  "/mini-biographies": {
    title: "Mini-Biographies",
    eyebrow: "Profiles",
    description:
      "Concise biographical spotlights presented as a browsable archive, echoing the structure of the live site.",
    sections: [
      {
        kicker: "Collection",
        heading: "Featured profiles",
        description:
          "This section mirrors the source site's mini-biographies list and nested routes.",
        type: "cards",
        items: miniBiographyCards,
      },
    ],
  },
  "/illustrations": {
    title: "Illustrations",
    eyebrow: "Artwork",
    description:
      "Illustration categories grouped into portraits, cartoons, and miscellaneous work.",
    sections: [
      {
        kicker: "Collection",
        heading: "Illustration groups",
        description:
          "A simple category split modeled after the live site's visual archive.",
        type: "cards",
        items: illustrationCards,
      },
    ],
  },
  "/work-in-progress": {
    title: "Work-In-Progress",
    eyebrow: "Current project",
    description:
      "An archive for active projects and unfinished long-form visual work.",
    sections: [
      {
        kicker: "Feature",
        heading: "Illustrated Biography of Aldous Huxley",
        description:
          "The source site highlights this project as the current work-in-progress route.",
        type: "cards",
        items: [
          {
            title: "Illustrated Biography of Aldous Huxley",
            href: "/work-in-progress/illustrated-biography-of-aldous-huxley",
            description:
              "A featured development page for an illustrated long-form biographical project.",
            meta: "Work-in-progress",
          },
        ],
      },
    ],
  },
  "/blog": {
    title: "Blog",
    eyebrow: "Essays",
    description:
      "A bilingual writing archive spanning English and German essay collections.",
    sections: [
      {
        kicker: "Languages",
        heading: "Writing collections",
        description:
          "The rebuilt blog preserves the source site's English and Deutsch split.",
        type: "cards",
        items: [
          {
            title: "English",
            href: "/blog/english",
            description: "English-language essays and reflections.",
            meta: "Blog collection",
          },
          {
            title: "Deutsch",
            href: "/blog/deutsch",
            description: "German-language essays and reflections.",
            meta: "Blog collection",
          },
        ],
      },
    ],
  },
  "/about": {
    title: "About",
    eyebrow: "Biography",
    description:
      "A short artist biography rendered in the same direct, text-first style as the reference site.",
    sections: [
      {
        kicker: "Biography",
        heading: "Talal Nayer",
        description: "Copied over as visible public biography text from the reference page.",
        type: "split",
        image: {
          src: PORTRAIT_IMAGE,
          alt: "Portrait illustration of Talal Nayer",
          caption: "Portfolio portrait",
        },
        paragraphs: [
          "Talal Nayer is a political artist and writer with two decades of experience in journalism. Although academically trained in civil engineering, he has established himself professionally as a self-taught political cartoonist, mastering his craft through practice and introspection. Nayer's work spans various styles and themes, with contributions as a political cartoonist, illustrator and portrait artist.",
          "In addition to his visual art, Talal writes mini-biographies, political commentaries, and pieces on the history of art and literature. His extensive journalism experience includes publishing articles and cartoons in multiple countries.",
          "Nayer's passion for learning led him to participate in different artistic experiences outside his domain. His passion led him to learn the basics of 3D design, 2D animation films and documentary films.",
        ],
      },
    ],
  },
  "/contact": {
    title: "Contact",
    eyebrow: "Socials",
    description:
      "A minimal contact page based on the live site's social-first presentation.",
    sections: [
      {
        kicker: "Contact",
        heading: "Follow the work",
        description:
          "The original page centers on social profile links rather than a long contact form.",
        type: "split",
        image: {
          src: PORTRAIT_IMAGE,
          alt: "Portrait illustration of Talal Nayer",
          caption: "Artist portrait",
        },
        paragraphs: [
          "For public-facing updates and new work, the portfolio links out to the artist's social channels.",
          "Use the cards below to continue to those external profiles.",
        ],
      },
      {
        kicker: "External links",
        heading: "Profiles",
        description: "Primary public social channels surfaced on the reference site.",
        type: "social",
        items: socialCards,
      },
    ],
  },
  "/illustrations/portraits": createDetailPage(
    "Portraits",
    "Illustrations",
    "Studies in likeness, face, and black-and-white surface.",
  ),
  "/illustrations/cartoons": createDetailPage(
    "Cartoons",
    "Illustrations",
    "Political cartoon work presented as part of the wider illustration archive.",
  ),
  "/illustrations/random": createDetailPage(
    "Random",
    "Illustrations",
    "An open-ended folder for sketches, experiments, and uncategorized visual work.",
  ),
  "/work-in-progress/illustrated-biography-of-aldous-huxley": createDetailPage(
    "Illustrated Biography of Aldous Huxley",
    "Work-In-Progress",
    "A featured development route for an illustrated long-form project.",
  ),
  "/blog/english": {
    title: "English",
    eyebrow: "Blog",
    description: "English-language essays from the rebuilt writing archive.",
    sections: [
      {
        kicker: "Essays",
        heading: "English archive",
        description: "Nested article routes carried over from the original portfolio.",
        type: "cards",
        items: englishEssayCards,
      },
    ],
  },
  "/blog/deutsch": {
    title: "Deutsch",
    eyebrow: "Blog",
    description: "German-language essays from the rebuilt writing archive.",
    sections: [
      {
        kicker: "Essays",
        heading: "Deutsch archive",
        description: "Nested article routes carried over from the original portfolio.",
        type: "cards",
        items: germanEssayCards,
      },
    ],
  },
};

miniBiographyCards.forEach((card) => {
  pages[card.href] = createDetailPage(
    card.title,
    "Mini-Biographies",
    "A reconstructed biography detail page in the portfolio archive.",
  );
});

englishEssayCards.forEach((card) => {
  pages[card.href] = createDetailPage(
    card.title,
    "English",
    "A reconstructed essay page in the English writing archive.",
  );
});

germanEssayCards.forEach((card) => {
  pages[card.href] = createDetailPage(
    card.title,
    "Deutsch",
    "A reconstructed essay page in the German writing archive.",
  );
});

const routeIndex = buildRouteIndex();

const app = document.querySelector("#app");
const drawer = document.querySelector("[data-drawer]");
const backdrop = document.querySelector("[data-backdrop]");
const drawerNav = document.querySelector(".drawer-nav");
const searchInput = document.querySelector("[data-route-search]");
const searchResults = document.querySelector("[data-search-results]");
const menuToggles = document.querySelectorAll("[data-menu-toggle]");
const searchToggle = document.querySelector("[data-search-toggle]");
const footerYear = document.querySelector("[data-footer-year]");

let drawerOpen = false;

footerYear.textContent = new Date().getFullYear();

menuToggles.forEach((button) => {
  button.addEventListener("click", () => setDrawerState(!drawerOpen));
});

searchToggle.addEventListener("click", () => {
  setDrawerState(true);
  searchInput.focus();
});

backdrop.addEventListener("click", () => setDrawerState(false));

searchInput.addEventListener("input", () => {
  renderSearchResults(searchInput.value.trim());
});

window.addEventListener("popstate", () => {
  renderCurrentRoute();
});

document.addEventListener("click", (event) => {
  const routeLink = event.target.closest("[data-route]");
  if (!routeLink) {
    return;
  }

  const route = routeLink.getAttribute("data-route");
  if (!route) {
    return;
  }

  event.preventDefault();
  navigate(route);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && drawerOpen) {
    setDrawerState(false);
  }
});

renderDrawerNav();
renderSearchResults("");
renderCurrentRoute();

function createDetailPage(title, eyebrow, description) {
  return {
    title,
    eyebrow,
    description,
    sections: [
      {
        kicker: "Archive entry",
        heading: title,
        description,
        type: "list",
        items: [
          "This route is included so the static rebuild preserves the source portfolio's hierarchy.",
          "The monochrome layout, archive navigation, and route structure are designed for GitHub Pages hosting.",
          "You can expand this page later with original writing, imagery, or embedded media.",
        ],
      },
    ],
  };
}

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getBasePath() {
  return window.location.hostname.endsWith("github.io") ? `/${REPO_NAME}` : "";
}

function encodeRoute(route) {
  const segments = route.split("/").filter(Boolean).map(encodeURIComponent);
  const basePath = getBasePath();
  const suffix = segments.length > 0 ? `/${segments.join("/")}` : "/";
  return `${basePath}${suffix}`;
}

function normalizeRoute(pathname = window.location.pathname) {
  const basePath = getBasePath();
  let path = pathname;

  if (basePath && path.startsWith(basePath)) {
    path = path.slice(basePath.length) || "/";
  }

  const decoded = `/${path
    .split("/")
    .filter(Boolean)
    .map((segment) => decodeURIComponent(segment))
    .join("/")}`;

  if (decoded === "/home") {
    return "/";
  }

  return decoded === "" ? "/" : decoded;
}

function buildRouteIndex() {
  return Object.entries(pages)
    .filter(([, page]) => !page.aliasFor)
    .map(([route, page]) => ({
      route,
      title: page.title,
      eyebrow: page.eyebrow ?? "",
      description: page.description ?? "",
    }))
    .sort((left, right) => left.title.localeCompare(right.title));
}

function renderDrawerNav() {
  drawerNav.innerHTML = topLevelRoutes
    .map(
      (item) => `
        <a href="${encodeRoute(item.route)}" data-route="${item.route}">
          <span>${item.title}</span>
          <small>${item.label}</small>
        </a>
      `,
    )
    .join("");
}

function renderSearchResults(query) {
  const normalized = query.toLowerCase();
  const matches = normalized
    ? routeIndex.filter((item) => {
        const haystack = `${item.title} ${item.eyebrow} ${item.description}`.toLowerCase();
        return haystack.includes(normalized);
      })
    : routeIndex.slice(0, 12);

  if (matches.length === 0) {
    searchResults.innerHTML = `<p class="search-empty">No matching pages found.</p>`;
    return;
  }

  searchResults.innerHTML = matches
    .map(
      (item) => `
        <a href="${encodeRoute(item.route)}" data-route="${item.route}">
          <span>${item.title}</span>
          <small>${item.eyebrow}</small>
        </a>
      `,
    )
    .join("");
}

function setDrawerState(nextState) {
  drawerOpen = nextState;
  drawer.classList.toggle("is-open", drawerOpen);
  drawer.setAttribute("aria-hidden", String(!drawerOpen));
  backdrop.hidden = !drawerOpen;
  menuToggles.forEach((button) => {
    button.setAttribute("aria-expanded", String(drawerOpen));
  });
}

function navigate(route) {
  const normalized = route === "/home" ? "/" : route;
  const target = encodeRoute(normalized);
  window.history.pushState({}, "", target);
  renderCurrentRoute();
  setDrawerState(false);
}

function renderCurrentRoute() {
  const currentRoute = normalizeRoute();
  const resolved = resolvePage(currentRoute);

  document.title =
    currentRoute === "/"
      ? "Political Cartoonist and Writer | Talal Nayer"
      : `${resolved.title} | NAYER`;

  app.innerHTML = resolved.notFound
    ? renderNotFound(currentRoute)
    : `
      <section class="hero">
        <div class="hero-body">
          ${renderBreadcrumbs(currentRoute, resolved.title)}
          <p class="eyebrow">${resolved.eyebrow ?? "Nayer"}</p>
          <h1>${resolved.title}</h1>
          <p class="hero-copy">${resolved.description ?? ""}</p>
          ${renderHeroLinks(resolved.links ?? [])}
        </div>
      </section>
      ${resolved.sections.map(renderSection).join("")}
    `;

  highlightActiveRoute(currentRoute);
  app.focus();
}

function resolvePage(route) {
  const page = pages[route];
  if (!page) {
    return {
      notFound: true,
      title: "Page not found",
      sections: [],
    };
  }

  if (page.aliasFor) {
    return pages[page.aliasFor];
  }

  return page;
}

function highlightActiveRoute(route) {
  document.querySelectorAll(".drawer-nav a").forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("data-route") === route);
  });
}

function renderBreadcrumbs(route, title) {
  const crumbs = route === "/" ? [] : route.split("/").filter(Boolean);

  const trail = [
    `<a href="${encodeRoute("/")}" data-route="/">Home</a>`,
    ...crumbs.map((_, index) => {
      const partial = `/${crumbs.slice(0, index + 1).join("/")}`;
      const isLast = index === crumbs.length - 1;
      const label = isLast ? title : titleForRoute(partial);
      if (isLast) {
        return `<span>${label}</span>`;
      }

      return `<a href="${encodeRoute(partial)}" data-route="${partial}">${label}</a>`;
    }),
  ];

  return `<nav class="breadcrumbs" aria-label="Breadcrumb">${trail.join("<span>/</span>")}</nav>`;
}

function titleForRoute(route) {
  const page = resolvePage(route);
  return page.title;
}

function renderHeroLinks(links) {
  if (links.length === 0) {
    return "";
  }

  return `
    <div class="hero-links">
      ${links
        .map(
          (link) => `
            <a class="pill-link" href="${encodeRoute(link.href)}" data-route="${link.href}">
              <span>${link.title}</span>
            </a>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderSection(section) {
  return `
    <section class="page-section">
      <div class="section-heading">
        <p class="section-kicker">${section.kicker ?? ""}</p>
        <h2>${section.heading ?? ""}</h2>
        <p>${section.description ?? ""}</p>
      </div>
      ${renderSectionBody(section)}
    </section>
  `;
}

function renderSectionBody(section) {
  switch (section.type) {
    case "cards":
      return `<div class="cards">${section.items.map(renderCard).join("")}</div>`;
    case "social":
      return `<div class="cards">${section.items.map(renderSocialCard).join("")}</div>`;
    case "list":
      return `
        <div class="text-panel">
          <ul>
            ${section.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      `;
    case "split":
      return `
        <div class="split-layout ${section.image ? "has-image" : ""}">
          <div class="split-copy">
            ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
          </div>
          ${
            section.image
              ? `
                <figure class="image-frame">
                  <img src="${section.image.src}" alt="${section.image.alt}" />
                  <figcaption class="hero-caption">${section.image.caption ?? ""}</figcaption>
                </figure>
              `
              : ""
          }
        </div>
      `;
    default:
      return `<p class="empty-note">No content configured for this section.</p>`;
  }
}

function renderCard(item) {
  const route = item.href;
  return `
    <a class="card" href="${encodeRoute(route)}" data-route="${route}">
      <p class="card-meta">${item.meta ?? ""}</p>
      <h3>${item.title}</h3>
      <p>${item.description ?? ""}</p>
      <span class="card-arrow" aria-hidden="true">&rarr;</span>
    </a>
  `;
}

function renderSocialCard(item) {
  return `
    <a class="social-card" href="${item.href}" target="_blank" rel="noreferrer">
      <p class="card-meta">${item.meta ?? ""}</p>
      <h3>${item.title}</h3>
      <p>${item.description ?? ""}</p>
      <span class="card-arrow" aria-hidden="true">&nearr;</span>
    </a>
  `;
}

function renderNotFound(route) {
  return `
    <section class="hero">
      <div class="page-not-found">
        <p class="not-found-note">Missing route</p>
        <h1>Page not found</h1>
        <p>
          The route <strong>${route}</strong> does not exist in the current
          static rebuild. Use the portfolio index below to keep navigating.
        </p>
        <div class="pill-links">
          ${topLevelRoutes
            .map(
              (item) => `
                <a class="pill-link" href="${encodeRoute(item.route)}" data-route="${item.route}">
                  <span>${item.title}</span>
                </a>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}
