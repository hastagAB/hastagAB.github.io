$(function() {
    var header = $(".navbar");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });
  
});



// Get the form.
var form = $('#contactForm');

// Get the messages div.
var formMessages = $('#msgSubmit');

// Set up an event listener for the contact form.
$(form).submit(function(e) {
    // Stop the browser from submitting the form.
    e.preventDefault();

    // Submit the form using AJAX.
    $.ajax({
        type: 'POST',
        url: "form-process.php",
        data:'name='+$("#name").val()+'&email='+ $("#email").val()+'&message='+ $("#message").val(),
        beforeSend:function(){
            $("#contactForm .form-control").prop('disabled', 'true');
            $("#contactForm button.btn").html('Sending...');
        },
        success:function(data){
            formMessages.css('display', 'block');
            formMessages.removeClass('alert alert-danger');
            formMessages.addClass('alert alert-success');
            $("#contactForm .form-control").removeAttr("disabled");
            $("#contactForm button.btn").html('Submit');
            formMessages.text("Form Submitted Successfully");
            $("#name, #email, #message").val("");
            formMessages.fadeOut(5000);
        },
        error:function(xhr,status,error){
            formMessages.css('display', 'block');
            $("#contactForm .form-control").removeAttr("disabled");
            $("#contactForm button.btn").html('Submit');
            formMessages.removeClass('alert alert-success');
            formMessages.addClass('alert alert-danger');
            formMessages.text(error);
            formMessages.fadeOut(5000);
        }
    });
    

});


//Smooth Scroll
$("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
        });
    } // End if
});


// Typewriter JS
$(document).ready(function(){
    var app = document.getElementById('typeName');

    var typewriter = new Typewriter(app, {
    loop: false,
    delay: 80,
    });
    typewriter.typeString('<span>I am</span> Ayush Bhardwaj').start();

    // Text Animation
    (function() {

        var quotes = $("#typeSub span");
        var quoteIndex = -1;

        function showNextQuote() {
            ++quoteIndex;
            quotes.eq(quoteIndex % quotes.length)
                .fadeIn(600)
                .delay(700)
                .fadeOut(600, showNextQuote);
        }

        setTimeout(function(){ showNextQuote(); }, 4000);

    })();
});



//Reveal animation
new WOW().init();


// Poems Slider
$(document).ready(function(){
    $('.poems-container').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});