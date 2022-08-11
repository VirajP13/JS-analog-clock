    
setInterval(()=>{
   
//    let hour = document.getElementsByClassName("hour");
//    let minute = document.getElementsByClassName("minute");
//    let seconds = document.getElementsByClassName("seconds");


    date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();

    hrotation = 30*htime + mtime/2 ;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    seconds.style.transform = `rotate(${srotation}deg)`;

}, 1000);