var wetongjiURL = "http://we.tongji.edu.cn/api/call?D=iOS&M=Home&S=f75cb5256902112e739db55970b959bafe53724a&U=201301052111477&V=3.0";

function getJson() {
	$.getJSON(wetongjiURL, function(json) {
		return json;
	});
}