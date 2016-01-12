jQuery(function($) {
  var transitionEnd = 'webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd transitionend';

  function menu() {
    var $overlay = $('.overlay-hugeinc'),
        $button = $('#trigger-overlay');

    function toggleMenu() {
      var open = $overlay.hasClass('open');
      $button.toggleClass('active', !open);
      
      if (open) {
        $overlay
          .removeClass('open')
          .addClass('close')
          .one(transitionEnd, function() {
            $overlay.removeClass('close');
          });
      } else {
        $overlay.addClass('open');
      }
    }

    $button.on('click', toggleMenu);
  }

  function videoHero() {
    var width = 1280,
        height = 720,
        playing = false,
        $hero = $('#hero'),
        $video = null,
        video = null,
        $teaser = $('.video-teaser video');

    $hero.on('click', function() {
      if (playing) {
        return (video.paused === false) ? video.pause() : video.play();
      }

      $teaser.get(0).pause();
      $video = $('<video autoplay class="full-video"/>');
      video = $video.get(0);
      $video.append(
        '<source src="/assets/videos/abtion.mp4" type="video/mp4" />',
        '<source src="/assets/videos/abtion.webm" type="video/webm" />'
      );

      $hero.addClass('video-play').append($video);
      playing = true;
    });
  }

  menu();
  videoHero();

  if (smoothScroll && smoothScroll.init) {
    smoothScroll.init();
  }
});
