import {Profesores} from "../models/MODELS.js";

export const getProfesores = async (req, res) =>{
    try{
        const Profesores = await Profesores.findAll();
        console.log(Profesores);
        res.json(Profesores);
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

export const createProfesor = async (req,res) =>{

    try{
        const {ID_USUARIO} = req.body;
        const newProfesor = await Profesores.create({
            ID_USUARIO     :ID_USUARIO
        })
        res.json(newProfesor);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const getProfesor = async (req, res) =>{
    try{
        const {id} =req.params;
        console.log(id);
        const Profesor = await Profesor.findOne({
            where:{ 
                ID_PROFESOR: id
            }
        })
        if(!Profesor) return res.status(404).json({message: "No hay compare"});
        res.json(Profesor);
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}



export const deleteProfesor = async (req,res) =>{
    try{
        console.log(req.params.id);
        const{id} = req.params;
        await Profesores.destroy({
            where: {
                ID_PROFESOR: id
            }
        });
        res.json({message: "Profesor exterminado"});
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}