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
  let nameArray = ["content"];
  let repoResult = httpGetAsync("https://api.github.com/users/grt812/repos", function(result){
    console.log(typeof result);
    result.forEach(function(e){
      if(e.homepage != null && e.homepage !== ""){
        console.log("URL: '"+e.homepage+"'");
        $("#repo-list").append(`
        <a class="list" href="${e.homepage}" target="_blank"><span>${e.name}</span><button data-href="${e.html_url}"><img src="GitHub-Mark-32px.png" alt="GitHub"></button></a>`);
        nameArray.push(e.name);
      } else {
        // console.log(e.homepage);
      }
    });
    $("[data-href]").click(function(e){
        e.preventDefault();
      window.open($(this).attr("data-href"));
    });
    for(let i = 0; i < 100; i++){
      let chosenRepo = nameArray[parseInt(Math.random() * nameArray.length)];
      $("#relative-container").append("<span class=\"content\">"+chosenRepo+"</span>");
    }
    $(".content").each(function(){
        // $(this).css("top",);
        // $(this).css("left",Math.random()*($(window).width() - 30));
        let xPos = $(window).width()*Math.random()-$(window).width()/2;
        let yPos = $(window).height()*Math.random()-$(window).height()/2;
        $(this).css("transform", "translate("+xPos+"px,"+yPos+"px) rotate("+Math.random()*360+"deg) scale("+(Math.random()*5)+","+(Math.random()*5)+")");
    });
  });

  // setInterval(function(){
  //   $(".content").each(function(){
  //
  //   });
  // },50);

});
