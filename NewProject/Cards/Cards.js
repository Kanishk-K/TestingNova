$(".Disp-Img").each(function() {
    let app = new PIXI.Application({width:$(this).width(), height: $(this).height()});
    $(this).parent()[0].appendChild(app.view);
    $(this).hide();

    let img = new PIXI.Sprite.from($(this).attr('src'));
    img.width = $(this).width();
    img.height = $(this).height();
    app.stage.addChild(img);
    
});