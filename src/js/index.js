function playPiano(keyTitle){
    const title = keyTitle > 9 ? keyTitle : "0" + keyTitle
    const key = new Audio("src/audio/key"+title+".mp3")
    key.play()
}

function keyPressed(key, color){
    document.getElementById(key).classList.add(color+"-pressed")
    setTimeout(()=>document.getElementById(key).classList.remove(color+"-pressed"),500)
}

document.querySelectorAll(".key").forEach((key)=>{
    const keyTitle = key.getAttribute("id")
    key.addEventListener("click",()=>{
        playPiano(keyTitle)
        if(key.classList.contains("white-key")){
            keyPressed(keyTitle, "white")
        }
        else{
            keyPressed(keyTitle, "black")
        }
    })
})

const whiteKeys = {a: 1, s: 3, d: 5, f: 7, g: 8, h: 10, j: 12, k: 13, l: 15, é: 17, á: 19, ű: 20, ú: 22, ó: 24}
const blackKeys = {w: 2, e: 4, r: 6, t: 9, z: 11, u: 14, i: 16, o: 18, p: 21, ő: 23}
document.addEventListener("keypress",(e)=>{
    for (let key in whiteKeys){
        if(e.key == key){
            playPiano(whiteKeys[key])
            keyPressed(whiteKeys[key], "white")
        }
    }

    for (let key in blackKeys){
        if(e.key == key){
            playPiano(blackKeys[key])
            keyPressed(blackKeys[key], "black")
        }
    }

})

