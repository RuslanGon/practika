let horizontScroll = document.querySelector('.container')
let leftBtn = document.getElementById('leftBtn')
let rightBtn = document.getElementById('rightBtn')

 rightBtn.addEventListener('click', () => {
    horizontScroll.style.scrollBehavior = 'smooth'
horizontScroll.scrollLeft += 1000
 })

 leftBtn.addEventListener('click', () => {
    horizontScroll.style.scrollBehavior = 'smooth'
    horizontScroll.scrollLeft -= 1000
     })
