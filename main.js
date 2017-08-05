
function validate(){
email = document.getElementById('inputEmail').value;
pwd = document.getElementById('inputPassword').value;

if(pwd.length < 5){
  document.getElementById('error-msg').innerHTML = " Password is too short";
  document.getElementById('error-msg').style.display = 'block';
  return false;
}
else {
  document.getElementById('error-msg').style.display = 'none';
}
}
