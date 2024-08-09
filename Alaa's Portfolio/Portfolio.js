
// var typed = new typed(".text", {
//     String: ["FrontEnd Developer", "UI/UX Designer", "Graphic Designer"],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:1000,
//     loop:true
// }

// ) 


// <!----------------------------- about ----------------------------- -->

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname ).classList.add("active-tab")
}


