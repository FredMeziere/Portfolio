const contactController = {

    contact: ('/contact', async (req, res, next) => {
        const { yourname, youremail, yoursubject, yourmessage } = req.body;
        try {
            await sendMail(yourname, youremail, yoursubject, yourmessage);
        } catch (error) {
            res.send("Message Could not be Sent");
        }
        res.send("Message Succssfully Sent!");
    })
};

module.exports = contactController;