$(".show-sidebar-btn").click(function () {
   $(".sidebar").animate({marginLeft:0});
});
$(".hide-sidebar-btn").click(function () {
    $(".sidebar").animate({marginLeft:"-100%"});
 });

 


    
    function go (url) {
        setTimeout (function() {
          location.href=`${url}`;
        },500)
       };



      $(".full-screen-btn").click(function(){
          let current=$(this).closest(".card");
          current.toggleClass("full-screen");
          if(current.hasClass("full-screen")){
              $(this).html(`<i class="feather-minimize-2"></i>`);
          }else{
           $(this).html(`<i class="feather-maximize-2"></i>`);
          }
         
      });

      let screenHeight = $(window).height();
      let currentMenuHeight = $(".nav-menu .active").offset().top;
       
      if(currentMenuHeight>screenHeight*0.8){
          $(".sidebar").animate({
              scrollTop:currentMenuHeight-100
          },1000)
      }





