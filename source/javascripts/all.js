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

  $('img').click(function() {
    var imageviewer = $('.imageviewer')
    var clone = $(this).clone()
    var caption = $(clone).attr('alt')

    closeImageViewer = function() {
      imageviewer.fadeOut(250, function() {
        imageviewer.empty()
      })
    }

    imageviewer.html(clone);
    $(clone).before('<span>'+caption+'</span>')

    imageviewer.fadeIn(250, function() {
      imageviewer.click(function() {
        closeImageViewer()
      })
      $(document).keyup(function(e){
        if(e.keyCode === 27) {
          closeImageViewer()
        }
      })
    })
  })

})
