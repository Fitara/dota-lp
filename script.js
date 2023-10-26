document.addEventListener("DOMContentLoaded", function () {
  // Event listener for smooth scrolling to specific content
  const scrollToSection = (element, offset) => {
    const targetOffset =
      element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: targetOffset });
  };

  const addScrollListener = (linkId, titleSelector, offset) => {
    const link = document.getElementById(linkId);
    const title = document.querySelector(titleSelector);

    if (link && title) {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        scrollToSection(title, offset);
      });
    }
  };

  addScrollListener("heroes-link", ".heroes-container", 340);
  addScrollListener("news-link", ".news-container", 70);
  addScrollListener("esports-link", ".esports-container", 170);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const handleScroll = () => {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach((element) => {
      isElementInViewport(element)
        ? element.classList.add("in-viewport")
        : element.classList.remove("in-viewport");
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  // Duplicate card for infinite card carousel
  function duplicateElements(className, containerClass, count) {
    const container = document.querySelector(`.${containerClass}`);
    const elementsToDuplicate = document.querySelectorAll(`.${className}`);

    for (let i = 0; i < count; i++) {
      elementsToDuplicate.forEach((element) => {
        const clone = element.cloneNode(true);
        container.appendChild(clone);
      });
    }
  }

  duplicateElements("heroes-slide", "heroes", 2);
  duplicateElements("heroes-slide-2", "heroes-2", 2);
});
