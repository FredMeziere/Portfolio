const nodemailer = require("nodemailer");

const contactController = {

    contact: (req, res) => {
            
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                secure: false,
                auth: {
                    user: process.env.GMAIL_USER,
                    pass: process.env.TESTPASSWORD
                },
        
            })
            const mailOptions = {
                from: req.body.email,
                to: process.env.GMAIL_USER,
                subject: `Message de ${req.body.email}: ${req.body.subject}`,
                text: req.body.message
            }
            
            transporter.sendMail(mailOptions, (error, info)=>{
                if(error){
                    console.log(error)
                    res.send('error');
                } else {
                    console.log('Email sent :' + info.response);
                }
            })
            
       }
      
    };



module.exports = contactController;