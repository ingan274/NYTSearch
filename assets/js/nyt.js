$("#search").on("click", function(event) {
  event.preventDefault();
 var searchTerm = $("#searchBox").val()
 var searchLimit = $("#searchLimit").attr("data-limit");
 var searchStartY = $("#firstYear").val();
 var searchFinishY = $("#endYear").val();
 var queryURL = "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?q="+searchTerm+"&pub_date="+searchStartY+"&api-key=42mp1WxgpecYIOjpxLnCC9ZE5xxsH4XR"
 console.log(searchTerm + searchStartY)
 $.ajax({
  url: queryURL,
  method: "GET"
 }).then(function(response) {
 
 
 
  $('.clr-btn').on('click', function() {
     emptySrhResults();
  });
 
  //empty div
  function emptySrhResults() {
     $('.srhResults').empty();
  }
 })
 
 })