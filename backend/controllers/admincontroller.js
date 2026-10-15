const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Admin = require('../models/admin')


const createAdmin = async (req, res) => {
    try{
        const { username, password} = req.body
        if(!username || !password){
            return res.status(400).json({
                success: false,
                message: "Username and password are required"
            });
        }

        const existingAdmin = await Admin.findOne({
            username,
        });

        if(existingAdmin){
            return res.status(400).json({
                success: false,
                message:"Admin already exists"
            })
        }

        const hashedpassword = await bcrypt.hash(password, 10);

        const admin = await Admin.create({
            username,
            password: hashedpassword,
        })

        return res.status(201).json({
            success: true,
            message: "Admin created successfully",
            admin: {
                id: admin._id,
                username: admin.username
            }
        })
    }

    catch(error){
        console.log("Create Admin Error:", error);
        return res.status(500).json({
            success: false,
            message: "server error"
        })
        
    }
}

const loginAdmin = async (req, res) => {
  try {
    console.log(req.body);
    

    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required",
      });
    }

    // Find admin
    const admin = await Admin.findOne({
      username,
    });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password",
      });
    }

    // Compare password
    const isPasswordCorrect =
      await bcrypt.compare(
        password,
        admin.password
      );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password",
      });
    }

    // Create JWT
    const token = jwt.sign(
      {
        id: admin._id,
        username: admin.username,
      },

      "krishna",

      {
        expiresIn: "1d",
      }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",

      token,

      admin: {
        id: admin._id,
        username: admin.username,
      },
    });

  } catch (error) {

    console.error("Login Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


module.exports = {
  createAdmin,
  loginAdmin,
};