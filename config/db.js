import mongoose from "mongoose";

export const connectDB = async () => {
    (await mongoose.connect('mongodb+srv://jain2002tj:021103tj@cluster0.p1e4prg.mongodb.net/food-tomato').then(()=>console.log("DB Connected")));
}