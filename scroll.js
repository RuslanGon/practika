let horizontScroll = document.querySelector('.container')
let leftBtn = document.getElementById('leftBtn')
let rightBtn = document.getElementById('rightBtn')

 rightBtn.addEventListener('click', () => {
    horizontScroll.style.scrollBehavior = 'smooth'
horizontScroll.scrollLeft += 900
 })

 leftBtn.addEventListener('click', () => {
    horizontScroll.style.scrollBehavior = 'smooth'
    horizontScroll.scrollLeft -= 900
     })
