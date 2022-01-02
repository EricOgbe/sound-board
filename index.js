const drumBox = document.querySelector('.box1')
const chimeBox = document.querySelector('.box2')
const guitarBox = document.querySelector('.box3')
const cymbalBox = document.querySelector('.box4')
const woodBox = document.querySelector('.box5')

const drums = new Audio('Drum.mp3')
const chimes = new Audio('Wind-Chimes.mp3')
const guitar = new Audio('guitar.mp3')
const Cymbal = new Audio('Cymbal.mp3')
const Wood = new Audio('Woodblock.mp3')




drumBox.addEventListener('click', () => {
    drums.play()
    chimes.pause()
    guitar.pause()
    Cymbal.pause()
    Wood.pause()
})
chimeBox.addEventListener('click', () => {
    chimes.play()
    drums.pause()
    guitar.pause()
    Cymbal.pause()
    Wood.pause()
})
guitarBox.addEventListener('click', () => {
    guitar.play()
    chimes.pause()
    drums.pause()
    Cymbal.pause()
    Wood.pause()
})
cymbalBox.addEventListener('click', () => {
    Cymbal.play()
    chimes.pause()
    guitar.pause()
    drums.pause()
    Wood.pause()
})
woodBox.addEventListener('click', () => {
    Wood.play()
    chimes.pause()
    guitar.pause()
    Cymbal.pause()
    drums.pause()
})

