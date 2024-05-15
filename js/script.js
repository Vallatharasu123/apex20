! function($) {

  "use strict";

    /* ---------------------------------------------- /*
    * Contact Form
    /* ---------------------------------------------- */
    $('[data-submit]').on('click', function(e) {
        e.preventDefault();
        $(this).parent('form').submit();
    })
    $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please check your input."
    );

    function valEl(el) {
      el.validate({
          rules: {
              email: {
                required: true,
                email: true
              },
          },
          messages: {
              email: {
                email: 'Invalid E-mail format'
              }
          },

          submitHandler: function(form) {
              $('#preloader').fadeIn();
              var $form = $(form);
              var $formId = $(form).attr('id');
              switch ($formId) {
                  case 'popupResult':
                      $.ajax({
                              type: 'POST',
                              url: $form.attr('action'),
                              data: $form.serialize(),
                          })
                          .always(function(response) {
                              setTimeout(function() {
                                  $('#preloader').fadeOut();
                              }, 800);
                              setTimeout(function() {
                                  $('#form-overlay').fadeIn();
                                  $form.trigger('reset');
                              }, 1100);
                              $('#form-overlay').on('click', function(e) {
                                  $(this).fadeOut();
                              });

                          });
                      break;
              }
              return false;
          }
      })
    }

    $('.contact__form').each(function() {
      valEl($(this));
    });
  
}(window.jQuery);

var swiper = new Swiper(".course-slider", {
   spaceBetween: 20,
   grabCursor:true,
   loop:true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".tutors-slider", {
   spaceBetween: 20,
   grabCursor:true,
   loop:true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".reviews-slider", {
   spaceBetween: 20,
   grabCursor:true,
   loop:true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
   },
});