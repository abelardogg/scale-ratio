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
    var x = $('#width-input').val();
    var y = $('#height-input').val();
    // $shapeSquare.css('width', x);
    // $shapeSquare.css('height', y);
    $("#square")
      .animate({
            height: y,
            width: x
      });

  }

//end
});
