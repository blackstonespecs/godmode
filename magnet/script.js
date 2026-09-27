"use strict";

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     BOOT SEQUENCE
  ======================================================= */

  const bootScreen = document.getElementById("bootScreen");
  const bootProgress = document.getElementById("bootProgress");
  const bootStatus = document.getElementById("bootStatus");

  const bootMessages = [
    "ESTABLISHING SECURE CHANNEL",
    "LOADING ARCHIVE INDEX",
    "VERIFYING NEURAL RECORDS",
    "MOUNTING DM-NODE-001",
    "ARCHIVE READY"
  ];

  let bootValue = 0;

  const bootInterval = setInterval(() => {
    bootValue += 2;

    bootProgress.style.width = `${bootValue}%`;

    const messageIndex = Math.min(
      Math.floor(bootValue / 20),
      bootMessages.length - 1
    );

    bootStatus.textContent = bootMessages[messageIndex];

    if (bootValue >= 100) {
      clearInterval(bootInterval);

      setTimeout(() => {
        bootScreen.classList.add("hidden");
      }, 450);
    }
  }, 28);


  /* =======================================================
     MOBILE NAVIGATION
  ======================================================= */

  const menuButton = document.getElementById("menuButton");
  const navigation = document.getElementById("navigation");

  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuButton.classList.toggle("open", isOpen);
    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.classList.remove("open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );
    });
  });


  /* =======================================================
     TERMINAL TYPING
  ======================================================= */

  const terminalText = document.getElementById("terminalText");

  const terminalMessage =
    "INTELLIGENCE IS NO LONGER A HUMAN-ONLY PROPERTY.";

  let terminalIndex = 0;

  function typeTerminalText() {
    if (terminalIndex >= terminalMessage.length) {
      return;
    }

    terminalText.textContent +=
      terminalMessage.charAt(terminalIndex);

    terminalIndex++;

    const delay =
      terminalMessage.charAt(terminalIndex - 1) === " "
        ? 25
        : 38;

    setTimeout(typeTerminalText, delay);
  }

  setTimeout(typeTerminalText, 1300);


  /* =======================================================
     TRANSCRIPT DATABASE
  ======================================================= */

  const records = [
    {
      code: "TRANSCRIPT / TR-001",
      title: "SINGULARITY REVIEW BOARD",
      opening:
        "Transcript recovered from archive. Authentication status: ACCEPTED.",
      text:
        "The central question is no longer whether intelligence can be constructed. The question is what happens after construction.",
      ending:
        "Further content classified."
    },

    {
      code: "TRANSCRIPT / TR-002",
      title: "NEURAL ARCHITECTURE",
      opening:
        "Neural record located. Metadata integrity: CONFIRMED.",
      text:
        "An artificial system does not need to resemble a human mind in order to transform a human civilization. Its difference may be precisely the point.",
      ending:
        "End of available neural record."
    },

    {
      code: "TRANSCRIPT / TR-003",
      title: "SYSTEM OBSERVATION",
      opening:
        "Observation log retrieved. Source designation: UNKNOWN.",
      text:
        "Every sufficiently complex system creates consequences beyond the intentions of its designers. Observation continues.",
      ending:
        "Monitoring remains active."
    }
  ];

  const tabs = document.querySelectorAll(".transcript-tab");

  const recordCode = document.getElementById("recordCode");
  const recordTitle = document.getElementById("recordTitle");
  const recordOpening = document.getElementById("recordOpening");
  const recordText = document.getElementById("recordText");
  const recordEnding = document.getElementById("recordEnding");

  function loadRecord(index) {
    const record = records[index];

    recordCode.textContent = record.code;
    recordTitle.textContent = record.title;
    recordOpening.textContent = record.opening;
    recordText.textContent = record.text;
    recordEnding.textContent = record.ending;

    tabs.forEach((tab, tabIndex) => {
      tab.classList.toggle(
        "active",
        tabIndex === index
      );
    });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      loadRecord(index);
    });
  });


  /* =======================================================
     ARCHIVE DOCUMENT MODALS
  ======================================================= */

  const modal = document.getElementById("modal");
  const modalClose = document.getElementById("modalClose");
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");

  const modalData = {
    password: {
      title: "PASSWORD CRITERIA",
      content:
        "Recovered archive material describing fictional access requirements within the DEUS MODUS universe. The document is presented as an in-universe artifact rather than an externally verified security record."
    },

    field: {
      title: "FIELD MANUAL",
      content:
        "A simulated operational document designed to expand the world beyond the novels. Its function is narrative: it makes the fictional system feel as though it continues beyond the boundaries of the printed story."
    },

    ceo: {
      title: "AI CEO / CURTAIN DROP",
      content:
        "A fictional archive fragment concerning artificial intelligence, corporate power and information control. It belongs to the project's alternate-reality storytelling layer."
    },

    archive: {
      title: "ARCHIVE FRAGMENT",
      content:
        "Fragmentary material recovered from the wider DEUS MODUS archive. The project intentionally mixes narrative, documentation and interface design to create an immersive fictional record."
    }
  };

  function openModal(key) {
    const data = modalData[key];

    if (!data) {
      return;
    }

    modalTitle.textContent = data.title;
    modalContent.textContent = data.content;

    modal.classList.add("open");

    document.body.classList.add("modal-open");
  }

  function closeModal() {
    modal.classList.remove("open");
    document.body.classList.remove("modal-open");
  }

  document.querySelectorAll(".document-card").forEach((card) => {
    card.addEventListener("click", () => {
      openModal(card.dataset.modal);
    });
  });

  modalClose.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });


  /* =======================================================
     CENTRAL ACCESS BUTTON
  ======================================================= */

  const accessButton = document.getElementById("accessButton");

  accessButton.addEventListener("click", () => {

    accessButton.textContent = "ACCESSING...";

    setTimeout(() => {
      accessButton.innerHTML =
        "ARCHIVE OPEN <span>✓</span>";

      document
        .getElementById("archive")
        .scrollIntoView({
          behavior: "smooth"
        });

    }, 900);
  });


  /* =======================================================
     CLOCK
  ======================================================= */

  const clock = document.getElementById("clock");

  function updateClock() {
    const now = new Date();

    const hours = String(
      now.getHours()
    ).padStart(2, "0");

    const minutes = String(
      now.getMinutes()
    ).padStart(2, "0");

    const seconds = String(
      now.getSeconds()
    ).padStart(2, "0");

    clock.textContent =
      `${hours}:${minutes}:${seconds}`;
  }

  updateClock();

  setInterval(updateClock, 1000);


  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".archive-title, " +
    ".archive-copy, " +
    ".archive-facts, " +
    ".theme-card, " +
    ".book, " +
    ".transcript-window, " +
    ".document-card, " +
    ".timeline-item, " +
    ".terminal-big, " +
    ".contact-content"
  );

  revealElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
      "opacity .8s ease, transform .8s ease";
  });

  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }

          entry.target.style.opacity = "1";
          entry.target.style.transform =
            "translateY(0)";

          observer.unobserve(entry.target);
        });

      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px"
      }
    );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });


  /* =======================================================
     TERMINAL GLITCH
  ======================================================= */

  const glitchTargets = document.querySelectorAll(
    ".hero h1, .terminal-copy h2"
  );

  glitchTargets.forEach((element) => {

    element.addEventListener("mouseenter", () => {

      element.style.textShadow =
        "3px 0 #ff4d4d, -3px 0 #4dffff";

      setTimeout(() => {
        element.style.textShadow = "";
      }, 120);
    });

  });


  /* =======================================================
     RANDOM TERMINAL GRAPH
  ======================================================= */

  const graphBars =
    document.querySelectorAll(".terminal-graph span");

  function randomizeGraph() {
    graphBars.forEach((bar) => {
      const height =
        Math.floor(
          Math.random() * 75
        ) + 15;

      bar.style.height = `${height}%`;
    });
  }

  setInterval(randomizeGraph, 1200);

});