import {Mensajes} from "../models/MODELS.js";

export const getMensajes = async (req, res) =>{
    try{
        const Mensajes = await Mensajes.findAll();
        console.log(Mensajes);
        res.json(Mensajes);
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

export const createMensaje = async (req,res) =>{

    try{
        const {ID_USUARIO, ID_HILO, MENSAJE, FECHAHORA, NUMVOTOS} = req.body;
        const newMensaje = await Mensajes.create({
            ID_USUARIO  : ID_USUARIO,
            ID_HILO     : ID_HILO,
            MENSAJE     : MENSAJE,
            FECHAHORA   : FECHAHORA,
            NUMVOTOS    : 0
        })
        res.json(newMensaje);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const getMensaje = async (req, res) =>{
    try{
        const {id} =req.params;
        console.log(id);
        const Mensaje = await Mensaje.findOne({
            where:{ 
                ID_Mensaje : id
            }
        })
        if(!Mensaje) return res.status(404).json({message: "No hay compare"});
        res.json(Mensaje);
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

export const updateMensaje = async(req,res) =>{

    try{
        const{id} = req.params;
        const {ID_USUARIO, ID_HILO, MENSAJE, FECHAHORA, NUMVOTOS} = req.body;
        const Mensaje = await Mensajes.findByPk(id);

        Mensaje.ID_USUARIO  = ID_USUARIO;
        Mensaje.ID_HILO     = ID_HILO;
        Mensaje.MENSAJE     = MENSAJE;
        Mensaje.FECHAHORA   = FECHAHORA;
        Mensaje.NUMVOTOS    = NUMVOTOS;

        await Mensaje.save();
        res.json({message: "Mensaje Usuarizado"});
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

export const deleteMensaje = async (req,res) =>{
    try{
        console.log(req.params.id);
        const{id} = req.params;
        await Mensajes.destroy({
            where: {
                ID_MENSAJE: id
            }
        });
        res.json({message: "Mensaje exterminado"});
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}