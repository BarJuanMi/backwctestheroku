/*
    Ruta: /api/usuarios
*/
const { Router } = require('express');
const { getUsuarios, crearUsuario, actualizarUsuario, eliminarUsuario } = require('../controllers/usuarios.controller');
const router = Router();

//1er argumento - path
//2do argumento la operacion del controlador
router.get('/', getUsuarios);
router.post('/crearUsuario', crearUsuario);
router.put('/actualizarUsuario/:id', actualizarUsuario);
router.delete('/eliminarUsuario/:id', eliminarUsuario);

module.exports = router;