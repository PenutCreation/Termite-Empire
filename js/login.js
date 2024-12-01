const login = document.getElementById("login");
login.onclick = (e) => {
  e.preventDefault();

  const usernameAddress = document.getElementById("username").value;
  const passwordAddress = document.getElementById("password").value;

  const getUser = localStorage.getItem("Username");
  const getPass = localStorage.getItem("Password");

  if (usernameAddress == "" && passwordAddress == "") {
    swal("No Value Found");
  } else {
    if (usernameAddress == getUser && passwordAddress == getPass) {
      swal(`Succesfully Log in!`);
window.location.href = "game.html";

    } else {
      swal("Something is Wrong");
    }
  }
}
