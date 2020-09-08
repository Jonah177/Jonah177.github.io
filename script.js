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
    if (e.classList.toggle('is-active')) {  
        for (x of def) {
            x.style.display = "none";
        }
        for (x of alt) {
            x.style.display = "block";
        }
    }
    else {
        for (x of def) {
            x.style.display = "block";
        }
        for (x of alt) {
            x.style.display = "none";
        }
    }
}