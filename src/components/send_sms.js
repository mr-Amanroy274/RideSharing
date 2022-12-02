// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;

const accountSid = 'AC555e7652b1769c6a0c787635cb0e1759';
const authToken = '658bf4360530c275158dab5c9854943a'
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the test message for ride sharing',
     from: '+9779804804550',
     to: '+9779864220991'
   })
  .then(message => console.log(message.sid));
