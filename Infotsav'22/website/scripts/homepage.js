let stars = document.getElementById("stars")
let fore = document.getElementById("fore")
let back = document.getElementById("back")
let middle = document.getElementById("middle")
let front = document.getElementById("front")
let text = document.getElementById("text")
let static = document.getElementById("static")

window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    stars.style.left = value * 0.25 + 'px'
    static.style.top = value * 1 + 'px'
    fore.style.top = value * .75 + 'px'
    back.style.top = value * .5 + 'px'
    middle.style.top = value * .25 + 'px'
    front.style.top = value * .125 + 'px'
    
    if(value < 300){
        text.style.marginLeft = value * 10 + 'px'
        text.style.zIndex = '9'
    }else{
        
        text.style.marginTop = (value-300)* 2 +'px'
        text.style.zIndex = '10'
        
    }
})