jQuery(function (){
//start
var $widthInputValue, $multiplerInputValue, $heightInputValue;
var $modeButtons = {};
  $(document).ready(function(){
    $groupModeButtons = $('#groupModeButtons button');
    console.log();
    for (var i = 0; i < $groupModeButtons.length; i++) {
      $modeButtons[i] = {'id' : $groupModeButtons.eq(i).attr('id'),
                          'classes' : $groupModeButtons.eq(i).attr('class') }
    }
    console.log($modeButtons);
  });
  $('#width-input').keyup(function(){
    $widthInputValue = parseFloat($(this).val());
    $multiplerInputValue = parseFloat(($('#multipler-input').val())/100);
    $heightInputValue = parseFloat($('#height-input').val());
    console.log('width value: '+$widthInputValue+' type: '+ typeof $widthInputValue);
    console.log('multipler value: '+$multiplerInputValue+' type: '+ typeof $multiplerInputValue);
    console.log('height value: '+$heightInputValue+' type: '+ typeof $multiplerInputValue);
    $('#height-input').val($widthInputValue*$multiplerInputValue);
  });

  $('#height-input').keyup(function(){
    $widthInputValue = parseFloat($(this).val());
    $multiplerInputValue = parseFloat(($('#multipler-input').val())/100);
    $heightInputValue = parseFloat($('#height-input').val());
    console.log('width value: '+$widthInputValue+' type: '+ typeof $widthInputValue);
    console.log('multipler value: '+$multiplerInputValue+' type: '+ typeof $multiplerInputValue);
    console.log('height value: '+$heightInputValue+' type: '+ typeof $multiplerInputValue);
    $('#width-input').val($heightInputValue*$multiplerInputValue);
  });

//end
});
