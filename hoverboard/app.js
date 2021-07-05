const board = document.querySelector('#board');
const colors = ['rgb(255, 0, 0)', 'rgb(251, 71, 0)', 'rgb(255, 238, 0)', 'rgb(0, 255, 13)', 'rgb(0, 234, 255)', 'rgb(38, 0, 255)','rgb(255, 0, 212)']
const SQUARES_NUMBER = 5000;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(e) {
    const color = getRandomColor()
    e.style.backgroundColor = color
    e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(e) {
    e.style.backgroundColor = '#1d1d1d'
    e.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
   const index =  Math.floor(Math.random()*colors.length)
   return colors[index]
}