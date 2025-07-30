let seconds=0;
let minutes=0;
let hours=0;
let time=document.querySelector(".time");
let timer=null;
function stopwatch(){
    seconds=seconds+1;
    if(seconds==60){
        minutes=minutes+1;
        seconds=0;
        if(minutes==60){
            hours=hours+1;
            minutes=0;
        }
    }

    let s,m,h;
    if(seconds<10){
       s= "0"+seconds;
    }
    else{
        s=seconds;
    }
    if(minutes<10){
        m="0"+minutes;
    }
    else{
        m=minutes
    }
    if(hours<10){
        h="0"+hours;
    }
    else{
        h=hours
    }
    time.innerHTML=`${h}:${m}:${s}`

}
function startwatch(){
    if(timer!==null){
        clearInterval(timer);
    }
    timer= setInterval(stopwatch,1000)
}

function pause(){
    clearInterval(timer);
}
function reset(){
    clearInterval(timer);
    seconds=0;
    minutes=0;
    hours=0;
    time.innerHTML="00:00:00";
}