const express = require('express');
const {registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile} = require('../controllers/userController');
const router = express.Router();
const {protected} = require('../middleware/authMiddleware')

router.get('/', (req, res)=>{
    res.send('hgjhf')
})
router.post('/', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/profile/:id', getUserProfile)
router.put('/profile/:id', updateUserProfile)
// router.route('/profile/:id').get(protected, getUserProfile).put(updateUserProfile)

module.exports = router;