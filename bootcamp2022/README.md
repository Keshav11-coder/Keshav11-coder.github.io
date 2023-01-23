# Interface & Application programming

======

# Setup Development Environment for ESP32S2
## Installing ESP32

The first thing I did when setting up, was actually installing the esp32s2 board in the Arduino IDE.
I’m documenting this way later, so I already have it installed:

![](./images/image4.png)

You can see I have to update. But I don't always do that. Since later versions limit some important stuff.

Then I just select the board I’m using and we’re good for setting up esp boards.

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image10.png)

## Setting up SPIFFS (Serial Peripheral Interface Flash File System)
You can host your web server with an esp32s2. But to upload the webpage content to display on your webpage, you need to upload data to the esp32 from a data folder using SPIFFS.

### Spiffs installation
If I go into my arduino folder, where all my projects are, I created a new folder called “tools”. In that folder I created another folder called “ESP32FS”. In the ESP32FS folder I created another folder called “tool”, and put the “esp32s2.jar” in that folder. The total structure should look like this:

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image7.png)

I stored the whole structure on github in a zip, so when something goes wrong, I don't have to go searching for the original one.

[the zip](https://github.com/Keshav11-coder/CB2022_Keshav)

Checking if it works
When that has already been done, I restarted my arduino IDE and searched for an option called “esp32 sketch data upload”

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image23.png)

# Setup NodeJS Dev Environment on your PC

##### Lil’ story
I already had nodeJS installed from 2021, when we were flying an AR drone with it. That was fun! I can tell you all about it! But there were a few things I had to install with it .. like NVM.

## Upgrading my NodeJS
As I already said, I already had nodeJS for some time and it was a pretty old version. So I downloaded the latest version 18: 

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image6.png)

Installed it, and it was good to go.

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image17.png)

## Installing NVM (Node Version Manager)

I didn’t have much experience with installing this so I followed some instructions [here](https://dev.to/skaytech/how-to-install-node-version-manager-nvm-for-windows-10-4nbi)

Basically .. 

I downloaded the nvm-setup zip from github: 

Releases · coreybutler/nvm-windows · GitHub

… unzipped it, took the nvm-setup folder somewhere safe and double-clicked the nvm-setop.exe file inside of it.

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image5.png)

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image12.png)

### Checking if it works
Now that all of that is finished, I opened the NodeJS command prompt.

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image16.png)

And typed in: “Node”, “nvm”, “npm”; to check if everything works. If it doesn’t give an error, it’s good. If it does, I did something wrong.

# Chatapp
Next we had to build a chat app with MQTT and html, css and javascript.
Lucky me, because I knew those languages very well.

## MQTT debugging setup
In the session, Mr Theo showed us how to use mqtt. Here’s how we did it.

### MQTTLens
Mqttlens is a chrome extension, or wep app, that you can add to chrome. I added it already:

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image11.png)

Now that we added it, let's launch the app:

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image14.png)

### Setup connection to HIVEMQ
As you can see, I already have a connection named “bootcamp2022”, here are the settings.

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image1.png)

As you also can see in the heading title, I said HIVEMQ instead of MQTT, because while coding we had some problems with MQTT, so we switched to HIVEMQ. HIVEMQ is built on top of MQTT, so basically MQTT but better.

Next we set the topic, which is currently set to “codettes2022”, to .. well .. “codettes2022” at both places. Then we type a message. And then click on “subscribe” and then publish to publish the message:

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image3.png)

Now you see the message popup down there.

## Creating a sketch of my chat app
After explaining how MQTT works, we had to make a sketch. My sketch looks like this:

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image21.png)

Now we had to make that into html tags. (transforming it into a web page/chat app)

I first started looking through some html tags that might be useful. Such as

```html
<aside>
<div>
<input>
<button>
<h4>
```

Etc .. 

### Coding

The first thing I started doing is making a basic userlist with the <aside> element:

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image18.png)

It doesn’t update itself yet, but that will be fixed later. The basic code structure for this is:

```html
<aside>
<div class="chat-bg">
   <div class="status">
   </div>
   <h4 style="font-family: arial; text-align: center;">chats</h4>
   <div class="codettesBootcamp2022">
       <img class="bootcamp2022LOGO" src="bootcamplogo.jpg">
       <h4 class="bootcamp2022name">Bootcamp2022</h4>
   </div>
   <div id="userlist"></div>
</div>
</aside>
```

As you can see, it's all inside an ```<aside>``` element.

Then we have my chat app code:

 ```html
<aside>
   <div class="chat-LOG">
       <div class="person">
           <h3 class="person-name">Bootcamp2022</h3>
       </div>
       <div class="text-inpt" style="width: 100%;">
           <div id="chatlog" style="width: 100%; height: 650px; text-align: center;">
               <h6 style="margin: 0; padding-top: 10px;">this chat isn't safe, so chances of message leaks are
                   high. be
                   careful.</h6>
               <div id="name">

               </div>
           </div>
           <input class="inpt" type="text" id="chatInput" onkeydown="sendMsg(this)">
           <button class="sendButton"
                   onclick="sendMessageButton(getElementById('chatInput').value); getElementById('chatInput').value='';">
               <img class="send-img" src="sendmessage-orig.png"></button>
       </div>
   </div>
</aside>
```

Here it’s also in an ```<aside>``` element, but then we have a bunch of div’s. First the chat log div, where you chat. In there is another div, where the person you are talking to is displayed. Then we come to the text-input element. In there the chat log element. Then we have a little warning, and then we add some spacing because we cannot give the inputs paddings or margins, else we cannot display our messages. And then we add the input and the button, and finally we close it.

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image22.png)

#### Libraries
A key thing to note is that we need the mqtt library in order to use it in our javascript. Actually this had to be first but here it is, all in the ```<head>``` element:

```html
<head>
   <meta charset="UTF-8">
   <title>bootcamp2022GANG</title>
   <link rel="stylesheet" type="text/css" href="style.css">
   <script src="https://cdnjs.cloudflare.com/ajax/libs/mqtt/4.3.7/mqtt.min.js" type="text/javascript"></script>
</head>
```

Now that we have that done, I can show you the complete thing:

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image8.png)

Now let's code some javascript.

### Javascript - introduction
> Javascript is a hot language, it was originally created to move things around and to make things jump from one place to another on the page, but now it is a very popular language and almost all websites use javascript. Javascript can do anything, apply cookies secretly, hide stuff, completely change the html and css, redirect you to a hack site, spoof your data, etc .. that’s why some browsers have an option to block javascript. Or sometimes when a site has suspicious javascript, your browser advises you not to enter. An example of this is just a basic javascript loop of displaying stuff and console logging forever on the website. This will crash your computer, resulting in data loss, and the website will be blocked by your browser. Even with your own javascript. So that's why you gotta be careful with websites using javascript. But in general javascript can do a lot of awesome stuff, for more, check codepen, there are a lot of examples there.

Well .. that was a long description of javascript. Let’s start!

The javascript code is [here](https://github.com/Keshav11-coder/CB2022_Keshav), if you hate me explaining:

chatappV6.0, is currently the latest;

#### Javascript
In this heading, I'll be explaining how my javascript works. 

##### §1. Structure
Keep your coffee ready, put on your headphones, open Spotify .. let's dive in .. 

For our code, we need the whole code to run in order to “connect”. But when you try to send a message, it wont work. That is if you put it in a function. And the sendMessage is also a function. You cannot call functions in functions in javascript. So we’re gonna work with class objects. But not the regular class .. objects .. 

```javascript
app = {
connection:function(){
}
```
 
And in the connect function we put everything .. the settings, the ```client.on``` ’s, and the settings (```opts```).
And anything that does something physical on the page, goes out of the object.

##### §2. settings/variables
Everything needs settings or variables, else it just can’t work. Our app too.
It’s a lot, but it’s worth it.

```javascript
var USER = document.getElementById('logon-as').value;
var ID = document.getElementById('admin').value;
var mqttServer = "ws://broker.hivemq.com:8000/mqtt";
var mqttTopic= "codettes2022";3
var userName = USER;
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
```
 

##### §3A. client.on();
Every app needs an ```on event``` manager. Ours too. We have a ```client.on(“something”, {});``` for that. Here is an example:

```javascript
client.on('error', function (err) {
 console.log(err)
 client.end()
})
```

 
This handles an error when there’s an error at the client. Instead of blocking the code or continuing the script and looping through errors. It just prints the error and ends the connection to end it all.

Then we have the ```client.on(connect)``` function: 

```javascript
client.on('connect', function () {
 // Once a connection has been made, make a subscription and send a message.
 console.log('client connected:' + clientId)
 client.subscribe(mqttTopic, { qos: 0 })

 message = (USER + " just hopped on! say hi!");
 message2 = (USER + " just landed! say hello!");
 message3 = (USER + " joined the party! welcome!");
 message4 = ("welcome "+ USER +", we hope you brought boogie's");
 message.destinationName =  mqttTopic;
 message2.destinationName = mqttTopic;
 message3.destinationName = mqttTopic;
 message4.destinationName = mqttTopic;

 var values = [message,message2,message3,message4]
 ToUse = values[Math.floor(Math.random() * values.length)];

 client.publish(mqttTopic, ToUse, { qos: 0, retain: false })
 sendPong();
})
```


This basically handles messages and what happens when a user connects. One of the examples is the message displaying. And at the end we send a pong (sends info back)

##### §3B. client.on();

Then we also have the ```.on message``` event. Here:

```javascript
client.on('message', function (topic, message, packet) {
 msg = message.toString(); // library delivers  buffer so convert to string first
 console.log("onMessageArrived: "+ msg);
 // if it has JSON payload do NOT add to chat
 try{
   msgObj = JSON.parse(message.toString()); // t is JSON so handle it how u want
   // if message has Pin of Pong in it send it to the PingPongHandler
   if (Object.keys(msgObj)[0] == "ping"){sendPong();};
   if (Object.keys(msgObj)[0] == "pong"){handlePong(msgObj.pong);}; // pong value is an object!!
   // other handlers for control messages below
 }catch{
   document.getElementById("chatlog").innerHTML += "<br>" + msg;
 }
})
```


This basically activates when a user receives messages. First they convert it to a string, then we check if the message has JSON content in it, if it does then we don't display it. If it doesn't then we do.

And at the end we log the message to the chat log.

##### §4A. Ping
Yes, and no, it's not the game of ping pong, ping pong basically does this:

The client pings, requests info >
< the app pongs, gives info back.

Ping:

```javascript
function sendPing(usr='*'){
   // ping sends out a message to all (*) or any specific user to respond if ur there
   var pingObj={ping:usr}; // JS Object {ping : "usr"} -> JSON {/"ping/":/"usr/"}
   client.publish(mqttTopic, JSON.stringify(pingObj));
}
```

It just sends a ping to all and then does some more ```json``` stuff..

##### §4B. Pong
Now we send info back: 

```javascript
function sendPong(){
   // sends clientID and UserName in a JSON object (and whatever u need more)
   var pongObj={pong :{userName : userName, clientId:clientId}};
   client.publish(mqttTopic, JSON.stringify(pongObj));
   console.log(JSON.stringify(pongObj));
}
```


This basically creates a pong object,  publishes it into the mqtt, and then the console logs it. Because we don't want ```json``` messages in the chat. You could say this ```json``` has become cheat codes or special secret codes.

##### §5. redrawUserList
The userList seems kind of boring and empty. So let’s upgrade it a little. For every user that logs on, create a chat in the user list:

 ```javascript
function redrawUserList(){
   // Generate the userlist HTML
   var ulist="";
   userList.forEach(function (item) {
       //var x = arrayItem.prop1 + 2;
       var CHATBUBBLE='<div class="codettesBootcamp2022"><h4 class="bootcamp2022name">';//</h4></div>
       if(item.userName == USER){
       }else{
           ulist+= CHATBUBBLE + item.userName + "<i class='fa fa-fw fa-phone'></i></a></li>"+ "</h4></div>" +"<br>"
       }
   });
   console.log(ulist);
   document.getElementById("userlist").innerHTML=ulist;
}
 ```


So this basically does what I said: for every user that pops on, create something in the userlist.

##### §6. Handle pongs
This makes sure no person gets in the userlist twice and handles all the pongs. With these pongs the userlist can be updated:

 ```javascript
function handlePong(pongObj){
   // Update Userlist with Pongs
   const index = userList.findIndex(object => {
     return object.userName === pongObj.userName;
   });

   //console.log("index:" + index);
   if(index>=0){
       console.log("User exists");
       userList[index] = pongObj;
   } else{
       console.log("New User " + pongObj.userName);
       userList.push(pongObj);
   }
   //console.log(userList);
   redrawUserList();
}
```

##### §7. Steal that input
Anything that does something physical on the page, like sending messages and updating the chatlog goes outside.

```javascript
var USER = document.getElementById('logon-as').value;
var ID = document.getElementById('admin').value;

function getInput(){
   var USER = document.getElementById('logon-as').value;
   var ID = document.getElementById('admin').value;
   document.getElementById("content").className="content";
   document.getElementById("chatapp").className="N";
   console.log("alert{>>'new user signed on as ["+ USER +"] with:id:of["+ ID +"]'<<}");
   console.log("dialog hidden");
   app.connection();
}
```

We first actually do this. This gets the inputs from the login screen and saves them. So we can use them later


##### §8A. reborn

The functions that actually do something on the page are the ```sendMessage``` and ```sendMessageButton```.

Before we can use them.. We have to declare these ```variables``` again, else they won't work:

```javascript
var USER = document.getElementById('logon-as').value;
var mqttServer = "ws://broker.hivemq.com:8000/mqtt";
var mqttTopic= "codettes2022";
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
```

##### §8B. Physical functions

The ```sendmessage``` button basically checks if the text is nothing, if it’s not then send a message. Remember that this is only triggered when the user uses the button to send messages:


```javascript
function sendMessageButton(msgtext){
    if (msgtext!=''){
        var USER = document.getElementById('logon-as').value;
        var userName = USER;//document.getElementById("loginName").value; // || "anonymous user"
        client.publish(mqttTopic, userName + " says: " + msgtext);
        if(msgtext == "whoami"){
            console.log(userName);
            client.publish(mqttTopic, "Your name is " + userName + ", silly");
        }
    }
}
```

And then we have the ```sendmessage```, that just listens if you press enter and the textbox has input and then sends the message:

```javascript
function sendMsg(ele) {
   if(event.key === 'Enter') {
       var USER = document.getElementById('logon-as').value;
       var userName = USER;//document.getElementById("loginName").value; // || "anonymous user"
       if(ele.value == "whoami"){
           console.log(userName);
           client.publish(mqttTopic, "Your name is " + userName + ", silly");
       }
       client.publish(mqttTopic, userName + " says: " + ele.value);
       //alert(ele.value);
       ele.value = ""; // reset the input after entering
   }
}
```

With all of this code together, we form the ```app.js```. Download it at the github page somewhere above.


## Does it work though
Yes, it does. And I finalized it a bit. Added some new colors, and even the login screen, check it out:

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image24.png)


![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image15.png)

And that is the chat app until now! Hope you enjoyed it. And as you can see, it does work.
 
# Build Chat app back-end NodeJS
Hey! I’m back, and here’s some more documentation on ```NodeJS back-end``` in depth ..

## Basic localhost
The First thing I did was of course host something on ```localhost:xxxx```, but how did we do that? Well! Here’s the answer: ctrl c + ctrl v. 

…

Just kidding, but most of it was copied from the internet sooo .. 

The platform (or npm package) we used for this was ```express```, express helps you host your “website” on ```localhost``` and do stuff with it. But why not ```http```? That would also work .. but we had to work with express. Probably because it supports a topic we will discuss later, or it’s very easy to code endpoints, just like Flask. But okay, enough of that. Let's explain the code.

### Express setup
To install ```express```, all I had to do was type “npm i express” in the ```NodeJS terminal```. If you did not know, the “i” in there basically refers to “install”, so you’re basically telling the system:

 “hey listen, I said npm install, so you know I wanna install something”

After installation, I’m gonna include the library in my javascript, like this:

 ```javascript
const express = require("express")
const path = require("path")
const app = express()
```

We also have something called ```path```, we can install it like this: “npm i path”.
But here we are basically including the express and path libraries, and setting the “app” variable to “express();”. This means that you’re telling express that you are ready, and that he needs to be ready too.

Here you can see we are taking the ```static``` files, like ```html``` ```css``` and ```javascript``` from the data folder and using them as a landing page when you go to localhost:

```javascript
const publicDirectoryPath = path.join(__dirname, 'data')
app.use('/', express.static(publicDirectoryPath))
```

### Express endpoints
When we’re gonna make a “website”, we won’t only have a home screen right? We also want ```subdomains``` .. so let’s add them:

```javascript
app.get('/api.syscore.log', (req, res) => {
  res.send("something else")
})

app.get('/api.syscore.users', (req, res) => {
  res.send("something")
})
```

We are first setting the ```app.get``` property to whatever you want, it just doesn't need to have spaces. And then we define the ```request(req)``` and the ```response(res)``` between the client and the back-end. And then we send something to the website. Of course you can also add styling and html to it by using the method up top but when you don't want to send much info except for plain text then this is the way to go.

Here I have an example but here we fetch some data from ```MongoDB``` and use it there, a topic i'll explain later:

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image13.png)

## Set up basic communication using mqtt between back-end and client
If you’ve looked at the previous chatapp code, you’ve probably seen functions like “```client.on message```” or “handlepong” or “sendmessage” .. we are going to use those functions here too.

### Mqtt setup NodeJS
To set up ```mqtt```, I first had to install mqtt using the usual: “```npm i mqtt```” .. and then the setup in the code:

```javascript
const mqtt = require('mqtt')
const client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
```

We are doing the basic stuff, saying that mqtt is the package mqtt, and connecting to the ```broker```.

### Callbacks and functions
As I already said, we have a few (alot!) functions that we have to add to get our chat app working with NodeJS. 

#### §1. Callbacks
The first ```callback``` we’ll talk about is the connect callback. But what are callbacks exactly? For example the connect callback, it basically looks out for when a client connects to my app, and does what's in its brackets. And when a client (currently you) is already connected, it stays idle. (according to my research)

```javascript
client.on('connect', function () {
 client.subscribe('codettes2022', function (err) {
   if (!err) {
     client.publish('codettes2022', 'Hello from NodeJS (No you cant eat it)')
   }
 })
})
```

The next callback checks when a message arrives. When it gets the message, it checks whether the message has JSON code in it, if it does, do something, if it doesn’t, filter it and don't display it. Else display the message.

```javascript
client.on('message', function (topic, message) {
 // message is Buffer
  try {
      msgObj = JSON.parse(message.toString()); // t is JSON so handle it how u want
      // if message has Pin of Pong in it send it to the PingPongHandler
      if (Object.keys(msgObj)[0] == "ping") {
          sendPong("codettes2022","Server", "cb_12345678");
      };
      if (Object.keys(msgObj)[0] == "pong") {
          handlePong(msgObj.pong);
      }; // pong value is an object!!
      // other handlers for control messages below
  } catch {
      messages.push({"time" : Date(),  "topic" : topic, "message" : message.toString()});
  }
 console.log(message.toString())
})
```

#### §2. Functions
There’s no code without functions. Or, there can be, but then it’s really messed up and not structured. Even my app uses functions a lot.

The first function that we use is the sendPing function. As I already said, It just sends a ping to all and then does some more json stuff.

```javascript
function sendPing(usr = '*', mqttTopic = "codettes2022") {
   var pingObj = {
       ping: usr
   }; // JS Object {ping : "usr"} -> JSON {/"ping/":/"usr/"}
   client.publish(mqttTopic, JSON.stringify(pingObj));
}
```

And then we have the pong function. That basically sends a pong (```response```) to everyone. In short: sending information back.

```javascript
function sendPong(_mqttTopic = "codettes2022", _userName = "Server", _clientId = "cb_12345678") {
   // sends clientID and UserName in a JSON object (and whatever u need more)
   var pongObj = {
       pong: {
           userName: _userName,
           clientId: _clientId
       }
   };
   console.log(JSON.stringify(pongObj));
   client.publish(_mqttTopic, JSON.stringify(pongObj));
}
```

And then we have the handle pong, no person gets in the userlist twice and the handlepong handles all the pongs. With these pongs the userlist can be updated, as I already said.

```javascript
function handlePong(pongObj) {
   const index = userList.findIndex(object => {
       return object.userName === pongObj.userName;
   });
   if (index >= 0) {
       console.log("User exists");
       userList[index] = pongObj;
   } else {
       console.log("New User " + pongObj.userName);
       userList.push(pongObj);
   }
}
 ```

## Last man standing
So now that we have all that, ending off is the same, we just add the endpoints and listen at port ```3000```

```javascript
// Express static webserserver
const publicDirectoryPath = path.join(__dirname, 'data')
app.use('/',express.static(publicDirectoryPath))


// Express API routes
app.get('/log', (req, res) => {
 res.send(messages)
})

app.get('/users', (req, res) => {
 res.send(userList)
})


app.listen(3000, () => {
  console.log("Server has started!")
})
```

Ok, so now we can add all the log and info at endpoints and use it with NodeJS. Now comes storing the data somewhere, like in MongoDB, but that’s for the next objective, see you there!


[Link to the NodeJS code](https://github.com/Keshav11-coder/CB2022_Keshav/tree/main/cloudserver)

# Setup MongoDB datastore & connect via NodeJS
Now! I said last time we need some sort of way to store our messages/users/chats .. only if we had something .. something like .. MySQL .. or ..

## Introduction to MongoDB
Welcome to mongoDB! 
MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need.
Let's get started!

The first thing you will install for monitoring, debugging and managing, just like mqttLens, is ```MongoDBCompass```. I installed it from here:

[Install MongoDB Community Edition](https://www.mongodb.com/docs/manual/administration/install-community/)

I’m broke, so I installed the community edition.
After that, I started it up, looked through some tutorials and now I know what I’m doing.
Basic code for creating a collection/adding to a collection or database:

```javascript
dbo.collection("messages").insertMany(msgvar, function (err, res, collection) {
    if (err) throw err;
        console.log("Number of documents inserted for <messages>: " + res.insertedCount);
        //db.close();
});
```

This is a full code:

```javascript
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://0.0.0.0:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
  ];
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
```

But we don't want to just- AdD DaTa To MoNGoDB .. no .. I want to add JSON data when a message arrives and when a new user gets online. Then I want to fetch that information from mongo and use it in my endpoint, because currently it is just displaying content/message_log when you are on there at that point. When you weren't there, you missed it. But now with the mongo, we can recover that data and show the history.

So? Let’s do that!

## Setup mongoDB in NodeJS
SO. As usual, we go straight into NodeJS terminal and type: “npm i mongodb”, and be done with the installation. 

Now .. we set it up, the package, etc .. 

```javascript
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://0.0.0.0:27017/";
```

We also need a url, which mongodb can connect to. In our case http://localhost:27017

Then, we do this, now .. this piece of code is kind of complicated .. and i'll explain it briefly

```javascript
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("chatapp");
  var messageee = message.toString();
  var msgvar = [{ "msg": messageee }];
  dbo.collection("messages").insertMany(msgvar, function (err, res, collection) {
    if (err) throw err;
    console.log("Number of documents inserted for <messages>: " + res.insertedCount);
    //db.close();
  });
  const collection = dbo.collection('messages')
  collection.find().toArray((err, items) => {
    //console.log(items)
  })
});
```

Yeah well .. I gave it weird names but in general: we connect the ```mongoclient``` with the ```url```, and then we set up the function. Much like the callbacks. Then we check if there’s an error, if not then continue. We set up our variables. The ```msgvar``` is a JSON object. Then we add to the database’s collection messages and insert the messages there. Basically storing all messages. And then we find the collection and then we extract all items in there and I would console log it. I removed it because it was becoming too big. And this would then go in the ```onmessage callback```.

### Updating callbacks and functions
So we need to update all our callbacks and functions.

#### On message arrived
Okay, so now our on message arrived looks like this:

```javascript
client.on('message', function (topic, message) {
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://0.0.0.0:27017/";
  // message is Buffer
  try {
    msgObj = JSON.parse(message.toString()); // t is JSON so handle it how u want
    // if message has Ping of Pong in it send it to the PingPongHandler
    if (Object.keys(msgObj)[0] == "ping") {
      sendPong("codettes2022", "Keshavs NODEJS server", "cb__SERVER{usr:'Keshav'::S_id__unwn}");
    };
    if (Object.keys(msgObj)[0] == "pong") {
      handlePong(msgObj.pong);
    }; // pong value is an object!!
    // other handlers for control messages below
  } catch {
    messages.push({ "time": Date(), "topic": topic, "message": message.toString() });
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("chatapp");
      var messageee = message.toString();
      var msgvar = [{ "msg": messageee }];
      dbo.collection("messages").insertMany(msgvar, function (err, res, collection) {
        if (err) throw err;
        console.log("Number of documents inserted for <messages>: " + res.insertedCount);
        //db.close();
      });
      const collection = dbo.collection('messages')
      collection.find().toArray((err, items) => {
        //console.log(items)
      })
    });
  }
  console.log(message.toString())
})
```

#### HandlePong
The handlepong will also be changed. It’s almost like the message storage but instead storing all users. Pretty straight forward:

```javascipt
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("chatapp");
  var usrnm = pongObj.userName.toString();
  var usrvar = [{ "USR": usrnm }];
  dbo.collection("users").insertMany(usrvar, function (err, res, collection) {
    if (err) throw err;
    console.log("Number of documents inserted for <users>: " + res.insertedCount);
    //db.close();
  });
  const collection = dbo.collection('users')
  collection.find().toArray((err, items) => {
    //idk what to do here
  })
});
```


We are only changing the values and the collection name to “users”.

So the goal I’m trying to achieve by doing this is storing all user data and message logs in mongodb, and when a user goes to the endpoint, you can view the entire log of messages or top ten.

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image20.png)
 
The full user update code looks like this:

```javascript
function handlePong(pongObj) {
  // Update Userlist with Pongs
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://0.0.0.0:27017/";
  const index = userList.findIndex(object => {
    return object.userName === pongObj.userName;
  })

  //console.log("index:" + index);
  if (index >= 0) {
    console.log("User exists");
    userList[index] = pongObj;
  } else {
    console.log("New User " + pongObj.userName);
    userList.push(pongObj);
  }
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("chatapp");
    var usrnm = pongObj.userName.toString();
    var usrvar = [{ "USR": usrnm }];
    dbo.collection("users").insertMany(usrvar, function (err, res, collection) {
      if (err) throw err;
      console.log("Number of documents inserted for <users>: " + res.insertedCount);
      //db.close();
    });
    const collection = dbo.collection('users')
    collection.find().toArray((err, items) => {
      //idk what to do here
    })
  });
}
```

## Setup mongoose
Mongoose is an ```Object Data Modeling (ODM)``` library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

You can simply install mongoose by typing “npm i mongoose” into the NodeJS command prompt.

I didn’t use mongoose often, but when I’ll use it later, I’ll be mentioning it.
 
# Create data-bound widgets to display sensor data
So, now that we figured out a way to store and receive data in mongoDB and javascript.. But what if we want to use that data in ```html```? Well that’s what we’ll be doing today.

## Approach
I first was breaking my head about this, since this was according to my experience impossible.. Because it's the server side handler that gets and sends all the data.. And I could do that with importing in html too but the mongoDB library isn’t only written in javascript.. So I was kind of stuck. But then I came across ```ejs```. With ejs I can code in html, but at the same time I can use javascript variables in the html code. So my server hosts the ejs file and then I can use the server variables in my html (ejs):

```javascript
res.render('index.ejs', {
  log: itm
});
```

```html
<h4 id="hr"><%= log %></h4>
```

And to get the latest data from mongoDB, I did this:

```javascript
MongoClient.connect(url, function (err, db) {
  var dbo = db.db("chatapp");
  const collection = dbo.collection('messages');
  collection.find().sort({ '_id': -1 }).limit(1).toArray((err, items) => {
    var _log = items;
    _log.forEach(function (item) {
      globalThis.itm = item.msg
      globalThis.itm = itm.toString();
    });
    res.render('index.ejs', {
      log: itm
    });
  });
});
```

So I’m doing the basic stuff until I take the latest one and then I say that I only want the message from the JSON, else it will come in as JSON objects. And then finally, I “globalize” it and pass it to the render.

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image2.png)
###### Example getting data from a tello drone, storing, retrieving and displaying it

So now that we know what the approach does, let's look at the code.
 
## Code
### Setup
Let’s look at the first piece of NodeJS code, here we are including all libraries and initializing all the needed platforms:

```javascript
const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const ejs = require('ejs');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://0.0.0.0:27017/";
const PORT = 3000;
const defIP = "http://localhost:3000 or http://127.0.0.1:3000/";
```

And then we set up the basic mqtt:

```javascript
// MQTT client connection on NodeJS
var userList = []; // manage the userlist
var messages = []; // message log dit wordt straks die MongoDB

//connect mqtt
const mqtt = require('mqtt');
const client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt");
var mqtt_tpc = "codettes2022"; // change the mqtt topic here
```
 
### Main Endpoint
I will not explain the callbacks and functions again because they stay the same.

But here we have the first endpoint, the message endpoint. 

```javascript
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  MongoClient.connect(url, function (err, db) {
    var dbo = db.db("chatapp");
    const collection = dbo.collection('messages');
    collection.find().sort({ '_id': -1 }).limit(1).toArray((err, items) => {
      var _log = items;
      _log.forEach(function (item) {
        globalThis.itm = item.msg
        globalThis.itm = itm.toString();
      });
      res.render('index.ejs', {
        log: itm
      });
    });
  });
});
```

So first we are setting up the ```EJS view engine```. And then we set up the main endpoint. First we enter the mongoClient callback, then we declare our necessary variables, then we enter the collection, here we will find the latest message, set it to a variable and then extract the message object out of it. We set that item to a global variable and then we use it in the render to be later used in the EJS file:

```html
<h4 id="hr"><%= log %></h4>
```

That was pretty simple.. Not too much.. But Mr Theo has another method he will explain too. This is just an approach. 

# 3D Printing

======

## Sup’! It's me again, keshav.
#### In this document I'll talk about my journey with 3D design & printing.
#### 3D printing is fun, but sometimes it can really be a pain, for example when the print fails, or the settings weren't correct.
 
#### There are different techniques in the 3D printing industry, but in this chapter I'll be talking about only one: general 3D printing.

#### personally I think I'm a pretty decent 3D designer, but later on you'll see that I used a simple little box for testing. (or just because I was too lazy to create a decent design =V).

#### anyways, back to the document.

# Installation
First thing I had to do was download & install ```cura v5.0.0``` from [here](https://github.com/Ultimaker/Cura/releases/tag/5.0.0), which wasnt that hard.

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image40.png)

I opened the .exe file and this was the setup wizard “landing” screen.. I just clicked through it (next).













# Select Printer
In order to print my designs, I needed to select a printer. First I went to settings > add printer:

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image28.png)

Then I clicked on a non-networked printer and searched for AnyCubic > AnyCubic Predator

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image32.png)

And then I just pressed add.

# Parameters
After installing cura I had to set the printer and its parameters, because if you dont, it wont work properly.

## Quality: 

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image39.png)

## Walls:

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image31.png)

## Top/Bottom:

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image35.png)

## Infill:

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image26.png)

## Speed:

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image25.png)

## Travel:

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image42.png)

## Cooling:

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image29.png)

## Support:

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image25.png)

## Build Plate Adhesion:

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image30.png)

### … And the rest stays on default:

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image34.png)

After doing that I hopped on tinkercad after ages, and made a new design:

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image37.png)

We had to do a test print, so I just pulled up a silly ```little box of 2cm by 2cm``` and exported as ```STL```:

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image38.png)

After the download, I imported the stl in my ```cura```: 

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image28.png)

As you can see, it will take ```2 minutes``` to print.

# G-Code
After all that, I had to export the file to ```gcode``` format. Gcode tells the printer where to go, with what speed to travel etc .. according to the settings we set earlier.

![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image36.png)

#### This is what G-Code looks like:
![](https://raw.githubusercontent.com/Keshav11-coder/Keshav11-coder.github.io/main/bootcamp2022/images/image33.png)
