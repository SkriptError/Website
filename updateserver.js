
function connectToUpdateServer() {
    let url;
  
    try {
      url = new URL("https://clientupdate.aeroclient.net");
    } catch (error) {
      return false;  
    }

        var protocol = url.protocol;
        var host = url.host;

        document.getElementById('update-status').innerHTML = "Protocol: " + protocol;
        document.getElementById('host-status').innerHTML = "Host: " + host;

}