const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');

router.post('/login', authController.login);
router.get('/google/callback', authController.googleLogin);

module.exports = router

// https://accounts.google.com/o/oauth2/auth?client_id=435871259367-0clf8osk2gijq486bjpane7cf9g8q8vo.apps.googleusercontent.com&redirect_uri=http://localhost:3000/api/auth/google/callback&response_type=code&scope=email%20profile&access_type=offline