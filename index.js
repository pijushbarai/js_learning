var photos = ["img/kaldom.jpg", "img/dog.jpg", "img/pijush.jpg"];
var imgTag = document.querySelector("img");

var count = 0;

function next() {
    count++;
    if (count > photos.length - 1) count -= photos.length;
    imgTag.src = photos[count % 3];
}

function prev() {
    count--;
    if (count < 0) count += photos.length;
    imgTag.src = photos[count];
}
///////////////////////////////////////////////////////
//adding style in html doc by js dynamically
///////////////////////////////////////////////////////
var div1 = document.querySelector(".my-style");

function add() {
    div1.classList.add("div-style");
}
function remove() {
    div1.classList.remove("div-style");
}


///////////////////////////////////////////////////////
//event listener
///////////////////////////////////////////////////////
var listener = document.querySelector(".div2");
var clickEventCount = 0;
listener.addEventListener("click", function () {
    //alert("hello")
    clickEventCount++;
    if(clickEventCount%2 == 1){
        listener.classList.add("div2-style");
    }else{
        listener.classList.remove("div2-style");
    }
    

});