// Dark mode
var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
  document.documentElement.classList.add("dark");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
  document.documentElement.classList.remove("dark");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});

// Mobile Menu
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const btnClose = document.querySelector(".navbar-toggle-close");
btn.addEventListener("click", () => {
  menu.classList.remove("hidden");
  menu.classList.add("open");
});
btnClose.addEventListener("click", () => {
  menu.classList.add("hidden");
  menu.classList.remove("open");
});

//Copyright date
const date = new Date();
let year = date.getFullYear();
document.getElementById("date").innerHTML = year;

// Sticky Nav
window.addEventListener("scroll", function () {
  let windscroll = window.pageYOffset;
  let topNav = document.getElementById("top-nav");
  if (windscroll >= 100) {
    document.getElementById("mainnavigationBar").classList.add("nav-sticky");

    if (topNav) {
      topNav.classList.add(...["scale-y-0", "origin-top"]);
      topNav.classList.remove(...["scale-y-100"]);
    }
  } else {
    document.getElementById("mainnavigationBar").classList.remove("nav-sticky");
    if (topNav) {
      topNav.classList.remove(...["scale-y-0", "origin-top"]);
      topNav.classList.add(...["scale-y-100", "origin-top"]);
    }
  }
});

// Marque JS
if (document.querySelector("#clients") != null) {
  const root = document.documentElement;
  const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
  const marqueeContent = document.querySelector(".marquee-content");

  root.style.setProperty("--marquee-elements", marqueeContent.children.length);

  for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
  }
}
// Counter
let section_counter = document.querySelector("#counter");
let counters = document.querySelectorAll(".counter");
if (section_counter) {
  // Scroll Animation
  let CounterObserver = new IntersectionObserver(
    (entries, observer) => {
      let [entry] = entries;
      if (!entry.isIntersecting) return;
      counters.forEach((counter, index) => {
        counter.innerHTML = "0";
        const updateCounter = () => {
          const maxValue = +counter.getAttribute("data-value");
          const defaultCounter = +counter.innerHTML;

          const increament = maxValue / 5000;

          if (defaultCounter < maxValue) {
            counter.innerHTML = `${Math.ceil(defaultCounter + increament)}`;
            setTimeout(updateCounter, 1);
          } else {
            counter.innerHTML = maxValue;
          }
        };
        updateCounter();

        if (counter.parentElement.style.animation) {
          counter.parentElement.style.animation = "";
        } else {
          counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${index / counters.length + 1.5}s`;
        }
      });
      observer.unobserve(section_counter);
    },
    {
      root: null,
      threshold: 1,
    }
  );

  CounterObserver.observe(section_counter);
}
// Counter 2
let trusted_counter = document.querySelector("#counter_trusted");
let trusted_counters = document.querySelectorAll(".counterTrusted");
if (trusted_counter) {
  // Scroll Animation
  let CounterObserver = new IntersectionObserver(
    (entries, observer) => {
      let [entry] = entries;
      if (!entry.isIntersecting) return;
      trusted_counters.forEach((counter, index) => {
        counter.innerHTML = "0";
        const updateCounter = () => {
          const maxValue = +counter.getAttribute("data-value");
          const defaultCounter = +counter.innerHTML;

          const increament = maxValue / 5000;

          if (defaultCounter < maxValue) {
            counter.innerHTML = `${Math.ceil(defaultCounter + increament)}`;
            setTimeout(updateCounter, 1);
          } else {
            counter.innerHTML = maxValue;
          }
        };
        updateCounter();

        if (counter.parentElement.style.animation) {
          counter.parentElement.style.animation = "";
        } else {
          counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${
            index / trusted_counters.length + 1.5
          }s`;
        }
      });
      observer.unobserve(trusted_counter);
    },
    {
      root: null,
      threshold: 1,
    }
  );

  CounterObserver.observe(trusted_counter);
}

// Counter 3
let company_bar = document.querySelector("#company_bar");
let companyBarItem = document.querySelectorAll(".companyBar");
if (company_bar) {
  // Scroll Animation
  let CounterObserver = new IntersectionObserver(
    (entries, observer) => {
      let [entry] = entries;
      if (!entry.isIntersecting) return;
      companyBarItem.forEach((counter, index) => {
        counter.innerHTML = "0";
        const updateCounter = () => {
          const maxValue = +counter.getAttribute("data-value");
          const defaultCounter = +counter.innerHTML;

          const increament = maxValue / 5000;

          if (defaultCounter < maxValue) {
            counter.innerHTML = `${Math.ceil(defaultCounter + increament)}`;
            setTimeout(updateCounter, 1);
          } else {
            counter.innerHTML = maxValue;
          }
        };
        updateCounter();

        if (counter.parentElement.style.animation) {
          counter.parentElement.style.animation = "";
        } else {
          counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${index / companyBarItem.length + 1.5}s`;
        }
      });
      observer.unobserve(company_bar);
    },
    {
      root: null,
      threshold: 1,
    }
  );

  CounterObserver.observe(company_bar);
}

//FAQ
// document.querySelectorAll(".faq-header").forEach((item) => {
//   item.addEventListener("click", (event) => {
//     let accCollapse = item.nextElementSibling;
//     if (!item.classList.contains("collapsing")) {
//       // Open accordion item
//       if (!item.classList.contains("open")) {
//         accCollapse.style.display = "block";
//         let accHeight = accCollapse.clientHeight;

//         setTimeout(() => {
//           accCollapse.style.height = accHeight + "px";
//           accCollapse.style.display = "";
//         }, 1);

//         accCollapse.classList = "faq-body collapsing";

//         setTimeout(() => {
//           accCollapse.classList = "faq-body close open";
//         }, 300);
//       }
//       // Close accordion item
//       else {
//         // Remove "collapse open" from .accordion__collapse, add "collapsing"
//         accCollapse.classList = "faq-body collapsing";

//         setTimeout(() => {
//           accCollapse.style.height = "0px";
//         }, 1);

//         // After X amount of time, remove "collapsing" class and add "collapse" class
//         setTimeout(() => {
//           accCollapse.classList = "faq-body close";
//           accCollapse.style.height = "";
//         }, 300);
//       }

//       item.classList.toggle("open");
//     }
//   });
// });
document.querySelectorAll(".faq-header").forEach((item) => {
  item.addEventListener("click", () => {
    // Close all other open FAQ items
    document.querySelectorAll(".faq-header").forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains("open")) {
        let otherAccCollapse = otherItem.nextElementSibling;
        otherAccCollapse.classList = "faq-body collapsing";

        setTimeout(() => {
          otherAccCollapse.style.height = "0px";
        }, 1);

        setTimeout(() => {
          otherAccCollapse.classList = "faq-body close";
          otherAccCollapse.style.height = "";
        }, 300);

        otherItem.classList.remove("open");
      }
    });

    let accCollapse = item.nextElementSibling;
    if (!item.classList.contains("collapsing")) {
      // Open accordion item
      if (!item.classList.contains("open")) {
        accCollapse.style.display = "block";
        let accHeight = accCollapse.clientHeight;

        setTimeout(() => {
          accCollapse.style.height = accHeight + "px";
          accCollapse.style.display = "";
        }, 1);

        accCollapse.classList = "faq-body collapsing";

        setTimeout(() => {
          accCollapse.classList = "faq-body close open";
        }, 300);
      }
      // Close accordion item
      else {
        accCollapse.classList = "faq-body collapsing";

        setTimeout(() => {
          accCollapse.style.height = "0px";
        }, 1);

        setTimeout(() => {
          accCollapse.classList = "faq-body close";
          accCollapse.style.height = "";
        }, 300);
      }

      item.classList.toggle("open");
    }
  });
});

// Price Chnage
var checkBox = document.getElementById("priceCheck");
function check() {
  var monthlyPrice = document.getElementsByClassName("price-month");
  var yearlyPrice = document.getElementsByClassName("price-year");

  for (var i = 0; i < monthlyPrice.length; i++) {
    if (checkBox.checked === false) {
      monthlyPrice[i].style.display = "block";
      yearlyPrice[i].style.display = "none";
    } else if (checkBox.checked === true) {
      monthlyPrice[i].style.display = "none";
      yearlyPrice[i].style.display = "block";
    }
  }
}
check();
if (checkBox) {
  checkBox.addEventListener("click", check);
}
//Swiper Js Testimonial
const testimonial = new Swiper("#testionial", {
  loop: true,
  spaceBetween: 45,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 45,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 45,
    },
  },
});
// Swiper js Blog Feature
const bloglFeature = new Swiper("#blog-feature", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 45,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Swiper js Integration
const integration = new Swiper("#integration", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 9,
    },
  },
});

// Swiper js Integration
const timeline = new Swiper("#timeline", {
  loop: true,
  direction: "vertical",
  spaceBetween: 45,
  slidesPerView: 3,
});

// FAQ Tabs
let faqTabs = document.querySelectorAll("ul.faq-tabs > li");
function myTabClicks(tabClickEvent) {
  for (let i = 0; i < faqTabs.length; i++) {
    faqTabs[i].classList.remove("tabActive");
  }
  let clickedTab = tabClickEvent.currentTarget;
  clickedTab.classList.add("tabActive");
  tabClickEvent.preventDefault();
  let myContentPanes = document.querySelectorAll(".tab-pane");
  for (let i = 0; i < myContentPanes.length; i++) {
    myContentPanes[i].classList.remove("tabActive");
  }
  let anchorReference = tabClickEvent.target;
  let activePaneId = anchorReference.getAttribute("href");
  let activePane = document.querySelector(activePaneId);
  activePane.classList.add("tabActive");
}
for (let i = 0; i < faqTabs.length; i++) {
  faqTabs[i].addEventListener("click", myTabClicks);
}
//Fancybox
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

// motion animationn
gsap.registerPlugin(MotionPathPlugin);

gsap.set("#rect, #rect-2, #rect-3, #rect-4, #rect-5, #rect-6", {opacity: 1});
gsap.from("#rect", {
  motionPath: {
    path: "#path",
    autoRotate: true,
    align: "#path",
    alignOrigin: [0.5, 0.5],
  },
  duration: 2,
  ease: "none",
  repeat: -1,
  repeatDelay: 0,
});
gsap.from("#rect-2", {
  motionPath: {
    path: "#path-2",
    autoRotate: true,
    align: "#path-2",
    alignOrigin: [0.5, 0.5],
  },
  duration: 2,
  ease: "none",
  repeat: -1,
  repeatDelay: 0,
});
gsap.from("#rect-3", {
  motionPath: {
    path: "#path-3",
    autoRotate: true,
    align: "#path-3",
    alignOrigin: [0.5, 0.5],
  },
  duration: 2,
  ease: "none",
  repeat: -1,
  repeatDelay: 0,
});
gsap.from("#rect-4", {
  motionPath: {
    path: "#path-4",
    autoRotate: true,
    align: "#path-4",
    alignOrigin: [0.5, 0.5],
  },
  duration: 2,
  ease: "none",
  repeat: -1,
  repeatDelay: 0,
});
gsap.from("#rect-5", {
  motionPath: {
    path: "#path-5",
    autoRotate: true,
    align: "#path-5",
    alignOrigin: [0.5, 0.5],
  },
  duration: 2,
  ease: "none",
  repeat: -1,
  repeatDelay: 0,
});
gsap.from("#rect-6", {
  motionPath: {
    path: "#path-6",
    autoRotate: true,
    align: "#path-6",
    alignOrigin: [0.5, 0.5],
  },
  duration: 2,
  ease: "none",
  repeat: -1,
  repeatDelay: 0,
});
// Serach Modal
let modal = document.getElementById("modal");
let modalOpenBtn = document.getElementById("open-btn");
let modalCloseBtn = document.getElementById("ok-btn");

modalOpenBtn.onclick = function () {
  modal.style.display = "flex";
};

modalCloseBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//AOS
AOS.init({
  disable: function () {
    var maxWidth = 768;
    return window.innerWidth < maxWidth;
  },
});

// Hero Parallax
if (document.querySelector("#scene") != null) {
  let scene = document.getElementById("scene");
  scene.addEventListener("mousemove", parallax);
  function parallax(event) {
    this.querySelectorAll(".parallax-effect").forEach((shift) => {
      const position = shift.getAttribute("parallax-value");
      const x = (shift.offsetWidth - event.pageX * position) / 90;
      const y = (shift.offsetWidth - event.pageY * position) / 90;

      shift.style.cssText = `transform: translateX(${x}px) translateY(${y}px); transition-duration: 0.1s;`;
    });
  }
}

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("tab-items-active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("tab-active");
    });
    tab.classList.add("tab-active");
    target.classList.add("tab-items-active");
  });
});

// countdown

// Get the countdown element and date value
const countdownElement = document.getElementById("countdown");
if (countdownElement) {
  const targetDate = new Date(countdownElement.getAttribute("data-date")).getTime();
  function formatNumber(number) {
    return number < 10 ? `0${number}` : number;
  }

  // Update the countdown every second
  const countdownTimer = setInterval(function () {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    const formattedDays = formatNumber(days);
    const formattedHours = formatNumber(hours);
    const formattedMinutes = formatNumber(minutes);
    const formattedSeconds = formatNumber(seconds);
    // Display the result in the countdown element
    countdownElement.innerHTML = `${formattedDays} : ${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;

    // If the countdown is finished, stop the timer and display a message
    if (timeRemaining < 0) {
      clearInterval(countdownTimer);
      countdownElement.innerHTML = "Countdown finished!";
    }
  }, 1000);
}
