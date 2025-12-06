const userModel = require(`../models/userModel`)

const getAllBooks = async(req, res) =>{
    try {
        const books = await userModel.getAllBooks()
        res.json(books)
    }
    catch (error) {
        res.status(500).json(
            {
                massage : "Error Get All Book",
                status : 500 
            }
        )
    } 
}

const getBookByCode = async(req, res)=>{
    try{
        const book = await userModel.getBookByCode(req.params.code);

        if(!book){
            return res.status(400).json(
            {
                massege : `Data Not Found`
            })
        }
    }
    catch(error){
        res.status(500).json({massege:error})

    }
}
const addBook = async (req, res) =>{
    const {kode, judul, pengarang,penerbit} = req.body
    let iskode=true
    let isjudul=true
    let msg=""

    if(!kode){
        msg = msg + "Kode Buku Wajib diisi\n"
        iskode = false
    }
    else if(!judul){
        msg = msg + "Judul Buku Wajib diisi\n"
        isjudul = false
    }
    if(iskode && isjudul){
        try {
            const affected = await userModel.addBook(req.body)
        }catch (error) {
            res.status(400).json({
                massage : error
            })
        
        }
    }
    try {
        const affected = await userModel.addBook(req.Body)
        if(affected==1){
            res.status(200).json({
                msg : "Insert Succesfully",
                data:{...req.body}
            })
        }
    } catch (error){
        res.status(400).json({
            massage : error
        })
    }
}
const delBook = async(req,res)=>{
    console.log(requery.params.code);
    try{
        const result = await userModel.delBook(req.params.code)
        if(result==1){
            res.status(200).json({msg: "Deleted Successfully"})
        }
        else{
            res.status(400).json({msg:"Failed"})
        }
    }
    catch(error){

    }
}
module.exports = {getAllBooks, getBookByCode, addBook, delBook}