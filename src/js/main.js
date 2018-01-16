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

let item = document.getElementsByClassName("services-view")[0],
    item1 = document.getElementsByClassName("services-view")[1],
    item2 = document.getElementsByClassName("services-view")[2],
    item3 = document.getElementsByClassName("services-view")[3],
    item4 = document.getElementsByClassName("services-view")[4];

item.addEventListener("mouseover", function() {
    document.getElementsByClassName("view-more-btn")[0].style.visibility = "visible";

});
item.addEventListener("mouseout", function() {
    document.getElementsByClassName("view-more-btn")[0].style.visibility = "hidden";
});

item1.addEventListener("mouseover", function() {
    document.getElementsByClassName("view-more-btn")[1].style.visibility = "visible";

});
item1.addEventListener("mouseout", function() {
    document.getElementsByClassName("view-more-btn")[1].style.visibility = "hidden";
});

item2.addEventListener("mouseover", function() {
    document.getElementsByClassName("view-more-btn")[2].style.visibility = "visible";

});
item2.addEventListener("mouseout", function() {
    document.getElementsByClassName("view-more-btn")[2].style.visibility = "hidden";
});

item3.addEventListener("mouseover", function() {
    document.getElementsByClassName("view-more-btn")[3].style.visibility = "visible";

});
item3.addEventListener("mouseout", function() {
    document.getElementsByClassName("view-more-btn")[3].style.visibility = "hidden";
});

item4.addEventListener("mouseover", function() {
    document.getElementsByClassName("view-more-btn")[4].style.visibility = "visible";

});
item4.addEventListener("mouseout", function() {
    document.getElementsByClassName("view-more-btn")[4].style.visibility = "hidden";
});