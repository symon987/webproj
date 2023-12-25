const express = require('express');
const http = require('http');
const path = require('path');
const nodemailer =require('nodemailer');

var app = express()
var server = http.Server(app);
const port = 500;

app.set('port', port);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '/Public')));

app.get('/', function (req, response) {
  response.sendFile(path.join(__dirname, 'Public/index.html'))
})

app.post await ('/send_email', (req, response) => {
  var from = req.body.textinput.value;
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shawnautomailjs@gmail.com',
      pass: 'klmh cooe wttq rxbn'
    }
  })

})

  var mailOptions = {
    from: from,
    to: "shawnbacatan123@gmail.com"
    subject: 'this person accessed your website'
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error while sending email')}; 
      else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully')};
      });

server.listen(port, function(){
  console.log('starting server on port:' + port)
})

