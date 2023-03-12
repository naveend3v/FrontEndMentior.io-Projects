let a = 0;
let loadFunc = setInterval(myfunc, 15);
function myfunc() {

    if (a < 100) {
        document.getElementById("bg-txt").innerHTML = a++ + 1 + "%";
        document.getElementById("bg-txt").style.fontSize = "40px";
    } else {
        clearTime();
    }

    function clearTime() {
        clearInterval(loadFunc);
    }
}
