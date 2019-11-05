function DivStorage() {
  this.inputData = [];
  this.currentId = 0;
};

DivStorage.prototype.addToArray = function(data) {
  data.id = this.addId();
  this.inputData.push(data);

}

DivStorage.prototype.addId = function() {
  this.currentId += 1;
  return this.currentId;
}



//storage array - main object
//array storage function
//





function UserInput(color, height, width, xAxis, yAxis) {
  this.color = color;
  this.height = height;
  this.width = width;
  this.xAxis = xAxis;
  this.yAxis = yAxis;
}



var divStorage = new DivStorage();

function printDiv(){
  var htmlForDiv = "";
  

}

$(document).ready(function() {


  $("button#submit-button").click(function(event) {
    event.preventDefault();
    var color = $("input#color").val();
    var height = $("input#height").val();
    var width = $("input#width").val();
    var xAxis = $("input#x-axis").val();
    var yAxis = $("input#y-axis").val();
    //store user input
    //send user input to array storage function
    //take user input out of array
    //translate user input to html/class
    //add html/css div to div-display-div
    var newUserInput = new UserInput(color, height, width, xAxis, yAxis);

    divStorage.addToArray(newUserInput);
    printDiv(divStorage);
    // createDiv(this.id);

  })
})
