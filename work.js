const keys=document.querySelectorAll(".key");
console.log(keys);

function playing(key){    
   const element = document.querySelector(`.${key}`);   
    if (element) {
        element.classList.add("playing");
    }
    setTimeout(()=>{
        element.classList.remove("playing");
    },150);
}

function playAudioByKey(key) {
  const audio = document.getElementById(key.toLowerCase());
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

for(let k of keys){
    k.addEventListener("click",()=>{
        console.log(k.classList[1]);
        playAudioByKey(k.classList[1]);
        playing(k.classList[1]);
    })
    
};

window.addEventListener("keydown",(e)=>{    
    let key=e.key.toLowerCase();//all main keys to lower case
    switch (key) {
        case "a":            
            playAudioByKey(key);
            playing(key);

            break;
        case "s":            
            playAudioByKey(key);
            playing(key);

            break;    
        case "d":            
            playAudioByKey(key);
            playing(key);

            break;
        case "f":            
            playAudioByKey(key);
            playing(key);

            break;
        case "g":            
            playAudioByKey(key);
            playing(key);

            break;
        case "h":            
            playAudioByKey(key);
            playing(key);

            break;
        case "j":            
            playAudioByKey(key);
            playing(key);

            break;
        case "k":            
            playAudioByKey(key);
            playing(key);

            break;
        case "l":            
            playAudioByKey(key);
            playing(key);

            break;        
        default:
            return null;
            break;
    }    
});

