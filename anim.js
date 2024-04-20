let animeItems = document.querySelectorAll(".anime-items");

if (animeItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let i = 0; i < animeItems.length; i++) {
      const animeItem = animeItems[i];
      const animeItemHeight = animeItem.offsetHeight;
      const animeItemOffset = offset(animeItem).top;
      animeStart = 4;

      let animeItemPoint = window.innerHeight - animeItemHeight / animeStart;
      if (animeItemHeight > window.innerHeight) {
        animeItemPoint = window.innerHeight - window.innerHeight / animeStart;
      }
      if (
        pageYOffset > animeItemOffset - animeItemPoint &&
        pageYOffset < animeItemOffset + animeItemHeight
      ) {
        animeItem.classList.add("active");
      } else {
        if(!animeItem.classList.contains('anime-nohide')){
          animeItem.classList.remove("active");
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect();
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
    animOnScroll();
  }, 400);
}
