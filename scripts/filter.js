$( function() {
    $( ".slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( ".smallRange" ).val("$" + ui.values[ 0 ]);
        $( ".bigRange" ).val("$" + ui.values[ 1 ]) ;
      }
    });
      
    $('.smallRange').val("$" +  $(".slider-range" ).slider( "values", 0 ));  
    $('.bigRange').val("$" +  $(".slider-range" ).slider( "values", 1 ));  
});