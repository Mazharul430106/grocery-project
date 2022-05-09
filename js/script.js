let menuBtn = document.querySelector(".header-2 #menu-bar");
let navBar = document.querySelector(".header-2 .navbar");
let header = document.querySelector(".header-2");
    menuBtn.addEventListener("click",function(){
        menuBtn.classList.toggle("fa-times");
        navBar.classList.toggle("active");
    });


window.onscroll = ()=>{
    menuBtn.classList.remove("fa-times");
    menuBtn.classList.remove("active");

    if(window.scrollY > 150){
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    }

}


// count-down-timer...

    var dest = "1 April 2022";
    var daysCount = document.querySelector("#day");
    var hoursCount = document.querySelector("#hour");
    var minutesCount = document.querySelector("#minute");
    var secondsCount = document.querySelector("#second");

    function countdown(){

        var neadDate = new Date(dest);

        var currentDate = new Date();

        var gapTime = (neadDate - currentDate) / 1000;
        var days = Math.floor(gapTime / 3600 / 24);
        var hours = Math.floor((gapTime / 3600) % 24);
        var minutes = Math.floor((gapTime / 60) % 60);
        var seconds =  Math.floor(gapTime) % 60;

        daysCount.innerHTML = days;
        hoursCount.innerHTML = hours;
        minutesCount.innerHTML = minutes;
        secondsCount.innerHTML = seconds;
            
    }
    countdown();
    setInterval(countdown, 1000);
