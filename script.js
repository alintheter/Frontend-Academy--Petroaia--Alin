
// buynow-btn butonul
// cart cerculetul
var d = new Date();
document.getElementById("anulcurent").innerHTML = d.getFullYear();

var addtocart = document.getElementById("buynow-btn");
var cart = document.getElementById("cart");
var number = 0;
addtocart.addEventListener("click", function(){
  number++;
  cart.innerHTML = '&nbsp;'+ number;
  if(number>98)
  number=0;
  // cart.insertAdjacentHTML('beforeend', '&nbsp;'+ number );
});




//HOME-PAGE HEADER
$(function (){



    $(".dropdown-submenu").on("click", function(event){
      event.preventDefault();
      event.stopPropagation();

      $(this).siblings().toggleClass("show");


    })

})

//Homepage popular items load
var loadmoreBtn = document.getElementById("loadmore-btn");

var popularitemsContainer = document.getElementById("popularitemsContainer");
//button event
loadmoreBtn.addEventListener("click", function(){

  //ajax req
  var homepageRequest = new XMLHttpRequest();
  homepageRequest.open('GET', 'homepageData.json');
  homepageRequest.onload = function(){

    var popularItemsData = JSON.parse(homepageRequest.responseText);
    homepageRenderHtml(popularItemsData);
  };
  homepageRequest.send();

})




function homepageRenderHtml(data){

  for(i = 0; i< data.length ; i++) {
  var HtmlString = '<div class="popular-item1 popular-item"><figure class="figure"><img src=" ' + data[i].img +

  '" class="figure-img img-fluid rounded" alt="..."><figcaption class="figure-caption figure-caption-pi">' +

  '<p>' + data[i].text + '</p>' + '<p>' + data[i].price + '</p></figcaption></figure><div class="popular-item-overlay">' +

  '<div class="popular-item-overlay-buttons"><div class="popular-hover-button"><img src="img/homepage/Plus_(24x24).png" alt="add to cart">' +

  '</div><div class="popular-hover-button"><img src="img/homepage/Heart_(24x24).png" alt="add to cart">' +
  '</div></div></div></div>' ;


  popularitemsContainer.insertAdjacentHTML('beforeend', HtmlString);
}
  loadmoreBtn.classList.add("hide");
}
