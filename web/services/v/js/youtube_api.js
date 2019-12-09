

$(function() {
    $("#v-yt_search").on("submit", function(e) {
        $("#v-results_yt p, #v-results_yt br").remove(); /* remove old results */
        
       e.preventDefault();
       // prepare the request
       var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#v-search_yt").val()).replace(/%20/g, "+"),
            maxResults: 5,
            order: "relevance"
       }); 
       // execute the request
       request.execute(function(response) {
          
        

          $.each(response.result.items, function(index, item) {

            var yt_title = item.snippet.title; /* get video title */
            var yt_id = item.id.videoId; /* get video id */
            var yt_url = "https://www.youtube.com/watch?v="+yt_id; /* get the video url */

            $('<div>').appendTo("#v-results_yt").append($('<p>').text(yt_title)) 
            .append($('<p>').text(yt_url).addClass('v-yt_url'))
            .append($('<br/>'));
            
          });
          
         
       });
    });
    
});


function init() {
    gapi.client.setApiKey("AIzaSyD14M2dFVnJXAqZ04qMwGa1B6uGXKp6n4Y");
    gapi.client.load("youtube", "v3", function() {
        // yt api is ready
    });
}
