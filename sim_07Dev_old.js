//this part the general for all files_______________________

var canvas, stage, exportRoot;



function init() {
	canvas = document.getElementById("canvas");
	images = images||{};
	
		//__Preloading_______________________________________	
	stage = new createjs.Stage(canvas);
	 var preloader_text = new createjs.Text("Loading", "20px 'MS Reference Sans Serif'", "#6E8AB6");
	preloader_text.name = "preloader_text";
	preloader_text.textAlign = "center";
	preloader_text.lineHeight = 22;
	preloader_text.lineWidth = 167;
	preloader_text.setTransform(268,227);  
  stage.addChild(preloader_text);
  stage.update();
	
	//__Preloading_______________________________________

	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete() {
exportRoot = new lib.sim_07();

	stage = new createjs.Stage(canvas);
	//here we change the name for the current

	var touchDev;
	if (BrowserDetect.version != touchDevice) {
		touchDev = false;
		stage.enableMouseOver();
	} else {
		touchDev = true;

	}

	var touchDevice = (window.hasOwnProperty('ontouchstart'));

	if (BrowserDetect.browser == 'Explorer' && BrowserDetect.version == 10 && !touchDevice) {
	} else {
		createjs.Touch.enable(stage, false, true);
	}

	stage.addChild(exportRoot);
	stage.update();
	stage.enableMouseOver();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
	//______________________________________________________________________
	//______________________________________________________________________
exportRoot.gotoAndStop(1);
var text_total = exportRoot.text_total;
var text_wall = exportRoot.text_wall;
var text_windows = exportRoot.text_windows;
var text_ceiling = exportRoot.text_ceiling;
var text_Warea = exportRoot.text_Warea;
var text_height = exportRoot.text_height;
var text_length = exportRoot.text_length;
var text_width = exportRoot.text_width;

var roof = exportRoot.roof;
var w_l = exportRoot.w_l;
var w_w = exportRoot.w_w;
var h_btn = exportRoot.h_btn;

var sliderThumb1 = exportRoot.sliderThumb1;
var sliderThumb2 = exportRoot.sliderThumb2;
var sliderThumb3 = exportRoot.sliderThumb3;
var sliderThumb4 = exportRoot.sliderThumb4;

var slidertrack1 = exportRoot.slidertrack1;
var slidertrack2 = exportRoot.slidertrack2;
var slidertrack3 = exportRoot.slidertrack3;
var slidertrack4 = exportRoot.slidertrack4;

var val1 = exportRoot.val1;
var val1_2 = exportRoot.val1_2;
var val2 = exportRoot.val2;
var val2_2 = exportRoot.val2_2;
var val3 = exportRoot.val3;
var val4 = exportRoot.val4;

var rbGroup1 = exportRoot.rbGroup1;
var rbGroup2 = exportRoot.rbGroup2;
var rbGroup3 = exportRoot.rbGroup3;

var h_y = h_btn.y;
var thermal_conductivity_wall = 0.6;
var thermal_conductivity_ceiling = 0.15;
var thermal_conductivity_window = 6.7;
var roof_y = roof.y;

var window_H = 20;
var window_W = 40;

var winYdrag = false;
var winXdrag = false;
var l = false;
var w = false;
var h= false;

var l_wall = 300;
var w_wall = 200;
var h_wall = 120;
var w_length;
var w_width;
var w_height;
var win_area;
var win_area1;
var win_area2;
var dT;
var ceiling_flow;
var window_flow;
var wall_flow;
var window_flow1;
var window_flow2;
var total;

var scaleH1;


w_l.l_btn.x = 100;
w_w.l_btn.x = 160;
h_btn.y = h_y+70;


mask1 = new createjs.Shape();
mask1.graphics.beginFill("#ff0000").drawRect(w_l.l_btn.x, 0, l_wall - w_l.l_btn.x, -(h_wall+h_y-h_btn.y));


var scaleH1 = h_wall+h_y-h_btn.y;

w_l.brick.mask = mask1;

mask2 = new createjs.Shape();
mask2.graphics.beginFill("#ff0000").drawRect(0, 0, w_w.l_btn.x, -(h_wall+h_y-h_btn.y));


w_w.brick.mask = mask2;

rbGroup1.RadBut_1.gotoAndStop(2);
thermal_conductivity_wall = 0.6;

rbGroup2.RadBut_1.gotoAndStop(2);
thermal_conductivity_ceiling = 0.15;

rbGroup3.RadBut_1.gotoAndStop(2);
thermal_conductivity_window = 6.7;

val1.text = "0.0";
val2.text = "0.0";
val3.text = "10.0";
val4.text = "10.0";

sliderThumb1.x = slidertrack1.x + 148/2;
sliderThumb2.x = slidertrack2.x + 148/2;
sliderThumb3.x = slidertrack3.x + 148/498*10;
sliderThumb4.x = slidertrack4.x + 148/498*10;


stage.update();
update_House();


function update_House(){

roof.tr1.x = w_l.l_btn.x - l_wall;
roof.y = h_btn.y;
roof.x = h_btn.x;
roof.rMiddle.scaleX =  (l_wall - w_l.l_btn.x)/300;
roof.scaleY =  (w_w.l_btn.x - 0.1*w_w.l_btn.x)/200;

w_l.window1.x = (l_wall+w_l.l_btn.x)/2;
w_l.window1.y = -(h_wall+h_y-h_btn.y)/2;

//w_l.win_btn.x =w_l.window1.x+window_W/2 ;
//w_l.win_btn.y =w_l.window1.y + window_H/2;

   w_l.win_btn.x = w_l.window1.x + w_l.window1.scaleX *window_W/2;
   w_l.win_btn.y = w_l.window1.y + w_l.window1.scaleY *window_H/2;

w_l.arrow_w.x = w_l.window1.x; 
w_l.arrow_w.y = w_l.window1.y;


w_w.window2.x= w_w.l_btn.x/2;
w_w.window2.y= -(h_wall+h_y-h_btn.y)/2;


//w_w.win_btn.x =w_w.window2.x+window_W/2 ;
//w_w.win_btn.y =w_w.window2.y - window_H/2;

   w_w.win_btn.x = w_w.window2.x + w_w.window2.scaleX *window_W/2;
   w_w.win_btn.y = w_w.window2.y - w_w.window2.scaleY *window_H/2;

w_w.arrow_w.x = w_w.window2.x;
w_w.arrow_w.y = w_w.window2.y;

w_l.arrow_wall.y = -(h_wall+h_y-h_btn.y)/2;
w_l.arrow_wall.x = 300;

w_w.arrow_c.x = w_w.window2.x;
w_w.arrow_c.y = -(h_wall+h_y-h_btn.y);
text_height.y =h_btn.y - 30; 



stage.update();
transformation();
}

//________________________________________________________________
w_l.l_btn.addEventListener("pressmove", l_drag);
w_l.l_btn.addEventListener("pressup", l_drag);

function l_drag(event){
	event.nativeEvent.preventDefault();   

  event.currentTarget.x = event.stageX -100;	

  if(event.currentTarget.x > 200){	
	    		event.currentTarget.x= 200;
	    	} 
	 if(event.currentTarget.x <0){	
	    		event.currentTarget.x= 0;
	    	}  
		

	if( event.currentTarget.x > w_l.window1.x - w_l.window1.scaleX * 20){
		       event.currentTarget.x = w_l.window1.x - w_l.window1.scaleX * 20;
	   
	   }else{
	   		mask1 = new createjs.Shape();
mask1.graphics.beginFill("#ff0000").drawRect(w_l.l_btn.x, 0, l_wall - w_l.l_btn.x, -(h_wall+h_y-h_btn.y));

scaleH1 = h_wall+h_y-h_btn.y;

w_l.brick.mask = mask1;
	   	 update_House();
	  } 
	 
	stage.update();

}


w_l.win_btn.addEventListener("pressmove", wy_drag);
w_l.win_btn.addEventListener("pressup", wy_drag);

function wy_drag(event){
	event.nativeEvent.preventDefault();  

var t = event.currentTarget.x  - w_l.window1.x;

event.currentTarget.x = event.stageX - 98.55; 
     
    if(event.currentTarget.x < w_l.window1.x){   		  
	    		event.currentTarget.x= w_l.window1.x;
	    	} 
	  if(event.currentTarget.x > 300){	
	    		event.currentTarget.x= 300;
	    	}
    
  
event.currentTarget.y = event.stageY - 281.05 - t*0.05;

     if(event.currentTarget.y < w_l.window1.y){   		  
	    		event.currentTarget.y= w_l.window1.y;
	    	} 
      
    if(event.currentTarget.y > 0){	
	  	   
event.currentTarget.y= 0;
	    	}
w_l.window1.scaleX = (w_l.win_btn.x -w_l.window1.x)*2/40;
w_l.window1.scaleY = (scaleH1/2 +w_l.win_btn.y )*2/20;

update_House();
transformation();

 stage.update();

}


w_w.win_btn.addEventListener("pressmove", wx_drag);
w_w.win_btn.addEventListener("pressup", wx_drag);

function wx_drag(event){
	event.nativeEvent.preventDefault();
 
 var t = event.currentTarget.x  - w_w.window2.x;

 event.currentTarget.x = event.stageX - 365.95; 
  

  if(event.currentTarget.x < w_w.window2.x+9){   		  
	    		event.currentTarget.x= w_w.window2.x+9;
	    	} 
	  if(event.currentTarget.x > w_w.l_btn.x){	
	    		event.currentTarget.x= w_w.l_btn.x;
	    	}
    event.currentTarget.y = event.stageY -250 + t*0.2;
  
   if(event.currentTarget.y > w_w.window2.y){   		  
	    		event.currentTarget.y = w_w.window2.y;
	    	} 
      
    if(event.currentTarget.y < -(h_wall+h_y-h_btn.y)){	
	  	   
event.currentTarget.y= -(h_wall+h_y-h_btn.y);
	    	}
   	
w_w.window2.scaleX = (w_w.win_btn.x -w_w.window2.x)*2/40;
w_w.window2.scaleY = -(scaleH1/2 +w_w.win_btn.y )*2/20;

update_House();
transformation();

 stage.update();

}

h_btn.addEventListener("pressmove", h_drag);
h_btn.addEventListener("pressup", h_drag);

function h_drag(event){
	event.nativeEvent.preventDefault();  
	event.currentTarget.y = event.stageY;

	 if(event.currentTarget.y < h_y){	
	    		event.currentTarget.y = h_y;
	    	} 
   if(event.currentTarget.y > h_y + 80){	
	    		event.currentTarget.y = h_y + 80;
	    	} 


	if(-h_wall - h_y + h_btn.y > w_l.window1.y - w_l.window1.scaleY *window_H/2 ){	
	    		h_btn.y = w_l.window1.y - w_l.window1.scaleY *window_H/2 + h_wall + h_y;
	    	} 

  if(-h_wall - h_y + h_btn.y > w_w.win_btn.y){	
	    		h_btn.y = w_w.win_btn.y + h_wall + h_y;

	    	} else{

   mask1 = new createjs.Shape();
   mask1.graphics.beginFill("#ff0000").drawRect(w_l.l_btn.x, 0, l_wall - w_l.l_btn.x, -(h_wall+h_y-h_btn.y));
   scaleH1 = h_wall+h_y-h_btn.y;
   w_l.brick.mask = mask1;
   mask2 = new createjs.Shape();
   mask2.graphics.beginFill("#ff0000").drawRect(0, 0, w_w.l_btn.x, -(h_wall+h_y-h_btn.y));

    w_w.brick.mask = mask2;

update_House();
transformation();
    }
 
   }


w_w.l_btn.addEventListener("pressmove", w_drag);
w_w.l_btn.addEventListener("pressup", w_drag);

function w_drag(event){
	event.nativeEvent.preventDefault(); 
	event.currentTarget.x = event.stageX -370;	

  if(event.currentTarget.x > 200){	
	    		event.currentTarget.x= 200;
	    	} 
	 if(event.currentTarget.x <80){	
	    		event.currentTarget.x= 80;
	    	}  
	    	
if( event.currentTarget.x < w_w.window2.x + w_w.window2.scaleX * 20){
		       event.currentTarget.x = w_w.window2.x + w_w.window2.scaleX * 20;

	   }

mask2 = new createjs.Shape();
mask2.graphics.beginFill("#ff0000").drawRect(0, 0, w_w.l_btn.x, -(h_wall+h_y-h_btn.y));

w_w.brick.mask = mask2;
scaleH1 = h_wall+h_y-h_btn.y;

update_House();
transformation();
stage.update();
   }

//_______________________________________________________


//sliders______________________________________________	


var zeroP;
 
sliderThumb1.addEventListener("pressmove", sliding1); 
//slider1.sliderThumb.addEventListener("pressup", inDoorToOutdoor); 
 
  function sliding1(event){
	    event.nativeEvent.preventDefault();
	    zeroP = slidertrack1.x;
	     event.currentTarget.x = event.stageX;
	  sliderDrag(1,-400,800,0.1,1,148, zeroP);
   } 
 
/* function inDoorToOutdoor(event){
	   if(Number(slider1.val.text) > Number(slider2.val.text)){
	     slider2.val.text = slider1.val.text;
	     slider2.val2.text = my_round(9/5*Number(slider2.val.text)+32,1);
	     slider2.sliderThumb.x = slider1.sliderThumb.x;	 
	  }
   } */

 
sliderThumb2.addEventListener("pressmove", sliding2); 
//slider2.sliderThumb.addEventListener("pressup", inDoorToOutdoor); 
 
  function sliding2(event){
	    event.nativeEvent.preventDefault();
	    zeroP = slidertrack2.x;
	     event.currentTarget.x = event.stageX;
	  sliderDrag(2,-400,800,0.1,1,148, zeroP);
   } 

sliderThumb3.addEventListener("pressmove", sliding3); 
 
  function sliding3(event){
	    event.nativeEvent.preventDefault();
	    zeroP = slidertrack3.x;
	     event.currentTarget.x = event.stageX;
	  sliderDrag(3,2,498,1,0,148,zeroP);
   } 
 
sliderThumb4.addEventListener("pressmove", sliding4); 
 
  function sliding4(event){
	    event.nativeEvent.preventDefault();
	    zeroP = slidertrack4.x;
	     event.currentTarget.x = event.stageX;
	  sliderDrag(4,2,498,1,0,148,zeroP);
   } 

function sliderDrag(sliderNum, shift, area, step, rounding, sliderTrackWidth, zeroP) {

	 
		if (stage.mouseX < zeroP)  
		{
			exportRoot["sliderThumb" + sliderNum].x = zeroP;
		}
		if (stage.mouseX > zeroP + sliderTrackWidth)
		{ 
			exportRoot["sliderThumb" + sliderNum].x = zeroP + sliderTrackWidth;
		}
 percent = (exportRoot["sliderThumb" + sliderNum].x - zeroP)/sliderTrackWidth*area;   

  exportRoot["val" + sliderNum].text = my_round((percent + shift) * step,rounding).toString();
          
           if(Number(val1.text) > Number(val2.text)){
	     val2.text = val1.text;
	     val2_2.text = my_round(9/5*Number(val2.text)+32,1);
	     sliderThumb2.x = sliderThumb1.x - slidertrack1.x + slidertrack2.x;	 
	  }    
	      
	       stage.update();
        transformation();
 }


//radioButtons______________________________________________	
 var rbValue1;
for(var i = 1; i<= 4; i++){
			 	rbGroup1["RadBut_" + i].name = "RadBut_" + i;
				 rbGroup1["RadBut_" + i].addEventListener("click", rbOn1); 
	         }

	  function rbOn1(event) {
	  	event.nativeEvent.preventDefault();
             for(var i = 1; i<= 4; i++){
				  rbGroup1["RadBut_" + i].gotoAndStop (0); 
			     }
				 
				 event.currentTarget.gotoAndStop(2);				  
				rbValue1 =  event.currentTarget.name.substr(7,8);
				
if (rbValue1 =="1") {
		w_l.brick.gotoAndStop(0);
		w_w.brick.gotoAndStop(0);
		thermal_conductivity_wall = 0.6;

	}
	if (rbValue1 =="2") {
		w_l.brick.gotoAndStop(1);
		w_w.brick.gotoAndStop(1);
		thermal_conductivity_wall = 0.15;
	}
	if (rbValue1=="3") {
		w_l.brick.gotoAndStop(2);
		w_w.brick.gotoAndStop(2);
		thermal_conductivity_wall = 0.04;
	}

if (rbValue1=="4") {
		w_l.brick.gotoAndStop(3);
		w_w.brick.gotoAndStop(3);
		thermal_conductivity_wall = 0.021;
	}
transformation();
}


 var rbValue2;
for(var i = 1; i<= 3; i++){
			 	rbGroup2["RadBut_" + i].name = "RadBut_" + i;
				 rbGroup2["RadBut_" + i].addEventListener("click", rbOn2); 
	         }

	  function rbOn2(event) {
	  	event.nativeEvent.preventDefault();
             for(var i = 1; i<= 3; i++){
				  rbGroup2["RadBut_" + i].gotoAndStop (0); 
			     }
				 
				 event.currentTarget.gotoAndStop(2);				  
				rbValue2 =  event.currentTarget.name.substr(7,8);
				
if (rbValue2 =="1") {
	roof.tr2.gotoAndStop(0);
		thermal_conductivity_ceiling = 0.15;

	}
	if (rbValue2 =="2") { 
		roof.tr2.gotoAndStop(1);
		thermal_conductivity_ceiling = 0.04;
	}
	if (rbValue2=="3") {
	roof.tr2.gotoAndStop(2);
		thermal_conductivity_ceiling = 0.021;
	}
transformation();
}

var rbValue3;
for(var i = 1; i<= 4; i++){
			 	rbGroup3["RadBut_" + i].name = "RadBut_" + i;
				 rbGroup3["RadBut_" + i].addEventListener("click", rbOn3); 
	         }

	  function rbOn3(event) {
	  	event.nativeEvent.preventDefault();
             for(var i = 1; i<= 4; i++){
				  rbGroup3["RadBut_" + i].gotoAndStop (0); 
			     }
				 
				 event.currentTarget.gotoAndStop(2);				  
				rbValue3 =  event.currentTarget.name.substr(7,8);
				
if (rbValue3 =="1") {
		w_l.window1.gotoAndStop(0);
		w_w.window2.gotoAndStop(0);
		thermal_conductivity_window = 6.7;

	}
	if (rbValue3 =="2") {
		w_l.window1.gotoAndStop(1);
		w_w.window2.gotoAndStop(1);
		thermal_conductivity_window = 2.8;
	}
	if (rbValue3=="3") {
	w_l.window1.gotoAndStop(2);
		w_w.window2.gotoAndStop(2);
		thermal_conductivity_window = 1.9;
	}

if (rbValue3=="4") {
	w_l.window1.gotoAndStop(3);
		w_w.window2.gotoAndStop(3);
		thermal_conductivity_window = 1.6;
	}
transformation();
}

function transformation(){
val1_2.text = my_round(9/5*Number(val1.text)+32,1);
val2_2.text = my_round(9/5*Number(val2.text)+32,1);

dT = Number(val2.text)-Number(val1.text);
w_length = Number(my_round((l_wall - w_l.l_btn.x) * 0.05,1));
 text_length.text = "Length = " + w_length +  " m (" + my_round(w_length*3.28,1) + " ft)";
   w_width = Number(my_round(w_w.l_btn.x * 0.05,1));
	text_width.text = "Width = " + w_width +  " m (" + my_round(w_width*3.28,1) + " ft)";
 	w_height = my_round((h_wall+h_y-h_btn.y) * 0.05,1);
	 text_height.text = "Height = " + w_height +  " m (" + my_round(w_height*3.28,1) + " ft)";

 win_area1 = my_round(w_l.window1.scaleX*40*0.05*w_l.window1.scaleY*20 * 0.05,1);
	win_area2 = my_round(w_w.window2.scaleX*40*0.05*w_w.window2.scaleY*20* 0.05,1);
	win_area = Number(win_area1) + Number(win_area2);
	text_Warea.text= "Windows area = " + my_round(win_area,1) +  " m² (" + my_round(win_area*10.77,1) + " ft²)";
	
	ceiling_flow = thermal_conductivity_ceiling/Number(val4.text)*w_length*w_width*dT*100; 
	text_ceiling.text = "Ceiling heat flow = "+ my_round(ceiling_flow,1)+" W";
  
 if(ceiling_flow==0){
		w_w.arrow_c.visible = false;
	}else{
	     w_w.arrow_c.visible = true;
	}
 
  window_flow = thermal_conductivity_window*win_area*dT;
	window_flow1 = thermal_conductivity_window*win_area1*dT;
	window_flow2 = thermal_conductivity_window*win_area2*dT;
	text_windows.text = "Windows heat flow = "+ my_round(window_flow,1)+" W";
 
 if(window_flow1==0){
		w_l.arrow_w.visible = false;
	}else{
		 w_l.arrow_w.visible = true;
	}
	if(window_flow2==0){
		w_w.arrow_w.visible = false;
	}else{
		 w_w.arrow_w.visible = true;
	} 
  
  	

	w_w.arrow_c.arrT.scaleX = ceiling_flow/1000/10;
	w_w.arrow_c.ahead.x = -w_w.arrow_c.arrT.scaleX*10;
   
 w_w.arrow_w.arrT.scaleX = window_flow2/1000/10;
	w_w.arrow_w.ahead.x = -w_w.arrow_w.arrT.scaleX*10;
	
wall_flow = thermal_conductivity_wall/Number(val3.text)*2*w_height*(w_length+w_width)*dT*100-window_flow; 

console.log(thermal_conductivity_wall/Number(val3.text)*2*w_height*(w_length+w_width)*dT*100);
console.log(window_flow);

	text_wall.text = "Wall heat flow = "+ my_round(wall_flow,1)+ " W";
	if(wall_flow==0){
		w_l.arrow_wall.visible = false;
	}else{
	     w_l.arrow_wall.visible = true;
	}

    w_l.arrow_wall.arrT.scaleX = wall_flow/1000/10;
     w_l.arrow_wall.ahead.x = -w_l.arrow_wall.arrT.scaleX * 10;    
   
    total = wall_flow+window_flow+ceiling_flow;
    
   text_total.text = "Wall heat flow = "+ my_round(total,1)+ " W";

    }

}

function my_round(number, n) {
	var k = Math.pow(10, n);
	var t = Math.round(number * k) / k;

	var b;
	var s = t.toString().length - t.toString().indexOf(".");
	var d = n - s + 1;
	if (t.toString().indexOf(".") == -1) {

		b = t + ".0";
		for (var i = 0; i < n - 1; i++) {
			b = b + "0";
		}
	}
	else {
		if (d > 0) {
			b = t + "0";
			for (i = 0; i < d - 1; i++) {
				b = b + "0";
			}
		}
		if (d == 0) {
			b = t;
		}
	}
	return b;
       }
