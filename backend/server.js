const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-jwt-key-change-me';

// Middleware
app.use(cors());
app.use(express.json());

// Mock databases for demonstration purposes
const users = [];
const resumes = {}; // In-memory store for resume data: { userId: resumeObject }

// Auth Middleware
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

// @route   POST /api/auth/register
// @desc    Register a new user
app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: String(Date.now()), email, password: hashedPassword };
    users.push(newUser);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
});

// @route   POST /api/auth/login
// @desc    Authenticate user & get token
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: { id: user.id, email: user.email } });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
});

// @route   GET /api/resume
// @desc    Get user's resume data
app.get('/api/resume', authMiddleware, (req, res) => {
  const resumeData = resumes[req.user.userId];
  if (resumeData) {
    res.json(resumeData);
  } else {
    res.status(404).json({ message: 'No resume data found' });
  }
});

// @route   POST /api/resume
// @desc    Save user's resume data
app.post('/api/resume', authMiddleware, (req, res) => {
  resumes[req.user.userId] = req.body;
  res.status(200).json({ message: 'Resume saved successfully' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});