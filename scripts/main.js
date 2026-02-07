let mybutton = document.getElementById("backToTopBtn");
window.onscroll = function() {
        scrollFunction(); 
        
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
};
function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

const textElement = document.querySelector(".typing-text");
const texts = ["Microsoft .Net Full Stack Web Developer", "Microsoft Cloud Application Developer", "Microsoft CRM Dynamics Developer" ,"Business Intelligence Developer " , "Frontend Developer"]; 
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0; 
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    textElement.textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1000); 
    } else {
        setTimeout(type, 100); 
    }
}());

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("header nav ul li a"); 

window.addEventListener("scroll", () => {
    let current = "";
    
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((a) => {
        a.classList.remove("active"); 
        if (a.getAttribute("href").includes(current)) {
            a.classList.add("active"); 
        }
    });
});