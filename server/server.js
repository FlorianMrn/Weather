const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const users = require('./routes/api/users');
const favs = require('./routes/api/favs');
const path = require('path');
require('dotenv').config();

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(
    cors(),
    bodyParser.json()
);


mongoose.connect(
    `mongodb+srv://admin:${process.env.DB_PASS}@cluster0.o5plw.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {   useNewUrlParser: true,
        useUnifiedTopology: true 
    }
    ).then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB :", err));

app.use(passport.initialize());
require('./config/passport')(passport);
app.use("/api/users", users);
app.use("/api", favs);

if (process.env.NODE_ENV === "production") {

    // Set static folder
    app.use(express.static("client/build"));
  
    // index.html for all page routes
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    });
};
  

app.listen(PORT, () => {
    console.log(`Listenning on ${PORT}`);
});