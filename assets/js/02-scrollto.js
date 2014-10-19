// $('#next').on('click', function(event) {
//     var target = $('#slide-1');
//     if( target.length ) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: target.offset().top
//         }, 1000);
//     }
// });

$( "#workTitle" ).click(function() {
  $( ".workContainer" ).toggleClass( "none" );
  $( "#workTitle" ).toggleClass( "isOpen" )
});
