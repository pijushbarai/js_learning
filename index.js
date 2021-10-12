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

var d3 = document.querySelector(".div-3");
d3.addEventListener("mouseover",function(){
    d3.classList.add("div3-style");
});
d3.addEventListener("mouseout",function(){
    d3.classList.remove("div3-style");
});

///////////////////////////////////////////////////////
//event listener & audio player making
///////////////////////////////////////////////////////

// var audioBtn = document.querySelector(".btn");
// console.log(audioBtn.length);

for(var i = 0; i < 3; i++){
    document.querySelectorAll(".my-btn")[i].addEventListener("click",function name(params) {
        var text = this.innerHTML;
        
        switch(text){
            case "a":
                //document.write("HI i am working");
                var audio = new Audio("sounds/a.mp3");
                audio.play();
                break;

        }
    });
}