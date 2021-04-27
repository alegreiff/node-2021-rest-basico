const { response, request } = require('express');
const usuariosGet = (req = request, res = response)=>{
    const { q, nombre = 'John Doe', apikey } = req.query;
    res.json({
        msg: 'GET api desde controllers',
        q, nombre, apikey
    });
}
const usuariosPost = (req, res)=>{
    const { nombre, edad } = req.body;
    res.json({
        msg: 'POST api from CTRL',
        nombre: nombre,
        edad: edad
    })
}
const usuariosPut = (req, res)=>{
    const id = req.params.id
    res.json({
        msg: 'PUT api from CTRL',
        id
    })
}
const usuariosPatch = (req, res)=>{
    res.json({
        msg: 'PATCH api from CTRL'
    })
}
const usuariosDelete = (req, res)=>{
    res.json({
        msg: 'DELETE api from CTRL'
    })
}

module.exports = {
    usuariosGet, usuariosPost, usuariosDelete, usuariosPatch, usuariosPut
}