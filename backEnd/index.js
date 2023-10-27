import express from 'express';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/', (request, response) => {
  console.log(request);
  return response.status(200).send('Welcome To MERN Stack Tutorial');
});


app.use('/books', booksRoute);


mongoose.connect("mongodb://127.0.0.1:27017/BookStore", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("mongo Connected")
}).catch((error)=>{
    console.log("Failed:",error)
})



app.listen(5001,()=>{
    console.log("SERVER STARTED....")
})