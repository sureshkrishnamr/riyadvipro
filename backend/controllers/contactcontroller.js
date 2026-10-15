const Contact = require('../models/contact')

const Createcontact = async(req, res) => {
    try {
        console.log(req.body);
        
        const {name, email, phone, company, message, subject} = req.body;
        if(!name || !email || !phone || !subject || !message ){
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields"
            })
        }
        const contact = await Contact.create({name, email, phone, company, message, subject});
        res.status(201).json({
            success: true,
            message: "Your message has been submitted Successfully",
            data: contact
        })

    }
    catch(error){
        console.error("Contact Error", error);
        
        res.status(500).json({
          success: false,
          message: "Server Error"  
        })
    }
}

module.exports = {Createcontact }