//acordion handler
        const panelHeaders = document.querySelectorAll('.accordion-panel-header');

        panelHeaders.forEach(function (panelHeader) {
            const content = document.querySelector(panelHeader.getAttribute('href'));
            const plusIcon = panelHeader.querySelector('.fas.fa-plus');
            const paragraph = content.querySelector('p');

            panelHeader.addEventListener('click', function () {
                content.classList.toggle('show');
                panelHeader.classList.toggle('active');
                if (content.classList.contains('show')) {
                    paragraph.style.display = 'block';
                } else {
                    paragraph.style.display = 'none';
                }
            });
        });
    




// JavaScript to add/remove the 'shadow' class and reduce navbar height based on scroll position
window.addEventListener('scroll', function() {
  var nav = document.querySelector('nav');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var initialHeight = 55; // Initial height of the navbar in pixels
  var scrollThreshold = 10; // Number of pixels to scroll before reducing the height

  if (scrollTop > scrollThreshold) {
    nav.classList.add('shadow');
    nav.style.height = (initialHeight - 20) + 'px'; // Reduce the height by 20 pixels
  } else {
    nav.classList.remove('shadow');
    nav.style.height = initialHeight + 'px'; // Reset the height to the initial value
  }
});





window.addEventListener("scroll", function () {
  var slideUpElements = document.querySelectorAll(".slide-up");
  var triggerOffset = 100; // Offset from the bottom of the viewport to trigger the animation

  slideUpElements.forEach(function (element) {
    var elementOffsetTop = element.offsetTop;
    var windowHeight = window.innerHeight;

    if (window.scrollY > elementOffsetTop - windowHeight + triggerOffset) {
      element.classList.add("fade-up-active");
    } else {
      element.classList.remove("fade-up-active");
    }
  });
});
