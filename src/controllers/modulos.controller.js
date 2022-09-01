import {Modulos} from "../models/MODELS.js";

export const getModulos = async (req, res) =>{
    try{
        const Modulos = await Modulos.findAll();
        console.log(Modulos);
        res.json(Modulos);
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

export const createModulo = async (req,res) =>{

    try{
        const {ID_ALUMNO, FECHA_INICIO, FECHA_FIN, TIPO_MOD, NOMBRE, CATEGORIA} = req.body;
        const newModulo = await Modulos.create({
            ID_ALUMNO        : ID_ALUMNO,
            FECHA_INICIO     : FECHA_INICIO,
            FECHA_FIN        : FECHA_FIN,
            TIPO_MOD         : TIPO_MOD,
            NOMBRE           : NOMBRE,
            CATEGORIA        : CATEGORIA
        })
        res.json(newModulo);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const getModulo = async (req, res) =>{
    try{
        const {id} =req.params;
        console.log(id);
        const Modulo = await Modulo.findOne({
            where:{ 
                ID_Modulo : id
            }
        })
        if(!Modulo) return res.status(404).json({message: "No hay compare"});
        res.json(Modulo);
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

export const updateModulo = async(req,res) =>{

    try{
        const{id} = req.params;
        const {ID_ALUMNO, FECHA_INICIO, FECHA_FIN, TIPO_MOD, NOMBRE, CATEGORIA}  = req.body;
        const Modulo = await Modulos.findByPk(id);

        Modulo.ID_ALUMNO      = ID_ALUMNO;
        Modulo.FECHA_INICIO   = FECHA_INICIO;
        Modulo.FECHA_FIN      = FECHA_FIN;
        Modulo.TIPO_MOD       = TIPO_MOD;
        Modulo.NOMBRE         = NOMBRE;
        Modulo.CATEGORIA      = CATEGORIA;

        await Modulo.save();
        res.json({message: "Modulo Usuarizado"});
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

export const deleteModulo = async (req,res) =>{
    try{
        console.log(req.params.id);
        const{id} = req.params;
        await Modulos.destroy({
            where: {
                ID_MODULO: id
            }
        });
        res.json({message: "Modulo exterminado"});
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}