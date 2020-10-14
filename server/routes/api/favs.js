const express = require('express');
const router = express.Router();

const Fav = require('../../models/Fav');

router.get("/favs", (req, res) => {

    let param = req.query.id; 

    Fav.find({user : param})
        .then((result) => res.json(result))
        .catch((err) => console.log(err));
});

router.post("/favs", (req, res) => {
    const fav = new Fav({
        name: req.body.name,
        user: req.body.id
    })
    fav.save()
        .then((result) => res.json({result, message: "Fav sauvegardé"}))
        .catch((err) => res.send(err));
});

router.delete("/fav/:id", (req, res) => {

    const id = req.params.id;

    Fav.deleteOne({'_id' : id})
        .then((result) => res.json({result, message: "Fav supprimé"}))
        .catch((err) => console.log(err));
});

module.exports = router;