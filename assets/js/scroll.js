document.addEventListener("DOMContentLoaded", () => {
      const totalSections = 8;
      let currentSection = 0;
      let isScrolling = false;

      const scrollToSection = index => {
            if (index >= 0 && index < totalSections) {
                  window.scrollTo({
                        top: index * window.innerHeight,
                        behavior: 'smooth'
                  });
                  currentSection = index;
            }
      };

      document.addEventListener('wheel', e => {
            const isInsideScrollableDiv = e.target.closest('.scrollable-div');
            if (isInsideScrollableDiv) {
                  return;
            }

            if (!isScrolling) {
                  isScrolling = true;
                  scrollToSection(currentSection + (e.deltaY > 0 ? 1 : -1));
                  setTimeout(() => isScrolling = false, 200);
            }
            e.preventDefault();
      }, { passive: false });
});
