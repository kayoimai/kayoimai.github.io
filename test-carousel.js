$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            nav: false,
            slideBy: 1,
            items: 1,
            autoplay: true
        }
        
        
        
        );
});


$(window).load(function(){
  $(".products-item img").click(function(){
    var img_src = $(this).attr("src");
    $(".pc_navi_revew img").attr("src", img_src);
  });
});

  $(function(){
    $(document).ready(function(){

      $(".sp_navi_menu").click(function () {
        $(this).next().slideToggle();
      });

    });
  });
  
  