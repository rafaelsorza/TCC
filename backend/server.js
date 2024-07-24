import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import bcrypt from 'bcrypt'; // Corrigido o nome da importação

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Melissa#17",
    database: "vitality",
});

const salt = 5;

app.post("/register", (req, res) => {
    const sql = "INSERT INTO user (`username`, `email`, `password`) VALUES (?)";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if (err) return res.json("Error hashing password");
        
        const values = [req.body.username, req.body.email, hash];
        
        db.query(sql, [values], (err, result) => {
            if (err) return res.json("Error inserting user into database");
            return res.json(result);
        });
    });
});

app.post("/login", (req, res) => {
    const sql = "SELECT * FROM user WHERE `email` = ?";
    db.query(sql, [req.body.email], (err, result) => {
        if (err) return res.json({ Error: "Database error" });
        if (result.length > 0) {
            bcrypt.compare(req.body.password.toString(), result[0].password, (err, response) => {
                if (err) return res.json({ Error: "Error comparing passwords" });
                if (response) {
                    return res.json({ Status: "Success" });
                } else {
                    return res.json({ Error: "Wrong password" });
                }
            });
        } else {
            return res.json({ Error: "Usuario nao encontrado" });
        }
    });
});

app.listen(8081, () => {
    console.log("listening on port 8081");
});
