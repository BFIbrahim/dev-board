
const colorChangeBtn = document.getElementById('colorChange')

colorChangeBtn.addEventListener('click', function(event){
    event.preventDefault()

    const backgroundsColors = ['#cdb4db', '#ffc8dd', '#ffafcc', '#bde0fe', '#a2d2ff']
    const body = document.getElementById('body')

    const randomPath = (Math.floor(Math.random() * backgroundsColors.length))

    body.style.backgroundColor = backgroundsColors[randomPath]

})