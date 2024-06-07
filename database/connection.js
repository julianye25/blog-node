import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.uri;

const conn = async () => {
  try {
    await mongoose.connect(uri);

    console.log('Sucsess conection');
  } catch (error) {
    console.log(error);
    throw new Error('Erro to connect database');
  }
};

export default conn;
