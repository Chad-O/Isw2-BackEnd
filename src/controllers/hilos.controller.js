import {Hilos} from "../models/MODELS.js";

export const getHilos = async (req, res) =>{
    try{
        const Hilos = await Hilos.findAll();
        console.log(Hilos);
        res.json(Hilos);
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

export const createHilo = async (req,res) =>{

    try{
        const {TITULO, ID_USUARIO, IMPORTANCIA} = req.body;
        const newHilo = await Hilos.create({
            TITULO          : TITULO,
            ID_USUARIO      : ID_USUARIO,
            IMPORTANCIA     : IMPORTANCIA
        })
        res.json(newHilo);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const getHilo = async (req, res) =>{
    try{
        const {id} =req.params;
        console.log(id);
        const Hilo = await Hilo.findOne({
            where:{ 
                ID_Hilo : id
            }
        })
        if(!Hilo) return res.status(404).json({message: "No hay compare"});
        res.json(Hilo);
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

export const updateHilo = async(req,res) =>{

    try{
        const{id} = req.params;
        const {TITULO, ID_USUARIO, IMPORTANCIA} = req.body;
        const Hilo = await Hilos.findByPk(id);
        Hilo.TITULO           = TITULO;
        Hilo.ID_USUARIO       = ID_USUARIO;
        Hilo.IMPORTANCIA      = IMPORTANCIA;

        await Hilo.save();
        res.json({message: "Hilo Usuarizado"});
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

export const deleteHilo = async (req,res) =>{
    try{
        console.log(req.params.id);
        const{id} = req.params;
        await Hilos.destroy({
            where: {
                ID_HILO: id
            }
        });
        res.json({message: "Hilo exterminado"});
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}