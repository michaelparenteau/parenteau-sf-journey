//= require_tree .

$(document).ready(function() {
  $('.avatar').hover(function() {
    var name = $(this).attr('name')
    $(this).append('<span class="avatar-tip">'+name+'</span>')
    $('.avatar-tip').animate({opacity: 1, top: "-30px"}, 200)
  }, function() {
    $('.avatar-tip').animate({opacity: 0, top: "-40px"}, 200, function() {
      $(this).remove('span')
    })
  });
});
