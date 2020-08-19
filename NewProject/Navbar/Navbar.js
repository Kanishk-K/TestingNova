$("[data-trigger]").on("click", function(){
    var trigger_id =  $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
    $('.carousel-control-prev').hide();
    $('.carousel-control-next').hide();
    $("[data-target]").each(function() {
        $(this).hide();
    });
});

// close button 
$(".btn-close").click(function(e){
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
    $('.carousel-control-prev').show();
    $('.carousel-control-next').show();
    $("[data-target]").each(function() {
        $(this).show();
    });
}); 