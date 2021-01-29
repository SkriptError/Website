
function connectToUpdateServer() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
        document.getElementById('update-status').innerHTML = "Reponse from Client Update Server: " + this.status;
    }
};
xhttp.open("GET", "https://clientupdate.aeroclient.net", true);
xhttp.send();

}