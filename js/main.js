
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

function timer(){

  d = new Date();



  hr =d.getHours();
  min = d.getMinutes();
  sec =d.getSeconds();

  timeloop(hr,min,sec);
  //show(hr,min,sec);


}


function timeloop(hr,min,sec){

    sec = (sec+ 1);
    if(sec>59){
      sec=0;
      min++;
    }
    if(min>59){
      hr++;
      min=0;
    }
    if(hr>23){
      hr=0;
    }
    show(hr,min,sec);
    setTimeout(timeloop,1000,hr,min,sec);
}

function show(hr,min,sec){
    timer_elem = document.getElementById('timer_elem');
    str = "";

    hr = (hr<10)?"0"+hr:hr;
    min = (min<10)?"0"+min:min;
    sec = (sec<10)?"0"+sec:sec;

    str = hr + ":" + min + ":" + sec;
    timer_elem.innerHTML = str;
}
