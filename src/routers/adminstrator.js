const express = require('express')
const auth = require('../middleware/admin_auth')
const router = new express.Router()
const adminController = require('../controllers/adminstrator')

router.post('/adminstrator/signin', adminController.adminSignin)
router.get('/adminstrator/waitingUsers', auth, adminController.getNotApprovedUsers)
router.post('/adminstrator/logout', auth, adminController.adminLogout)
router.patch('/adminstrator/approve/:id' , auth, adminController.adminApprove)
router.delete('/adminstrator/deleteUser/:id', auth, adminController.deleteUser)

// To be removed when writing a script to force admin in db
router.post('/forceadmin', adminController.forceAdmin)

module.exports = router