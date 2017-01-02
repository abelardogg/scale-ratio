jQuery(function (){
//start
var $widthInputValue, $multiplerInputValue, $heightInputValue;
var $currentMode;
var $measureButton=$('#measure-mode'), $percentageButton=$('#percentage-mode');
  $(document).ready(function(){
    $currentMode = 'pixel'
  });

  $('#width-input').keyup(function(){
    $widthInputValue = parseFloat($(this).val());
    $multiplerInputValue = parseFloat(($('#multipler-input').val())/100);
    $heightInputValue = parseFloat($('#height-input').val());
    // console.log('width value: '+$widthInputValue+' type: '+ typeof $widthInputValue);
    // console.log('multipler value: '+$multiplerInputValue+' type: '+ typeof $multiplerInputValue);
    // console.log('height value: '+$heightInputValue+' type: '+ typeof $multiplerInputValue);
    $('#height-input').val($widthInputValue*$multiplerInputValue);
  });

  $('#height-input').keyup(function(){
    $widthInputValue = parseFloat($(this).val());
    $multiplerInputValue = parseFloat(($('#multipler-input').val())/100);
    $heightInputValue = parseFloat($('#height-input').val());
    // console.log('width value: '+$widthInputValue+' type: '+ typeof $widthInputValue);
    // console.log('multipler value: '+$multiplerInputValue+' type: '+ typeof $multiplerInputValue);
    // console.log('height value: '+$heightInputValue+' type: '+ typeof $multiplerInputValue);
    $('#width-input').val($heightInputValue*$multiplerInputValue);
  });

  $('#measure-mode').on('click', function(){
    activePixels();
  });

  $('#percentage-mode').on('click', function(){
    activePercentage();
  });

  function activeButton($buttonId, $activeButtonColor){
    console.log('active button')
    $buttonId.addClass($activeButtonColor);
    $buttonId.removeClass('btn-default');
  }

  function deactivateSpecificButton($buttonId, $activeButtonColor){
    console.log('deactivate button')
    $buttonId.addClass('btn-default');
    $buttonId.removeClass($activeButtonColor);
  }

  function activePixels(){
    if($currentMode != 'pixel'){
      console.log('turning ON pixel: '+$currentMode);
      activeButton($measureButton, 'btn-info');
      deactivateSpecificButton($percentageButton, 'btn-info');
      $currentMode = 'pixel';
      console.log('currentMode: '+$currentMode);
    } else{
      alert('pixels are already active');
    }
  }

  function activePercentage(){
    if($currentMode != 'percentage'){
      console.log('turning ON percentage: '+$currentMode);
      activeButton($percentageButton, 'btn-info');
      deactivateSpecificButton($measureButton, 'btn-info');
      $currentMode = 'percentage';
      console.log('currentMode: '+$currentMode);
    } else{
      alert('percentage are already active');
    }
  }
//end
});
