const { json, application } = require("express");
const express = require ( "express" );
const fs = require( "fs" );
const session = require("express-session")
const passport = require("passport")
const passportLocalMongoose = require("passport-local-mongoose")
require("dotenv").config();
console.log(process.env.DB_HOST);
// Bring in mongoose
const mongoose = require( 'mongoose' );
const { kStringMaxLength } = require("buffer");

// connects to the "test" database (ensure mongod is running!)
// the later arguments fix some deprecation warnings
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Shoe', 
                  { useNewUrlParser: true, useUnifiedTopology: true });

// this is a canonical alias to make your life easier, like jQuery to $.
const app = express(); 
app.set("view engine", "ejs");


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use (passport.initialize());
app.use (passport.session());

// a common localhost test port
const port = process.env.PORT || 3000; 

//Simple server operation
app.listen (port, () => {
    //template literal
   console.log (`Server is running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname +"/src/index.html");
});
app.get("/authenticate", (req, res) => {
    res.sendFile(__dirname + "/src/Login.html");
});
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/src/About.html")
});
app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/src/Contact.html")
});
app.get("/terrain", (req, res) => {
var t;
var timeout;
    //only render if user is authenticated
    if (req.isAuthenticated()) {
        //req.user.isAuthenticated
        //{pass user name, userprofile terrain: Number/integer}
        console.log("requested username is: " + req.user.username);
        async function findInDatabase() {
            try {
                const results = await userProfile.find({ username: req.user.username });
                console.log("results length: " + results.length); //should find only 1 road terrain
                t = results[0].terrain;
                console.log("terrain value: " + t);
                res.render("Terrain", { terrain: t, timeout: timeout});
            } catch (error) {
                console.log(error);
            }

        }
        findInDatabase();
}
else{
    timeout = "error";
    res.render("Terrain", { terrain: t, timeout: timeout });
}
});
app.get('/cushion', (req, res) => {
    var c;
    var timeout;
    //only render if user is authenticated
    if (req.isAuthenticated()) {
        async function findInDatabase() {
            try {
                const results = await userProfile.find({ username: req.user.username });
                console.log("results length: " + results.length); //should find only 1 road terrain
                c = results[0].cushion;
                console.log("cushion value: " + c);
                res.render("Cushion", { cushion: c, timeout: timeout });
            } catch (error) {
                console.log(error);
            }

        }
    findInDatabase();
}
else{
    timeout = "error";
    res.render("Cushion", { cushion: c, timeout: timeout });
}
})
app.get('/heel_drop', (req, res) => {
    var h;
    var timeout;
    //only render if user is authenticated
    if (req.isAuthenticated()) {
        async function findInDatabase() {
            try {
                const results = await userProfile.find({ username: req.user.username });
                console.log("results length: " + results.length); //should find only 1 road terrain
                h = results[0].heel_drop;
                console.log("heel drop value: " + h);
                res.render("Heel", { heel_drop: h, timeout: timeout});
            } catch (error) {
                console.log(error);
            }

        }
        findInDatabase();
}
else{
    timeout = "error";
    res.render("Heel", { heel_drop: h, timeout: timeout});
}
});
app.get('/pronation', (req, res) => {
    var p;
    var timeout;
    //only render if user is authenticated
    if (req.isAuthenticated()) {
    async function findInDatabase() {
        try {
            const results = await userProfile.find({username: req.user.username});
            console.log("results length: " + results.length); //should find only 1 road terrain
            p = results[0].pronation;
            console.log("pronation value: " + p);
            res.render("Pronation", {pronation: p, timeout: timeout});
        } catch (error) {
            console.log(error);
        }
        
    }
    findInDatabase();
}
else{
    timeout = "error";
    res.render("Pronation", {pronation: p, timeout: timeout});
}
});
app.get('/width', (req, res) => {
    var w;
    var timeout;
    //only render if user is authenticated
    if (req.isAuthenticated()) {
    async function findInDatabase() {
        try {
            const results = await userProfile.find({username: req.user.username});
            console.log("results length: " + results.length); //should find only 1 road terrain
            w = results[0].width;
            console.log("width value: " + w);
            res.render("Width", {width: w, timeout: timeout});
        } catch (error) {
            console.log(error);
        }
        
    }
    findInDatabase();
}
else{
    timeout = "error";
    res.render("Width", {width: w, timeout: timeout});
}
});
app.get('/price', (req, res) => {
    var s;
    var timeout;
    //only render if user is authenticated
    if (req.isAuthenticated()) {
    async function findInDatabase() {
        try {
            const results = await userProfile.find({username: req.user.username});
            console.log("results length: " + results.length); //should find only 1 road terrain
            s = results[0].price;
            console.log("price value: " + s);
            res.render("Price", {price: s, timeout: timeout});
        } catch (error) {
            console.log(error);
        }
        
    }
    findInDatabase();
}
else{
    timeout = "error";
    res.render("Price", {price: s, timeout: timeout});
}
});
app.get('/results', (req, res) => {
    var w,p,h,c,t, s;
    var timeout;
    //only render if user is authenticated
    if (req.isAuthenticated()) {
    async function findInDatabase() {
        try {
            const results = await userProfile.find({username: req.user.username});
            console.log("results length: " + results.length); //should find only 1 road terrain
            t = results[0].terrain;
            c = results[0].cushion;
            h = results[0].heel_drop;
            p = results[0].pronation;
            w = results[0].width;
            s = results[0].price;
            const terrain = await Terrain.find({_id: t});
            console.log("terrain type: " + terrain[0].terrain_type);
            const cushion = await Cushion.find({_id: c});
            const heel = await HeelDrop.find({heel_drop: h});
            const pronation = await Pronation.find({_id: p});
            const width = await Width.find({_id: w});
            //find the text values using the userprofile numerical data to query the database for associated shoe options
            //find shoes that fit the set parameters
            //example: const shoeResults: await shoeDb.find({terrain: t, width: w, cushion: c, heel_drop: h, pronation: p})
            //$lte --> mongo function for less than or equal to
            const shoeResults = await Shoe.find({terrain: t, cushion: c, heel_drop: h, pronation: p, width: w, price: {$lte: s}});
            const shoeFallbackResults = await Shoe.find({terrain: t, width: w, price: {$lte: s}});
            //a smaller search parameter means the presence of duplicates that would otherwise be differentiated via their differing parameters
            const noDupes = shoeFallbackResults.reduce((acc, current) => {
                const x = acc.find(item => item.description === current.description);
                if (!x) {
                  return acc.concat([current]);
                } else {
                  return acc;
                }
              }, []);
            console.log("duplicate-free list: " + noDupes);
            //implement an algo to find the next best shoe prioritizing terrain, price, and width
            console.log("number of shoe results found: " + shoeResults.length);
            //console.log(shoeFallbackResults)
            //make statement to check if results are found for results, if none r found change search parameters to find shoes that are close enough
            if(shoeResults.length > 0)
            {
                res.render("Results", {terrain: terrain[0].terrain_type, cushion: cushion[0].cushion_level, heel_drop: heel[0].description, pronation: pronation[0].pronation_type, width: width[0].width_level, price: s, Results: shoeResults, timeout: timeout});
            }
            else{
                //res.render("Results", {terrain: terrain[0].terrain_type, cushion: cushion[0].cushion_level, heel_drop: heel[0].description, pronation: pronation[0].pronation_type, width: width[0].width_level, price: s, Results: shoeFallbackResults});
                res.render("Results", {terrain: terrain[0].terrain_type, cushion: cushion[0].cushion_level, heel_drop: heel[0].description, pronation: pronation[0].pronation_type, width: width[0].width_level, price: s, Results: noDupes, timeout: timeout});
            }
            //res.render("Results", {terrain: t, cushion: c, heel_drop: h, pronation: p, width: w, price: p, testResult: shoeResults[0]});
        } catch (error) {
            console.log(error);
        }
        
    }
    findInDatabase();
}
else{
    timeout = "error";
    res.render("Results", {timeout: timeout});
}
});

const shoeSchema = new mongoose.Schema({
    _id: Number,
    img: String,
    link: String,
    description: String,
    terrain: Number,
    cushion: Number,
    heel_drop: Boolean,
    pronation: Number,
    width: Number,
    price: Number,
});

const userProfileSchema = new mongoose.Schema({
    username: String,
    terrain: Number,
    cushion: Number,
    heel_drop: Boolean,
    pronation: Number,
    width: Number,
    price: Number,
});

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});
userSchema.plugin(passportLocalMongoose);
const userProfile = mongoose.model("userprofile", userProfileSchema);
const User = mongoose.model("user", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
const terrainSchema = new mongoose.Schema({
    _id: Number,
    terrain_type: String
});

const cushionSchema = new mongoose.Schema({
    _id: Number,
    cushion_level: String
});

const heelDropSchema = new mongoose.Schema({
    _id: Number,
    heel_drop: Boolean,
    description: String
});
const pronationSchema = new mongoose.Schema({
    _id: Number,
    pronation_type: String
});
const widthSchema = new mongoose.Schema({
    _id: Number,
    width_level: String
});
const Terrain =  new mongoose.model("terrain", terrainSchema);
const Cushion =  new mongoose.model("cushioning", cushionSchema);
const HeelDrop =  new mongoose.model("heel_drop", heelDropSchema);
const Pronation =  new mongoose.model("pronation", pronationSchema);
const Width =  new mongoose.model("width", widthSchema);
const Shoe = mongoose.model( 'Shoes', shoeSchema)

/** Read data from JSON file to populate into shoes collection**/
function readJson(filename) {
    jsonString = fs.readFileSync ( __dirname + "/db/" + filename,
                 "utf8");
     const object = JSON.parse(jsonString);
     return object;
 }

 async function populateShoesDb() {
    let object = readJson("roadShoesListDb.json");
    var shoeId = 0;
    for (let i = 0; i < object.length; i++) {
        var JSON_record = object[i];
        const newShoe = new Shoe({
            _id: i,
            img: JSON_record.img,
            link: JSON_record.link,
            description: JSON_record.description,
            terrain: JSON_record.terrain,
            cushion: JSON_record.cushion,
            heel_drop: JSON_record.heel_drop,
            pronation: JSON_record.pronation,
            width: JSON_record.width,
            price: JSON_record.price,
        });
    newShoe.save();
    }  

    shoeId = object.length;
    let trailObject = readJson("trailShoesListDb.json");
    for (let i = 0; i < trailObject.length; i++) {
        var JSON_record = trailObject[i];
        const newShoe = new Shoe({
            _id: shoeId,
            img: JSON_record.img,
            link: JSON_record.link,
            description: JSON_record.description,
            terrain: JSON_record.terrain,
            cushion: JSON_record.cushion,
            heel_drop: JSON_record.heel_drop,
            pronation: JSON_record.pronation,
            width: JSON_record.width,
            price: JSON_record.price,
        });
    newShoe.save();
    shoeId = shoeId + 1;
    }  

    let gravelObject = readJson("gravelShoesListDb.json");
    for (let i = 0; i < gravelObject.length; i++) {
        var JSON_record = gravelObject[i];
        const newShoe = new Shoe({
            _id: shoeId,
            img: JSON_record.img,
            link: JSON_record.link,
            description: JSON_record.description,
            terrain: JSON_record.terrain,
            cushion: JSON_record.cushion,
            heel_drop: JSON_record.heel_drop,
            pronation: JSON_record.pronation,
            width: JSON_record.width,
            price: JSON_record.price,
        });
    newShoe.save();
    shoeId = shoeId + 1;
    }  
 }
 async function populateMiniCollections(){
    let object = readJson("helperCollections.json");
    for (let i = 0; i < object.length; i++) {
        var JSON_record = object[i];
        if (i <= 2){
            const newTerrain = new Terrain({
                _id: JSON_record._id,
                terrain_type: JSON_record.terrain_type
            });
            newTerrain.save();
        }
        else if (i > 2 && i <= 6){
            const newCushion = new Cushion({
                _id: JSON_record._id,
                cushion_level: JSON_record.cushion_level
            });
            newCushion.save();
        }  
        else if (i > 6 && i <= 8){
            const newHeelDrop= new HeelDrop({
                _id: JSON_record._id,
                heel_drop: JSON_record.heel_drop
            });
            newHeelDrop.save();
        }
        else if (i > 8 && i <= 11){
            const newPronation = new Pronation({
                _id: JSON_record._id,
                pronation_type: JSON_record.pronation_type
            });
            newPronation.save();
        }
        else if (i > 11 && i <= 14){
            const newWidth = new Width({
                _id: JSON_record._id,
                width_level: JSON_record.width_level
            });
            newWidth.save();
        }
   
    }
 }
 //populateShoesDb();   // uncomment to recreate shoes collection
 //populateMiniCollections();
/*Pronation.insertMany([
    {
        _id: 0,
        pronation_type: "Overpronation"
    },
    {
        _id: 1,
        pronation_type: "Neutral"
    },
    {
        _id: 2,
        pronation_type: "Suppination"
    }
]);
HeelDrop.insertMany([
    {
        _id: 0,
        heel_drop: true,
        description: 'heel drop'
    },
    {
        _id: 1,
        heel_drop: false,
        description: 'None'
    }
])*/

app.post("/auth", (req, res) => {
     /****************************Implement a function where the ********************************/
    /**
        <div class="alert alert-danger" role="alert">
        This is a danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
        </div>
    **/
   //implement function so that the user is only sent back to the login page when the user session ends or cookie expires
   if(req.isAuthenticated())
   {
    res.redirect("/terrain");
   }
   else{
    res.redirect("/authenticate");
   }
});

app.post("/register", (req, res) => {
    //add functionality so that the code will not be performed if the user input fields are empty
    //add the current user to the userProfile 
    console.log("user auth is: " + req.body.auth);
    if(req.body.auth === req.body.password)
    {
        console.log("user password is authenticated");
        User.register({ username: req.body.username },
            req.body.password,
            (err, user) => {
                if (err) {
                    console.log(err);
                    res.redirect("/authenticate");
                } else {
                    passport.authenticate("local")(req, res, () => {
                        const newUser = new userProfile({
                            username: req.user.username,
                            terrain: 0,
                            cushion: 0,
                            heel_drop: false,
                            pronation: 0,
                            support_level: 0,
                            width: 0,
                            price: 50,
                    });
                    newUser.save();
                        res.redirect("/terrain");
                    });
                }
            });
}
else{
    res.redirect("/authenticate");
}
});

app.post("/login", (req, res) =>{
    //add functionality so that the code will not be performed if the user input fields are empty
   //implement rememver me function 

    const user = new User ({
        username: req.body.username,
        password: req.body.password
    });
    req.login ( user, ( err ) => {
        if ( err ) {
            res.redirect( "/authenticate" );
            console.log( err );
        } else {
            passport.authenticate( "local", {failureRedirect: '/authenticate'})( req, res, () => {
                res.redirect( "/terrain" ); 
            });
        }
       
    });
    
});
app.post("/logout", (req, res) => {
    req.logout(function(err) {
        if (err) { 
            return next(err); 
        }
        res.redirect('/');
      });
});

app.post("/toption", (req, res) =>{
    console.log("chosen terrain: " + req.body.tOp);
    async function findInDatabase()
    {
        try{
            await userProfile.updateOne({ username: req.user.username},
                { $set: { terrain: Number(req.body.tOp)} });
        }
        catch(error){
            console.log(error)
        }
    }
    findInDatabase();
    res.redirect("/terrain");
})

app.post("/coption", (req, res) =>{
    console.log("chosen cushion: " + req.body.cOp);
    async function findInDatabase()
    {
        try{
            await userProfile.updateOne({ username: req.user.username},
                { $set: { cushion: Number(req.body.cOp)} });
        }
        catch(error){
            console.log(error)
        }
    }
    findInDatabase();
    res.redirect("/cushion");
})

app.post("/hoption", (req, res) =>{
    console.log("chosen heel_drop: " + req.body.hOp);
    var h = (req.body.hOp === "false") ? false : true;
    console.log("h option in the post method " + h);
    async function findInDatabase()
    {
        try{
            await userProfile.updateOne({ username: req.user.username},
                { $set: { heel_drop: h} });
        }
        catch(error){
            console.log(error)
        }
    }
    findInDatabase();
    res.redirect("/heel_drop");
})
app.post("/poption", (req, res) =>{
    console.log("chosen pronation: " + req.body.pOp);
    async function findInDatabase()
    {
        try{
            await userProfile.updateOne({ username: req.user.username},
                { $set: { pronation: Number(req.body.pOp)} });
        }
        catch(error){
            console.log(error)
        }
    }
    findInDatabase();
    res.redirect("/pronation");
})

app.post("/woption", (req, res) =>{
    console.log("chosen width: " + req.body.wOp);
    async function findInDatabase()
    {
        try{
            await userProfile.updateOne({ username: req.user.username},
                { $set: { width: Number(req.body.wOp)} });
        }
        catch(error){
            console.log(error)
        }
    }
    findInDatabase();
    res.redirect("/width");
});
app.post("/soption", (req, res) =>{
    console.log("chosen price: " + req.body.sOp);
    async function findInDatabase()
    {
        try{
            await userProfile.updateOne({ username: req.user.username},
                { $set: { price: Number(req.body.sOp)} });
        }
        catch(error){
            console.log(error)
        }
    }
    findInDatabase();
    res.redirect("/price");
});