let paintPalette = document.getElementById("paint-palette")

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