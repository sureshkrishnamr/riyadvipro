const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// require('dotenv').config();

 const contactRoutes = require('./routes/contactroutes');
const healthRoutes = require('./routes/healthroutes');
const adminRoutes = require('./routes/adminroutes')

 const app = express();

 app.use(cors({
     origin: "http://localhost:5173",
     methods:["GET", "POST", "PUT", "DELETE"]
 }));

 app.use(express.json())

mongoose.connect("mongodb+srv://krishnasuresh13mr_db_user:zklx4fnkURfpQedd@cluster0.o1pjjhh.mongodb.net/riyadvi")
        .then(() =>{
            console.log("Mongodb connected");
           const PORT = 3000;

            app.listen(PORT,() =>{
                console.log(
                    `Server running on ${PORT}`
                );
                
            }) 
        })
        .catch((error) => {
            console.error("MongoDB Connection Error:", error.message);   
        })

 app.use('/api/contact', contactRoutes);
 app.use('/api/health-checkup', healthRoutes)
 app.use('/api/admin', adminRoutes)

app.get('/', (req, res) =>{
    res.json({
        message: "Riyadvi Backend API Running"
    })
})

