import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// App Config
const app = express();
const port = process.env.PORT || 5000;

connectDB();
connectCloudinary();

// Logging Middleware
app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to ${req.path}`);
  console.log('Headers:', req.headers);
  next();
});

// CORS Configuration
const corsOptions = {
  origin: ['http://localhost:5176', 'http://localhost:5173', 'http://localhost:5174'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'token', 'headers'],
  credentials: true,
  exposedHeaders: ['token', 'Access-Control-Allow-Origin']
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// Middlewares
app.use(express.json());

// API endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

// Root Route
app.get('/', (req, res) => {
  res.send('API Working');
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on PORT: ${port}`);
});