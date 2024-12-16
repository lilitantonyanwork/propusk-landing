$(function (){
    $( function() {
        $( "#slider" ).slider({
            range: 'max',
            min: 1,
            max: 300,
            value: 2,
            slide: function( event, ui ) {
                $( ".sale-row input" ).val( ui.value +' автомобилей');
            }
        });
        $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
    } );
    $('.btn-mobile-menu ').on('click',function (){
        $('.menu').toggle();
    })
})