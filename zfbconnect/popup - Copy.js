// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//  var app_id = "355220691211825";
  // var app_secret = "53dcdd4138329fce2fe3d575e99be9fd";
   // var my_url = "file:///C:/ks/fb-app/like.html";

var req = new XMLHttpRequest();
var req2 = new XMLHttpRequest();
var resp = "";
var resp2 = "";
var frnds_id = "";
var token = "";
// var frnds_id=new Array();
// var resp = "hiii"
req.open(
    "GET",
    "https://graph.facebook.com/oauth/access_token?" +
        "client_id=355220691211825&" +
        "client_secret=53dcdd4138329fce2fe3d575e99be9fd&" +
        "grant_type=client_credentials");

req.onreadystatechange = function() {//Call a function when the state changes.
	if(req.readyState == 4 && req.status == 200) {
		document.writeln(req.responseText);
		resp = req.responseText;
		token = resp.substr(13);
		document.writeln("TOKEN: " + token);
		
		req2.open("GET", "https://graph.facebook.com/" +
		   "kreyas/" +
		   "friends?" +
	   	   "access_token=" + token);
		   req2.onreadystatechange = function() {                         //Call a function when the state changes.
				if(req2.readyState == 4 && req2.status == 200) {
					//document.writeln(req2.responseText);
					resp2 = req2.responseText;
					document.writeln(resp2);
					// frnds_id = JSON.parse(resp2);
					// document.writeln(frnds_id);
					// $(document).ready(function(){
						// .each(frnds_id, function(name, id) {
						// var x ;
						// for(x in frnds_id)
						// document.writeln(frnds_id[x].id);
	
						// });
					// }); // doc

					} // if
				} // func
				req2.send(null);	
		}
}
req.send(null);


