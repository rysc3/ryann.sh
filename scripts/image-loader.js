// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var img = document.getElementById("modalImg");

// Add an onclick event to each image
document.querySelectorAll('.photos').forEach(item => {
  item.addEventListener('click', function() {
    modal.style.display = "block";
    var src = this.querySelector('img').src;
    img.src = src;
  });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};
