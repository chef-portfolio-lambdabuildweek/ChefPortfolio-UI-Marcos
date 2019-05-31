let anchors = document.querySelectorAll('.topA');
console.log(anchors);

anchors.forEach(function(){
    anchors.addEventListener("mouseover", function (event) {
        event.target.style.backgroundColor = "crimson";

        setTimeout(function () {
            event.target.style.backgroundColor = "";
        }, 500);
    }, false);
});