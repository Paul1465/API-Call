
// Create a request variable and assign a new XMLHttpRequest object to it.
request = new XMLHttpRequest()

page = 0;
limit = 25;
// pageReq = "?page="+page
// limitReq = "?limit="+limit

urlApi = "https://api.rocketfid.com/activity/cache/all/"+page+"/"+limit

request.open('GET', urlApi, true)
request.setRequestHeader ("X-Instance", "rainbow");
request.setRequestHeader ("X-Lang", "fr");
request.setRequestHeader ("X-Widget-Version", "3.0.1");
request.setRequestHeader ("Content-Type", "application/json");
request.setRequestHeader ("Accept", "*/*");
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)








  if (request.status >= 200 && request.status < 400) {
    data.forEach((dataApi) => {
      console.log(dataApi);
              
                var div = document.createElement("div");
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.background = "red";
        div.style.color = "white";
        div.innerHTML = dataApi.performer.nickname;

        document.getElementById("main").appendChild(div);

        
    })
  } else {
    console.log('error')
  }
}
request.send()
