const express = require('express') 
const userControl = require('../controllers/userController')
const userAuth = require('../middlewares/userAuth')
const router = express.Router()

router.get('/',userAuth, userControl.getAllBooks)
router.get('/:kode_buku',userAuth, userControl.getBookByCode)
router.post('/', userAuth,userControl.addBook)
router.delete('/:kode_buku',userAuth, userControl.delBook)
router.put('/:kode_buku',userAuth, userControl.updateBook)
module.exports = router