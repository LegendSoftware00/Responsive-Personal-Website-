var lightModeIcon = document.getElementById("lightModeIcon");
var darkModeIcon = document.getElementById("darkModeIcon");

var ThemeModButton = document.getElementById("ThemeModButton");
var leftMenuButton = document.getElementById("left-menu-button");
let Mod = true; // true => default dark mode false => default light mode;

var rightSectionImg = document.querySelectorAll(".container .rightSection .RightSectionSlider .slider-item img");
var leftSection = document.querySelector(".container .leftSection");
var leftSectionContent1 = document.querySelector(".container .leftSection .content");
var leftSectionContent2 = document.querySelector(".container .leftSection .content2");
var leftMenu = document.querySelector(".container .left-menu");
var leftMenuUl = document.querySelector(".container .left-menu ul");
var leftMenuHomeBtn = document.getElementById("home-page");
var leftMenuBlogBtn = document.getElementById("blog-page");
var leftMenuSupportBtn = document.getElementById("support-page");
var leftMenuProjectBtn = document.getElementById("project-page");

var pTag = document.getElementsByTagName("p"); // 2 
var h1Tag = document.getElementsByTagName("h1"); // 2
var liTag = document.getElementsByTagName("li"); // 3
var aTag = document.getElementsByTagName("a"); // 4
var iTag1 = document.querySelector(".container .leftSection .content .CodeIcon i"); 
var iTag2 = document.querySelector(".container .leftSection .content2 .CheckIcon i"); 



function CounterElementAdd(i, e, c ){
     for(i = 0; i < e.length; i++){
         e[i].classList.add(c);
     }
}

function CounterElementRemove(i, e, c ){
    for(i = 0; i < e.length; i++){
        e[i].classList.remove(c);
    }
}

function ThemeModFunction(){
    if(Mod === true){
        Mod = false;

        // ThemeModButton.style.animation = "ThemeButtonAnmLight 1s ";
        // rightSectionImg.style.opacity = "1";
        // lightModeIcon.style.display = "none";
        // darkModeIcon.style.display = "block";

        // leftSection.style.backgroundColor = "white";
        // leftSectionContent1.style.backgroundColor = "rgb(177, 177, 177)";
        // leftSectionContent2.style.backgroundColor = "rgb(177, 177, 177)";
        // CounterElement(pTag.length,pTag,"rgb(16,16,16)");
        // CounterElement(h1Tag.length,h1Tag,"black");
        // CounterElement(liTag.length,liTag,"rgb(16,16,16)");
        // CounterElement(aTag.length,aTag,"rgb(16,16,16)");
        
        ThemeModButton.classList.add("white");
        rightSectionImg[0].classList.add("white");
        rightSectionImg[1].classList.add("white");
        rightSectionImg[2].classList.add("white");

        leftSection.classList.add("white");
        leftSectionContent1.classList.add("white");
        leftSectionContent2.classList.add("white");
        CounterElementAdd(pTag.length, pTag, "white");
        CounterElementAdd(h1Tag.length, h1Tag, "white");
        CounterElementAdd(liTag.length, liTag, "white");
        CounterElementAdd(aTag.length, aTag, "white");
        CounterElementAdd(iTag1.length, iTag1, "white");
        CounterElementAdd(iTag2.length, iTag2, "white");

        
        // iTag1.style.color = "black";
        // iTag2.style.color = "black";
    }
    else {
        Mod = true;

        ThemeModButton.classList.remove("white");
        rightSectionImg[0].classList.remove("white");
        rightSectionImg[1].classList.remove("white");
        rightSectionImg[2].classList.remove("white");
        
        leftSection.classList.remove("white");
        leftSectionContent1.classList.remove("white");
        leftSectionContent2.classList.remove("white");
        CounterElementRemove(pTag.length, pTag, "white");
        CounterElementRemove(h1Tag.length, h1Tag, "white");
        CounterElementRemove(liTag.length, liTag, "white");
        CounterElementRemove(aTag.length, aTag, "white");
        CounterElementRemove(iTag1.length, iTag1, "white");
        CounterElementRemove(iTag2.length, iTag2, "white");

        // ThemeModButton.style.animation = "ThemeButtonAnmDark 1s ";
        // rightSectionImg.style.opacity = "0.1";
        // lightModeIcon.style.display = "block";
        // darkModeIcon.style.display = "none";
        // leftSection.style.backgroundColor = "rgb(8, 8, 8)";
    }


}
// menu 
function dropLeftMenu() {
    if(leftMenu.classList.value === "left-menu"){
        leftMenu.classList.add("clicked");
        leftMenuButton.classList.add("clicked");
        leftMenuUl.classList.add("clicked");
    }
    else {
        leftMenu.classList.remove("clicked");
        leftMenuButton.classList.remove("clicked");
        leftMenuUl.classList.remove("clicked");
    }
    
}
// EventListener
ThemeModButton.addEventListener("click",function(){
    ThemeModFunction();
});

leftMenuButton.addEventListener("click",function(){
    dropLeftMenu();
});
leftMenuHomeBtn.addEventListener("click",function(){
    leftMenu.classList.remove("clicked");
    leftMenuButton.classList.remove("clicked");
    leftMenuUl.classList.remove("clicked");
})
leftMenuBlogBtn.addEventListener("click",function(){
    alert("soon");
});
leftMenuSupportBtn.addEventListener("click",function(){
    alert("soon");
});
leftMenuProjectBtn.addEventListener("click",function(){
    alert("soon");
});