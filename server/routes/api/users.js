const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

router.post("/register", (req, res) => {
    // Form Validation

    User.findOne({username : req.body.username})
    .then( user => {
        if(user) {
            res.status(400).json({username : "Ce nom d'utilisateur est déjà utilisé"})
        } else {
            const newUser = new User({
                username: req.body.username,
                password: req.body.password
            });
        

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (error, hash) => {
                if (error) throw error;
                newUser.password = hash;
                newUser
                    .save()
                    .then(user => res.json({user, message : "Inscription validée"}))
                    .catch(err => console.log(err));
            });
        });
        };
    });
});

router.post("/login", (req, res) => {
    
    const {username, password} = req.body;

    User.findOne({username})
    .then(user => {
        if(!user) {
            return res.status(400).json({utilisateur : "utilisateur non trouvé"});
        }

        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(isMatch) {
                const payload = {
                    id : user.id,
                    username : user.username
                }

                jwt.sign(
                    payload,
                    process.env.SECRET,
                    {
                        expiresIn: 31556926 // One year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res.status(400).json({password : "Mot de passe incorrect"});
            }
        });
    });
});

module.exports = router;