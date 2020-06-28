// https://api.github.com/users/grt812/repos
// Thanks to https://stackoverflow.com/questions/247483/http-get-request-in-javascript for this http get request code

function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

console.log(httpGet("https://api.github.com/users/grt812/repos"));
