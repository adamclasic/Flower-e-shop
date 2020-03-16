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
        } else {
            $("#fav-num").removeClass('d-none');
        }
        $("#fav-num").text(arr.length);
        $('#' + pId).toggleClass("fas far");
    });
}

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

});

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



