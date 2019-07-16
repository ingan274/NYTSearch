$("#search").on("click", function() {

var searchTerm = $("#searchTerm").attr("data-term");
var searchLimit = $("#searchLimit").attr("data-limit");
var searchStartY = $("#searchStartY").val();
var searchFinishY = $("#searchFinishY").val();
var queryURL = "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?q="+searchTerm+"&pub_date="+searchStartY+"&api-key=42mp1WxgpecYIOjpxLnCC9ZE5xxsH4XR"

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {



})

}