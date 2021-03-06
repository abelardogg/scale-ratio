jQuery(function (){
//start
var $widthInputValue, $multiplerInputValue, $heightInputValue;
var $currentMode;
var $measureButton=$('#measure-mode'), $percentageButton=$('#percentage-mode');
  $(document).ready(function(){
    $currentMode = 'pixel'
  });

  $('#measure-mode').on('click', function(){
    activePixels();
    activateInput('#multipler-input');
  });

  $('#percentage-mode').on('click', function(){
    activePercentage();
    deactivateInput('#multipler-input');
  });

  function activeButton($buttonId, $activeButtonColor){
    $buttonId.addClass($activeButtonColor);
    $buttonId.removeClass('btn-default');
  }

  function deactivateSpecificButton($buttonId, $activeButtonColor){
    $buttonId.addClass('btn-default');
    $buttonId.removeClass($activeButtonColor);
  }

  function activateInput(inputId){
    $(inputId).removeAttr('disabled');
  }

  function deactivateInput(inputId){
    $(inputId).attr('disabled','');
  }

  function activePixels(){
    if($currentMode != 'pixel'){
      activeButton($measureButton, 'btn-info');
      deactivateSpecificButton($percentageButton, 'btn-info');
      $currentMode = 'pixel';
    } else{
      alert('pixels are already active');
    }
  }

  function activePercentage(){
    if($currentMode != 'percentage'){
      activeButton($percentageButton, 'btn-info');
      deactivateSpecificButton($measureButton, 'btn-info');
      $currentMode = 'percentage';
    } else{
      alert('percentage are already active');
    }
  }
//end
});
