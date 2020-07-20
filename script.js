function write_comment() {
  var comment = $("#comment_text").val();
  $("#text_display").text(comment);
}

function show_blog_post(){
    if($(".blog_post").is(":hidden")){
      $(".blog_post").slideDown("slow");
    }
    else{
      $(".blog_post").slideUp("slow");
    }
}

function enter (){
  $(this).fadeTo('fast', 0.33);
}
function leave (){
  $(this).fadeTo('fast',1);
}

function setup(){
  $('.linkBoxes').hover(enter,leave);
  $("#button_ok").click(write_comment);
  $(".blog_date").click(show_blog_post);
}

$(document).ready(setup);