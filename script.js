
const container=document.querySelector(".container")


const hexCode='0123456789ABCDEF'

for(let i=0;i<60;i++){
    const box=document.createElement('div')
    box.classList.add("color-card")
    let color='#'
    for(let j=0;j<6;j++){
color+=hexCode[getRandom()]
    }
    console.log(color);

    box.textContent=color
    box.style.backgroundColor=  color
    container.appendChild(box)
}

// function getRandom(min,max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
function getRandom(){
    return Math.floor(Math.random() * 16) ;  //0-15
 
}

// console.log(getRandom(0,255));