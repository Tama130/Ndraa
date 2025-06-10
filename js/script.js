// script.js
function zoomIn() {
  var modal = document.getElementById('modal');
  var modalImg = document.getElementById('modal-img');
  var img = document.getElementById('myImage');

  modal.style.display = 'flex';
  modalImg.src = img.src;
}

function closeModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}
