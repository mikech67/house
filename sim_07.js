(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 560,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/brick.png", id:"brick"},
		{src:"images/brickD.jpg", id:"brickD"},
		{src:"images/Fiberglass.jpg", id:"Fiberglass"},
		{src:"images/FiberglassD.jpg", id:"FiberglassD"},
		{src:"images/foam.jpg", id:"foam"},
		{src:"images/foamD.jpg", id:"foamD"},
		{src:"images/wood.jpg", id:"wood"},
		{src:"images/woodD.jpg", id:"woodD"}
	]
};



// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,22);


(lib.brick = function() {
	this.initialize(img.brick);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,240);


(lib.brickD = function() {
	this.initialize(img.brickD);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,240);


(lib.Fiberglass = function() {
	this.initialize(img.Fiberglass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,240);


(lib.FiberglassD = function() {
	this.initialize(img.FiberglassD);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,240);


(lib.foam = function() {
	this.initialize(img.foam);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,240);


(lib.foamD = function() {
	this.initialize(img.foamD);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,240);


(lib.wood = function() {
	this.initialize(img.wood);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,240);


(lib.woodD = function() {
	this.initialize(img.woodD);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,240);


(lib.window2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAABYIAAivIAUAAIAACvgAgTBYIAAivIAJAAIAACvg");
	this.shape.setTransform(12.7,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(0.3,1,1).p("AC5BYIlxAAIAAiw");
	this.shape_1.setTransform(-1.2,-1.1,1,1,0,0,180);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(3));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(0.3,1,1).p("Ai9BeIF7AAIAAi7");
	this.shape_2.setTransform(-0.6,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#666666").ss(0.3,1,1).p("Ai9hdIAAC7IF7AA");
	this.shape_3.setTransform(-0.6,-0.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(3));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgEBcIAAi+IAJAAIAADFg");
	this.shape_4.setTransform(19.5,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjGBjIAAgVIFxAAIAAiwIARAAIAAC+IALAHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(4));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#E6E6E6","#999999"],[0,1],20.6,0.4,-19.4,0.4).s().p("AC/BeIAAAAImAgBIAAi8IGDAAIAAC/g");
	this.shape_6.setTransform(-0.5,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjGAEIAAgIIGAABIAAAAIACACIALAFg");
	this.shape_7.setTransform(0,9.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgEBcIAAi+IAJAAIAADFg");
	this.shape_8.setTransform(19.5,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#999999","#666666"],[0,1],-20,0,20,0).s().p("AjGBjIAAjFIGNAAIAADFg");
	this.shape_9.setTransform(0,0,1,1,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#999999","#006699"],[0,1],-20,0,20,0).s().p("AjGBjIAAjFIGNAAIAADFg");
	this.shape_10.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.7,-11,40.7,21);


(lib.window_btn = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().rs(["#000000","#FFFFFF"],[0,1],0,0,0,0,0,8.2).ss(3,1,1).p("AAxgwQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#0066FF"],[0,0.745],0,0,0,0,0,7.1).s().p("AgwAxQgVgVAAgcQAAgbAVgVQAVgVAbAAQAcAAAVAVQAVAVAAAbQAAAcgVAVQgVAVgcAAQgbAAgVgVg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.5,-8.5,17,17);


(lib.window = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AALBYIAAivIAJAAIAACvgAgTBYIAAivIAUAAIAACvg");
	this.shape.setTransform(-12.7,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(1,1,1).p("AC5BYIlxAAIAAiw");
	this.shape_1.setTransform(1.2,-1.1);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(3));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(0.3,1,1).p("AC+BeIl7AAIAAi7");
	this.shape_2.setTransform(0.7,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#666666").ss(0.3,1,1).p("Ai9hdIAAC7IF7AA");
	this.shape_3.setTransform(0.6,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(3));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgEhiIAJAAIAAC+IgJAHg");
	this.shape_4.setTransform(-19.4,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjGBjIAKgHIAAi+IASAAIAACwIFxAAIAAAVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(4));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#E6E6E6","#999999"],[0,1],-20.5,0.4,19.5,0.4).s().p("AjBhfIGDAAIAAC8ImAABIAAAAIgDACg");
	this.shape_6.setTransform(0.6,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjGAEIAKgFIADgCIAAAAIGAgBIAAAIg");
	this.shape_7.setTransform(0,9.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgEhiIAJAAIAAC+IgJAHg");
	this.shape_8.setTransform(-19.4,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#999999","#666666"],[0,1],-20,0,20,0).s().p("AjGBjIAAjFIGNAAIAADFg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#999999","#006699"],[0,1],-20,0,20,0).s().p("AjGBjIAAjFIGNAAIAADFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-11,40.7,21);


(lib.wc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wood();
	this.instance.setTransform(0,0,0.275,0.857);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,165.2,205.6);


(lib.w_btn = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().rs(["#000000","#FFFFFF"],[0,1],0,0,0,0,0,10.6).ss(3,1,1).p("AA/g+QAbAaAAAkQAAAlgbAaQgaAbglAAQgkAAgagbQgbgaAAglQAAgkAbgaQAagbAkAAQAlAAAaAbg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#FF0000"],[0,0.745],0,0,0,0,0,9.1).s().p("Ag+A/QgbgaAAglQAAgkAbgaQAagbAkAAQAlAAAaAbQAbAaAAAkQAAAlgbAaQgaAbglAAQgkAAgagbg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.5,-10.5,21,21);


(lib.tr1 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#999999"],[0,0.82],-53.1,26.9,-53.1,196.6).s().p("AhdB7IAAj1IC7AAIAAD1g");
	this.shape.setTransform(64,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C8C8C8","#777777"],[0,1],-53.1,-75,-53.1,86.5).s().p("AhdNrIAA7VIC7AAIAAbVg");
	this.shape_1.setTransform(64,112.4);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C8C8C8","#777777"],[0,1],-5,-75,-5,86.5).s().p("AjetpIACgBIG7AAIAABkIAAZxg");
	this.shape_2.setTransform(32.4,112.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#999999","#999999"],[0,0.82],-4.9,-9.3,-4.9,23.4).s().p("AjdB8IG7j3IAAD3g");
	this.shape_3.setTransform(32.4,12.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(10,0,63.5,200);


(lib.slidertrack = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmPATIAAglIMfAAIAAAlg");
	this.shape.setTransform(40,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-2,80,4);


(lib.sliderThumb = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-5.1,-10.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.1,-10.9,10,22);


(lib.rMiddle = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#999999"],[0,1],0,9,0,-16).s().p("A3bB8IAAj4MAu2AAAIAAD4g");
	this.shape.setTransform(150,187.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C8C8C8","#777777"],[0,1],0,76,0,-87.5).s().p("A3bNqIAA7UMAu2AAAIAAbUg");
	this.shape_1.setTransform(150,87.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,200);


(lib.radiobutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(170,170,170,0.251)","rgba(0,0,0,0.251)"],[0,1],-2.1,-2,0,-2.1,-2,6.4).s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQALAMABAPQgBAQgLAMQgMALgQABQgPgBgMgLg");
	this.shape.setTransform(8.5,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#AAAAAA","#000000"],[0,1],-2.1,-2,0,-2.1,-2,6.4).s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQALAMABAPQgBAQgLAMQgMALgQABQgPgBgMgLg");
	this.shape_1.setTransform(8.5,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(1,1,1).p("ABVAAQAAAjgZAZQgZAZgjAAQgiAAgZgZQgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAig");
	this.shape_2.setTransform(8.5,8.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#E1E1E1"],[0,1],0,6.4,0,-6.3).s().p("AgsAtQgSgTAAgaQAAgZASgTQATgSAZAAQAaAAATASQASATAAAZQAAAagSATQgTASgaAAQgZAAgTgSg");
	this.shape_3.setTransform(8.5,8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#E1E1E1","#AEAEAE"],[0,1],-5.2,-5.2,0,-5.2,-5.2,15.4).s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZgAgsgsQgTATAAAZQAAAaATASQATATAZAAQAaAAASgTQATgSAAgaQAAgZgTgTQgSgTgaAAQgZAAgTATg");
	this.shape_4.setTransform(8.5,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,19,19.1);


(lib.fccopy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.foam();
	this.instance.setTransform(0,0,0.275,0.857);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,165.2,205.6);


(lib.fc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Fiberglass();
	this.instance.setTransform(0,0,0.275,0.857);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,165.2,205.6);


(lib.brikD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib.brickD();
	this.instance.setTransform(87,134.1,0.6,0.6);

	this.instance_1 = new lib.woodD();
	this.instance_1.setTransform(87,134.1,0.6,0.6);

	this.instance_2 = new lib.FiberglassD();
	this.instance_2.setTransform(87,134.1,0.6,0.6);

	this.instance_3 = new lib.foamD();
	this.instance_3.setTransform(87,134.1,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(87,134.1,360,144);


(lib.brik = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib.brick();
	this.instance.setTransform(87,134.1,0.6,0.6);

	this.instance_1 = new lib.wood();
	this.instance_1.setTransform(87,134.1,0.6,0.6);

	this.instance_2 = new lib.Fiberglass();
	this.instance_2.setTransform(87,134.1,0.6,0.6);

	this.instance_3 = new lib.foam();
	this.instance_3.setTransform(87,134.1,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(87,134.1,360,144);


(lib.arrTcopy2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF0000","#FF9999","#FF0000","#FF9999","#FF0000","#FF9999"],[0,0.204,0.412,0.627,0.824,1],-8.4,1.3,13.2,0.7).s().p("AgwA0IAAhnIBiAAIAABng");
	this.shape.setTransform(-5,-0.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-5.5,10,10.6);


(lib.arrTcopy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0178C9","#0178C9","#33CCFF","#0066CC","#33CCFF","#0066CC","#33CCFF"],[0,0.004,0.204,0.412,0.627,0.824,1],-8.4,1.3,13.2,0.7).s().p("AgwA0IAAhnIBiAAIAABng");
	this.shape.setTransform(-5,-0.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-5.5,10,10.6);


(lib.arrT = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFCC","#FF6600","#FFFFCC","#FF6600","#FFFFCC","#FF6600"],[0,0.204,0.412,0.627,0.824,1],-8.4,1.3,13.2,0.7).s().p("AgwA0IAAhnIBiAAIAABng");
	this.shape.setTransform(-5,-0.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-5.5,10,10.6);


(lib.aheadcopy2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF0000","#FF9999","#FF0000","#FF9999","#FF0000","#FF9999"],[0,0.204,0.412,0.627,0.824,1],-11.1,1.6,125,0.9).s().p("AhgAAIDBiLIAAEXg");
	this.shape.setTransform(-9.7,0.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.4,-13.9,19.4,28.1);


(lib.aheadcopy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0178C9","#33CCFF","#0178C9","#33CCFF","#0178C9","#33CCFF"],[0,0.204,0.412,0.627,0.824,1],-11.1,1.6,125,0.9).s().p("AhgAAIDBiLIAAEXg");
	this.shape.setTransform(-9.7,0.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.4,-13.9,19.4,28.1);


(lib.ahead = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFCC","#FF6600","#FFFFCC","#FF6600","#FFFFCC","#FF6600"],[0,0.204,0.412,0.627,0.824,1],-11.1,1.6,125,0.9).s().p("AhgAAIDBiLIAAEXg");
	this.shape.setTransform(-9.7,0.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.4,-13.9,19.4,28.1);


(lib.tr2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgIPbIAA+1IASAAIAAe1g");
	this.shape.setTransform(55.5,99.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.502)","rgba(0,0,0,0)"],[0,1],-9,-12.9,18.7,-13.5).s().p("AisrxIFGjuIATgDIAABVIAAcOIAABig");
	this.shape_1.setTransform(37.4,100.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(3));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AisrxIFGjuIATgDIAABVIAAcOIAABig");
	mask.setTransform(37.4,100.5);

	// Layer 4
	this.instance = new lib.wc();
	this.instance.setTransform(81.6,104.3,1,1,0,0,0,82.6,102.8);
	this.instance.filters = [new cjs.ColorFilter(0.7, 0.7, 0.7, 1, 0, 0, 0, 0)];
	this.instance.cache(-2,-2,169,210);

	this.instance_1 = new lib.fc();
	this.instance_1.setTransform(81.6,104.3,1,1,0,0,0,82.6,102.8);
	this.instance_1.filters = [new cjs.ColorFilter(0.7, 0.7, 0.7, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-2,-2,169,210);

	this.instance_2 = new lib.fccopy();
	this.instance_2.setTransform(81.6,104.3,1,1,0,0,0,82.6,102.8);
	this.instance_2.filters = [new cjs.ColorFilter(0.7, 0.7, 0.7, 1, 0, 0, 0, 0)];
	this.instance_2.cache(-2,-2,169,210);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20,0.9,36.5,199.1);


(lib.MainSlider = function() {
	this.initialize();

	// Layer 1
	this.val = new cjs.Text("188.6", "bold 12px 'Times New Roman'");
	this.val.name = "val";
	this.val.textAlign = "center";
	this.val.lineHeight = 14;
	this.val.lineWidth = 29;
	this.val.setTransform(15.2,3);

	this.sliderThumb = new lib.sliderThumb();
	this.sliderThumb.setTransform(147.3,10.4);

	this.slidertrack = new lib.slidertrack();
	this.slidertrack.setTransform(61.7,10.8,1.85,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AighZIFBAAIAACzIlBAAg");
	this.shape.setTransform(16.2,9);

	this.addChild(this.shape,this.slidertrack,this.sliderThumb,this.val);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,210.7,22.4);


(lib.MainSlider_1 = function() {
	this.initialize();

	// Layer 1
	this.val = new cjs.Text("188.6", "bold 12px 'Times New Roman'");
	this.val.name = "val";
	this.val.textAlign = "center";
	this.val.lineHeight = 14;
	this.val.lineWidth = 29;
	this.val.setTransform(17,3);

	this.sliderThumb = new lib.sliderThumb();
	this.sliderThumb.setTransform(139.1,10.4);

	this.slidertrack = new lib.slidertrack();
	this.slidertrack.setTransform(53.5,10.8,1.85,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AighZIFBAAIAACzIlBAAg");
	this.shape.setTransform(18,9);

	this.addChild(this.shape,this.slidertrack,this.sliderThumb,this.val);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.8,-1,200.7,22.4);


(lib.MainSlider_2 = function() {
	this.initialize();

	// Layer 1
	this.val2 = new cjs.Text("188.6", "bold 12px 'Times New Roman'");
	this.val2.name = "val2";
	this.val2.textAlign = "center";
	this.val2.lineHeight = 14;
	this.val2.lineWidth = 29;
	this.val2.setTransform(74.1,3);

	this.val = new cjs.Text("188.6", "bold 12px 'Times New Roman'");
	this.val.name = "val";
	this.val.textAlign = "center";
	this.val.lineHeight = 14;
	this.val.lineWidth = 29;
	this.val.setTransform(15.2,3);

	this.sliderThumb = new lib.sliderThumb();
	this.sliderThumb.setTransform(201.3,10.4);

	this.slidertrack = new lib.slidertrack();
	this.slidertrack.setTransform(115.7,10.8,1.85,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACFhZIFDAAIAACzIlDAAgAnHhZIFDAAIAACzIlDAAg");
	this.shape.setTransform(45.6,9);

	this.addChild(this.shape,this.slidertrack,this.sliderThumb,this.val,this.val2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,264.7,22.4);


(lib.roof = function() {
	this.initialize();

	// Layer 2
	this.tr2 = new lib.tr2();
	this.tr2.setTransform(-27.4,-98.5,1,1,0,0,0,27.4,100);

	this.tr1 = new lib.tr1();
	this.tr1.setTransform(-300,-0.2,1,1,0,0,0,54.5,199.9);

	// Layer 1
	this.rMiddle = new lib.rMiddle();
	this.rMiddle.setTransform(0,0,1,1,180);

	this.addChild(this.rMiddle,this.tr1,this.tr2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-344.5,-200.1,453.9,208.7);


(lib.RbGroupMain = function() {
	this.initialize();

	// Layer 2 copy 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApUDIQgHgFABgKIAKABQABAFACACQAEADAHAAQAHAAAFgDQADgDABgFIABgNQgGAIgLAAQgNAAgHgKQgGgJgBgNQABgJADgHQADgIAGgEQAGgEAIAAQAMAAAGAJIAAgHIAKAAIAAA1QAAAPgDAGQgDAGgGADQgGAEgKAAQgLAAgHgFgApNCDQgFAFAAAMQAAAMAFAFQAFAGAIAAQAHAAAFgGQAEgFAAgMQAAgMgEgFQgGgGgHAAQgHAAgFAGgAl5CwQgGgFgCgKIAKgBQABAGAEADQAEADAHAAQAIAAADgCQAEgDgBgEQAAgEgDgCIgKgEIgRgFQgEgCgCgEQgCgDgBgFQAAgEACgEIAGgGIAHgDIAJgBQAHAAAFACQAGACADAEQACAEABAGIgLABQAAgFgDgDQgEgCgGAAQgHAAgDACQgDADgBADIACAEIAEACIAKADIAPAFQAEACADADQADAEAAAFQgBAGgDAEQgDAFgGADQgGACgGAAQgNAAgGgFgAm1CwQgHgFgCgKIALgBQABAGAEADQAEADAHAAQAIAAADgCQAEgDAAgEQAAgEgEgCIgLgEIgQgFQgEgCgCgEQgDgDAAgFQAAgEADgEIAEgGIAIgDIAJgBQAGAAAGACQAGACACAEQADAEABAGIgLABQAAgFgEgDQgCgCgHAAQgHAAgDACQgEADAAADIACAEIAEACIAJADIAQAFQAFACACADQACAEABAFQAAAGgDAEQgEAFgFADQgGACgIAAQgMAAgGgFgAn6CwQgFgFAAgIQAAgEACgEQACgEAEgCIAHgEIAKgBQAMgCAGgCIAAgCQAAgHgDgDQgEgDgIAAQgHAAgEACQgDADgCAHIgLgCQACgGAEgEQACgEAHgDQAGgCAHAAQAIAAAGACQAFACACADQADADABAEIAAAKIAAAOIABASQAAAEACAEIgLAAIgCgIQgGAFgFACQgFACgHAAQgKAAgGgFgAnlCZQgGAAgDACQgDABgCACQgBACAAADQAAAEADADQAEADAFAAQAGAAAGgDQAEgCACgFQACgEAAgHIAAgDIgRAEgAq+CtQgIgJAAgPQAAgQAIgIQAHgJAOAAQAMAAAIAJQAIAIAAAQIgBACIgtAAQAAALAFAFQAFAFAIAAQAGAAAEgDQAEgDADgGIAKABQgCAKgHAFQgHAFgLAAQgOAAgHgI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");
	this.shape.setTransform(-79.4,57.2);

	// Layer 1
	this.RadBut_3 = new lib.radiobutton();
	this.RadBut_3.setTransform(-33.9,43,1,1,0,0,0,61.1,8.6);

	this.RadBut_2 = new lib.radiobutton();
	this.RadBut_2.setTransform(-131.9,71.7,1,1,0,0,0,61.1,8.6);

	this.RadBut_1 = new lib.radiobutton();
	this.RadBut_1.setTransform(-131.9,41.7,1,1,0,0,0,61.1,8.6);

	this.addChild(this.RadBut_1,this.RadBut_2,this.RadBut_3,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-193.5,32.5,232.5,50.5);


(lib.RbGroupMain_1 = function() {
	this.initialize();

	// Layer 2 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AacAzQgHgFABgKIAKABQABAFADACQADADAHAAQAIAAAEgDQAEgDABgFIABgNQgHAHgKAAQgNABgHgKQgHgJAAgMQAAgIADgIQADgHAGgEQAGgEAJAAQALAAAHAJIAAgHIAJAAIAAAzQAAAOgCAHQgDAFgHAEQgGAEgKAAQgLAAgHgFgAajgRQgFAGAAALQAAALAFAFQAFAGAIAAQAHAAAFgGQAFgFAAgLQAAgLgFgGQgGgFgHgBQgHABgFAFgA6aAzQgHgFAAgKIAKABQABAFADACQAEADAHAAQAHAAAEgDQAEgDABgFIABgNQgHAHgKAAQgNABgHgKQgHgJAAgMQAAgIADgIQAEgHAGgEQAGgEAIAAQALAAAHAJIAAgHIAKAAIAAAzQAAAOgDAHQgDAFgGAEQgHAEgJAAQgLAAgHgFgA6TgRQgFAGAAALQAAALAFAFQAFAGAHAAQAHAAAFgGQAFgFAAgLQAAgLgFgGQgFgFgHgBQgHABgFAFgAl5A2IAAhTIAJAAIAAAHQAEgEAEgCQAEgDAGAAQAIAAAGAEQAGAEAEAHQADAIAAAIQAAAJgEAHQgDAIgHAEQgGAEgHAAQgGAAgEgDQgEgCgDgDIAAAegAlrgRQgFAGAAALQAAAMAFAFQAFAGAHAAQAHAAAFgGQAFgFAAgMQAAgLgFgGQgFgGgHAAQgGAAgGAGgA3eA2IAAhTIAKAAIAAAHQADgEAEgCQAFgDAGAAQAIAAAGAEQAGAEADAHQADAIAAAIQAAAJgDAHQgEAIgGAEQgHAEgHAAQgFAAgEgDQgFgCgCgDIAAAegA3PgRQgFAGAAALQAAAMAFAFQAEAGAHAAQAHAAAFgGQAFgFAAgMQAAgLgEgGQgFgGgHAAQgHAAgFAGgAbeAYQgIgJAAgPQAAgQAKgIQAIgHALAAQANAAAIAIQAJAJAAAOQAAAKgEAHQgEAHgHAEQgGAEgJAAQgNAAgIgIgAbmgRQgFAGAAALQAAAMAFAFQAGAGAHAAQAIAAAFgGQAGgFAAgMQAAgKgGgHQgFgFgIgBQgHABgGAFgAYvAbQgFgFAAgIQAAgFACgDQACgEADgCIAIgCIAJgCQANgBAGgCIAAgCQAAgHgDgDQgEgEgIAAQgHAAgEADQgEADgBAHIgLgCQACgGADgFQADgEAGgCQAGgCAIAAQAIAAAFACQAFACADACQACAEABAEIABAKIAAAMIAAASQABAEACADIgLAAIgCgHQgGAFgFACQgGACgGAAQgKAAgGgFgAZEADQgHABgDACQgCAAgCADQgBACAAADQAAAEADADQADADAGAAQAGAAAFgDQAFgCACgFQACgEAAgHIAAgDIgRADgAT/AYQgIgJAAgPQAAgQAJgIQAIgHAMAAQANAAAIAIQAIAJAAAOQAAAKgEAHQgDAHgHAEQgHAEgIAAQgNAAgIgIgAUHgRQgFAGAAALQAAAMAFAFQAFAGAIAAQAIAAAFgGQAFgFAAgMQAAgKgFgHQgFgFgIgBQgIABgFAFgAGuAYQgIgJAAgPQAAgQAKgIQAIgHALAAQANAAAIAIQAJAJAAAOQAAAKgEAHQgEAHgHAEQgGAEgJAAQgNAAgIgIgAG2gRQgFAGAAALQAAAMAFAFQAGAGAHAAQAIAAAFgGQAGgFAAgMQAAgKgGgHQgFgFgIgBQgHABgGAFgAitAYQgIgJAAgPQAAgOAIgJQAIgIANAAQAMAAAIAIQAIAJAAAOIAAACIguAAQAAALAFAFQAGAFAHAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgNAAgIgIgAikgRQgFAFgBAHIAjAAQgBgHgDgFQgFgFgIgBQgHABgFAFgAk1AbQgFgFAAgIQAAgFACgDQACgEADgCIAIgCIAJgCQANgBAGgCIAAgCQAAgHgDgDQgEgEgIAAQgHAAgEADQgEADgBAHIgLgCQACgGADgFQADgEAGgCQAGgCAIAAQAIAAAFACQAFACADACQACAEABAEIABAKIAAAMIAAASQABAEACADIgLAAIgCgHQgGAFgFACQgGACgGAAQgKAAgGgFgAkgADQgHABgDACQgCAAgCADQgBACAAADQAAAEADADQADADAGAAQAGAAAFgDQAFgCACgFQACgEAAgHIAAgDIgRADgAnZAYQgIgJAAgPQAAgOAIgJQAIgIANAAQANAAAIAIQAIAJAAAOIgBACIguAAQABALAFAFQAFAFAIAAQAGAAAEgDQAEgDACgHIALACQgCAKgHAEQgHAGgLAAQgOAAgIgIgAnQgRQgFAFAAAHIAiAAQAAgHgEgFQgFgFgIgBQgHABgFAFgAoxAXIAAAHIgJAAIAAhTIAKAAIAAAeQAHgIAKAAQAGAAAFACQAFACAEAE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");
	this.shape.setTransform(20.2,39.6);

	// Layer 1
	this.RadBut_4 = new lib.radiobutton();
	this.RadBut_4.setTransform(176.1,39.2,1,1,0,0,0,61.1,8.6);

	this.RadBut_2 = new lib.radiobutton();
	this.RadBut_2.setTransform(-23.9,39.2,1,1,0,0,0,61.1,8.6);

	this.RadBut_3 = new lib.radiobutton();
	this.RadBut_3.setTransform(92.1,39.2,1,1,0,0,0,61.1,8.6);

	this.RadBut_1 = new lib.radiobutton();
	this.RadBut_1.setTransform(-131.9,39.2,1,1,0,0,0,61.1,8.6);

	this.addChild(this.RadBut_1,this.RadBut_3,this.RadBut_2,this.RadBut_4,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-193.5,30,417.1,26.1);


(lib.RbGroupMain_2 = function() {
	this.initialize();

	// Layer 2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AKyDGQgFgFgBgJQABgGACgEQADgFADgCQAFgDAIgBQAMgCAFgCIAAgDQAAgHgDgDQgDgEgHAAQgHAAgDADQgDADgCAHIgJgBQACgLAGgFQAGgFALAAQAJAAAFADQAFADABAFIABAOIAAAQIABAUIADAIIgKAAIgCgJQgFAFgFADQgFACgGAAQgIAAgFgFgALECsIgIADIgEADQgBADgBADQAAAFADACQADADAGAAQAFAAAEgCQAEgDACgEQACgFAAgIIAAgEQgFACgKACgAJ4DCQgHgJAAgRQAAgRAHgJQAHgJAMAAQALAAAHAJQAHAJAAAQQABATgIAIQgHAJgLAAQgLAAgIgJgAJ/CVQgFAGAAANQAAANAFAGQAFAHAHAAQAGAAAGgHQAEgGAAgNQAAgNgEgGQgGgHgHAAQgGAAgFAHgAICDCQgIgJAAgQQAAgSAIgJQAHgJALAAQAMAAAGAJQAIAJAAARIAAADIgqAAQABALAFAGQAEAGAHAAQAKAAAFgOIAKACQgDAKgGAGQgHAFgJAAQgMAAgHgJgAIKCTQgEAGgBAJIAfAAQgBgJgDgFQgEgGgIAAQgGAAgEAFgAGJDGQgFgFgBgJQABgGACgEQADgFADgCQAFgDAIgBQAMgCAFgCIAAgDQAAgHgDgDQgDgEgHAAQgHAAgDADQgDADgCAHIgJgBQACgLAGgFQAGgFALAAQAJAAAFADQAFADABAFIABAOIAAAQIABAUIADAIIgKAAIgCgJQgFAFgFADQgFACgGAAQgIAAgFgFgAGbCsIgIADIgEADQgBADgBADQAAAFADACQADADAGAAQAFAAAEgCQAEgDACgEQACgFAAgIIAAgEQgFACgKACgAD2DCQgHgJAAgQQAAgSAHgJQAIgJALAAQALAAAHAJQAHAJAAARIAAADIgpAAQAAALAFAGQAFAGAGAAQALAAAEgOIAKACQgDAKgGAGQgGAFgKAAQgLAAgIgJgAD+CTQgEAGAAAJIAeAAQgBgJgCgFQgFgGgHAAQgGAAgFAFgACKDCQgHgJAAgXIAAg1IALAAIAAA1QAAANABAGQACAFAFADQAEADAHAAQAKAAAGgGQAEgGAAgSIAAg1IAKAAIAAA1QAAAOgCAJQgDAIgHAFQgHAFgKAAQgQAAgIgJgAE1DJQgDgCgBgEQgBgDAAgKIAAgnIgHAAIAAgJIAHAAIAAgQIAKgHIAAAXIAJAAIAAAJIgJAAIAAAoIAAAHQAAAAABABQAAAAABAAQAAAAABABQABAAAAAAIAFAAIABAKIgHABQgFAAgDgCgAMtDKIAAgrIgBgKQgBgDgCgCQgDgBgDAAQgGAAgEAEQgDAFAAALIAAAnIgJAAIAAgsQAAgIgDgEQgDgDgEAAQgHAAgEAFQgDAFAAAOIAAAjIgKAAIAAhEIAJAAIAAAKQADgGAEgCQAFgDAFAAQAGAAAEADQADADACAGQAEgGAEgDQAEgDAFAAQAJAAAEAFQAFAGgBALIAAAvgAJaDKIAAg7IgJAAIAAgJIAJAAIAAgHQgBgIACgEQACgEAEgCQADgCAFAAIAIABIgBAKIgFAAQgFAAgCACQgBACAAAGIAAAGIAKAAIAAAJIgKAAIAAA7gAHmDKIAAgpQAAgIgBgDQgBgEgDgBQgDgCgDAAQgHAAgFAFQgDAFAAAMIAAAlIgKAAIAAhEIAJAAIAAAKQADgGAFgCQADgDAHAAQAEAAAEACQADABACADQADADABAEQABAFAAAJIAAAqgAFvDKIAAgrQAAgJgDgEQgDgDgGAAQgGAAgEAFQgEAEAAANIAAAlIgJAAIAAhdIAJAAIAAAhQADgFAEgCQAEgCAGAAQAIAAAFAFQAGAGAAAPIAAArgADPDKIAAhEIAJAAIAAALQACgIAEgCQACgCADAAQAFAAAFADIgDALQgEgCgDAAQgDAAgCACQgDACgBAEQgBAGgBAHIAAAkgApRC8QgHgJAAgRQAAgLADgIQADgIAFgEQAGgEAHAAQAEAAAEACQAEADACAEIAAghIAKAAIAABdIgJAAIAAgJQgCAFgEADQgEACgFAAQgJAAgIgJgApKCOQgEAHgBANQABANAEAHQAEAGAHAAQAFAAAFgGQAFgGgBgNQABgOgFgGQgEgHgHAAQgGAAgEAGgAqMC8QgIgJAAgRQABgRAGgJQAIgJALAAQAMAAAGAJQAIAJAAAQQAAATgHAIQgIAJgLAAQgLAAgHgJgAqGCPQgEAGAAANQAAANAEAGQAFAHAHAAQAHAAAFgHQAEgGAAgNQAAgNgEgGQgFgHgHAAQgHAAgFAHgArHC8QgIgJAAgRQAAgRAHgJQAIgJALAAQALAAAHAJQAIAJAAAQQgBATgGAIQgIAJgLAAQgMAAgGgJgArBCPQgEAGAAANQAAANAEAGQAFAHAHAAQAHAAAEgHQAFgGAAgNQAAgNgFgGQgEgHgHAAQgHAAgFAHgAryDEIgShSIgDALIgQBHIgKAAIgVhdIALAAIAMA9IACATIAShQIANAAIALAvQAEARACAQIAEgVIALg7IAKAAIgVBdgAF5hLQgGgFAAgLIAJACQABAFADADQADADAGAAQAGAAAEgDQADgDABgGQABgEAAgLQgDAEgDADQgEACgFAAQgKAAgGgJQgIgJAAgQQAAgLADgIQAEgJAFgDQAGgEAGAAQAFAAAEACQAEADADAEIAAgIIAJAAIAAA7QAAAPgDAHQgCAGgGAEQgGAEgIAAQgLAAgFgGgAGAiWQgFAHAAAMQAAANAEAGQAEAGAHAAQAHAAAEgGQAEgGAAgNQAAgMgEgHQgFgGgGAAQgHAAgDAGgAI2h0IAJgCQABAHADADQAEAEAGAAQAGAAADgDQAEgDAAgFQgBgEgCgCQgCgCgIgCQgLgDgDgDQgEgCgCgEQgCgEAAgFQAAgIAGgGQAFgFAJAAQAHAAAEACQAFACACAEQADAEABAHIgJABQgBgLgLAAQgGAAgDADQgDACAAAEQAAAEADACQABABAJADQALADAEADQAEACACAEQABADAAAGQAAAJgGAGQgGAGgLAAQgTAAgDgVgAIAh0IAJgCQABAHADADQAFAEAFAAQAHAAADgDQADgDAAgFQAAgEgCgCQgDgCgIgCQgKgDgEgDQgEgCgCgEQgCgEAAgFQABgIAFgGQAGgFAJAAQAGAAAFACQAEACADAEQADAEABAHIgJABQgCgLgLAAQgFAAgEADQgDACAAAEQAAAEADACQACABAIADQAMADADADQAEACACAEQABADABAGQAAAJgHAGQgFAGgLAAQgUAAgDgVgAHKhkQgFgFgBgJQABgGACgEQACgFAEgCQAFgDAJgBQALgCAFgCIAAgDQAAgHgDgDQgDgEgHAAQgGAAgEADQgDADgCAHIgJgBQACgLAGgFQAGgFALAAQAJAAAFADQAFADABAFIACAOIAAAQIAAAUIADAIIgKAAIgCgJQgFAFgFADQgFACgGAAQgIAAgFgFgAHch+IgIADIgEADQgCADAAADQAAAFAEACQADADAFAAQAFAAAEgCQAEgDACgEQACgFAAgIIAAgEQgFACgKACgAEahoQgIgJAAgQQAAgSAIgJQAIgJAKAAQAMAAAGAJQAIAJgBARIAAADIgoAAQAAALAEAGQAFAGAHAAQALAAADgOIAKACQgCAKgHAGQgFAFgKAAQgMAAgHgJgAEiiXQgFAGAAAJIAfAAQgBgJgDgFQgEgGgIAAQgGAAgEAFgADqhhQgEgDgDgFIAAAJIgJAAIAAhdIAJAAIAAAhQADgFAEgCQAEgCAFAAQAHAAAEAEQAGAEADAHQAEAIAAAMQAAARgIAJQgHAJgJAAQgFAAgEgCgADoiVQgFAGAAANQAAAKACAFQABAFAEADQAEADAEAAQAGAAAEgHQAFgGgBgNQAAgNgEgHQgEgGgGAAQgGAAgEAHgAGwhgIAAhdIAJAAIAABdgAFRhgIAAhEIAJAAIAAALQADgIADgCQADgCADAAQAFAAAFADIgEALQgDgCgDAAQgEAAgCACQgDACAAAEQgCAGAAAHIAAAkgADDhgIAAhEIAKAAIAABEgACEhgIAAhdIAzAAIAAALIgpAAIAAAcIAkAAIAAALIgkAAIAAArgAqqh1QgHgJAAgRQAAgSAHgIQAHgJALAAQAJAAAGAFQAGAFABALIgJACQgBgHgDgDQgEgEgFAAQgGAAgEAGQgGAGAAAOQABAOAEAGQAFAGAGAAQAGAAADgEQAEgEABgJIAKACQgDAMgFAGQgHAGgJAAQgLAAgHgJgApWhtIgTgjIgGAIIAAAbIgKAAIAAhdIAKAAIAAA1IAWgcIAMAAIgVAZIAYArgArFhtIAAhEIAJAAIAABEgArphtIAAhEIAJAAIAAALQACgIAEgCQACgCADAAQAFAAAFADIgDALQgEgCgDAAQgDAAgCACQgDACgBAEQgBAGgBAHIAAAkgAsvhtIAAhdIAcAAQAKAAAFACQAFADADAGQADAGAAAGQAAAHgDAFQgCAFgGADQAHADADAFQAEAGABAJQAAAIgEAHQgEAGgFADQgGADgKAAgAslh4IATAAIAJgBQAEgCADgEQACgEAAgFQAAgGgCgDQgCgEgEgCQgDgBgJAAIgRAAgAslijIAQAAIAJgBQAEgBADgEQACgDAAgFQAAgFgCgDQgCgEgDgBIgMgBIgPAAgADDiwIAAgNIAKAAIAAANgArFi9IAAgNIAJAAIAAANg");
	this.shape.setTransform(-86,55.7);

	// Layer 1
	this.RadBut_4 = new lib.radiobutton();
	this.RadBut_4.setTransform(-37.9,71.1,1,1,0,0,0,61.1,8.6);

	this.RadBut_3 = new lib.radiobutton();
	this.RadBut_3.setTransform(-37.9,41.1,1,1,0,0,0,61.1,8.6);

	this.RadBut_2 = new lib.radiobutton();
	this.RadBut_2.setTransform(-131.9,70.5,1,1,0,0,0,61.1,8.6);

	this.RadBut_1 = new lib.radiobutton();
	this.RadBut_1.setTransform(-131.9,40.5,1,1,0,0,0,61.1,8.6);

	this.addChild(this.RadBut_1,this.RadBut_2,this.RadBut_3,this.RadBut_4,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-193.5,30.6,225.5,50.1);


(lib.arrowcopy2 = function() {
	this.initialize();

	// Layer 2
	this.arrT = new lib.arrTcopy2();
	this.arrT.setTransform(0,0.1,1,1.005);

	this.ahead = new lib.aheadcopy2();
	this.ahead.setTransform(-10,-0.1);

	this.addChild(this.ahead,this.arrT);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.4,-14,29.4,28.1);


(lib.arrowcopy = function() {
	this.initialize();

	// Layer 2
	this.arrT = new lib.arrTcopy();
	this.arrT.setTransform(0,0.1,1,1.005);

	this.ahead = new lib.aheadcopy();
	this.ahead.setTransform(-10,-0.1);

	this.addChild(this.ahead,this.arrT);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.4,-14,29.4,28.1);


(lib.arrow = function() {
	this.initialize();

	// Layer 2
	this.arrT = new lib.arrT();
	this.arrT.setTransform(0,0.1,1,1.005);

	this.ahead = new lib.ahead();
	this.ahead.setTransform(-10,-0.1);

	this.addChild(this.ahead,this.arrT);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.4,-14,29.4,28.1);


(lib.ww2 = function() {
	this.initialize();

	// Layer 5
	this.arrow_c = new lib.arrowcopy2();
	this.arrow_c.setTransform(89.2,-127.6,1,1,90);
	this.arrow_c.alpha = 0.699;

	this.arrow_w = new lib.arrowcopy();
	this.arrow_w.setTransform(97,-58.8,1.214,1,0,180,-145.4);
	this.arrow_w.alpha = 0.699;

	// Layer 4
	this.win_btn = new lib.window_btn();
	this.win_btn.setTransform(120.9,-64.3,1.011,1);

	// Layer 3
	this.window2 = new lib.window2();
	this.window2.setTransform(102,-54.9);

	// Layer 1
	this.l_btn = new lib.w_btn();
	this.l_btn.setTransform(201.6,0.3,1.011,1,0,0,-8.4);

	// Layer 2
	this.brick = new lib.brikD();
	this.brick.setTransform(47.4,-123.5,1,1,0,0,0,171.5,139);

	this.addChild(this.brick,this.l_btn,this.window2,this.win_btn,this.arrow_w,this.arrow_c);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.1,-157,360,172.6);


(lib.ww = function() {
	this.initialize();

	// Layer 4
	this.arrow_wall = new lib.arrow();
	this.arrow_wall.setTransform(281,-41.2,0.958,1,0,180,-129.2);
	this.arrow_wall.alpha = 0.699;

	this.arrow_w = new lib.arrowcopy();
	this.arrow_w.setTransform(149.8,-61,1.225,1,0,0,-35.3);
	this.arrow_w.alpha = 0.699;

	// Layer 3
	this.win_btn = new lib.window_btn();
	this.win_btn.setTransform(171.6,-49.4,1.011,1);

	this.window1 = new lib.window();
	this.window1.setTransform(151.5,-59.3);

	// Layer 1
	this.l_btn = new lib.w_btn();
	this.l_btn.setTransform(0,0,1.011,1);

	// Layer 2
	this.brick = new lib.brik();
	this.brick.setTransform(48.9,-122.9,1,1,0,0,0,171.5,139);

	this.addChild(this.brick,this.l_btn,this.window1,this.win_btn,this.arrow_w,this.arrow_wall);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.6,-127.8,360,144);


// stage content:
(lib.sim_07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 5
	this.val4 = new cjs.Text("188.6", "bold 12px 'Times New Roman'");
	this.val4.name = "val4";
	this.val4.textAlign = "center";
	this.val4.lineHeight = 14;
	this.val4.lineWidth = 29;
	this.val4.setTransform(424.3,420.8);

	this.sliderThumb4 = new lib.sliderThumb();
	this.sliderThumb4.setTransform(556.4,428.1);

	this.slidertrack4 = new lib.slidertrack();
	this.slidertrack4.setTransform(470.8,428.6,1.85,1);

	this.rbGroup2 = new lib.RbGroupMain();
	this.rbGroup2.setTransform(625.1,435.3,1,1,0,0,0,61.1,21.4);

	this.rbGroup3 = new lib.RbGroupMain_1();
	this.rbGroup3.setTransform(368.9,514.1,1,1,0,0,0,61.1,21.4);

	this.val3 = new cjs.Text("188.6", "bold 12px 'Times New Roman'");
	this.val3.name = "val3";
	this.val3.textAlign = "center";
	this.val3.lineHeight = 14;
	this.val3.lineWidth = 29;
	this.val3.setTransform(113.1,420.8);

	this.sliderThumb3 = new lib.sliderThumb();
	this.sliderThumb3.setTransform(245.3,428.1);

	this.slidertrack3 = new lib.slidertrack();
	this.slidertrack3.setTransform(159.7,428.6,1.85,1);

	this.rbGroup1 = new lib.RbGroupMain_2();
	this.rbGroup1.setTransform(329.9,435.3,1,1,0,0,0,61.1,21.4);

	this.val2_2 = new cjs.Text("188.6", "bold 12px 'Times New Roman'");
	this.val2_2.name = "val2_2";
	this.val2_2.textAlign = "center";
	this.val2_2.lineHeight = 14;
	this.val2_2.lineWidth = 29;
	this.val2_2.setTransform(413,359.7);

	this.val2 = new cjs.Text("188.6", "bold 12px 'Times New Roman'");
	this.val2.name = "val2";
	this.val2.textAlign = "center";
	this.val2.lineHeight = 14;
	this.val2.lineWidth = 29;
	this.val2.setTransform(354,359.7);

	this.sliderThumb2 = new lib.sliderThumb();
	this.sliderThumb2.setTransform(540.1,367);

	this.slidertrack2 = new lib.slidertrack();
	this.slidertrack2.setTransform(454.5,367.5,1.85,1);

	this.val1_2 = new cjs.Text("188.6", "bold 12px 'Times New Roman'");
	this.val1_2.name = "val1_2";
	this.val1_2.textAlign = "center";
	this.val1_2.lineHeight = 14;
	this.val1_2.lineWidth = 29;
	this.val1_2.setTransform(99.1,359.7);

	this.val1 = new cjs.Text("188.6", "bold 12px 'Times New Roman'");
	this.val1.name = "val1";
	this.val1.textAlign = "center";
	this.val1.lineHeight = 14;
	this.val1.lineWidth = 29;
	this.val1.setTransform(40.2,359.7);

	this.sliderThumb1 = new lib.sliderThumb();
	this.sliderThumb1.setTransform(226.3,367);

	this.slidertrack1 = new lib.slidertrack();
	this.slidertrack1.setTransform(140.7,367.5,1.85,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AQgmKIFDAAIAAC0IlDAAgAZumKIFDAAIAAC0IlDAAgEgghgGKIFEAAIAAC0IlEAAgA3TmKIFDAAIAAC0IlDAAgA1HDXIFDAAIAAC0IlDAAgAbfDXIFDAAIAAC0IlDAAg");
	this.shape.setTransform(233.2,396.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.slidertrack1},{t:this.sliderThumb1},{t:this.val1},{t:this.val1_2},{t:this.slidertrack2},{t:this.sliderThumb2},{t:this.val2},{t:this.val2_2},{t:this.rbGroup1},{t:this.slidertrack3},{t:this.sliderThumb3},{t:this.val3},{t:this.rbGroup3},{t:this.rbGroup2},{t:this.slidertrack4},{t:this.sliderThumb4},{t:this.val4}]},1).wait(1));

	// Layer 11
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AHlOHIgBgLIAHAAQAEABADgCQACgBABgCIAEgKIABgDIgbhJIANAAIAPArIAGARIAEgRIAQgrIAMAAIgcBKIgHAQQgDAHgEACQgEADgGAAIgIgBgAIrOHIAAhlIAMAAIAAAKQAEgGAFgDQAFgCAHAAQAJAAAIAEQAGAGAEAIQAEAJAAAKQAAALgEAJQgEAJgIAFQgHAFgJgBQgGAAgFgCQgFgDgDgEIAAAkgAI9MyQgGAHAAAOQAAAOAFAHQAGAGAJAAQAHAAAGgHQAGgGAAgPQAAgOgGgGQgFgIgIABQgIAAgGAHgAJ/NjQgJgKAAgSQAAgSAJgKQAJgKAPAAQAPAAAJAKQAKAKgBARIAAAEIg2AAQABAMAGAGQAGAGAKAAQAGABAFgEQAEgEAEgHIAMABQgDALgIAHQgIAFgNAAQgPAAgKgJgAKKMxQgHAFAAAJIApAAQgBgIgEgFQgGgHgKAAQgIAAgFAGgADqNjQgKgKAAgTQAAgTAMgKQAJgIANAAQAPAAAJAKQAKAKAAAQQAAAOgEAJQgEAIgIAEQgIAFgKgBQgPAAgJgJgADzMyQgGAHAAANQAAAPAGAGQAGAHAJAAQAKAAAFgHQAHgGAAgPQAAgNgHgHQgFgHgKAAQgJAAgGAHgACiNoQgHgFgFgJQgDgIgBgLQABgLADgJQAEgJAHgFQAHgEAJAAQAGAAAGACQAFADADAFIAAgkIAMAAIAABkIgLAAIAAgJQgHAKgOAAQgIABgHgFgACkMyQgFAGAAAPQAAAOAGAGQAFAHAJAAQAIAAAFgGQAGgHAAgNQAAgPgGgHQgFgHgJAAQgIAAgGAHgAHHNqQgDgDgBgDQgCgDAAgLIAAgqIgJAAIAAgKIAJAAIAAgSIAMgHIAAAZIAMAAIAAAKIgMAAIAAArQAAAEABACIACADIAEABIAFgBIADALIgKABQgHAAgEgCgALLNrIAAgOIAOAAIAAAOgAFqNrIgPg4IgOA4IgNAAIgWhJIAMAAIAQA6IAEgPIAMgrIAMAAIAPA4IARg4IAMAAIgXBJgAB3NrIAAgsQAAgIgBgDQgCgEgDgDQgEgCgFAAQgHAAgGAGQgGAFAAAOIAAAnIgMAAIAAhJIALAAIAAAKQAIgLAPAAQAHAAAFACQAGADACAEQADADABAGIAAALIAAAtgAAqNrIAAhJIAMAAIAABJgAgHNrIgWhMIgDgMIgCAMIgWBMIgNAAIgbhkIAOAAIAPBBIAFAVIAEgSIAThEIAQAAIAOAzQAFASADARIADgWIAQhAIANAAIgcBkgALLMxIAAgPIAOAAIAAAPgAAqMVIAAgOIAMAAIAAAOgAakAeQgIgJAAgPQgBgIAEgHQADgIAHgEQAHgDAIgBQAKAAAHAGQAGAEACAKIgLABQgBgFgDgEQgEgDgFAAQgJAAgFAGQgEAGAAAKQAAANAEAFQAFAGAIgBQAGABAEgEQAEgEACgIIAKACQgCAKgHAHQgHAFgKAAQgNAAgHgIgA2CAeQgIgJAAgPQAAgIADgHQAEgIAGgEQAIgDAHgBQALAAAGAGQAHAEACAKIgLABQgCgFgDgEQgEgDgFAAQgIAAgFAGQgFAGAAAKQAAANAFAFQAFAGAHgBQAHABADgEQAFgEABgIIAKACQgBAKgHAHQgIAFgKAAQgMAAgIgIgAR6AgQgIgGgCgLIAMgDQABAHAFAFQAFAEAIgBQAJAAAEgDQAEgDAAgFQAAgEgDgCIgNgFQgOgDgFgCQgFgBgDgFQgCgEgBgGQAAgEACgFQADgDADgDQAEgCAEgBQAFgCAGAAQAIAAAHACQAHADADAEQADAEABAHIgMACQgBgGgEgDQgEgDgHAAQgIAAgEACQgDADAAAEQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAIAEAEIALADIASAGQAGAAACAEQAEAEAAAHQAAAGgEAGQgEAFgHADQgGACgJAAQgOAAgHgFgAQ0AgQgIgGgCgLIANgDQAAAHAFAFQAFAEAJgBQAIAAAEgDQAEgDAAgFQAAgEgEgCIgMgFQgOgDgFgCQgFgBgDgFQgDgEAAgGQAAgEADgFQACgDADgDQAEgCAEgBQAFgCAGAAQAJAAAGACQAGADADAEQADAEACAHIgMACQgBgGgEgDQgEgDgHAAQgJAAgDACQgEADABAEQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAIAEAEIAMADIASAGQAEAAAEAEQADAEAAAHQgBAGgDAGQgDAFgIADQgGACgIAAQgPAAgHgFgAPnAcQgKgKAAgRQAAgRAKgKQAJgKAPAAQAPAAAJAKQAJAKAAAQIAAADIg2AAQAAAMAHAGQAFAGAKAAQAGAAAGgDQAEgDADgJIAMACQgDAMgHAFQgJAHgNgBQgPAAgJgJgAPxgVQgGAGgBAJIApAAQgBgJgEgEQgFgHgKAAQgIAAgGAFgAMMAcQgIgKgBgSQABgKAEgIQAEgKAHgEQAIgEAJAAQAMAAAIAGQAHAFACALIgMACQgBgGgFgFQgEgDgGAAQgKAAgFAHQgGAGAAANQAAAOAFAHQAGAGAJAAQAIAAAEgEQAGgEAAgJIAMABQgBANgJAGQgHAIgNgBQgOAAgKgJgA+sAgQgHgGgCgLIAMgDQABAHAEAFQAGAEAIgBQAJAAADgDQAEgDABgFQAAgEgEgCIgMgFQgOgDgFgCQgGgBgCgFQgDgEAAgGQAAgEACgFQACgDAEgDQADgCAFgBQAFgCAFAAQAJAAAGACQAHADADAEQADAEACAHIgNACQgBgGgDgDQgFgDgGAAQgJAAgEACQgDADAAAEQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAIAFAEIALADIASAGQAFAAADAEQADAEAAAHQAAAGgDAGQgEAFgHADQgHACgIAAQgOAAgIgFgA/xAgQgIgGgCgLIAMgDQABAHAEAFQAGAEAIgBQAJAAADgDQAFgDAAgFQgBgEgDgCIgMgFQgPgDgEgCQgFgBgEgFQgCgEAAgGQAAgEACgFQADgDADgDQADgCAFgBQAFgCAGAAQAIAAAGACQAHADADAEQADAEACAHIgMACQgCgGgEgDQgEgDgGAAQgJAAgEACQgDADAAAEQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAIAFAEIALADIASAGQAFAAADAEQADAEAAAHQAAAGgDAGQgEAFgHADQgGACgJAAQgPAAgGgFgEgg/AAcQgJgKAAgRQAAgRAJgKQAKgKAPAAQAOAAAJAKQAJAKAAAQIAAADIg2AAQABAMAGAGQAGAGAKAAQAGAAAFgDQAFgDADgJIAMACQgDAMgIAFQgIAHgNgBQgQAAgJgJgEgg1gAVQgFAGgBAJIApAAQgCgJgDgEQgGgHgJAAQgJAAgGAFgEgkZAAcQgJgKAAgSQAAgKAEgIQAEgKAIgEQAIgEAJAAQAMAAAIAGQAHAFACALIgMACQgCgGgEgFQgEgDgHAAQgJAAgFAHQgHAGAAANQABAOAFAHQAGAGAJAAQAHAAAFgEQAFgEABgJIAMABQgCANgIAGQgIAIgMgBQgPAAgJgJgAclAlIAAglIgBgJQgBgDgDgCQgCgBgEgBQgHABgEAEQgEAEAAAIIAAAkIgLAAIAAgmQAAgIgCgDQgDgDgGgBQgEABgEACQgEACgCAEQgCAFABAGIAAAhIgLAAIAAg8IAKAAIAAAIQADgEAEgDQAFgCAGgBQAHABAEACQAFADACAFQAHgLAMAAQAKAAAEAGQAFAFAAAKIAAApgA0BAlIAAglIgBgJIgDgFQgDgBgEgBQgGABgEAEQgFAEAAAIIAAAkIgLAAIAAgmQABgIgDgDQgDgDgFgBQgFABgEACQgEACgCAEQgBAFAAAGIAAAhIgLAAIAAg8IAKAAIAAAIQADgEAFgDQAFgCAFgBQAIABAEACQAEADACAFQAIgLALAAQAKAAAFAGQAEAFAAAKIAAApgAS/AkIAAgOIANAAIAAAOgAPCAkIAAgqQAAgIgCgDQgBgEgDgDQgEgBgFAAQgIAAgGAEQgFAGAAAOIAAAlIgNAAIAAhGIAMAAIAAAJQAHgLAPAAQAHAAAGACQAFADACAEQAEADABAGIAAALIAAArgAN7AkIgZgkIgIAHIAAAdIgMAAIAAhiIAMAAIAAA5IAcgdIARAAIgcAbIAeArgALoAkIAAhGIANAAIAABGgALJAkIAAgsQAAgJgEgFQgEgDgIAAQgFgBgFADQgFADgCAFQgCAEAAAKIAAAlIgMAAIAAhiIAMAAIAAAkQAJgKAOAAQAIAAAFADQAGADADAFQACAHAAAKIAAAsgAJgAkIAAhXIggAAIAAgLIBOAAIAAALIggAAIAABXgA9nAkIAAgOIAOAAIAAAOgEghjAAkIAAgqQgBgIgBgDQgCgEgDgDQgEgBgFAAQgHAAgGAEQgGAGAAAOIAAAlIgMAAIAAhGIALAAIAAAJQAIgLAPAAQAGAAAGACQAGADACAEQADADABAGIAAALIAAArgEgirAAkIgYgkIgJAHIAAAdIgMAAIAAhiIAMAAIAAA5IAdgdIAQAAIgcAbIAfArgEgk9AAkIAAhGIAMAAIAABGgEgldAAkIAAgsQAAgJgDgFQgFgDgHAAQgFgBgFADQgFADgCAFQgCAEAAAKIAAAlIgMAAIAAhiIAMAAIAAAkQAJgKANAAQAIAAAGADQAFADADAFQADAHAAAKIAAAsgEgnFAAkIAAhXIghAAIAAgLIBPAAIAAALIghAAIAABXgAS/gVIAAgNIANAAIAAANgA9ngVIAAgNIAOAAIAAANgALogwIAAgOIANAAIAAAOgEgk9gAwIAAgOIAMAAIAAAOgAtxjJQgKgJABgTQgBgUAMgKQAJgIANAAQAPAAAKAKQAJAKAAARQAAAOgDAJQgFAHgIAEQgIAFgKAAQgOAAgKgKgAtnj6QgHAIABANQgBAOAHAHQAGAHAIAAQAKAAAGgHQAGgHAAgOQAAgNgGgIQgGgHgKAAQgIAAgGAHgAwHjEQgHgHAAgJQAAgFACgFQADgEAEgDIAIgDIALgCQAPgCAIgDIAAgDQgBgHgDgDQgEgFgKAAQgIAAgFAEQgEACgCAJIgMgCQACgIADgFQAFgFAGgCQAIgCAJgBQAJAAAGACQAGACADAEQADAEAAAFIABAKIAAARQAAARABAFQABAEACAEIgNAAQgCgDAAgGQgHAHgHABQgGADgHAAQgMAAgGgFgAvvjgIgMACQgDACgBACQgCADAAADQAAAFAEADQADADAIAAQAHAAAGgDQAFgDADgFQACgFAAgHIAAgFQgHADgNACgAxqjCQgGgCgDgDQgCgEgBgFIgBgMIAAgtIANAAIAAAoIAAANQABAFAEADQAEACAFAAQAGAAAFgDQAEgCACgFQADgFAAgJIAAgnIAMAAIAABIIgLAAIAAgKQgIAMgPAAQgHAAgFgDgAy4jEQgIgHgCgLIANgCQAAAHAFAEQAFAEAJAAQAIAAAEgEQAEgDAAgFQAAgDgEgDIgMgEQgOgDgFgDQgFgDgDgEQgDgFAAgFQABgEACgFQACgEADgCQAEgDAEgBQAFgBAGgBQAJAAAGACQAGADADAEQADAEACAHIgMADQgBgHgEgCQgEgEgHAAQgJABgDACQgEADABADQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABIAEADIAMADIASAGQAEACAEAFQADAEAAAGQgBAGgDAGQgDAFgIADQgGADgIAAQgPAAgHgFgA3bjEQgGgHAAgJQAAgFADgFQACgEAEgDIAIgDIALgCQAQgCAHgDIAAgDQgBgHgDgDQgEgFgKAAQgIAAgEAEQgFACgCAJIgMgCQACgIADgFQAEgFAHgCQAIgCAJgBQAJAAAGACQAGACADAEQACAEABAFIABAKIAAARQAAARABAFQABAEACAEIgNAAQgCgDgBgGQgG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");
	this.shape_1.setTransform(278.7,428.8);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(2,1,1).p("EAu8gUhQgFi+jDAAMhXnAAAQjIAAAADIMAAAAovQAADIDIAAMBXnAAAQDIAAAAjIMAAAgovQAAgFAAgFg");
	this.shape_2.setTransform(320,164.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#999999").ss(2,1,1).p("EAwggHNIAAnnQAAjIjIAAMhavAAAQjIAAAADIIAAHnEgwfAGuIAAIHQAADIDIAAMBavAAAQDIAAAAjIIAAoHEAwgAGrIAAt1EgwfgHKIAAN1");
	this.shape_3.setTransform(320,438);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EhTGA2NMAAAhsZMCmNAAAMAAABsZgEgzxgdCMAAAAovQAADIDIAAMBXoAAAQDIAAAAjIMAAAgovIAAgKQgFi+jDAAMhXoAAAQjIAAAADIg");
	this.shape_4.setTransform(351,220);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1).to({_off:false},0).wait(1));

	// Layer 3
	this.text_Warea = new cjs.Text("10.76 4.0m (43.1 ft)", "12px 'Arial'");
	this.text_Warea.name = "text_Warea";
	this.text_Warea.lineHeight = 14;
	this.text_Warea.lineWidth = 217;
	this.text_Warea.setTransform(60.6,133.5);

	this.text_height = new cjs.Text("Height 2.5 m (8.2 ft)", "12px 'Arial'", "#FFFFFF");
	this.text_height.name = "text_height";
	this.text_height.textAlign = "center";
	this.text_height.lineHeight = 14;
	this.text_height.lineWidth = 129;
	this.text_height.setTransform(358.3,144.5);

	this.text_ceiling = new cjs.Text("Ceiling heat flow 2400 W", "12px 'Arial'");
	this.text_ceiling.name = "text_ceiling";
	this.text_ceiling.lineHeight = 14;
	this.text_ceiling.lineWidth = 217;
	this.text_ceiling.setTransform(60.6,108.5);

	this.text_windows = new cjs.Text("Windows heat flow 536 W", "12px 'Arial'");
	this.text_windows.name = "text_windows";
	this.text_windows.lineHeight = 14;
	this.text_windows.lineWidth = 217;
	this.text_windows.setTransform(60.6,83.5);

	this.text_wall = new cjs.Text("Wall heat flow 10320 W", "12px 'Arial'");
	this.text_wall.name = "text_wall";
	this.text_wall.lineHeight = 14;
	this.text_wall.lineWidth = 217;
	this.text_wall.setTransform(60.6,56.5);

	this.text_total = new cjs.Text("Total heat flow 13256 W", "bold 12px 'Arial'");
	this.text_total.name = "text_total";
	this.text_total.lineHeight = 14;
	this.text_total.lineWidth = 217;
	this.text_total.setTransform(40.6,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_total},{t:this.text_wall},{t:this.text_windows},{t:this.text_ceiling},{t:this.text_height},{t:this.text_Warea}]},1).wait(1));

	// Layer 4
	this.h_btn = new lib.w_btn();
	this.h_btn.setTransform(397,177);
	this.h_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.h_btn).wait(1).to({_off:false},0).wait(1));

	// action
	this.w_l = new lib.ww();
	this.w_l.setTransform(102.2,235.5,1.011,1,0,0,12);
	this.w_l._off = true;

	this.timeline.addTween(cjs.Tween.get(this.w_l).wait(1).to({_off:false},0).wait(1));

	// Layer 6
	this.w_w = new lib.ww2();
	this.w_w.setTransform(554.9,207.6,0.906,1,0,0,-30,202.6,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A8A8A8").s().p("AhEBGIAAiLICJAAIAACLg");
	this.shape_5.setTransform(50.8,143.8);

	this.instance = new lib.aheadcopy2();
	this.instance.setTransform(50,119.4,0.8,0.8,0,0,0,-9.9,0.2);
	this.instance.alpha = 0.699;

	this.instance_1 = new lib.aheadcopy();
	this.instance_1.setTransform(50,93.4,0.8,0.8,0,0,0,-9.9,0.2);
	this.instance_1.alpha = 0.699;

	this.instance_2 = new lib.ahead();
	this.instance_2.setTransform(50,66.4,0.8,0.8,0,0,0,-9.9,0.2);
	this.instance_2.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_5},{t:this.w_w}]},1).wait(1));

	// Layer 7
	this.text_length = new cjs.Text("length 10.0 m  (32.8 ft)", "12px 'Arial'", "#FFFFFF");
	this.text_length.name = "text_length";
	this.text_length.lineHeight = 14;
	this.text_length.lineWidth = 217;
	this.text_length.setTransform(152.6,279.5);

	this.text_width = new cjs.Text("Width 8.0 m (26.2 ft)", "12px 'Arial'", "#FFFFFF");
	this.text_width.name = "text_width";
	this.text_width.textAlign = "center";
	this.text_width.lineHeight = 14;
	this.text_width.lineWidth = 217;
	this.text_width.setTransform(500,273.5);

	this.roof = new lib.roof();
	this.roof.setTransform(409,167.6,0.999,0.999,0,60.2,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.roof},{t:this.text_width},{t:this.text_length}]},1).wait(1));

	// Layer 9
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFFF","#336600"],[0,1],-0.2,-109.6,0.4,117.5).s().p("EgsWATNMAAAgmZMBYtAAAMAAAAmZg");
	this.shape_6.setTransform(321,185);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;