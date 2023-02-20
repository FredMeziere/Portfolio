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

        transporter.sendMail(mailOptions, (error) => {
            if (error) {
                console.log(error);
                res.sendStatus(500)
            } else {
                console.log('Mail send');
                res.sendStatus(200)
            }
        })
    }
};



module.exports = contactController;