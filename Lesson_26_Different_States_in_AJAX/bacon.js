var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject(){
	var xmlHttp;
	
	if(window.XMLHttpRequest){
		//If your browser is aware of this object (90% of the time)
		xmlHttp = new XMLHttpRequest();
	}else{
		//If you are using Microsoft
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	return xmlHttp;
}

function process(){
	if(xmlHttp){
		try{
			xmlHttp.open("GET", "bacon.txt", true);
			xmlHttp.onreadystatechange = handleServerResponse;
			xmlHttp.send(null);
		}catch(e){
			alert(e.toString());
		}
	}
}

function handleServerResponse(){
	theD = document.getElementById("theD");
	if(xmlHttp.readyState==1){
		//Google chrome ignores state 1 however
		theD.innerHTML += "Status 1: server connection established <br/>";	
	}else if(xmlHttp.readyState==2){
		theD.innerHTML += "Status 2: request received <br/>";
	}else if(xmlHttp.readyState==3){
		theD.innerHTML += "Status 3: server processing request <br/>"
	}else if(xmlHttp.readyState==4){
		//request is finished and response is ready
		if(xmlHttp.status==200){
			
		}else{
			alert();
		}
	}
}