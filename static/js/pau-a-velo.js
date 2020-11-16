/* java script de Header Fade
*************************************** */
/*var $headline = $('.headline'),
    $inner = $('.inner'),
    $nav = $('nav'),
    navHeight = 75;
if ($headline){
  $nav.addClass('overheader');
}

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop(),
      headlineHeight = $headline.outerHeight() - navHeight,
      navOffset = $nav.offset().top;

  $headline.css({
    'opacity': (1 - scrollTop / headlineHeight)
  });
  $inner.children().css({
    'transform': 'translateY('+ scrollTop * 0.4 +'px)'
  });
  if (navOffset > headlineHeight) {
    $nav.removeClass('overheader');
  } else {
    $nav.addClass('overheader');
  }
});*/

/***********************************************
  Javascript copié de "pure.io" pour le responsive Menu
**********************************************/
(function (window, document) {
  var menu = document.getElementById('menu'),
     WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize';

  function toggleHorizontal() {
     [].forEach.call(
         document.getElementById('menu').querySelectorAll('.custom-can-transform'),
         function(el){
             el.classList.toggle('pure-menu-horizontal');
         }
     );
  };

  function toggleMenu() {
     // set timeout so that the panel has a chance to roll up
     // before the menu switches states
    /*if (menu.classList.contains('open')) {
         setTimeout(toggleHorizontal, 500);
     }
     else {
         toggleHorizontal();
     }*/
     menu.classList.toggle('open');
     document.getElementById('toggle').classList.toggle('x');
  };

  function closeMenu() {
     if (menu.classList.contains('open')) {
         toggleMenu();
     }
  }

  document.getElementById('toggle').addEventListener('click', function (e) {
     toggleMenu();
     e.preventDefault();
  });
  window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
})(this, this.document);



/*********************************************************************
Javascript pour foire apparaitre une zone de texte
L'élement à cliquer doit avoir la class "toggler" et une id déterminée
par l'id de l'élément qui apparait.
Par exemple si l'élément qui apparait à comme id "content_id"
L'élément à cliquer doit avoir l'id "content_id_toggle"
***********************************************************************/
function slideToggle(el){
  var wanted_height = 0,
      current_height = el.style.height.replace('%','').replace('px','');
  if(el.style.display == "none" || current_height == '0'){

    var el_style      = window.getComputedStyle(el),
        el_position   = el_style.position,
        el_visibility = el_style.visibility;
    el.style.position = "absolute";
    el.style.visibility = "hidden";
    el.style.height = "auto";
    el.style.display = "block";
    wanted_height = el.offsetHeight + 'px';
    el.style.height = '0';
    el.style.position = el_position;
    el.style.visibility = el_visibility;
  }
  setTimeout(function() {
    el.style.height = wanted_height;
    el.style.opacity = (wanted_height == 0) ? 0 : 1;
  },10);
  if (wanted_height == 0){
    setTimeout(function(){
      el.style.display = "none";
    },450);
  }
};

// Active le clic sur tous les éléments qui font apparaitre du contenu.
var togglers = document.getElementsByClassName("toggler");
for (i = 0; i < togglers.length; i++) {
  togglers[i].addEventListener('click',function(e){
    toggled_id = this.id.replace('_toggle','');
    slideToggle(document.getElementById(toggled_id));
    e.preventDefault();
  });
}
