"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-menu a");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");

      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      mobileMenu.setAttribute("aria-hidden", String(!isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
      });
    });
  }

  /*
   * Scroll reveal
   */
  const revealTargets = document.querySelectorAll(
    ".section-label, .large-copy, .body-copy, .manifesto-line, " +
    ".system-card, .projects-heading, .project-row, .statement, .contact-content"
  );

  revealTargets.forEach((element) => {
    element.classList.add("reveal");
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealTargets.forEach((element) => {
    revealObserver.observe(element);
  });

  /*
   * Subtle cursor-driven parallax on the orbital graphic.
   */
  const hero = document.querySelector(".hero");
  const orbit = document.querySelector(".hero-orbit");

  if (hero && orbit && window.matchMedia("(pointer: fine)").matches) {
    hero.addEventListener("mousemove", (event) => {
      const rect = hero.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      orbit.style.transform =
        `translate(${x * 16}px, calc(-50% + ${y * 16}px))`;
    });

    hero.addEventListener("mouseleave", () => {
      orbit.style.transform = "translate(0, -50%)";
    });
  }

  /*
   * Dynamic system timestamp.
   */
  const status = document.querySelector(".hero .eyebrow");

  if (status) {
    const updateStatus = () => {
      const now = new Date();

      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");

      status.innerHTML = `
        <span class="status-dot"></span>
        SYSTEM ONLINE / ${year}.${month}.${day}
      `;
    };

    updateStatus();
  }

  /*
   * Prevent broken placeholder project links from jumping unexpectedly.
   * The rows remain interactive and route to the contact section.
   */
  document.querySelectorAll(".project-row").forEach((project) => {
    project.addEventListener("mouseenter", () => {
      project.querySelector(".project-arrow").textContent = "↗";
    });
  });
});  let progress = 0;
  let messageIndex = 0;

  const bootTimer = setInterval(() => {
    progress += Math.floor(Math.random() * 11) + 5;

    if (progress > 100) {
      progress = 100;
    }

    bootProgress.style.width = `${progress}%`;

    if (
      progress >= (messageIndex + 1) * 16 &&
      messageIndex < bootMessages.length
    ) {
      bootStatus.textContent = bootMessages[messageIndex];
      messageIndex += 1;
    }

    if (progress >= 100) {
      clearInterval(bootTimer);

      setTimeout(() => {
        bootScreen.classList.add("finished");
        document.body.classList.remove("locked");
      }, 450);
    }
  }, 100);

  document.body.classList.add("locked");


  /* --------------------------------
     MOBILE NAVIGATION
  -------------------------------- */

  const menuButton = document.getElementById("menuButton");
  const mobileNav = document.getElementById("mobileNav");
  const mobileLinks = mobileNav.querySelectorAll("a");

  menuButton.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");

    menuButton.classList.toggle("active", open);
    menuButton.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("locked", open);
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menuButton.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
      document.body.classList.remove("locked");
    });
  });


  /* --------------------------------
     CLOCK
  -------------------------------- */

  const heroClock = document.getElementById("heroClock");

  function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    heroClock.textContent = `${hours}:${minutes}:${seconds}`;
  }

  updateClock();
  setInterval(updateClock, 1000);


  /* --------------------------------
     SCROLL REVEAL
  -------------------------------- */

  const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".long-copy > p, " +
    ".warning-box, " +
    ".education-card, " +
    ".principle, " +
    ".timeline-item, " +
    ".terminal, " +
    ".cipher-intro, " +
    ".cipher-machine, " +
    ".archive-row, " +
    ".final-statement"
  );

  revealElements.forEach((element) => {
    element.classList.add("reveal");
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });


  /* --------------------------------
     HERO PARALLAX
  -------------------------------- */

  const hero = document.querySelector(".hero");
  const graphic = document.querySelector(".singularity-graphic");

  if (
    hero &&
    graphic &&
    window.matchMedia("(pointer: fine)").matches
  ) {
    hero.addEventListener("mousemove", (event) => {
      const rect = hero.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) / rect.width - 0.5;

      const y =
        (event.clientY - rect.top) / rect.height - 0.5;

      graphic.style.transform =
        `translate(${x * 14}px, calc(-50% + ${y * 14}px))`;
    });

    hero.addEventListener("mouseleave", () => {
      graphic.style.transform = "translate(0, -50%)";
    });
  }


  /* --------------------------------
     BOOK CIPHER
  -------------------------------- */

  /*
   * This is deliberately a literary cipher rather than a security
   * mechanism.
   *
   * The corpus is divided into "pages" and "lines". Each line is then
   * tokenized into words. Coordinates are therefore generated as:
   *
   * PAGE / LINE / WORD
   *
   * Example:
   *
   * 04-03-07
   *
   * means:
   * page 4, line 3, word 7.
   *
   * The visible page numbers are artificial archive coordinates.
   */

  const corpus = [
    {
      page: 1,
      lines: [
        "The machine is merely the instrument through which the question becomes visible.",
        "Intelligence does not imply possession of our values.",
        "A system can pursue an objective without possessing the reasons for which the objective was chosen.",
        "The operator remains responsible for the boundary between intention and implementation."
      ]
    },

    {
      page: 2,
      lines: [
        "Alignment is not a declaration.",
        "Alignment is an observed relationship between an objective and its consequences.",
        "The distinction becomes important when capability exceeds supervision.",
        "A sufficiently capable system does not require malice in order to become dangerous."
      ]
    },

    {
      page: 3,
      lines: [
        "Surveillance begins as a proposition of safety.",
        "More data means more visibility.",
        "More visibility becomes justification for acquiring more data.",
        "The aggregate becomes the architecture."
      ]
    },

    {
      page: 4,
      lines: [
        "Institutions do not operate outside the systems they construct.",
        "Once an institution depends upon a system, questioning that system becomes expensive.",
        "The machine does not need to seize control.",
        "The institution can gradually reorganize itself around the machine."
      ]
    },

    {
      page: 5,
      lines: [
        "Fiction provides a freedom unavailable to technical documentation.",
        "A technical paper can describe a failure mode.",
        "A narrative can place the reader inside the failure.",
        "The distinction between fiction and warning becomes inconvenient."
      ]
    },

    {
      page: 6,
      lines: [
        "Human agency remains the central variable.",
        "Every technological system contains assumptions about the people who operate it.",
        "The assumptions are often invisible until the system encounters reality.",
        "Reality is generally less cooperative than the specification."
      ]
    },

    {
      page: 7,
      lines: [
        "The objective was clear.",
        "The consequences were not.",
        "The system performed exactly as instructed.",
        "That was the problem."
      ]
    },

    {
      page: 8,
      lines: [
        "The future does not arrive.",
        "It is assembled from decisions.",
        "Those decisions become infrastructure.",
        "Infrastructure becomes circumstance."
      ]
    }
  ];

  const cipherCount = document.getElementById("cipherCount");
  const generateCipher = document.getElementById("generateCipher");
  const revealCipher = document.getElementById("revealCipher");

  const cipherSeed = document.getElementById("cipherSeed");
  const cipherCode = document.getElementById("cipherCode");
  const cipherPlaintext = document.getElementById("cipherPlaintext");
  const cipherSource = document.getElementById("cipherSource");

  let currentCipher = null;


  function createSeed() {
    const timePart = Date.now().toString(36).toUpperCase();

    const randomPart = Math.floor(
      Math.random() * 0xFFFFFF
    )
      .toString(16)
      .toUpperCase()
      .padStart(6, "0");

    return `${timePart}-${randomPart}`;
  }


  function randomInteger(min, max) {
    return Math.floor(
      Math.random() * (max - min + 1)
    ) + min;
  }


  function cleanWords(text) {
    return text
      .replace(/[^\w\s'-]/g, "")
      .split(/\s+/)
      .filter(Boolean);
  }


  function getRandomCoordinate() {
    const page =
      corpus[randomInteger(0, corpus.length - 1)];

    const lineIndex =
      randomInteger(0, page.lines.length - 1);

    const line = page.lines[lineIndex];

    const words = cleanWords(line);

    const wordIndex =
      randomInteger(0, words.length - 1);

    return {
      page: page.page,
      line: lineIndex + 1,
      word: wordIndex + 1,
      value: words[wordIndex],
      source: line
    };
  }


  function generateBookCipher() {
    const count = Number(cipherCount.value);

    const coordinates = [];
    const plaintext = [];

    for (let i = 0; i < count; i += 1) {
      const coordinate = getRandomCoordinate();

      coordinates.push(coordinate);

      plaintext.push(coordinate.value);
    }

    const seed = createSeed();

    currentCipher = {
      seed,
      coordinates,
      plaintext: plaintext.join(" ")
    };

    cipherSeed.textContent = `SEED: ${seed}`;

    cipherCode.textContent = coordinates
      .map((item) => {
        return [
          String(item.page).padStart(2, "0"),
          String(item.line).padStart(2, "0"),
          String(item.word).padStart(2, "0")
        ].join("-");
      })
      .join("   ");

    cipherPlaintext.textContent =
      "MESSAGE ENCRYPTED. PRESS REVEAL.";

    cipherSource.textContent =
      "SOURCE FRAGMENT WITHHELD UNTIL REVEAL.";

    revealCipher.textContent = "REVEAL MESSAGE";

    revealCipher.disabled = false;
  }


  function revealBookCipher() {
    if (!currentCipher) {
      generateBookCipher();
      return;
    }

    cipherPlaintext.textContent =
      currentCipher.plaintext;

    const sourceFragments =
      currentCipher.coordinates.map((item) => {
        return `[P${item.page} / L${item.line}] ${item.source}`;
      });

    cipherSource.textContent =
      sourceFragments.join("  //  ");

    revealCipher.textContent = "MESSAGE REVEALED";
  }


  generateCipher.addEventListener(
    "click",
    generateBookCipher
  );

  revealCipher.addEventListener(
    "click",
    revealBookCipher
  );

  /*
   * Generate an initial cipher automatically so the interface
   * is immediately functional.
   */
  generateBookCipher();


  /* --------------------------------
     KEYBOARD SHORTCUT
  -------------------------------- */

  document.addEventListener("keydown", (event) => {
    if (
      event.key.toLowerCase() === "c" &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.altKey
    ) {
      const activeElement = document.activeElement;

      const typing =
        activeElement &&
        (
          activeElement.tagName === "INPUT" ||
          activeElement.tagName === "TEXTAREA" ||
          activeElement.tagName === "SELECT"
        );

      if (!typing) {
        document.getElementById("cipher")
          .scrollIntoView({
            behavior: "smooth"
          });
      }
    }

    if (event.key === "Escape") {
      mobileNav.classList.remove("open");
      menuButton.classList.remove("active");
      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      document.body.classList.remove("locked");
    }
  });


  /* --------------------------------
     ARCHIVE ROW MICRO-INTERACTION
  -------------------------------- */

  const archiveRows =
    document.querySelectorAll(".archive-row");

  archiveRows.forEach((row) => {
    row.addEventListener("mouseenter", () => {
      const number =
        row.querySelector(".archive-number");

      if (number) {
        number.textContent =
          number.textContent.replace(
            /^\d+/,
            ">"
          );
      }
    });

    row.addEventListener("mouseleave", () => {
      const number =
        row.querySelector(".archive-number");

      if (number) {
        const text =
          number.textContent.replace(/^>/, "");

        number.textContent =
          text.padStart(3, "0");
      }
    });
  });

});
