import mongoose from 'mongoose';
import User from '@/app/model/model';

export default async function GET (req,res) {
    await mongoose.connect('mongodb+srv://invia295:lIKBCAPjPVkI76jy@staking.cianjhk.mongodb.net/Finance?retryWrites=true&w=majority&appName=Staking');
    const {email,password} = req.body;
    const newUser =  new User({email,password});
    await newUser.save();
}