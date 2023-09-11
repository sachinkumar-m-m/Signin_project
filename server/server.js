const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const cors = require('cors')
const UserModel = require("./model")


const app = express();
app.use(cors)
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/admin")

app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const haspassword = await bcrypt.hash(password, 10)
        const existinguser = await UserModel.findOne({ email });
        if (existinguser) {
            res.status(401).json("user dublicate")
        }

        const users = new UserModel({
            name,
            email,
            password: haspassword
        })
        await users.save()
        res.status(200).json({
            message: "Registered successfully",
            user: users
        })
    } catch (err) {
        res.status(500).json("user not registered")
    }
}),

    app.post("/login", async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await UserModel.findOne({ email });

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            const passwordMatch = await bcrypt.compare(password, user.password);


            if (!passwordMatch) {
                return res.status(401).json({ error: "Incorrect password" });
            }
            const token = jwt.sign({ userId: user.id }, "sachin123")
            res.json(token)
            res.status(200).json({ message: "Login successful" });
        } catch (err) {
            res.status(500).json("user not found")
        }
    })



app.listen(5000, () => {
    console.log("server connected successfully");
})


