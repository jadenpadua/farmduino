/*
 * Resources: https://www.npmjs.com/package/node-bluetooth
 */


/**** Import Modules ****/
const http = require('http');
// const bluetooth = require('node-bluetooth');
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

// // create bluetooth device instance
// const device = new bluetooth.DeviceINQ();
// const address = ""; // represents bluetooth address of the motor to move the water pump
// const name = ""; // i think we need to find the name of the device?? I'm not 100% sure about this


let btSerial = new (require('bluetooth-serial-port')).BluetoothSerialPort();

btSerial.on('found', function(address, name) {
	btSerial.findSerialPortChannel(address, function(channel) {
    console.log("found " + address);
    if (address == '00:14:03:05:59:36'){
      btSerial.connect(address, channel, function(){
        console.log('connected to ' + address);
        console.log('channel is: ' + channel);
        console.log("The connection is : " + btSerial.isOpen());

        btSerial.write(Buffer.from('uwu', 'utf-8'), function(err, bytesWritten){
          if (err) console.log(err);
          if (!err) console.log(bytesWritten);
        });

        btSerial.on('data', function(buffer){
          console.log(buffer.toString('utf-8'));
        }, function(){
          console.log('cannot connect and write data')
        });
      });





    }

    // close the connection when you're ready
    // btSerial.close();
		// btSerial.connect(address, channel, function() {
		// 	console.log('connected');
    //
		// 	btSerial.write(Buffer.from('my data', 'utf-8'), function(err, bytesWritten) {
		// 		if (err) console.log(err);
		// 	});
    //
		// 	btSerial.on('data', function(buffer) {
		// 		console.log(buffer.toString('utf-8'));
		// 	});
		// }, function () {
		// 	console.log('cannot connect');
		// });
    //
		// // close the connection when you're ready
		//  btSerial.close();
	}, function() {
		console.log('found nothing');
	});
});



btSerial.inquire();
// console.log("The connection is : " + btSerial.isOpen());

/*
btSerial.findSerialPortChannel("BC:B8:63:04:D4:AD", function(channel){
  btSerial.connect(address, channel, function() {
    console.log('connected to ' + address);

  })
}, function (){
  console.log("can't connect with Angela's airpods")
})
*/


/*
btSerial.listPairedDevices(function(pairedDevices){
  pairedDevices.forEach(function(device) {
        console.log(device);
  });
})
*/



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
