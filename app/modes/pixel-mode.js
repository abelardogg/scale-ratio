jQuery(function (){
//start

  //the focus input have the purpose of keep the last input clicked and change the
  //reciproque while write on the percentage input
  var $wInput = $('#width-input'), $hInput = $('#height-input');
  var $focusInput =  $wInput;
  var $targetInput = $hInput;
console.log($focusInput);
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
  }).on('click', function(){
    setFocus($(this));
  });

  $('#height-input').keyup(function(){
    $widthInputValue = parseFloat($(this).val());
    $multiplerInputValue = parseFloat(($('#multipler-input').val())/100);
    $heightInputValue = parseFloat($('#height-input').val());
    $('#width-input').val($heightInputValue*$multiplerInputValue);
  }).on('click', function(){
    setFocus($(this));
  });

  function setFocus(x){
    console.log(x);
    if(x.attr('id')!=$focusInput.attr('id')){
      redLog('This isnt the actual focus, lets change');
      var $aux;
      $aux = $targetInput;
      $targetInput = $focusInput;
      $focusInput = $aux;
    } else {
      greenLog('yes this is the actual focus,  nothing to do here');
    }
  }
  $('#multipler-input').keyup(function(){
    $targetInput.val($(this).val()*($focusInput.val()/100))
  });


//end
});
