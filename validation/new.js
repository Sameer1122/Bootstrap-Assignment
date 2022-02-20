function Validation() {
  let iduser = document.getElementById('userid').value;
  let idpass = document.getElementById('userpass').value;
  let idname = document.getElementById('username').value;
  let idzip = document.getElementById('zip').value;
  let idmail = document.getElementById('usermail').value;
  let letters = /^[A-Za-z]+$/;
  let numaric = /^[0-9]+$/;
  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let idmale =  document.getElementById("male").checked
  let idfemale =  document.getElementById("female").checked
   if (iduser == ''){
    document.getElementById('warning1').innerHTML = 'Required';
  }
  else if (iduser.length < 5) {
    document.getElementById('warning1').innerHTML = 'Required Must be length of 5 to 12';
  }
  else if(iduser.length > 12) {
    document.getElementById('warning1').innerHTML = 'Required Must be length of 5 to 12';
  }
  if (idpass =="") {
    document.getElementById('warning2').innerHTML = 'Required'; 
  }
  else if (idpass.length < 5) {
    document.getElementById('warning2').innerHTML = 'Required Must be length of 5 to 12';
  }
  else if (idpass.length > 12) {
    document.getElementById('warning2').innerHTML = 'Required Must be length of 5 to 12';
  }
  if (idname =='') {
    document.getElementById('warning3').innerHTML = ' Required';
  }
  else if (!(idname.match(letters))) {
    document.getElementById('warning3').innerHTML = ' Must be Albhabet';
  }
  if (idzip == '') {
    document.getElementById('warning5').innerHTML = ' Required';
  }
  else if (!(idzip.match(numaric))) {
    document.getElementById('warning5').innerHTML = ' Must be Numaric';
  }
  if (idmail =='') {
    document.getElementById('warning6').innerHTML = ' Required';
  }
  else if (!(idmail.match(mailformat))) {
    document.getElementById('warning6').innerHTML = ' Please Enter a valid Email';
  }
  if (idmale == false && idfemale == false) {
    document.getElementById('warning7').innerHTML = ' Required';
  }
  if ( document.getElementById("male").checked == false &&  document.getElementById("male").checked == false) {
    document.getElementById('warning8').innerHTML = ' Required';
  }
  if (document.getElementById('country').value == "Please select a country"){
    document.getElementById('warning10').innerHTML = ' Required';
  }
  


  return false;
}