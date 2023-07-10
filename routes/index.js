const route = require('express').Router()


const tareas = new Map()



route.get('/',(req,res)=>{
    res.render('index',{title:"Pagina de Inicio",'tareas':tareas})
})

route.get('/insert',(req,res)=>{
    res.render('insert',{title:"Nueva Tarea"})
})

route.get('/contact',(req,res)=>{
    res.render('contact',{title:"Contactenos"})
})

route.post('/',(req,res)=>{
    let id = req.body.id
    let name = req.body.name
    let date = req.body.date
    let myObj ={id: id, name: name, date:date }
    tareas.set(name, myObj)
   
    

    res.redirect('/')
})

module.exports = route;