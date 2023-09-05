const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const score = document.querySelector(".score");
const gameOver = document.querySelector(".gameOver");
const tryAgain = document.querySelector(".tryAgain");
const soundtrack1 = document.querySelector(".soundtrack1");
const soundtrack2 = document.querySelector(".soundtrack2");
const jumpSound = document.querySelector(".jumpSound");

soundtrack1.play();
soundtrack1.volume = 0.4;
soundtrack2.volume = 0.4;
jumpSound.volume = 0.2;
jumpSound.pause();
soundtrack2.pause();


document.onkeydown = function (e){
    let keynum = e.key;
    if (keynum == "w" || keynum=="W"){
            if(!(mario.classList.contains("jump"))){
                function jump(){
                    mario.classList.add("jump");
                    jumpSound.play()
                    
                    
                    setTimeout( ()=>{
                        mario.classList.remove("jump")
                    }, 600)
                
                }
        
            }
            jump()
    }
}

document.onclick = function(){
    if(!(mario.classList.contains("jump"))){
        function jump(){
            mario.classList.add("jump");
            jumpSound.play()
            
            
            setTimeout( ()=>{
                mario.classList.remove("jump")
            }, 600)
        
        }

    }
    jump()
}





const loop = setInterval(() => {
    let pipePosition = pipe.offsetLeft;
    let marioPosition = parseFloat(window.getComputedStyle(mario).bottom.replace("px", ""))
    let cloudsPosition = clouds.offsetLeft;
   

    if(pipePosition <= 145 && pipePosition >0 && marioPosition <= 80){
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`
        mario.style.animation = "none"
        mario.style.bottom = `${marioPosition}px`
        mario.src = "img/game-over.png"
        mario.style.width = "6%"
        mario.style.height = "25%"
        mario.style.marginLeft = "60px"
        clouds.style.animation = "none"
        clouds.style.left = `${cloudsPosition}px`
        gameOver.style.display = "block";
        tryAgain.style.display = "block";
        soundtrack2.play()
        soundtrack1.pause()
        jumpSound.volume = 0
        clearInterval(loop)
        clearInterval(loopScore)
    }
   

}, 10);

const loopScore = setInterval(()=>{
    let pipePosition = pipe.offsetLeft;
    let marioPosition = parseFloat(window.getComputedStyle(mario).bottom.replace("px", ""))
    if(marioPosition>60 && pipePosition<=30){
        score.innerHTML = `${Number(score.innerHTML) + 1}`
    }
    
}, 100)

tryAgain.addEventListener("click", () =>{
    window.location.reload();
})




