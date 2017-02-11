$(document).ready(function(){
    function heightDetect() {
        $(".first_page").css("height", $(window).height());
    };
    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });
    
    $('.sale').on('click', function(){
        $('.wrraper').fadeIn(1000);
    });
     $('.back-disabled').on('click', function(){
        $('.wrraper').fadeOut(1000);
    });
});