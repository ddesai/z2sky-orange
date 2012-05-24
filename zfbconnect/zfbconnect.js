//  var app_id = "355220691211825";
// var app_secret = "53dcdd4138329fce2fe3d575e99be9fd";
// var my_url = "file:///C:/ks/fb-app/like.html";

var req = new XMLHttpRequest();
var req2 = new XMLHttpRequest();
var resp = "";
var resp2 = "";
var token = "";
 req.open(
    "GET",
    "https://graph.facebook.com/oauth/access_token?" +
        "client_id=355220691211825&" +
        "client_secret=53dcdd4138329fce2fe3d575e99be9fd&" +
        "grant_type=client_credentials");


req.onreadystatechange = function() {//Call a function when the state changes.
	if(req.readyState == 4 && req.status == 200) {
		//document.writeln(req.responseText);
		document.writeln(" <B> === My Friends List === </B> <BR>");
		resp = req.responseText;
		token = resp.substr(13);
		//document.writeln("TOKEN: " + token);
		
		req2.open("GET", "https://graph.facebook.com/" +
		   "kreyas/" +
		   "friends?" +
		   "fields=id,name,username,gender,link&&" +
	   	   "access_token=" + token);
		   req2.onreadystatechange = function() {                         //Call a function when the state changes.
			if(req2.readyState == 4 && req2.status == 200) {
				resp2 = JSON.parse(req2.responseText);
				for (i in resp2.data) {
					document.writeln(resp2.data[i].name+","+
							resp2.data[i].username+ "," +
							resp2.data[i].gender + "," +
							"<BR/>");
				} 
			} // if
	} // if
	req2.send(null);	
}

}
req.send(null);

