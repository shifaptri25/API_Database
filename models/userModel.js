const db = require('../config/db')

//async - wait
const getAllBooks = async () => {
    const [rows] = await db.query("select * from buku")
    return rows
}

const getBookByCode = async(kode_buku)=>{
    const [row] = 
    await db.query("select * from buku where kode_buku=?", [kode_buku])
    return row[0]
}

const addBook = async(book)=>{
    const {kode_buku, judul, pengarang, penerbit} = book
    const query = "insert into buku " +
    "(kode_buku, judul, pengarang,penerbit) " +
    "values(?,?,?,?)" 
    const affected = await db.query(query,[kode_buku, judul, pengarang, penerbit]) 
    return affected[0].affectedRows
}

const delBook = async(id)=>{
    const aff = await db.query("delete from buku where kode_buku=?", [id])
    return aff[0].affectedRows
}

const updateBook = async(kode_buku,book)=>{
    const {judul, pengarang, penerbit} = book
    const query = `update buku
    set judul = ?, pengarang =?, penerbit =?
    where kode_buku =?`
    const affected = await db.query(query,[judul, pengarang, penerbit, kode_buku]) //kode_buku ga bisa update, cuma judul, penerbit, pengarang aja
    return affected[0].affectedRows
    
}

module.exports = {getAllBooks, getBookByCode, addBook, delBook, updateBook}