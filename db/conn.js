const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log(`Database Connected Successfully`);
})
.catch((err)=>{
    console.log(err);
})


// const mongoose = require("mongoose");


// const pass = process.env.dbPass

// // Replace 'your-atlas-connection-string' with the actual connection string provided by MongoDB Atlas
// const atlasConnectionString = `mongodb+srv://Login_SignUp:${pass}@cluster0.cmhb0lr.mongodb.net/Login_Signup`;

// mongoose.connect(atlasConnectionString, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log(`Database Connected Successfully`);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

