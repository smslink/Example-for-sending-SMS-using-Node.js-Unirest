var unirest = require("unirest");

var req = unirest("GET", "https://secure.smslink.ro/sms/gateway/communicate/index.php");

/* 

  Get your SMS Gateway Connection ID and Password from 
  https://www.smslink.ro/get-api-key/

*/

req.query({
	"to": "07xyzzzzzz",
	"message": "My Test Message",
	"connection_id": "... My SMS Gateway Connection ID ...",
	"password": "... My SMS Gateway Connection Password ..."
});

req.headers({
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});