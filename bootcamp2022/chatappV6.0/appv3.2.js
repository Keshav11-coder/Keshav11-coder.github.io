app = {
  connection: function () {
    // Chat app MQTT settings
    var USER = document.getElementById('logon-as').value;
    var ID = document.getElementById('admin').value;
    var mqttServer = "ws://broker.hivemq.com:8000/mqtt";
    var mqttTopic = "codettes2022";
    var userName = USER;//document.getElementById("logon-as").value; // || "anonymous user"
    //var userName = "anonymous usr";
    const clientId = 'cb22_' + Math.random().toString(16).substr(2, 8)
    var userList = [];

    const opts = {
      keepalive: 30,
      clientId: clientId,
      protocolId: 'MQTT',
      protocolVersion: 4,
      clean: true,
      reconnectPeriod: 1000,
      connectTimeout: 30 * 1000,
      will: {
        topic: 'WillMsg',
        payload: 'Connection Closed abnormally..!',
        qos: 0,
        retain: false
      },
      rejectUnauthorized: false
    }

    console.log('connecting mqtt client')
    const client = mqtt.connect(mqttServer, opts);

    client.on('error', function (err) {
      console.log(err)
      client.end()
    })

    client.on('connect', function () {
      // Once a connection has been made, make a subscription and send a message.
      console.log('client connected:' + clientId)
      client.subscribe(mqttTopic, { qos: 0 })

      message = (USER + " just hopped on! say hi!");
      message2 = (USER + " just landed! say hello!");
      message3 = (USER + " joined the party! welcome!");
      message4 = ("welcome " + USER + ", we hope you brought boogie's");
      message.destinationName = mqttTopic;
      message2.destinationName = mqttTopic;
      message3.destinationName = mqttTopic;
      message4.destinationName = mqttTopic;

      var values = [message, message2, message3, message4]
      ToUse = values[Math.floor(Math.random() * values.length)];

      client.publish(mqttTopic, ToUse, { qos: 0, retain: false })
      sendPong();
    })

    client.on('message', function (topic, message, packet) {
      if (toggle == 0) {
        msg = message.toString(); // library delivers  buffer so convert to strig first
        console.log("onMessageArrived: " + msg);
        // if it has JSON payload do NOT add to chat
        try {
          msgObj = JSON.parse(message.toString()); // t is JSON so handle it how u want
          // if message has Pin of Pong in it send it to the PingPongHandler
          if (Object.keys(msgObj)[0] == "ping") { sendPong(); };
          if (Object.keys(msgObj)[0] == "pong") { handlePong(msgObj.pong); }; // pong value is an object!!
          // other handlers for control messages below
        } catch {
          document.getElementById("chatlog").innerHTML += "<br>" + msg;
        }
      }
    })

    // --- To manage userlist implement a PING and PONG system ---
    // Ping will request an "alive sign" from all or any user
    // Pong function will respond to ping
    // handlePong pongs in the UI
    // Ping will be scheduled to run regularly as a KeepAlive signal

    function sendPing(usr = '*') {
      if (toggle == 0) {
        // ping sends out a message to all (*) or any specific user to respond if ur there
        var pingObj = { ping: usr }; // JS Object {ping : "usr"} -> JSON {/"ping/":/"usr/"}
        client.publish(mqttTopic, JSON.stringify(pingObj));
      }
    }

    function sendPong() {
      if (toggle == 0) {
        // sends clientID and UserName in a JSON object (and whatever u need more)
        var pongObj = { pong: { userName: userName, clientId: clientId } };
        client.publish(mqttTopic, JSON.stringify(pongObj));
        console.log(JSON.stringify(pongObj));
      }
    }

    function redrawUserList() {
      if (toggle == 0) {
        // Generate the userlist HTML
        var ulist = "";
        userList.forEach(function (item) {
          //var x = arrayItem.prop1 + 2;
          var CHATBUBBLE = '<div class="codettesBootcamp2022"><h4 class="bootcamp2022name">';//</h4></div>
          if (item.userName == USER) {
            //ulist+= item.userName + " <a href='#" + mqttTopic + "/'><i class='fa fa-fw fa-phone'></i></a></li><br>"
            /*var apply = '<h4 class="styleY">' + item.userName + '</h4><br><button class="debug"onclick="openDebugDialog()"><img class="send-img" src="debug-icon.png"></button>';
            document.getElementById("you").innerHTML+=apply;*/
          } else {
            ulist += CHATBUBBLE + item.userName + "<i class='fa fa-fw fa-phone'></i></a></li>" + "</h4></div>" + "<br>"
          }//ulist+= CHATBUBBLE + item.userName +  "<a href='#" + mqttTopic + "/" + item.clientId +"'><i class='fa fa-fw fa-phone'></i></a></li>"+ "</h4></div>" +"<br>"
        });
        //ulist+="</ul>";
        console.log(ulist);
        document.getElementById("userlist").innerHTML = ulist;
      }
    }

    // function that manages the UserList and other UI stuff related to PingPong
    function handlePong(pongObj) {
      if (toggle == 0) {
        const index = userList.findIndex(object => {
          return object.userName === pongObj.userName;
          // Update Userlist with Pongs
        });

        //console.log("index:" + index);
        if (index >= 0) {
          console.log("User exists");
          userList[index] = pongObj;
        } else {
          console.log("New User " + pongObj.userName);
          userList.push(pongObj);
        }
        //console.log(userList);
        redrawUserList();
      }
    }

    // to keep connection alive
    //setInterval(sendPong, 10000); // keeps ponging every 10 secs
  }
}

var USER = document.getElementById('logon-as').value;
var ID = document.getElementById('admin').value;

function getInput() {
  var USER = document.getElementById('logon-as').value;
  var ID = document.getElementById('admin').value;
  document.getElementById("content").className = "content";
  document.getElementById("chatapp").className = "N";
  console.log("alert{>>'new user signed on as [" + USER + "] with:id:of[" + ID + "]'<<}");
  console.log("dialog hidden");
  app.connection();
}

// Chat app MQTT settings
var toggle = 0;
var USER = document.getElementById('logon-as').value;
var mqttServer = "ws://broker.hivemq.com:8000/mqtt";
var mqttTopic = "codettes2022";
var userName = USER;//document.getElementById("logon-as").value; // || "anonymous user"
//var userName = "anonymous usr";
const clientId = 'cb22_' + Math.random().toString(16).substr(2, 8)
var userList = [];

const opts = {
  keepalive: 20,
  clientId: clientId,
  protocolId: 'MQTT',
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 20 * 1000,
  will: {
    topic: 'WillMsg',
    payload: 'Connection Closed abnormally..!',
    qos: 0,
    retain: false
  },
  rejectUnauthorized: false
}

console.log('connecting mqtt client')
const client = mqtt.connect(mqttServer, opts);


client.on('close', function () {
  console.log(clientId + ' disconnected')
})

function sendMessageButton(msgtext) {
  if (msgtext != '' && toggle == 0) {
    var USER = document.getElementById('logon-as').value;
    var userName = USER;//document.getElementById("loginName").value; // || "anonymous user"
    client.publish(mqttTopic, userName + " says: " + msgtext);
    if (msgtext == "whoami") {
      console.log(userName);
      client.publish(mqttTopic, "Your name is " + userName + ", silly");
    }
    else if (msgtext == "disconnect") {
      var t = document.getElementById("toggle");
      //client.publish(mqttTopic, "disconnected user " + USER + " from topic " + mqttTopic);
      console.log("disconnected user " + USER + " from topic " + mqttTopic)
      t.value = "disconnected";
      toggle = 1;
      console.log("off")
      console.log("disconnected")
      client.subscribe("", { qos: 0 })
    }
  }
}

// OR listen to the Enter event on n input box
function sendMsg(ele) {
  if (event.key === 'Enter' && toggle == 0) {
    var USER = document.getElementById('logon-as').value;
    var userName = USER;//document.getElementById("loginName").value; // || "anonymous user"
    if (ele.value == "whoami") {
      console.log(userName);
      client.publish(mqttTopic, "Your name is " + userName + ", silly");
    }
    else if (ele.value == "disconnect") {
      var t = document.getElementById("toggle");
      console.log("disconnected user " + USER + " from topic " + mqttTopic)
      t.value = "disconnected";
      toggle = 1;
      console.log("off")
      console.log("disconnected")
      client.subscribe("", { qos: 0 })
    }
    client.publish(mqttTopic, userName + " says: " + ele.value);
    //alert(ele.value);
    ele.value = ""; // reset the input after entering
  }
}

function ondisconnect() {
  var t = document.getElementById("toggle");
  if (t.value == "disconnected") {
    t.value = "connected";
    toggle = 0
    console.log("on")
    app.connection();
    //client.subscribe(mqttTopic, { qos: 0 })
  }
  else if (t.value == "connected") {
    t.value = "disconnected";
    toggle = 1;
    console.log("off")
    console.log("disconnected")
    client.subscribe("", { qos: 0 })
  }/*
*/
}