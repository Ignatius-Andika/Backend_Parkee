
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import PriceRateRoute from "./routes/PriceRateRoute.js";
import ParkingTIcket from "./models/ParkingTIcket.js";

const app = express();
mongoose.connect('mongodb+srv://Parkee:accessparkee@cluster0.pr46opo.mongodb.net/test',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(PriceRateRoute)
app.use(ParkingTIcket)

app.listen(5000, ()=> console.log('Server up and running...'));