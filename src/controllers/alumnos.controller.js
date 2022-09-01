import {Alumnos} from "../models/MODELS.js";

export const getAlumnos = async (req, res) =>{
    try{
        const Alumnos = await Alumnos.findAll();
        console.log(Alumnos);
        res.json(Alumnos);
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

export const createAlumno = async (req,res) =>{

    try{
        const {ID_USUARIO} = req.body;
        const newAlumno = await Alumnos.create({
            ID_USUARIO  :ID_USUARIO
        })
        res.json(newAlumno);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const getAlumno = async (req, res) =>{
    try{
        const {id} =req.params;
        console.log(id);
        const Alumno = await Alumno.findOne({
            where:{ 
                ID_ALUMNO : id
            }
        })
        if(!Alumno) return res.status(404).json({message: "No hay compare"});
        res.json(Alumno);
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

export const deleteAlumno = async (req,res) =>{
    try{
        console.log(req.params.id);
        const{id} = req.params;
        await Alumnos.destroy({
            where: {
                ID_ALUMNO: id
            }
        });
        res.json({message: "Alumno exterminado"});
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}