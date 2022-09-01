import {Lista_Modulos} from "../models/MODELS.js";

export const getListaMod = async (req, res) =>{
    try{
        const Lista_Mod = await Lista_Mod.findAll();
        console.log(Lista_Mod);
        res.json(Lista_Mod);
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

export const createLista_Mod = async (req,res) =>{

    try{
        const {ID_MODULO, ID_PROFESOR} = req.body;
        const newLista_Mod = await Lista_Mod.create({
            ID_MODULO       :ID_MODULO,
            ID_PROFESOR     :ID_PROFESOR
        })
        res.json(newLista_Mod);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const getLista_Mod = async (req, res) =>{
    try{
        const {id} =req.params;
        console.log(id);
        const Lista_Mod = await Lista_Mod.findOne({
            where:{ 
                ID_Lista_Mod : id
            }
        })
        if(!Lista_Mod) return res.status(404).json({message: "No hay compare"});
        res.json(Lista_Mod);
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

export const updateLista_Mod = async(req,res) =>{

    try{
        const{id} = req.params;
        const {ID_MODULO, ID_PROFESOR} = req.body;
        const Lista_Mod = await Lista_Mod.findByPk(id);

        Lista_Mod.ID_MODULO     = ID_MODULO;
        Lista_Mod.ID_PROFESOR    = ID_PROFESOR;


        await Lista_Mod.save();
        res.json({message: "Lista_Mod Usuarizado"});
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

export const deleteLista_Mod = async (req,res) =>{
    try{
        console.log(req.params.id);
        const{id} = req.params;
        await Lista_Mod.destroy({
            where: {
                ID_CERTF: id
            }
        });
        res.json({message: "Lista_Mod exterminado"});
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}