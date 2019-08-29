
var zoombtn = document.getElementById("zoom");

var fixedcontainer = document.getElementById("pd-fixed");

zoombtn.addEventListener("click", function(){

  fixedcontainer.innerHTML = '<div class = "fixedOverlay"> <img src="img/productdetail/bigGirl.png" alt=""> </div>';

});

fixedcontainer.addEventListener('click', function () {
  fixedcontainer.innerHTML = '';
});
///

var btntab1 = document.getElementById('tab1');
var btntab2 = document.getElementById('tab2');
var btntab3 = document.getElementById('tab3');

tab1.addEventListener('click', function () {
  if(tab1.classList.contains('active-tab')){
  }else{
    tab1.classList.add('active-tab');
    tab2.classList.remove('active-tab');
    tab3.classList.remove('active-tab');
  }

});
tab2.addEventListener('click', function () {
  if(tab2.classList.contains('active-tab')){
  }else{
    tab2.classList.add('active-tab');
    tab1.classList.remove('active-tab');
    tab3.classList.remove('active-tab');
  }

});
tab3.addEventListener('click', function () {
  if(tab3.classList.contains('active-tab')){
  }else{
    tab3.classList.add('active-tab');
    tab2.classList.remove('active-tab');
    tab1.classList.remove('active-tab');
  }

});
