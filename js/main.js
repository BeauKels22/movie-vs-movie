 $( document ).ready(function() {
    console.log( "ready!" );
  
   $('#generate').on("click", function(){
//      alert("Im runnind");
  $('.movie-poster-one-bg').addClass('grow-left');
  $('.movie-poster-two-bg').addClass('grow-right');
  
});

// $('#stop').on("click", function(){
//   $('#generate').removeClass('grow-left');
//   $('#generate').removeClass('grow-right');
  
// });

// $('movie-poster-one-bg').one('webkitanimationEnd oanimationend msAnimationEnd animationend', function(e){
//   console.log("grow-left-finshed");
// });

// $('movie-poster-two-bg').one('webkitanimationEnd oanimationend msAnimationEnd animationend', function(e){
//   console.log("grow-right-finshed");
// });
}); 
