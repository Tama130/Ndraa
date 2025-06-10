var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/hit/indraa13.github.io");
xhr.responseType = "json";
xhr.onload = function() {
    document.getElementById('visits').innerText = this.response.value;
}
xhr.send();
