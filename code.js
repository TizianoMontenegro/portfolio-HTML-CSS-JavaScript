const switches = document.getElementById("switches");
const switchesIMG = document.getElementById("switches__img");
const switchesText = document.getElementById("switches__text");

const colors = document.getElementById("colors")
const changeColor = document.documentElement.style;

switches.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    if(switchesIMG.src.includes("moon.svg")){
        switchesIMG.src = "images/sun.svg";
        switchesText.textContent = "Light Mode";
    }else{
        switchesIMG.src = "images/moon.svg";
        switchesText.textContent = "Dark Mode";
    }
});

colors.addEventListener("click",(e)=>{
    changeColor.setProperty("--primary-color",e.target.dataset.primarycolor)
});