var convertLitersToGallons = function(liter){
  var result = liter * 0.264172;
  return result;
};
var convertGallonsToLiters = function(gallon){
  var result = gallon / 0.264172;
  return result;
};

var convertPoundsToKilograms = function(pounds) {
  var result = pounds * .453592;
  return result;
};

var convertGramsToOunces = function(grams) {
  var result = grams * 0.035274;
  return result;
};

//above is business logic, below is user interface


$(document).ready(function(){
  $(".gallonsToLiters").submit(function(event){
    event.preventDefault();
    var gallonsInput = parseInt($("input#gallons").val());
    var result = convertGallonsToLiters(gallonsInput).toFixed(2);

    $("#output1").text(result);
    $(".gallons").text(gallonsInput);
    $("#gallonsLitersResult").show();
  });

  $(".poundsToKilograms").submit(function(event){
    event.preventDefault();
    var poundsInput = parseInt($("input#pounds").val());
    var result = convertPoundsToKilograms(poundsInput).toFixed(2);

    $("#output2").text(result);
    $(".pounds").text(poundsInput);
    $("#poundsToKilogramsResult").show();
  });

  $(".gramsToOunces").submit(function(event){
    event.preventDefault();
    var gramsInput = parseInt($("input#grams").val());
    var result = convertGramsToOunces(gramsInput).toFixed(2);

    $("#output3").text(result);
    $(".grams").text(gramsInput);
    $("#gramsToOuncesResult").show();
  });
});
