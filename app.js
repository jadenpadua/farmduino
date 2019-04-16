/*
 * Resources: https://www.npmjs.com/package/node-bluetooth
 */


/**** Import Modules ****/ 
const http = require('http');
const bluetooth = require('node-bluetooth');
const express = require('express');
const path = require('path');

/**** Front-End Setup ****/
const app = express();
const router = express.Router();


router.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
})

app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/images'));
app.use('/', router);


app.listen(process.env.port || 3000);
console.log('Running at Port 3000');

/**** Bluetooth ****/

// create bluetooth device instance
const device = new bluetooth.DeviceINQ();
const address = ""; // represents bluetooth address of the motor to move the water pump
const name = ""; // i think we need to find the name of the device?? I'm not 100% sure about this

// // lists all the paired devices
// device.listPairedDevices(console.log);

// // connecting to Bluetooth device
// device.findSerialPortChannel(address, function(channel){
//   console.log('Found RFCOMM channel for serial port on %s: ', name, channel);
 
//   // make bluetooth connect to remote device, we need to figure out the address for the other device
//   bluetooth.connect(address, channel, function(err, connection){
//     if(err) return console.error(err);
//     connection.write(new Buffer('Hello!', 'utf-8'), () => {
//       console.log("wrote");
//     });
//   });
// });