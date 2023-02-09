require('dotenv').config();
const express = require('express');
const router = require("./app/router");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static(__dirname + '/public'));

async function mainMail(name, email, subject, message) {
    const transporter = await nodeMail.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.PASSWORD,
      },

      service:"Outlook365",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.PASSWORD,
      },
    });
    const mailOption = {
      from: process.env.GMAIL_USER,
      to: process.env.EMAIL,
      subject: subject,
      html: `You got a message from 
      Email : ${email}
      Name: ${name}
      Message: ${message}`,
    };
    try {
      await transporter.sendMail(mailOption);
      return Promise.resolve("Message Sent Successfully!");
    } catch (error) {
      return Promise.reject(error);
    }
  }
  app.post("/contact", async (req, res, next) => {
    const { yourname, youremail, yoursubject, yourmessage } = req.body;
    try {
      await mainMail(yourname, youremail, yoursubject, yourmessage);
      
      res.send("Message Successfully Sent!");
    } catch (error) {
      res.send("Message Could not be Sent");
    }
  });

app.use(router);

app.listen(PORT, () => {
console.log(`Server ready : http://localhost:${PORT}`);
});






