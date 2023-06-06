// js for initializing Materialize css
$(document).ready(function () {
  $(".modal").modal();
  $(".parallax").parallax();
  $(".sidenav").sidenav();
});

// Instance for modal toggle
function toggleModal() {
  let instance = M.Modal.getInstance($("#modal3"));
  instance.open();
}
