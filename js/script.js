jQuery(function($){
    // external js: isotope.pkgd.js

$(window).load(function(){

    
// init Isotope
var portfolio = $('#portfolio');
var grid = $('.grid');
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'masonry',
    transitionDuration: '0.8s',
    masonry: {
        columnWidth: 192,
    }
  });


  // filter functions
  var filterFns = {
  };

  // bind filter button click
  $('.filters-button-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

// modify the location.hash regarding the category
  $('button').click(function(e){
    var cls = $(this).attr('name');
    location.hash = cls;
    e.preventDefault();
  });

// change class/size on click
  grid.children().click( function() {
    grid.find('.large').removeClass('large');
    $(this).toggleClass('large');
    grid.isotope('layout');
  });

  if(location.hash != ''){
    $('button[name="'+location.hash+'"]').trigger('click');
  }

// animation of footer-icon
  $('.footer-icon').click(function(e){
    e.preventDefault();
    $this=$(this);
    if($this.hasClass('is-opened')){
      $this.addClass('is-closed').removeClass('is-opened');
      $this.parent().addClass('is-closed').removeClass('is-opened');
    }else{
      $this.removeClass('is-closed').addClass('is-opened');
      $this.parent().removeClass('is-closed').addClass('is-opened');
    }
  })
  
  $('.field-input').focus(function(){
    $(this).parent().addClass('is-focused has-label');
  })

  $('.field-input').blur(function(){
    $parent = $(this).parent();
    if($(this).val()== ''){
      $parent.removeClass('has-label');
    }
    $parent.removeClass('is-focused');
  })

  $('.area-input').focus(function(){
    $(this).parent().addClass('is-focused has-label');
  })

  $('.area-input').blur(function(){
    $parent = $(this).parent();
    if($(this).val()== ''){
      $parent.removeClass('has-label');
    }
    $parent.removeClass('is-focused');
  })
});
})