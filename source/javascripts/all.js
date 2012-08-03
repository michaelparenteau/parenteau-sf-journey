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
    clone.attr('src', clone.data('full-size'))

    closeImageViewer = function() {
      imageviewer.fadeOut(250, function() {
        imageviewer.empty()
      })
    }
    
    imageviewer.html(clone);
    $(clone).before('<span class="loading"></span>')
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

  $('.nav').click(function() {
    $('.nav ul').slideToggle(250);
  });
  
  function filterPath(string) {
    return string
      .replace(/^\//,'')
      .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
      .replace(/\/$/,'');
    }
    var locationPath = filterPath(location.pathname);
    var scrollElem = scrollableElement('html', 'body');

    $('a[href*=#]').each(function() {
      var thisPath = filterPath(this.pathname) || locationPath;
      if (  locationPath == thisPath
      && (location.hostname == this.hostname || !this.hostname)
      && this.hash.replace(/#/,'') ) {
        var $target = $(this.hash), target = this.hash;
        if (target) {
          var targetOffset = $target.offset().top;
          $(this).click(function(event) {
            event.preventDefault();
            $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
              location.hash = target;
            });
          });
        }
      }
    });

    // use the first element that is "scrollable"
    function scrollableElement(els) {
      for (var i = 0, argLength = arguments.length; i <argLength; i++) {
        var el = arguments[i],
            $scrollElement = $(el);
        if ($scrollElement.scrollTop()> 0) {
          return el;
        } else {
          $scrollElement.scrollTop(1);
          var isScrollable = $scrollElement.scrollTop()> 0;
          $scrollElement.scrollTop(0);
          if (isScrollable) {
            return el;
          }
        }
      }
      return [];
    }
})
