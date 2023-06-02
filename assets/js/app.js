const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (this.scrollY > 0) {
    navbar.classList.remove("py-4");
    navbar.classList.add("shadow", "py-3");
  } else {
    navbar.classList.add("py-4");
    navbar.classList.remove("shadow", "py-3");
  }
});

// AOS initialization
AOS.init({
  duration: 700,
});

// Typing Effect

const text = "Coming Soon . . . ";
let index = 0;

function typeText() {
  if (index < text.length) {
    document.getElementById("typing-effect").textContent += text.charAt(index);
    index++;
  } else {
    // When the entire text is typed, reset the index and clear the content
    index = 0;
    document.getElementById("typing-effect").textContent = "";
  }

  setTimeout(typeText, 150); // Adjust the typing speed (milliseconds)
}

typeText();

// Scroll to top

window.addEventListener("scroll", function () {
  var scrollPos =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  var scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;

  if (scrollPos > (1 / 4) * scrollHeight) {
    document.querySelector(".scroll-to-top").style.display = "flex";
  } else {
    document.querySelector(".scroll-to-top").style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Add event listeners for showing/hiding the navbar-toggler icon and hiding the dropdown
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector("#navbarTogglerIcon");
  const navbarCollapse = document.querySelector("#navbarColor03");

  navbarCollapse.addEventListener("show.bs.collapse", function () {
    navbarToggler.innerHTML = '<span class="navbar-toggler-icon"></span>'; // Change the icon to "X"
  });

  navbarCollapse.addEventListener("hide.bs.collapse", function () {
    navbarToggler.innerHTML = '<span class="navbar-toggler-icon"></span>'; // Remove the "X" icon
  });

  // Hide the dropdown when the user clicks outside
  document.addEventListener("click", function (event) {
    const isInsideNavbar = navbarCollapse.contains(event.target);
    const isNavbarToggler = navbarToggler.contains(event.target);

    if (!isInsideNavbar && !isNavbarToggler) {
      navbarCollapse.classList.remove("show");
    }
  });

  // Hide the dropdown when the user scrolls
  window.addEventListener("scroll", function () {
    navbarCollapse.classList.remove("show");
  });
});

// Toggle the drop
function toggleHamburger() {
  var hamburger = document.querySelector(".hamburger");
  var menu = document.querySelector(".menu");
  var body = document.querySelector("body");

  hamburger.classList.toggle("is-active");
  menu.classList.toggle("is-visible");
  body.classList.toggle("menu-open");

  // Add event listeners to handle scrolling and outside click
  window.addEventListener("scroll", handleScroll);
  document.addEventListener("click", handleClickOutside);

  function handleScroll() {
    // Hide the menu when scrolling
    menu.classList.remove("is-visible");
    body.classList.remove("menu-open");
    hamburger.classList.remove("is-active");

    // Remove the event listener after hiding the menu
    window.removeEventListener("scroll", handleScroll);
  }

function handleClickOutside(event) {
  if (
    !menu.contains(event.target) &&
    !hamburger.contains(event.target) &&
    !event.target.classList.contains("menu")
  ) {
    // Hide the menu when clicking outside
    menu.classList.remove("is-visible");
    body.classList.remove("menu-open");
    hamburger.classList.remove("is-active");
  }

  // Remove the event listener after hiding the menu
  setTimeout(function () {
    document.removeEventListener("click", handleClickOutside);
  });
}

// Add event listener for the initial click event
document.addEventListener("click", function (event) {
  // Execute handleClickOutside only once per click event
  if (!event._menuClicked) {
    handleClickOutside(event);
    event._menuClicked = true;
  }
});


}







const accordionPanelHeaders = document.querySelectorAll(
  ".accordion-panel-header"
);

const semesterDiv = document.getElementById("semester-2-2");
semesterDiv.addEventListener("click", () => {
  window.location.href = "semester-2.2.html";
});







