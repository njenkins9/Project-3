// // Get the modal
// var modal = document.getElementById('myModal');
//
// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('myImg');
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
//
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
//
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
// Try it Yourself »
//
// function onLoad=function(){
//   var width = 400;
//   var height = 400;
// }

$('.map-buttons area').click( function() {
  $( $(this).attr('href') ).fadeIn(750);
});

$('.btn-close').click(
  function(){
    $(this).closest('.content-box').fadeOut(500);
  }
)
