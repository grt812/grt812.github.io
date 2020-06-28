// https://api.github.com/users/grt812/repos
// Thanks to https://stackoverflow.com/questions/247483/http-get-request-in-javascript for this http get request code

function httpGetAsync(theUrl, callback){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(JSON.parse(xmlHttp.responseText));
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

$(function(){

  let repoResult = httpGetAsync("https://api.github.com/users/grt812/repos", function(result){
    console.log(typeof result);
    result.forEach(function(e){
      $("#repo-list").append(`
        <a class="list" href="${e.html_url}" target="_blank">${e.name}</a>`)
    });
  });

});
