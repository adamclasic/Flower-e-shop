function addOrRemove(array, value) {
    var index = array.indexOf(value);

    if (index === -1) {
        array.push(value);
    } else {
        array.splice(index, 1);
    }
}

function addToFav(pId, arr) {

    $('#' + pId).click(function() {
        addOrRemove(arr, pId);
        if (arr.length == 0) {
            $("#fav-num").addClass('d-none');
            $("#fav-notification").removeClass('bg-red');
            $("#fav-notification").addClass('bg-lgreen');

            

        } else {
            $("#fav-num").removeClass('d-none');
            $("#fav-notification").removeClass('bg-lgreen');
            $("#fav-notification").addClass('bg-red');
            console.log($("#fav-notification"));

        }
        $("#fav-num").text(arr.length);
        $('#' + pId).toggleClass("fas far");
    });
};


$(document).ready(function () {

    if ($(window).width() < 700) {
        $('#grid-3').addClass('swiper-wrapper');
        $('#grid-3').removeClass('grid-wraper-3');
        $('#grid-3-cont').addClass('swiper-container');
        $('.card-2').addClass('swiper-slide');
    } else {
        $('#grid-3').removeClass('swiper-wrapper');
        $('#grid-3').addClass('grid-wraper-3');
        $('#grid-3-cont').removeClass('swiper-container');
        $('.card-2').removeClass('swiper-slide');
    }
    
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 15,
        centeredSlides: true,
        width: 260,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });

    var arr = [];

    $(window).scroll(function(){
        $('#header').toggleClass('bg-green', $(this).scrollTop() > 500);
    });

    addToFav('product1', arr);
    addToFav('product2', arr);
    addToFav('product3', arr);
    addToFav('product4', arr);
    addToFav('product5', arr);
    addToFav('product6', arr);

    $(window).resize(function() {
        
        if ($(window).width() < 650) {
            $('#grid-3').addClass('swiper-wrapper');
            $('#grid-3').removeClass('grid-wraper-3');
            $('#grid-3-cont').addClass('swiper-container');
            $('.card-2').addClass('swiper-slide');
        } else {
            $('#grid-3').removeClass('swiper-wrapper');
            $('#grid-3').addClass('grid-wraper-3');
            $('#grid-3-cont').removeClass('swiper-container');
            $('.card-2').removeClass('swiper-slide');
        }

        var swiper = new Swiper('.swiper-container', {
            // slidesPerView: 2,
            spaceBetween: 15,
            centeredSlides: true,
            width: 260,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
        });
        
    });


    



    $(window).resize(function() {
        if(false == $('#grid-3').hasClass('swiper-wrapper') && $(window).width() <= 700) {
          $('#grid-3').addClass('swiper-wrapper');
          $('#grid-3').removeClass('grid-wraper-3');
          $('#grid-3-cont').addClass('swiper-container');
          $('.card-2').addClass('swiper-slide');
        }
    
        if(true == $('#grid-3').hasClass('swiper-wrapper') && $(window).width() > 700) {
          $('#grid-3').removeClass('swiper-wrapper');
          $('#grid-3').addClass('grid-wraper-3');
          $('#grid-3-cont').removeClass('swiper-container');
          $('.card-2').removeClass('swiper-slide');
        }

        var swiper = new Swiper('.swiper-container', {
            spaceBetween: 15,
            centeredSlides: true,
            width: 260,
        });
    });

});

          
      
