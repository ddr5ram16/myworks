
function sendRequest() {
  const api_url = "https://script.google.com/a/macros/multi-school.com/s/AKfycbyEo2xvr807EOkdIJwxb5t864pr_8zXF1UDH_-dX-fUW6q_RixSUCip_3bPAOcTbdRzEA/exec";
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