function time() {
    var date = new Date();
    var millis = Math.floor(date.getMilliseconds()/100);
    var seconds = date.getSeconds();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    if(millis<10){millis = "0"+millis;}
    if(seconds<10){seconds = "0"+seconds;}
    if(minutes<10){minutes = "0"+minutes;}
    document.getElementById("tm").innerHTML = hours + ":" + minutes + ":" + seconds + ":" + millis;
}

function Dt() {
    var date = new Date();
    var day = date.getDay() - 1;
    var monthDay = date.getDate();
    var month = date.getMonth();
    var years = date.getFullYear();
    var names = {
       meses: ["Enero", "Febrero", "Marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
       dias: ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"],
       months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
       days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    }
    document.getElementById("date").innerHTML = names.days[day]+", "+names.months[month]+" "+monthDay+", "+years;
    //document.getElementById("date").innerHTML = names.dias[day] + ", " + monthDay + " de " + names.meses[month] + " de " + years;
}


time();
setInterval(time, 50);
Dt();
setInterval(Dt, 1000);
