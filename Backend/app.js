const express = require('express');
const connectDB = require('./DB');
const UserRoutes = require('./routes/user.route');
const PostRoutes = require('./routes/posts.route');
const cors = require('cors');
const path = require('path'); 
require('dotenv').config();
const app = express();

app.use(cors({
  origin: 'http://localhost:5173' 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

connectDB();
app.use("/api/v1/users", UserRoutes);
app.use("/api/v1/users/posts",  PostRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App Running on port: http://localhost:${PORT}`);
});