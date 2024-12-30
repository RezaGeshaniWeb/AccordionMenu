const canvasMenu = document.querySelector('.canvas-menu')
const box = document.querySelector('#box')
const span = document.querySelectorAll('#box>span')
const submenu = document.querySelectorAll('.submenu')
const h2Submenu = document.querySelectorAll('.canvas-menu>li>h2')
const main = document.querySelector('main')

// Hamburger Menu
let flag = 1
box.addEventListener('click', () => {
    if (flag % 2) {
        canvasMenu.style.transform = 'translateX(0)'
        span[0].style.transform = 'rotate(-24deg)'
        span[1].style.transform = 'scaleX(0)'
        span[2].style.transform = 'rotate(24deg)'
    } else {
        canvasMenu.style.transform = 'translateX(-110%)'
        span[0].style.transform = 'rotate(0)'
        span[1].style.transform = 'scaleX(1)'
        span[2].style.transform = 'rotate(0)'
    }
    flag++
})

// Accordion Menu
submenu.forEach((item) => {
    item.dataset.height = item.clientHeight
    item.style.height = '0'
    item.dataset.status = 'off'
})

h2Submenu.forEach((item, h2Index) => {
    item.addEventListener('click', () => {
        submenu.forEach((item, ulIndex) => {
            if (h2Index != ulIndex) {
                item.style.height = '0'
                item.dataset.status = 'off'
            }
        })

        h2Submenu.forEach((item, i) => {
            if (h2Index != i) {
                item.children[1].style.transform = 'rotate(0)'
                item.children[1].style.transition = '300ms'
            }
        })

        if (item.nextElementSibling.dataset.status === 'off') {
            item.nextElementSibling.style.height = item.nextElementSibling.dataset.height + 'px'
            item.nextElementSibling.dataset.status = 'on'
            item.children[1].style.transform = 'rotate(180deg)'
            item.children[1].style.transition = '300ms'
        } else {
            item.nextElementSibling.style.height = '0'
            item.nextElementSibling.dataset.status = 'off'
            item.children[1].style.transform = 'rotate(0)'
            item.children[1].style.transition = '300ms'
        }
    })
})