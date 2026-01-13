const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// CLEANER CORS: Remove the trailing slash from the URL!
app.use(cors({
  origin: "https://mern-sample-frontend.vercel.app" 
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Server is running successfully!");
});

app.get('/api/greeting', (req, res) => {
    res.json({ message: "Hi from backend" });
});

module.exports = app;

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});