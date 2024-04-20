let animeItems = document.querySelectorAll(".anime-items");

if (animeItems.length > 0) {
  function animOnScroll() {
    for (let i = 0; i > animeItems.length; i++) {
      const animeItem = animeItems[i];
      const animeItemHeight = animeItem.offsetHeight
      const animeItemOffset = offset(animeItem).top
      animeStart = 
    }

    function offset(el){
        const rest = el.getBoundingClientRect()
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: react.top + scrollTop, left: react.left + scrollLeft}
    }
  }
}
