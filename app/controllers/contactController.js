const nodemailer = require("nodemailer");
const { text } = require("stream/consumers");

const contactController = {

    contact: (req, res) => {

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.TESTPASSWORD
            },

        })
        const mailOptions = {
            from: req.body.email,
            to: process.env.GMAIL_USER,
            subject: `Message de la part de ${req.body.name} (${req.body.email}) : ${req.body.subject}`,
            text: `${req.body.message}`,


        }
        console.log(req.body);

        transporter.sendMail(mailOptions, (error) => {
            if (error) {
                console.log(error);
                return res.send('error');
            } else {
                res.send('Email sent');
            }
        })
    }
};



module.exports = contactController;