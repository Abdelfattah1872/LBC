// animation on choosing sections
$('a[href^="#"]').on('click', function(event) {

  var target = $( $(this).attr('href') );

  if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: target.offset().top
      }, 1000);
  }
});

$("#myBtn").click(function(){ 
  $("html, body").animate({ scrollTop: 0 }, 1000); 
  return false; 
}); 

// scroll top button
var mybutton = document.getElementById("myBtn");
window.onscroll = function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}