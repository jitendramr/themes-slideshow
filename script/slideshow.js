var TOTAL_MOCKUPS_PER_THEME=3;
var slide_count=1; 
var theme_id=1; //Is retrieved from query string
var theme_img_location="images/";
var themes=new Array();
	themes[0]="";
	themes[1]="Serene";
	themes[2]="Impact";
	themes[3]="Mirror";
	themes[4]="Globe";
	themes[5]="Light columns";
	themes[6]="Slanted Tabs";
	themes[7]="Colour bands";
	themes[8]="Background bumps";
	themes[9]="Squares";
	themes[10]="Clean symmetrical";
	themes[11]="Mysterious";
	themes[12]="Chequered Blocks";
	themes[13]="Pastille Shapes";
	themes[14]="Futuristic";
	themes[15]="Circular";
	themes[16]="Plain Blocks";
	themes[17]="Folders";
	themes[18]="Target";
	themes[19]="Simplicity";
	themes[20]="Colourful";
	
function init(){
	theme_id=(location.search).substr(1,(location.search).length);
	update_theme_name(theme_id);
	update_progress();
	update_slide();
}

function update_theme_name(theme_id){
	if(theme_id>0 && theme_id<themes.length){
		document.getElementById('theme_label').innerHTML="Theme "+theme_id+" - <b>"+themes[theme_id]+"</b>";
		document.title+=" - "+themes[theme_id];
	}else{
		show_error();
	}
}

function update_progress(){
	if(theme_id>0 && theme_id<themes.length){
		document.getElementById('progress').innerHTML=slide_count+" of "+TOTAL_MOCKUPS_PER_THEME;
	}else{
		show_error();
	}
}

function update_slide(){
	if(theme_id>0 && theme_id<themes.length){
		document.img.src=theme_img_location+"theme"+theme_id+"_"+slide_count+".jpg";
	}else{
		show_error();
	}	
}

function show_next_slide(){
	if (slide_count>0 && slide_count<TOTAL_MOCKUPS_PER_THEME){
		slide_count=slide_count+1;
		update_slide();
		update_progress();
	}else{
		slide_count=1;
		update_slide();
		update_progress();		
	}
}

function show_prev_slide(){
	if (slide_count>1 && slide_count<=TOTAL_MOCKUPS_PER_THEME){
		slide_count=slide_count-1;
		update_slide();
		update_progress();
	}else{
		slide_count=3;
		update_slide();
		update_progress();		
	}
}

function show_error(){
	var error="<center><br><br><br><br><br><br><font color='red' size='6'>Error!</font><br><br><font color='black' size='4'>No theme found with ID "+theme_id+". </font><br><font color='black' size='3'>Please <a href='javascript:window.close()'>close</a> this window and try again.</font>"
	document.getElementById('nav').style.visibility="hidden";
	document.getElementById('imgholder').innerHTML=error;
}

init();