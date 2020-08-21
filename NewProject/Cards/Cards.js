$(".Disp-Img").each(function() {
    let app = new PIXI.Application({width:$(this).width(), height: $(this).height(), transparent:true});
    $(this).parent()[0].appendChild(app.view);
    $(this).hide();

    let img = new PIXI.Sprite.from($(this).attr('src'));
    img.width = $(this).width();
    img.height = $(this).height();
    app.stage.addChild(img);

    depthMap = new PIXI.Sprite.from($(this).attr('data-depthurl'));
    app.stage.addChild(depthMap);

    displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
    app.stage.filters = [displacementFilter];

    $(this).parent()[0].onmousemove = function(e){
        displacementFilter.scale.x = ($(this).width()/2 - e.clientX) / 20;
        displacementFilter.scale.y = ($(this).height()/2 - e.clientX) / 20;
    }
});