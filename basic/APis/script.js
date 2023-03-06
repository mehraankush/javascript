

var button = document.getElementById('button');
var image = document.getElementById('image');
var para = document.getElementById('para');

function getDogImage(){
    const xmlRequest = new XMLHttpRequest();
    // xmlRequest.open('get','https://dog.ceo/api/breeds/image/random',true)
    xmlRequest.open('get','https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',true)
    xmlRequest.send()


    xmlRequest.onload = function(){
        
        var data = JSON.parse(xmlRequest.response)
        console.log(data)
        // image.setAttribute('src',data.message)
        image.setAttribute('src',data.url)
        para.innerHTML = data.explanation
    }
}


button.addEventListener('click', getDogImage)