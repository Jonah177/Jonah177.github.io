/* script-wallpaper */

function loadPictures() {
    
    for (i = 1; i < 7; i++) {
        num = Math.floor(Math.random() * 298);
//        alert(num);
        document.getElementById("pic-box-0" + i.toString()).style.backgroundImage = "url(wallpapers/all/pic" + num.toString() + ".png)";
    }
}

function buttonPress(num) {
    categoryElement = document.getElementById("h1-category");
    switch(num) {
        case 11:
            categoryElement.innerHTML = "Red Pictures";
            categoryElement.style.borderBottom = "5px solid red";
            break;
        case 12:
            categoryElement.innerHTML = "Blue Pictures";
            categoryElement.style.borderBottom = "5px solid blue";
            break;
        case 13:
            categoryElement.innerHTML = "Green Pictures";
            categoryElement.style.borderBottom = "5px solid green";
            break;
        case 14:
            categoryElement.innerHTML = "Yellow Pictures";
            categoryElement.style.borderBottom = "5px solid yellow";
            break;
        default:
            categoryElement.innerHTML = "All Pictures";
            categoryElement.style.borderBottom = "5px solid #DEC79B";
            break;
    }
}