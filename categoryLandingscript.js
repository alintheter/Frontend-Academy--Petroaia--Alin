// Category Landing load
var categoryLandingCounter = 1;
var counterRemainder = categoryLandingCounter;
var loadbutton = document.getElementById("catlandButton");

loadall();

loadbutton.addEventListener('click', function(){
  counterRemainder = categoryLandingCounter;
  loadall();
  loadbutton.classList.add("hide");
})


//

function loadall(){
  //
  var papaContainer = document.getElementById("catlandcontainer");
  //


  //
  papaContainer.insertAdjacentHTML('beforeend', '<div class="categoryLandingContainerROW" id="ROW-'+
  categoryLandingCounter +'"></div>');
  //
  var categoryLandingContainerRow = document.getElementById('ROW-' + categoryLandingCounter);
  //
  var categoryLandingRequest = new XMLHttpRequest();
  categoryLandingRequest.open('GET', 'categoryLandingData-' + categoryLandingCounter + '.json');
  categoryLandingRequest.onload = function(){

    var categoryLandingData =JSON.parse(categoryLandingRequest.responseText);

    categoryLandingRender(categoryLandingData);
  };
  categoryLandingRequest.send();

  function categoryLandingRender(data){

  for(i=0;i<data.length;i++){
    var HtmlString = '<figure><div></div><img src="'+data[i].img + '" alt=""><figcaption><p>'+data[i].text
    +'</p><p>'+data[i].price+'</p></figcaption></figure>';

    categoryLandingContainerRow.insertAdjacentHTML('beforeend', HtmlString);
  }



  }


this.categoryLandingCounter++;

if(categoryLandingCounter<=(this.counterRemainder+3)){
  loadall();
}


}
//
// var categoryLandingRequest = new XMLHttpRequest();
// categoryLandingRequest.open('GET', 'categoryLandingData-' + categoryLandingCounter + '.json');
// categoryLandingRequest.onload = function(){
//
//   var categoryLandingData =JSON.parse(categoryLandingRequest.responseText);
//   console.log("mere");
//   categoryLandingRender(categoryLandingData);
// };
// categoryLandingRequest.send();
//
// function categoryLandingRender(data){
//
// for(i=0;i<data.length;i++){
//   var HtmlString = '<figure><img src="'+data[i].img + '" alt=""><figcaption><p>'+data[i].text
//   +'</p><p>'+data[i].price+'</p></figcaption></figure>';
//   console.log("pere"+i);
//   categoryLandingContainerRow.insertAdjacentHTML('beforeend', HtmlString);
// }
// categoryLandingCounter++;
// }
