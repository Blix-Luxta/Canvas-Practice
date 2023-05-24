let paintPalette = document.getElementById("paint-palette")



// variables del canvas

let canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")

canvas.width = innerWidth - 60
canvas.height = 400


let lineWidth = "2"
let isDrawing = false
let prevX = null
let prevY = null

// paletas de colores

let color = document.querySelectorAll(".color-bucket")
color = Array.from(color)
color.forEach(clr => {
    clr.addEventListener("click", ()=>{
        context.strokeStyle = clr.dataset.color
    })
})

//Funcionalidad

canvas.addEventListener("mousedown", (e) => isDrawing = true)
canvas.addEventListener("mouseup", (e) => isDrawing = false)

canvas.addEventListener("mousemove", (e) => {
    if(prevX == null || prevY == null || !isDrawing){
        prevX = e.clientX - canvas.offsetLeft
        prevY = e.clientY - canvas.offsetTop
        return
    }

    let currentX = e.clientX - canvas.offsetLeft
    let currentY = e.clientY - canvas.offsetTop

    context.beginPath()
    context.moveTo(prevX, prevY)
    context.lineTo(currentX, currentY)
    context.lineCap = "round"
    context.lineJoin = "round"
    context.stroke()

    prevX = currentX
    prevY = currentY
})

let theInput = document.getElementById("color-picker");

theInput.addEventListener("input", function(){
    theColor = theInput.value;
    context.strokeStyle = theColor;
}, false);


let pencilWidth = document.getElementById("pencil-range");

pencilWidth.addEventListener("input", function(){
    lineW = pencilWidth.value;
    lineWidth = lineW;
    context.lineWidth = lineW
}, false);
