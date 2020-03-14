$(document).ready(function () {

    $(window).scroll(function(){
        $('#header').toggleClass('bg-green', $(this).scrollTop() > 500);
    });


});