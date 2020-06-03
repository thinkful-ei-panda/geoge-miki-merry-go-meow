function chooseCat() {
    $('.thumbnail').on('click', function(event) {
      //Switch placement of hero and thumbnail
      const king = $(event.currentTarget).clone();
      king.removeClass('thumbnail');
      const subjects = $('.thumbnail').not(event.currentTarget);
      //Toggle aria-pressed
      subjects.attr('aria-pressed', false);
      $(event.currentTarget).attr('aria-pressed', true);
      $('div.hero img').replaceWith(king);
    });
  }
  
  $(chooseCat);
  
  
  
  
  