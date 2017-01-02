jQuery(function (){
//start

$(document).ready(function(){
  $widthInputValue = parseFloat($('#width-input').val());
  $multiplerInputValue = parseFloat(($('#multipler-input').val())/100);
  $heightInputValue = parseFloat($('#height-input').val());
  $('#height-input').val($widthInputValue*$multiplerInputValue);
});

$('#width-input').keyup(function(){
  $widthInputValue = parseFloat($(this).val());
  $multiplerInputValue = parseFloat(($('#multipler-input').val())/100);
  $heightInputValue = parseFloat($('#height-input').val());
  $('#height-input').val($widthInputValue*$multiplerInputValue);
});

$('#height-input').keyup(function(){
  $widthInputValue = parseFloat($(this).val());
  $multiplerInputValue = parseFloat(($('#multipler-input').val())/100);
  $heightInputValue = parseFloat($('#height-input').val());
  $('#width-input').val($heightInputValue*$multiplerInputValue);
});

//end
});