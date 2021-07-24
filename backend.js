var clienthash = "6d6fb6e8c99260e9cfbba59cb89a1907845c82f2";

function banUser() {
    document.getElementById('launchButton').style.backgroundColor = " rgba(252, 17, 0, 0.753)";
    document.getElementById('launchButton').innerHTML = "Banned";
    document.querySelector('.launch-button').className += " banned";
    console.log("[ACP]: ACP_LAUNCH_BANNED");
  }
  
  function startupChecks() {
    document.getElementById('launchButton').innerHTML = "Contacting ACP"; // If frozen at this text just run as admin it should be fine
    document.getElementById('launchButton').style.backgroundColor = " rgba(109, 0, 252, 0.671)";
    fs.truncate(getAppDataPath('aeroclient/client_logs.txt'), 0, function(){console.log('[Launcher] Reset Client Log File')});
    fs.truncate(getAppDataPath('aeroclient/launcher_logs.txt'), 0, function(){console.log('[Launcher] Reset Launcher Log File')});
    bannedCheck();
  }
  
  function notWhitelisted() {
          document.getElementById('launchButton').style.backgroundColor = " rgba(252, 17, 0, 0.753)";
          document.getElementById('launchButton').innerHTML = "Unauthorized";
          document.querySelector('.launch-button').className += " banned";
          console.log("[ACP]: Not whitelisted!");
  }
  
function startupChecksMain() {
 var branch2 = document.querySelector('.branch-button2').innerHTML
 var version2 = document.querySelector('.version-button2').innerHTML

  if (version2 == "✔️1.8.9") {
    checkSecondPatch();
  } else if(branch2 == "✔️Beta") {
    whitelistCheck();
  } else {
    checkFirstPatch();
  }

}

function checkPatch() { // This Method fixes the client from downloading itself everytime.
    bannedCheck();
}

function checkFirstPatch() {
  if (!(fs.existsSync(getAppDataPath('.minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch')))) { // If the client doesn't exist it will download the client.
    launchClient1();
  }

    var hash = clientPatch.sync(getAppDataPath('.minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch'));
    console.log("Current Client Hash - " + hash)
    if (hash == clienthash) { // Checks the SHA1 Hash to see if it's outdated or not. (1.7.10)
      launchOffline1();
    } else {
      launchClient1(); // If the SHA1 Hash is different then it will download the client.
    }

}

function checkSecondPatch() {
  if (!(fs.existsSync(getAppDataPath('.minecraft/versions/AeroClient-1.8.9/AeroClient-1.8.9.patch')))) {
    launchClient2();
  }
  
    var hash2 = clientPatch.sync(getAppDataPath('.minecraft/versions/AeroClient-1.8.9/AeroClient-1.8.9.patch')); // (1.8.9)
    console.log("Current Client Hash - " + hash2)
    if (hash2 == "[Redacted]") {
      launchOffline2();
    } else {
      launchClient2();
    }
    
}

async function launchBeta() {
     document.querySelector('.launch-button').className += " clicked";
     document.getElementById('launchButton').innerHTML = "Updating Client"
   
     console.log("[Aero Client] Launching Stable Branch");
     client.launch({ 
       authorization: Authenticator.getAuth("User"),
       clientPackage: "https://github.com/Aero-Client/BetaBranch/releases/download/1.0/AeroClientBeta-1.7.10.zip",
       removePackage: "clientPackage.zip",
       root: getAppDataPath(".minecraft"),
       javaPath: getAppDataPath("aeroclient/jre/bin/java.exe"),
       version: {
         number: "1.7.10",
         custom: "AeroClientBeta-1.7.10"
       },
       memory: {
           max: document.getElementById("ramslider").value,
           min: "1024"
       },
       overrides: {
         minecraftJar: getAppDataPath(".minecraft/versions/AeroClientBeta-1.7.10/AeroClientBeta-1.7.10.patch"),
       }
   }).catch(e => {
       console.log(e.message);
       launchError();
   })
}

async function launchClient2() {
     document.querySelector('.launch-button').className += " clicked";
     document.getElementById('launchButton').innerHTML = "Updating Client"
   
     console.log("[Aero Client] Launching Stable Branch");
     client.launch({ 
       authorization: Authenticator.getAuth("User"),
       clientPackage: "",
       removePackage: "clientPackage.zip",
       root: getAppDataPath(".minecraft"),
       javaPath: getAppDataPath("aeroclient/jre/bin/java.exe"),
       version: {
         number: "1.8.9",
         custom: "AeroClient-1.8.9"
       },
       memory: {
           max: document.getElementById("ramslider").value,
           min: "1024"
       },
       overrides: {
         minecraftJar: getAppDataPath(".minecraft/versions/AeroClient-1.8.9/AeroClient-1.8.9.patch"),
       }
   }).catch(e => {
       console.log(e.message);
       launchError();
   })
}

async function launchOffline2() {
  document.querySelector('.launch-button').className += " clicked"
  document.getElementById('launchButton').innerHTML = "Starting JVM"
  
  console.log("[Aero Client] Launching Stable Branch");
  client.launch({ 
    authorization: Authenticator.getAuth("User"),
    root: getAppDataPath(".minecraft"),
    javaPath: getAppDataPath("aeroclient/jre/bin/java.exe"),
    version: {
      number: "1.8.9",
      custom: "AeroClient-1.8.9"
    },
    memory: {
        max: document.getElementById("ramslider").value,
        min: "1024"
    },
    overrides: {
      minecraftJar: getAppDataPath(".minecraft/versions/AeroClient-1.8.9/AeroClient-1.8.9.patch"),
    }
  }).catch(e => {
    console.log(e.message);
    launchError();
  })
}
  
  function checkBranch2() {
    var branch2 = document.querySelector('.branch-button2').innerHTML
    var branch3 = document.querySelector('.branch-button3').innerHTML
  
   if(branch2 == "✔️Beta") {
      console.log("[Aero Client] Checked Beta Branch");
      launchClient2();
    } else if(branch3 == "✔️Dev") {
      console.log("[Aero Client] Checked Dev Branch");
      launchClient3();
    }
  }

function quickConnectMain0() {
    alert("This server requires 1.8.9, which Aero Client does not currently support.");
    showLauncher();
}

function quickConnectMain1() { 
    bannedCheck2();
}

function quickMain1() {
     if (!(fs.existsSync(getAppDataPath('.minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch')))) { // If the client doesn't exist it will download the client.
    onlinePopular1();
  }

    var hash = clientPatch.sync(getAppDataPath('.minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch'));
    console.log("Current Client Hash - " + hash)
    if (hash == clienthash) { // Checks the SHA1 Hash to see if it's outdated or not. (1.7.10)
      offlinePopular1();
    } else {
       onlinePopular1(); // If the SHA1 Hash is different then it will download the client.
    }   
}

function quickConnectMain2() {
    bannedCheck3();
}

function quickMain2() {
        if (!(fs.existsSync(getAppDataPath('.minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch')))) { // If the client doesn't exist it will download the client.
    onlinePartner1();
  }

    var hash = clientPatch.sync(getAppDataPath('.minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch'));
    console.log("Current Client Hash - " + hash)
    if (hash == clienthash) { // Checks the SHA1 Hash to see if it's outdated or not. (1.7.10)
        offlinePartner1();
    } else {
        onlinePartner1(); // If the SHA1 Hash is different then it will download the client.
    }   
}

function quickConnectMain3() {
    bannedCheck4();
}

function quickMain3() {

  if (!(fs.existsSync(getAppDataPath('.minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch')))) { // If the client doesn't exist it will download the client.
    onlinePartner2();
  }

    var hash = clientPatch.sync(getAppDataPath('.minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch'));
    console.log("Current Client Hash - " + hash)
    if (hash == clienthash) { // Checks the SHA1 Hash to see if it's outdated or not. (1.7.10)
        offlinePartner2();
    } else {
        onlinePartner2(); // If the SHA1 Hash is different then it will download the client.
    }

}

async function onlinePopular1() {
    document.getElementById('launchButton').innerHTML = "Updating Client"
    document.querySelector('.launch-button').className += " clicked";
  
    console.log("[Aero Client] Launching Stable Branch");
    client.launch({ 
      authorization: Authenticator.getAuth("User"),
      clientPackage: "https://clientupdate.aeroclient.net",
      removePackage: "clientPackage.zip",
      root: getAppDataPath(".minecraft"),
      javaPath: getAppDataPath("aeroclient/jre/bin/java.exe"),
      server: {
        host: "play.vipermc.net",
        port: "25565"
      },
      version: {
        number: "1.7.10",
        custom: "AeroClient-1.7.10"
      },
      memory: {
          max: document.getElementById("ramslider").value,
          min: "1024"
      },
      overrides: {
        minecraftJar: getAppDataPath(".minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch"),
      }
  }).catch(e => {
      console.log(e.message);
      launchError();
  })
  }
  
  async function onlinePartner1() {
    document.getElementById('launchButton').innerHTML = "Updating Client"
    document.querySelector('.launch-button').className += " clicked";
  
    console.log("[Aero Client] Launching Stable Branch");
    client.launch({ 
      authorization: Authenticator.getAuth("User"),
      clientPackage: "https://clientupdate.aeroclient.net",
      removePackage: "clientPackage.zip",
      root: getAppDataPath(".minecraft"),
      javaPath: getAppDataPath("aeroclient/jre/bin/java.exe"),
      server: {
        host: "play.coldnetwork.net",
        port: "25565"
      },
      version: {
        number: "1.7.10",
        custom: "AeroClient-1.7.10"
      },
      memory: {
          max: document.getElementById("ramslider").value,
          min: "1024"
      },
      overrides: {
        minecraftJar: getAppDataPath(".minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch"),
      }
  }).catch(e => {
      console.log(e.message);
      launchError();
  })
  }
  
  async function onlinePartner2() {
    document.getElementById('launchButton').innerHTML = "Updating Client"
    document.querySelector('.launch-button').className += " clicked";
  
    console.log("[Aero Client] Launching Stable Branch");
    client.launch({ 
      authorization: Authenticator.getAuth("User"),
      clientPackage: "https://clientupdate.aeroclient.net",
      removePackage: "clientPackage.zip",
      root: getAppDataPath(".minecraft"),
      javaPath: getAppDataPath("aeroclient/jre/bin/java.exe"),
      server: {
        host: "certix.cc",
        port: "25565"
      },
      version: {
        number: "1.7.10",
        custom: "AeroClient-1.7.10"
      },
      memory: {
          max: document.getElementById("ramslider").value,
          min: "1024"
      },
      overrides: {
        minecraftJar: getAppDataPath(".minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch"),
      }
  }).catch(e => {
      console.log(e.message);
      launchError();
  })
  }

  async function offlinePopular1() {
    document.getElementById('launchButton').innerHTML = "Starting JVM"
    document.querySelector('.launch-button').className += " clicked"
  
    console.log("[Aero Client] Launching Stable Branch");
    client.launch({ 
      authorization: Authenticator.getAuth("User"),
      root: getAppDataPath(".minecraft"),
      javaPath: getAppDataPath("aeroclient/jre/bin/java.exe"),
      server: {
        host: "play.vipermc.net",
        port: "25565"
      },
      version: {
        number: "1.7.10",
        custom: "AeroClient-1.7.10"
      },
      memory: {
          max: document.getElementById("ramslider").value,
          min: "1024"
      },
      overrides: {
        minecraftJar: getAppDataPath(".minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch"),
      }
  }).catch(e => {
      console.log(e.message);
      launchError();
  })
  }
  
  async function offlinePartner1() {
    document.getElementById('launchButton').innerHTML = "Starting JVM"
    document.querySelector('.launch-button').className += " clicked"
  
    console.log("[Aero Client] Launching Stable Branch");
    client.launch({ 
      authorization: Authenticator.getAuth("User"),
      root: getAppDataPath(".minecraft"),
      javaPath: getAppDataPath("aeroclient/jre/bin/java.exe"),
      server: {
        host: "play.coldnetwork.net",
        port: "25565"
      },
      version: {
        number: "1.7.10",
        custom: "AeroClient-1.7.10"
      },
      memory: {
          max: document.getElementById("ramslider").value,
          min: "1024"
      },
      overrides: {
        minecraftJar: getAppDataPath(".minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch"),
      }
  }).catch(e => {
      console.log(e.message);
      launchError();
  })
  }
  
  async function offlinePartner2() {
    document.getElementById('launchButton').innerHTML = "Starting JVM"
    document.querySelector('.launch-button').className += " clicked"
  
    console.log("[Aero Client] Launching Stable Branch");
    client.launch({ 
      authorization: Authenticator.getAuth("User"),
      root: getAppDataPath(".minecraft"),
      javaPath: getAppDataPath("aeroclient/jre/bin/java.exe"),
      server: {
        host: "certix.cc",
        port: "25565"
      },
      version: {
        number: "1.7.10",
        custom: "AeroClient-1.7.10"
      },
      memory: {
          max: document.getElementById("ramslider").value,
          min: "1024"
      },
      overrides: {
        minecraftJar: getAppDataPath(".minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch"),
      }
  }).catch(e => {
      console.log(e.message);
      launchError();
  })
  }
