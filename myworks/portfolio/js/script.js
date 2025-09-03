$('a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href');
  var pos = $(elmHash).offset().top - 80;
  $('body,html').animate({scrollTop: pos}, 500);
  return false;
});
$('#nav_burger nav ul li a[href]').on('click', function(event) {
  $('.burger_box').trigger('click');
});
function sendRequest() {
  const api_url = "https://script.google.com/macros/s/AKfycbxbo_jysgoOZGx2KC_iQPZBL4nksFOAMuIrdi15shJ8I2Po54LqIwcyWQqQoGBsNdpRig/exec";
  let req = {};
  req.name = document.getElementById('name').value,
  req.email = document.getElementById('email').value,
  req.body = document.getElementById('body').value,
  fetch(api_url, {
      method: "post",
      body: JSON.stringify(req)
  })
  .then((response) => {
      response.json().then((json) => {
          alert(json.message);
      });
  })
  .catch((error) => {
      alert(error.message);
  });
}