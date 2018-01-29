$('.dropdown').hover(function() {
    $('.dropdown-toggle', this).trigger('click');
});
particlesJS.load('particles-js', 'assets/particles/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

window.addEventListener("load", function() {
    let loadScreen = document.getElementById("load_screen");
    $('#load_screen').fadeOut('slow', function() {
        $("#load_screen").remove();
    });

});