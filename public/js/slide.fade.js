/*left_title 슬라이드*/

var FadeSlide = (function(){
    function FadeSlide(parent, slide, option){
		var obj = this;
		this.parent = parent;
		this.slide = slide;
		if(option) {
			this.option = option;
			if(!this.option.delay) this.option.delay = 3000;
			if(!this.option.speed) this.option.speed = 500;				
			}
		else {
			this.option = {
				delay: 3000,
				speed: 500,
				}
		     }

    
		this.delay = option.delay;
		this.speed = option.speed;
		this.depth = 0;
		this.now = 1;
		this.end = this.slide.length -1;
		this.init(obj);
	}
		
    FadeSlide.prototype.init = function(obj){
         obj.slide.each(function(){
            if(obj.depth < obj.slide.css("z-index")) obj.depth = obj.slide.css("z-index");
		 });
		 obj.depth++;
		 obj.ani(obj);
    };
    FadeSlide.prototype.ani = function(obj){
		var target = obj.slide.eq(obj.now);
		var targetOther = obj.slide.not(":eq("+obj.now+")");
		target.css({"z-index":obj.depth++, "opacity":0});
		targetOther.delay(obj.delay).animate({"opacity":0});
		target.delay(obj.delay).animate({"opacity":1}, obj.speed, function (){
			console.log(obj.now);
			if(obj.now == obj.end) obj.now = 0;
			else obj.now++;
			obj.ani(obj);
		});
    };
    return FadeSlide;
}());