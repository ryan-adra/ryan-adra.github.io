function enter (){
  $(this).fadeTo('fast', 0.33);
}
function leave (){
  $(this).fadeTo('fast',1);
}

function setUpHandlers(){
  $('.linkBoxes').hover(enter,leave);
}

$(document).ready(setUpHandlers);