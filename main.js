let lampQtd = document.querySelector("#lampQtd"), txtLampQtd = document.querySelector("#txtLampQtd");
let lampLenght = document.querySelector("#lampLenght"), txtLampLenght = document.querySelector("#txtLampLenght");
let lampIntensity = document.querySelector("#lampIntensity"), txtLampIntensity = document.querySelector("#txtLampIntensity");
let lamp = document.querySelectorAll(".lamp");
var anima = '';

txtLampQtd.value = lampQtd.value;
txtLampLenght.value = lampLenght.value;
txtLampIntensity.value = lampIntensity.value;

lampQtd.addEventListener('input', function () {
    txtLampQtd.value = lampQtd.value;
    let rw;
    let compStyle;
    rw = document.querySelector("#row" + lampQtd.value);
    compStyle = window.getComputedStyle(rw);

    for (var i = 2; i <= 7; i++) {
        document.getElementById("row" + i).style.visibility = "hidden";
    }

    for (var i = 2; i <= lampQtd.value; i++) {
        document.getElementById("row" + i).style.visibility = "visible";
    }

}, false);


lampLenght.addEventListener('input', function () {
    txtLampLenght.value = lampLenght.value;
    var elements = document.getElementsByClassName('lamp');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.width = lampLenght.value + "px";
        elements[i].style.height = lampLenght.value + "px";
    }
}, false);

lampIntensity.addEventListener('input', function () {
    txtLampIntensity.value = lampIntensity.value;
}, false);

lamp.forEach(element => {
    element.addEventListener('input', () => {
        element.style.backgroundColor = element.value;
    });
});

lamp.forEach(element => {
    element.style.backgroundColor = getRandomColor();
});

function flasher() {
    for (var i = 0; i < lamp.length; i++) {
        (function loop(i) {
           setTimeout(function () {
                lamp[i].animate([
                    { boxShadow: "none" },
                    { boxShadow: "0 0 " + lampIntensity.value + "px " + lampIntensity.value/4 + "px " + lamp[i].style.backgroundColor },
                    { boxShadow: "none" }
                ], {
                    duration: 1000,
                    easing: "ease"
                });
            }, 100 * i)
        })(i);
    }
}

function on() {
    anima = setInterval(flasher, 800);
    document.getElementById("on_btn").setAttribute("disabled", "");
}


function off() {
    clearInterval(anima);
    document.getElementById("on_btn").removeAttribute("disabled");
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

