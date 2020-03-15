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

    





});