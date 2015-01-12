$( document ).ready(function() {
var json;
var xhr = new XMLHttpRequest();
var stra;
var lal;

document.getElementById("getbestquestionbutton").addEventListener("click",function(){

var xhr = new XMLHttpRequest();
var stra;
     chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
      stra=(tabs[0].url);
       lal=tabs[0].url;
       xhr.open("GET", "https://serene-journey-7129.herokuapp.com/test?param="+stra+"&&mode=1", true);

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // innerText does not let the attacker inject HTML elements.
    document.getElementById("output").innerHTML = xhr.responseText;
  }
}
xhr.send();
   }
);
});
document.getElementById("getopenquestionbutton").addEventListener("click",function(){

var xhr = new XMLHttpRequest();
var stra;
     chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
      
      stra=(tabs[0].url);
      
       lal=tabs[0].url;
       xhr.open("GET", "https://serene-journey-7129.herokuapp.com/test?param="+stra+"&&mode=2", true);

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // innerText does not let the attacker inject HTML elements.
    document.getElementById("output").innerHTML = xhr.responseText;
  }
}
xhr.send();
   }
);
});
document.getElementById("getrelatedtopicsbutton").addEventListener("click",function(){
  var xhr = new XMLHttpRequest();
var stra;
     chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
      stra=(tabs[0].url);
       lal=tabs[0].url;
       xhr.open("GET", "https://serene-journey-7129.herokuapp.com/test?param="+stra+"&&mode=4", true);

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // innerText does not let the attacker inject HTML elements.
    document.getElementById("output").innerHTML = xhr.responseText;
  }
}
xhr.send();
   }
);
 
});
document.getElementById("gettopstoriesbutton").addEventListener("click",function(){
  var xhr = new XMLHttpRequest();
var stra;
     chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
      stra=(tabs[0].url);
       lal=tabs[0].url;
       xhr.open("GET", "https://serene-journey-7129.herokuapp.com/test?param="+stra+"&&mode=3", true);

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // innerText does not let the attacker inject HTML elements.
    document.getElementById("output").innerHTML = xhr.responseText;
  }
}
xhr.send();
   }
);
   

});
document.getElementById("dumpdataforuser").addEventListener("click",function(){
  var xhr = new XMLHttpRequest();
var stra;
     chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
      stra=(tabs[0].url);
       lal=tabs[0].url;
       xhr.open("GET", "https://serene-journey-7129.herokuapp.com/test?param="+stra+"&&mode=5", true);

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // innerText does not let the attacker inject HTML elements.
    document.getElementById("output").innerHTML = xhr.responseText;
  }
}
xhr.send();
   }
);

});
chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
      stra=(tabs[0].url);
       lal=tabs[0].url;
       xhr.open("GET", "https://serene-journey-7129.herokuapp.com/test?param="+stra+"&&mode=0", true);

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // innerText does not let the attacker inject HTML elements.
    document.getElementById("myDiv").innerText = xhr.responseText;
  }
}
xhr.send();
   }
);

});












