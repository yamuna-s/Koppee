document.addEventListener("DOMContentLoaded", () => {
    // Get a reference to the HTML element
    const yourElement = document.getElementById("backgroundImage");

    // URLs of the two background images
    const imageUrl1 = 'carousel-1.jpg';
    const imageUrl2 = 'carousel-2.jpg';

    function setBg(url) 
    {
        yourElement.style.backgroundImage = ` linear-gradient(rgba(51,33,29,0.9), rgba(51,33,29,0.9)),url(${url})`;
    }
    let isImage1Visible = true; 
    function caller() {
        
    
    if(isImage1Visible)
    {
        setBg(imageUrl1);
    }
    else
    {
        setBg(imageUrl2);
    }
    isImage1Visible = !isImage1Visible;
   
}
setInterval(caller,1000)


   
});

//for menu
var menuToggle =document.getElementById("menu-btn");
var menu=document.getElementById("old-nav");

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

 // Back to top button
 var back=document.getElementById("back-to-top");
 $(window).scroll(function () {
    // if ($(this).scrollTop() > 200) {
    //    back.classList.toggle('show');
    // } 
    // else {
    //     back.classList.toggle('');
    // }
});
back.addEventListener('click', () => {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});






