const express = require("express");


const authMiddleware = require("../middleware/authMiddleware");
const { getContacts, getHealthCheckups, getStats } = require("../controllers/adminDataController");
const { createAdmin, loginAdmin } = require("../controllers/admincontroller");

const router = express.Router();


// Create first admin
router.post(
  "/create",
   createAdmin
);

router.get(
  '/contacts', authMiddleware,getContacts
);

router.get(
  '/health-checkups',
  authMiddleware,
  getHealthCheckups
)

router.get('/stats', authMiddleware, getStats)

router.get("/profile",authMiddleware,(req,res)=>{
  res.json({
    success:true,
    message:"Admin authentication successful",
    admin: req.admin,
  })
})

// Login
router.post(
  "/login",
  loginAdmin
);


module.exports = router;