
//------------------------------------------------- Navigation Bar ----------------------------------------------

function opentab(tabname){
    var tablinks=document.getElementsByClassName("tab-links");
    var tabcontents=document.getElementsByClassName("tab-contents");
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");    
}

function openmenu(){
    var sidemenu=document.getElementById("sidemenu");
    sidemenu.style.right="0";
}

function closemenu(){
    var sidemenu=document.getElementById("sidemenu");
    sidemenu.style.right="-200px";
}




//-------------------------------------------------- Changing Text -----------------------------------------------

const textArray = ["Web Developer", "Software Engineer", "UI/UX Designer"];
let index = 0;
let isTyping = true; // Flag to indicate typing or erasing

function changeText() {
    const currentText = document.getElementById('changingText').textContent;
    
    if (isTyping) {
        // Typing effect
        let newText = textArray[index].slice(0, currentText.length + 1);
        document.getElementById('changingText').textContent = newText;

        // If fully typed, switch to erasing after a delay
        if (newText === textArray[index]) {
            isTyping = false;
            setTimeout(changeText, 1500); // Delay before erasing (1.5 seconds)
        } else {
            setTimeout(changeText, 70); // Typing speed (70 milliseconds)
        }
    } else {
        // Erasing effect
        let newText = currentText.slice(0, currentText.length - 1);
        document.getElementById('changingText').textContent = newText;

        // If fully erased, switch to next text
        if (newText === '') {
            isTyping = true;
            index = (index + 1) % textArray.length; // Move to the next text
        }
        setTimeout(changeText, 70); // Erasing speed (70 milliseconds)
    }
}

// Initial call to start typing effect
changeText();


