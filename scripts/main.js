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
}

var swiper = new Swiper('.swiper-container', {
    // slidesPerView: 2,
    spaceBetween: 10,
    centeredSlides: true,
    width: 300,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });



$(document).ready(function () {

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

    // var slider = document.getElementById('slider');

    // $(window).resize(function() {
        
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
            // slidesPerView: 2,
            spaceBetween: 15,
            centeredSlides: true,
            width: 260,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });
        
    // });
    })

    // var mq = window.matchMedia("(max-width: 1050px)");
    // WidthChange(mq);
    // // every time width changes, check the media query
    // mq.addListener(function WidthChange(mq){
    //    if(mq.matches){
    //        //we are in a mobile size browser
    //        $('#menu3').addClass('bg-green');
    //        $('#menu3').removeClass('grid-wraper-3');
    //    } else{
    //        // desktop browser
    //        $('#menu3').addClass('grid-wraper-3');
    //        $('#menu3').removeClass('bg-green');
    //    }
    // });

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
            // slidesPerView: 2,
            spaceBetween: 15,
            centeredSlides: true,
            width: 260,
            // pagination: {
            //   el: '.swiper-pagination',
            //   clickable: true,
            // },
          });
          
      });

      

// });

$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#smallRange" ).val("$" + ui.values[ 0 ]);
        $( "#bigRange" ).val("$" + ui.values[ 1 ]) ;
      }
    });
      
    $('#smallRange').val("$" +  $("#slider-range" ).slider( "values", 0 ));  
    $('#bigRange').val("$" +  $("#slider-range" ).slider( "values", 1 ));  
  } );



