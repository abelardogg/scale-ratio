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

  function activePixels(){
    if($currentMode != 'pixel'){
      console.log('turning ON pixel: '+$currentMode);
      $measureButton.addClass('btn-info');
      $percentageButton.removeClass('btn-info');
      $currentMode = 'pixel';
      console.log('currentMode: '+$currentMode);

    } else{
      alert('pixels are already active');

    }
  }

  function activePercentage(){
    if($currentMode != 'percentage'){
      console.log('turning ON percentage: '+$currentMode);
      $percentageButton.addClass('btn-info');
      $measureButton.removeClass('btn-info');
      $currentMode = 'percentage';
      console.log('currentMode: '+$currentMode);

    } else{
      alert('percentage are already active');
    }
  }
//end
});
