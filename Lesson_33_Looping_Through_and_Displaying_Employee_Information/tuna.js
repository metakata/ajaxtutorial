var xmlHttp = createXmlHttpRequestObject();

//create object
function createXmlHttpRequestObject(){
	var xmlHttp;
	if(window.XMLHttpRequest){
		xmlHttp = new XMLHttpRequest();
	}else{
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xmlHttp;
}

//called on load
function process(){
	if(xmlHttp){
		try{
			xmlHttp.open("GET", "tuna.xml",true);
			xmlHttp.onreadystatechange = handleStateChange;
			xmlHttp.send(null);
		}catch(e){
			alert(e.toString());
		}
	}
}

//when state changes
function handleStateChange(){
	if(xmlHttp.readyState==4){
		if(xmlHttp.status==200){
			try{
				handleResponse();
			}catch(e){
				alert(e.toString());
			}
		}else{
			alert(xmlHttp.statusText);
		}
	}
}

//handle the resposne from the server
function handleResponse(){
	var xmlResponse = xmlHttp.responseXML;
	root = xmlResponse.documentElement;
	names = root.getElementsByTagName("name");
	ssns = root.getElementsByTagName("ssn");
	
	var stuff = "";
	for(var i=0; i<names.length; i++){
		stuff += names.item(i).firstChild.data + " - " + ssns.item(i).firstChild.data + "<br/>";
	}
	
	theD = document.getElementById("theD");
	theD.innerHTML = stuff;
}