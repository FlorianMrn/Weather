const express = require('express');
const router = express.Router();

const Fav = require('../../models/Fav');

router.get("/favs", (req, res) => {
    Fav.find({user : req.body._id})
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
});

router.post("/favs", (req, res) => {
    const fav = new Fav({
        name: req.body.name,
        user: req.body._id
    })
    fav.save()
        .then((result) => res.json({result, message: "Fav sauvegardé"}))
        .catch((err) => console.log(err));
})

router.delete("fav/:id", (req, res) => {
    Fav.remove({_id : req.params.id})
        .then((result) => res.json({result, message: "Fav supprimé"}))
        .catch((err) => console.log(err));
});

module.exports = router;