import {Certificaciones} from "../models/MODELS.js";

export const getCertificaciones = async (req, res) =>{
    try{
        const Certificaciones = await Certificaciones.findAll();
        console.log(Certificaciones);
        res.json(Certificaciones);
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

export const createCertificacion = async (req,res) =>{

    try{
        const {NO_CERTF,FECHA_EXP,URL_CERT} = req.body;
        const newCertificacion = await Certificaciones.create({
            NO_CERTF      : NO_CERTF,
            FECHA_EXP     : FECHA_EXP,
            URL_CERT      : URL_CERT
        })
        res.json(newCertificacion);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const getCertificacion = async (req, res) =>{
    try{
        const {id} =req.params;
        console.log(id);
        const Certificacion = await Certificacion.findOne({
            where:{ 
                ID_Certificacion : id
            }
        })
        if(!Certificacion) return res.status(404).json({message: "No hay compare"});
        res.json(Certificacion);
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

export const updateCertificacion = async(req,res) =>{

    try{
        const{id} = req.params;
        const {NO_CERTF,FECHA_EXP,URL_CERT} = req.body;
        const Certificacion = await Certificaciones.findByPk(id);

        Certificacion.NO_CERTF      = NO_CERTF;
        Certificacion.FECHA_EXP     = FECHA_EXP;
        Certificacion.URL_CERT      = URL_CERT;

        await Certificacion.save();
        res.json({message: "Certificacion Usuarizado"});
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

export const deleteCertificacion = async (req,res) =>{
    try{
        console.log(req.params.id);
        const{id} = req.params;
        await Certificaciones.destroy({
            where: {
                ID_CERTF: id
            }
        });
        res.json({message: "Certificacion exterminado"});
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}