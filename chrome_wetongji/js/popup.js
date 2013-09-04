$(document).ready(function(){
	fetchTodayData();
});

function fetchTodayData()
{
	getJson();
}

var wetongjiURL = "http://we.tongji.edu.cn/api/call?D=iOS&M=Home&S=f75cb5256902112e739db55970b959bafe53724a&U=201301052111477&V=3.0";

function getJson() {
	$.getJSON(wetongjiURL, function(json) {
		var activities = json.Data.Activities;
		configureActivitesLayout(activities);

		//var informations = json.Data.Information;
		//configureInformationsLayout(informations);
	});
}

function configureActivitesLayout(acitivitesArray) {

	for (var i = 0; i < acitivitesArray.length; i ++) {
		configureActivityLayout(acitivitesArray[i]);
	}
}

function configureActivityLayout(activity) {
	var layout = '<div class = "row_fluid">';
	layout += "<span9>" + '<h3 class="we_title">' + activity.Title + "</h3>";

	layout += '<div class = "row_fluid">';
	layout += '<span3><h5 class ="we_title">' + activity.Location + "   " + activity.Organizer + "</h5></span3></div>";

	layout += '<div class = "row_fluid we_description">';
	layout +=  '<p>' + activity.Description + "</p>" + "</div>";

	layout += "</span9></div>";

	$("#act").after(layout);
}

function configureInformationsLayout(informationArray) {
	for (var info in informationArray) {
		configureInformatonLayout(info);
	}
}

function configureInformatonLayout(information) {

}

