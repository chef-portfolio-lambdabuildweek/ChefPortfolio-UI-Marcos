const test = document.getElementById("btn")

test.addEventListener("mouseover", function (event) {
    event.target.style.color = "red";

    setTimeout(function () {
        event.target.style.color = "";
    }, 500);
}, false);

