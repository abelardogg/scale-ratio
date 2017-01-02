jQuery(function (){
//start
$shapeSquare = $('#square');
  $(document).ready( function (){
    setMeasures()
  });

  $('#width-input').keyup(function(){
    setMeasures()
  });
  $('#height-input').keyup(function(){
    setMeasures()
  });
  $('#multipler-input').keyup(function(){
    setMeasures()  
  });

  function setMeasures(){
    $shapeSquare.attr('width', $('#width-input').val());
    $shapeSquare.attr('height', $('#height-input').val());
  }

//end
});
