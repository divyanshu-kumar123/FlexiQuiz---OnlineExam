


function startTimer(duration, display) {

    var timer = duration, minutes, seconds;

    setInterval(function () {

        minutes = parseInt(timer / 60, 10);

        seconds = parseInt(timer % 60, 10);



        minutes = minutes < 10 ? "0" + minutes : minutes;

        seconds = seconds < 10 ? "0" + seconds : seconds;



        display.textContent = minutes + ":" + seconds;



        if (--timer < 0) {

            timer = duration;

        }

        document.questions.submit()}

    , 1000);

}



window.onload = function () {

    var fortyfiveMins = 60 * 30,

        display = document.querySelector('#time');

    startTimer(fortyfiveMins, display);

};

// function countDown() {
//     var second =  1000;
//     var minute = second * 60;
//     var hour = minute * 60;
// }

