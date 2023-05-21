let paintPalette = document.getElementById("paint-palette")

// Constructor de paletas
class paintBucket {
    constructor (color, clase){
        this.color = color
        this.clase = clase
    }
    createDiv(){
        let content = document.createElement("div")
        content.className = this.clase
        content.style.backgroundColor = this.color
        content.style.border = "2px solid black"

        paintPalette.append(content)
    }
}

const redColor = new paintBucket("red", "color-bucket")
const greenColor = new paintBucket("green", "color-bucket")
const blueColor = new paintBucket("blue", "color-bucket")
const yellowColor = new paintBucket("yellow", "color-bucket")

redColor.createDiv()
greenColor.createDiv()
blueColor.createDiv()
yellowColor.createDiv()

// variables del canvas

let canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")

canvas.width = innerWidth - 60
canvas.height = 400

let initialX
let initialY

let drawColor = "black"
let lineWidth = "2"
let isDrawing = false

//Funcionalidad


canvas.addEventListener("touchstart", start, false)
canvas.addEventListener("touchmove", draw, false)
canvas.addEventListener("touchend", stop, false)
canvas.addEventListener("mousedown", start, false)
canvas.addEventListener("mousemove", draw, false)
canvas.addEventListener("mouseup", stop, false)


function start(event) {
    isDrawing = true
    context.beginPath()
    context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop)
}

function draw(event) {
    if(isDrawing){
        context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop)
        context.strokeStyle = drawColor
        context.lineWidth = lineWidth
        context.lineCap = "round"
        context.lineJoin = "round"
        context.stroke()
    }


}

function stop(event){
    if (isDrawing) {
        context.stroke()
        context.closePath()
        isDrawing = false

    }
    
}


