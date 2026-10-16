(() => {
  const navigation = [
    { label: "Home", href: "index.html", page: "index.html" },
    { label: "About Us", href: "about.html", page: "about.html" },
    {
      label: "Academics",
      href: "academics.html",
      page: "academics.html",
      groups: [
        {
          label: "Courses",
          icon: "fa-graduation-cap",
          href: "graduated.html",
          links: [
            ["B.Tech. in Computer Science & Engineering (CSE)", "fa-laptop-code", "graduated.html#program-cse"],
            ["B.Tech. in Artificial Intelligence and Machine Learning", "fa-brain", "graduated.html#program-aiml"],
            ["B.Tech. in Computer Science & Engineering – Data Science (CSE-DS)", "fa-chart-pie", "graduated.html#program-ds"],
            ["B.Tech. in Computer Science and Cyber Security", "fa-shield-halved", "graduated.html#program-cyber-security"],
            ["B.Tech. in Computer Science & Engineering – Internet of Things (CSE-IOT)", "fa-microchip", "graduated.html#program-iot"],
            ["B.Tech in Computer Science & Technology (CST)", "fa-code", "graduated.html#program-cst"],
            ["B.Tech. in Electrical Engineering (EE)", "fa-bolt", "graduated.html#program-ee"],
            ["B.Tech. in Mechanical Engineering (ME)", "fa-gear", "graduated.html#program-me"],
            ["B.Tech. in Civil Engineering (CE)", "fa-building", "graduated.html#program-ce"]
          ]
        },
        {
          label: "Departments",
          icon: "fa-building-columns",
          href: "engineering.html",
          links: [
            ["Department of Computer Science & Engineering", "fa-building-columns", "engineering.html#dept-cse"],
            ["Department of Electrical Engineering", "fa-building-columns", "engineering.html#dept-elec"],
            ["Department of Mechanical Engineering", "fa-building-columns", "engineering.html#dept-mech"],
            ["Department of Civil Engineering", "fa-building-columns", "engineering.html#dept-civil"]
          ]
        },
        { label: "Faculty & Staff", icon: "fa-users", href: "faculty.html" }
      ]
    },
    { label: "Admissions", href: "admission.html", page: "admission.html" },
    { label: "R&D", href: "rd.html", page: "rd.html" },
    { label: "Placement", href: "placements.html", page: "placements.html" },
    {
      label: "Life at SRGI",
      href: "life.html",
      page: "life.html",
      links: [
        ["Campus Overview", "fa-building-columns", "campus.html"],
        ["Hostel Facilities", "fa-bed", "campus.html"],
        ["Sports & Gymnasium", "fa-futbol", "campus.html"],
        ["CSE Student Clubs", "fa-users-gear", "club-detail.html"],
        ["Panache Annual Fest", "fa-music", "campus.html"],
        ["NSS & Social Outreach", "fa-hand-holding-heart", "campus.html"]
      ]
    },
    { label: "Achievements", href: "achievement.html", page: "achievement.html" },
    { label: "Contact", href: "contact.html", page: "contact.html" }
  ];

  function renderAcademicGroup(group) {
    if (!group.links) {
      return `<a class="site-dropdown-link" href="${group.href}"><i class="fa-solid ${group.icon}" aria-hidden="true"></i><span>${group.label}</span></a>`;
    }

    return `
      <div class="site-dropdown-group">
        <button class="site-dropdown-trigger" type="button" aria-expanded="false">
          <span><i class="fa-solid ${group.icon}" aria-hidden="true"></i>${group.label}</span>
          <i class="fa-solid fa-chevron-right site-group-chevron" aria-hidden="true"></i>
        </button>
        <div class="site-submenu">
          ${group.links.map(([label, icon, href]) => `
            <a class="site-submenu-link" href="${href}">
              <i class="fa-solid ${icon}" aria-hidden="true"></i><span>${label}</span>
            </a>
          `).join("")}
        </div>
      </div>
    `;
  }

  function installSiteFooter() {
    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="site-footer-inner">
        <div class="site-footer-grid">
          <section class="site-footer-brand">
            <a href="index.html" class="site-footer-logo" aria-label="ABC Institute home">
              <img src="images/logo.png" alt="ABC Institute of Engineering & Technology logo">
            </a>
            <p>Pioneering technical education, innovation-driven laboratories, and high-impact industry placements since 1997.</p>
            <div class="site-footer-social" aria-label="Social media links">
              <a href="https://www.facebook.com/" aria-label="Facebook"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></a>
              <a href="https://www.linkedin.com/" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
              <a href="https://www.instagram.com/" aria-label="Instagram"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
              <a href="https://www.youtube.com/" aria-label="YouTube"><i class="fa-brands fa-youtube" aria-hidden="true"></i></a>
            </div>
          </section>
          <section class="site-footer-column">
            <h2>Quick Links</h2>
            <a href="about.html">About Our Heritage</a>
            <a href="graduated.html">Academic Degrees &amp; Intake</a>
            <a href="placements.html">Corporate Placement Cell</a>
            <a href="rd.html">Research Centers &amp; Labs</a>
            <a href="admission.html">Admissions 2026-2027</a>
          </section>
          <section class="site-footer-column">
            <h2>Engineering Disciplines</h2>
            <a href="engineering.html#dept-cse">Computer Science &amp; Engg.</a>
            <a href="graduated.html#program-aiml">CSE (Artificial Intelligence &amp; ML)</a>
            <a href="engineering.html#dept-elec">Electronics &amp; Comm. Engg.</a>
            <a href="engineering.html#dept-mech">Mechanical &amp; Automation Engg.</a>
            <a href="engineering.html#dept-civil">Civil &amp; Infrastructure Engg.</a>
          </section>
          <section class="site-footer-column site-footer-contact">
            <h2>Admissions &amp; Campus</h2>
            <p><i class="fa-solid fa-location-dot" aria-hidden="true"></i><span>NH-75, Gwalior Road, Jhansi (U.P.) - 284419</span></p>
            <a href="tel:+917552800100"><i class="fa-solid fa-phone" aria-hidden="true"></i><span>+91 755 280 0100 / 101</span></a>
            <a class="site-footer-inquire" href="admission.html#enquiry-form">Inquire Admissions</a>
          </section>
        </div>
        <div class="site-footer-bottom">
          © 2025 ABC Institute of Engineering &amp; Technology. All Rights Reserved. <span>Approved by AICTE, New Delhi&nbsp; | &nbsp;Affiliated to RGPV, Bhopal</span>
        </div>
      </div>
      <button class="site-back-to-top" type="button" aria-label="Back to top"><i class="fa-solid fa-arrow-up" aria-hidden="true"></i></button>
    `;

    const oldFooter = document.querySelector("footer");
    if (oldFooter) {
      oldFooter.replaceWith(footer);
    } else {
      document.body.append(footer);
    }

    footer.querySelector(".site-back-to-top").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function installSiteNavigation() {
    installSiteFooter();

    const oldHeader = document.querySelector("#navbar, body > header, body > nav");
    if (!oldHeader) {
      console.error("Shared site navigation could not find the page header.");
      return;
    }

    document.querySelectorAll(".top-bar, #top-bar").forEach(topBar => topBar.remove());
    let previousSibling = oldHeader.previousElementSibling;
    while (previousSibling) {
      const priorSibling = previousSibling.previousElementSibling;
      const text = previousSibling.textContent || "";
      const hasContactDetails = /(?:\+91|7700-300-300|NH-75|Gwalior Road)/i.test(text);
      const hasQuickLinks = [...previousSibling.querySelectorAll("a")].some(link =>
        /^(nirf|iqac|careers|alumni|downloads|erp login|login)$/i.test(link.textContent.trim())
      );
      const hasPhoneLink = previousSibling.querySelector('a[href^="tel:"]');
      if (hasContactDetails && (hasQuickLinks || (hasPhoneLink && /NH-75/i.test(text)))) {
        previousSibling.remove();
      }
      previousSibling = priorSibling;
    }

    const currentPage = window.location.pathname.split("/").pop().toLowerCase() || "index.html";
    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML = `
      <div class="site-utility-bar">
        <div class="site-utility-inner">
          <div class="site-contact-links">
            <a href="tel:+917700300300">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.6 1 1 0 0 1-.2 1z"/></svg>
              +91-7700-300-300
            </a>
            <span class="site-contact-divider" aria-hidden="true"></span>
            <span class="site-address">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a8 8 0 0 0-8 8c0 5.5 8 12 8 12s8-6.5 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
              NH-75, Gwalior Road, Jhansi (U.P.) - 284419
            </span>
          </div>
          <nav class="site-utility-links" aria-label="Quick links">
            <a href="ranking.html">NIRF</a>
            <a href="internal.html">IQAC</a>
            <a href="career.html">Careers</a>
            <a href="alumni.html">Alumni</a>
            <a href="download.html">Downloads</a>
            <a class="site-erp-login" href="erp_portal.html">ERP Login</a>
          </nav>
        </div>
      </div>
      <div class="site-header-main">
        <div class="site-header-inner">
          <a class="site-brand" href="index.html" aria-label="ABC Engineering and Technology Institute home">
            <img src="images/logo.png" alt="ABC Institute logo">
          </a>
          <button class="site-nav-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="site-nav">
            <span aria-hidden="true">&#9776;</span>
          </button>
          <nav class="site-nav" id="site-nav" aria-label="Main navigation">
            ${navigation.map(({ label, href, page, groups, links }) => `
              <div class="site-nav-item${groups || links ? " has-dropdown" : ""}">
                ${groups || links
                  ? `<button class="site-nav-label" type="button" aria-expanded="false"${page === currentPage ? ' aria-current="page"' : ""}>${label}</button>`
                  : `<a href="${href}"${page === currentPage ? ' aria-current="page"' : ""}>${label}</a>`}
                ${groups || links ? `
                  <button class="site-submenu-toggle" type="button" aria-label="Show ${label} menu" aria-expanded="false">
                    <span class="site-chevron" aria-hidden="true"></span>
                  </button>
                  <div class="site-dropdown${groups ? " site-dropdown-academics" : " site-dropdown-life"}">
                    ${groups ? groups.map(renderAcademicGroup).join("") : links.map(([itemLabel, icon, itemHref]) => `
                      <a class="site-dropdown-link" href="${itemHref}">
                        <i class="fa-solid ${icon}" aria-hidden="true"></i><span>${itemLabel}</span>
                      </a>
                    `).join("")}
                  </div>
                ` : ""}
              </div>
            `).join("")}
            <a class="site-apply" href="admission.html#enquiry-form">Apply Now</a>
          </nav>
        </div>
      </div>
    `;

    oldHeader.replaceWith(header);

    const routeAliases = new Map([
      ["admissions.html", "admission.html"],
      ["training_placement.html", "placements.html"],
      ["placement.html", "placements.html"],
      ["achievements.html", "achievement.html"],
      ["club_detail.html", "club-detail.html"],
      ["donload.html", "download.html"]
    ]);
    const utilityRoutes = new Map([
      ["nirf", "ranking.html"],
      ["iqac", "internal.html"],
      ["iqac reports", "internal.html"],
      ["careers", "career.html"],
      ["alumni", "alumni.html"],
      ["downloads", "download.html"],
      ["login", "erp_portal.html"],
      ["erp login", "erp_portal.html"],
      ["erp portal", "erp_portal.html"]
    ]);
    document.querySelectorAll("a[href]").forEach(link => {
      const label = link.textContent.trim().toLowerCase();
      if (label.includes("apply now")) {
        link.href = "admission.html#enquiry-form";
        return;
      }

      const utilityTarget = utilityRoutes.get(label);
      if (utilityTarget) {
        link.href = utilityTarget;
        return;
      }

      const target = new URL(link.href, window.location.href);
      const correctedPage = routeAliases.get(target.pathname.split("/").pop().toLowerCase());
      if (correctedPage) {
        target.pathname = target.pathname.replace(/[^/]*$/, correctedPage);
        link.href = `${target.pathname}${target.search}${target.hash}`;
      }
    });

    const toggle = header.querySelector(".site-nav-toggle");
    const menu = header.querySelector(".site-nav");
    header.querySelectorAll(".site-submenu-toggle, .site-nav-label").forEach(button => {
      button.addEventListener("click", () => {
        const item = button.closest(".site-nav-item");
        const isDesktopHover = window.matchMedia("(min-width: 1281px) and (hover: hover)").matches;
        const isOpen = isDesktopHover || !item.classList.contains("is-expanded");
        item.classList.toggle("is-expanded", isOpen);
        item.querySelectorAll(":scope > .site-submenu-toggle, :scope > .site-nav-label").forEach(toggleButton => {
          toggleButton.setAttribute("aria-expanded", String(isOpen));
        });
      });
    });
    header.querySelectorAll(".site-dropdown-trigger").forEach(button => {
      button.addEventListener("click", () => {
        const group = button.closest(".site-dropdown-group");
        const isOpen = group.classList.toggle("is-expanded");
        button.setAttribute("aria-expanded", String(isOpen));
      });
    });

    if (window.matchMedia("(min-width: 1281px) and (hover: hover)").matches) {
      header.querySelectorAll(".site-nav-item.has-dropdown").forEach(item => {
        item.addEventListener("pointerenter", event => {
          if (event.pointerType !== "touch") {
            item.classList.add("is-expanded");
            item.querySelectorAll(":scope > .site-submenu-toggle, :scope > .site-nav-label").forEach(button => {
              button.setAttribute("aria-expanded", "true");
            });
          }
        });
        item.addEventListener("pointerleave", () => {
          if (!item.matches(":focus-within")) {
            item.classList.remove("is-expanded");
            item.querySelectorAll(":scope > .site-submenu-toggle, :scope > .site-nav-label").forEach(button => {
              button.setAttribute("aria-expanded", "false");
            });
          }
        });
      });

      header.querySelectorAll(".site-dropdown-group").forEach(group => {
        const toggleButton = group.querySelector(".site-dropdown-trigger");
        group.addEventListener("pointerenter", event => {
          if (event.pointerType !== "touch") {
            group.classList.add("is-expanded");
            toggleButton.setAttribute("aria-expanded", "true");
          }
        });
        group.addEventListener("pointerleave", () => {
          if (!group.matches(":focus-within")) {
            group.classList.remove("is-expanded");
            toggleButton.setAttribute("aria-expanded", "false");
          }
        });
      });
    }

    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
      toggle.firstElementChild.innerHTML = isOpen ? "&times;" : "&#9776;";
    });

    menu.addEventListener("click", event => {
      if (event.target.closest("a")) {
        menu.classList.remove("is-open");
        header.querySelectorAll(".is-expanded").forEach(item => item.classList.remove("is-expanded"));
        header.querySelectorAll('[aria-expanded="true"]').forEach(button => button.setAttribute("aria-expanded", "false"));
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation menu");
        toggle.firstElementChild.innerHTML = "&#9776;";
      }
    });

    document.addEventListener("click", event => {
      if (!header.contains(event.target)) {
        menu.classList.remove("is-open");
        header.querySelectorAll(".is-expanded").forEach(item => item.classList.remove("is-expanded"));
        header.querySelectorAll('[aria-expanded="true"]').forEach(button => button.setAttribute("aria-expanded", "false"));
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation menu");
        toggle.firstElementChild.innerHTML = "&#9776;";
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", installSiteNavigation, { once: true });
  } else {
    installSiteNavigation();
  }
})();
