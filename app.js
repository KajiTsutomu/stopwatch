(() => {
    let display = document.getElementById("display");
    let startStop = document.getElementById("startStop");
    let reset = document.getElementById("reset");

    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    function stopWatch(){
        seconds++;
        if(seconds / 60 == 1){
            minutes++;
            seconds = 0;
            if(minutes / 60 == 1){
                hours++;
                minutes = 0;
            }
        }

        display.innerHTML = hours + "時" + minutes + "分" + seconds + "秒";
    };

    let count = 0;
    let interval;
    
    startStop.addEventListener("click", function(){
        if(count % 2 == 0){
            count++;
            this.innerHTML = "Stop";
            interval = setInterval(stopWatch, 1000);
        } else {
            count++;
            this.innerHTML = "Start";
            clearInterval(interval);
        };
    });

    reset.addEventListener("click", function(){
        clearInterval(interval);
        startStop.innerHTML = "Start";
        count = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
        display.innerHTML = "0時0分0秒";
    });


})();