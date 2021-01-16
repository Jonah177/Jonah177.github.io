/* script.js */

function srcButton() {
    alert("Add Source");
}

function payButton() {
    alert("Donate Here");
}

function menu() {  
    def = document.getElementsByClassName('link-def');
    alt = document.getElementsByClassName('link-alt');
    
    e = document.querySelector('.hamburger'); 
    //small screen
    if (e.classList.toggle('is-active')) { 
        for (x of alt) {
            x.style.display = "block";
        }
        for (x of def) {
            x.style.display = "none";
        }
    }
    //big screen
    else {
        for (x of alt) {
            x.style.display = "none";
        }
        for (x of def) {
            x.style.display = "block";
        }    
    }
}

function validate() {   
    e = document.querySelector('.hamburger');
    
    //big screen
    if (window.innerWidth >= 900) {    
        for (x of alt) {
            x.style.display = "none";
        }
        for (x of def) {
            x.style.display = "block";
        }
    }
    //small screen
    else if (e.classList.contains('is-active')) {
        for (x of alt) {
            x.style.display = "block";
        }  
        for (x of def) {
            x.style.display = "none";
        }
    }
}