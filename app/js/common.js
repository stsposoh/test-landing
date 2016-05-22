;(function() {
  'use-strict';

  /*для одинаковой высоты колонок*/
  $('.card').equalHeights();
  $('.awards>div').equalHeights();
  
  /*menu mobile top*/
  $("#mnu-top").click(function() {
    $(this).toggleClass("on");
    $(".main-mnu-top").slideToggle();
    return false;
  });
   /*menu mobile bottom*/
  $("#mnu-bottom").click(function() {
    $(this).toggleClass("on");
    $(".main-mnu-bottom").slideToggle();
    return false;
  });
  

  //количество элементов, для которых нужно применить анимацию
  //название класса элемента, для которого нужно применить анимацию
  //название эффекта анимации
  //отступ
  addAnimation(3, '.point', 'fadeInRight', '80%');
  addAnimation(5, '.point2', 'fadeInUp', '50%');
  addAnimation(5, '.point3', 'fadeInUp', '10%');
  
  
   /*блок "Сделки M&A" анимация*/
  $('.sect-services').waypoint(function() {
    $('.services-item').each(function(index) {
      var self = $(this);
      setInterval(function() {
        self.addClass('on');
      }, 200*index);
    });
  }, {
    offset: '50%'
  });
  
  
   /*блок "Бухгалтерские услуги" анимация*/
  $('.accounting').waypoint(function() {
    $('.acc-item').each(function(index) {
      var self = $(this);
      setInterval(function() {
        self.addClass('on');
      }, 200*index);
    });
  }, {
    offset: '50%'
  });
  
  
  /*блок Преимущества анимация*/
  var waypoint = new Waypoint({
    element: document.querySelector('.deal'),
    handler: function() {
      $('.deal .card').each( function(index) {
        var self = $(this);
        
        setInterval(function() {
          self.removeClass('card-off').addClass('card-on')
        }, 100*index);
      })
    },
    offset: "30%"
  })

  
    /*блок Как мы работаем анимация*/
  var waypointsvg = new Waypoint({
    element: $(".homesect"),
    handler: function(dir) {

      if (dir === "down") {

        $(".homesect .tc-item").each(function(index) {
          var ths = $(this);
          setTimeout(function() {
            var myAnimation = new DrawFillSVG({
              elementId: "tc-svg-" + index
            });
            ths.children(".tc-content").addClass("tc-content-on");
          }, 500*index);
        });

      };
      this.destroy();
    },
    offset: '35%'
    });
  
  
  /*С кем можно связаться анимация*/
  var waypoint = new Waypoint({
    element: document.querySelector('.cont'),
    handler: function() {
      $('.cont .card').each( function(index) {
        var self = $(this);
        
        setInterval(function() {
          self.removeClass('card-off').addClass('card-on')
        }, 100*index);
      })
    },
    offset: "30%"
  })
  
  
  function addAnimation(numberOfItems, elementsClassName, effectName, topOffset) {
    $('.sect').waypoint( function(dir) {
      let self = this.element

      if(dir === 'down') {
        var elemNumb = 0
        var addCl = setInterval(function() {
          $(self).find(elementsClassName).eq(elemNumb).removeClass('opacityTrue').addClass('animated ' + effectName);
          ++elemNumb;

          if(elemNumb == numberOfItems) {
            clearInterval(addCl);
          }
        }, 100);
      }
    }, {
      offset: topOffset
    });
  };
  
  
  /*Отзывы*/
  $(".slider").owlCarousel({
    items : 1,
    nav : true,
    navText : "",
    loop : true,
    autoplay : true,
    autoplayHoverPause : true,
    fluidSpeed : 600,
    autoplaySpeed : 600,
    navSpeed : 600,
    dotsSpeed : 600,
    dragEndSpeed : 600
	});

  
   /*блок "Мы - профессионалы!" анимация*/
  $('.proff').waypoint(function() {
    $('.proff-item').each(function(index) {
      var self = $(this);
      setInterval(function() {
        self.addClass('on');
      }, 200*index);
    });
  }, {
    offset: '50%'
  });
  
  
  $('.proff').waypoint(function() {
    $('.proff-item2').each(function(index) {
      var self = $(this);
      setInterval(function() {
        self.addClass('on');
      }, 200*index);
    });
  }, {
    offset: '30%'
  });
  
  

  $(".arrow-down").on('click', function() {
    $('html, body').animate({
      scrollTop: $('.main-head').height()
    },
      "slow"                     
    );
  });

  
  
  $(".sect-bottom img").on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    },
      "slow"                     
    );
  });


  $('.button').click(function() {
    $('#callback').find('.header').text($(this).text());
  }).magnificPopup({
    type:'inline',
  });

  
  

  //SVG Fallback
  if(!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  };
  


  //E-mail Ajax Send
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });


  //Запрет перетаскивать картинки
  $("img, a").on("dragstart", function(event) {
    event.preventDefault();
  });

})();