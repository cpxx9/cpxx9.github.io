function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
 }
 
 function display_ct() {
   var CDate = new Date()
   var NewDate=CDate.toDateString(); 
   NewDate = NewDate + " - " + CDate.toLocaleTimeString();
   document.getElementById('ct').innerHTML = NewDate;
   display_c();
 }