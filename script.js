function createDomMani(...arr){
    var element1=document.createElement(arr[0]);
    for(let iter=1;iter<arr.length;iter++){
        let attreibute,attributename;
        [attreibute,attributename]=arr[iter].split("=")
        element1.setAttribute(attreibute,attributename)
    }
    return element1;
}
var  request = new XMLHttpRequest();
var url_string='https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json'
request.open('GET',url_string,true);
request.send()

request.onload = function() {
    // Begin accessing JSON data here
  //console.log(this.response);
  var data = JSON.parse(this.response)
  console.log(data);
  }

let headElement=createDomMani("h1");
headElement+=""
document.body.append(headElement);