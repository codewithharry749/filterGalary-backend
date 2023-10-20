const express = require('express');
const User = require('../model/userSchema');
const router = express.Router();


//  ============== user Signup ====================

router.post('/signup', async (req, res, next) => {
    try {

        const { email, password, cpassword } = req.body;
        console.log({ email, password, cpassword })


        if (!email || !password || !cpassword) {
            res.status(500).json({
                Error: 'Plz fill all the entry currectly'
            })
        }
        if (password !== cpassword) {
            res.status(500).json({
                Error: 'Password not matched'
            })
        } else {
            const userExist = await User.findOne({ email: email });
            if (!userExist) {
                const user = await User.create({ email, password, cpassword });
                await user.save().then(() => {
                    res.status(200).json({
                        data: user,
                        massage: 'Form signup Successfull',
                        success: true
                    })
                }).catch(() => {
                    res.status(500).json({
                        Error: 'plz enter currect detail'
                    })
                })

            } else {
                res.status(500).json({
                    Error: 'Email already exist'
                })
            }
        }
        next()
    } catch (err) {
        console.log("Error occure in data entry")
    }
});


//  ======= Login ============

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log({ email, password })
    const userlogin = await User.findOne({ email: email });
    if (userlogin) {
        if (userlogin.password === password) {
            res.status(200).json({
                massage: 'login successFull',
                success: true
            })
        } else {
            res.status(400).json({
                massage: 'login failed',
                success: false
            })
        }
    } else {
        res.status(400).json({
            massage: 'user does not exist',
            success: false
        })
    }
})

module.exports = router;