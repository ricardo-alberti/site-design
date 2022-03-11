var intervalID = 0;
var j = 0;

function slideShow()
{
        window.setInterval("changeImage()", 60000); 
        fadeIn();
}

function changeImage() {   

    var imgSrcs=["images/img0.jpg",
            "images/img2.jpg",
            "images/img3.jpg",
            "images/img4.jpg",
            "images/img5.jpg"]
    j++;
    if (j > 4) {
        j = 0;
    }

    document.getElementById("slide").style.opacity = 0;
    document.getElementById("slide").style.backgroundImage = 'url'+'('+imgSrcs[j]+')';
}
     
function fadeIn() {
    setInterval(show, 60);
}
  
function show() {
    var body = document.getElementById("slide");
    opacity = Number(window.getComputedStyle(body).getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.025;
        body.style.opacity = opacity
    } else {
        clearInterval(intervalID);
    }
}

slideShow();
