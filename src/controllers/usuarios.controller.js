import {Usuarios} from "../models/MODELS.js";

export const getUsuarios = async (req, res) =>{
    try{
        const usuarios = await Usuarios.findAll();
        console.log(usuarios);
        res.json(usuarios);
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

export const createUsuario = async (req,res) =>{

    try{
        const {PRIMER_NOM, AP_PAT, AP_MAT, NOM_USUARIO, PASSWORD, E_MAIL, FECHA_NAC, NUMERO_CELULAR, DOC_ID} = req.body;
        const newUsuario = await Usuarios.create({
            PRIMER_NOM      : PRIMER_NOM,
            AP_PAT          : AP_PAT,
            AP_MAT          : AP_MAT,
            NOM_USUARIO     : NOM_USUARIO,
            PASSWORD        : PASSWORD,
            E_MAIL          : E_MAIL,
            FECHA_NAC       : FECHA_NAC,
            NUMERO_CELULAR  : NUMERO_CELULAR,
            DOC_ID          : DOC_ID
        })
        res.json(newUsuario);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const getUsuario = async (req, res) =>{
    try{
        const {id} =req.params;
        console.log(id);
        const Usuario = await Usuario.findOne({
            where:{ 
                ID_USUARIO : id
            }
        })
        if(!Usuario) return res.status(404).json({message: "No hay compare"});
        res.json(Usuario);
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

export const updateUsuario = async(req,res) =>{

    try{
        const{id} = req.params;
        const{PRIMER_NOM,AP_PAT,AP_MAT,NOM_USUARIO,PASSWORD, E_MAIL, FECHA_NAC, NUMERO_CELULAR,DOC_ID} = req.bodyu;

        const Usuario = await Usuarios.findByPk(id);

        Usuario.PRIMER_NOM     = PRIMER_NOM;
        Usuario.AP_PAT         = AP_PAT;
        Usuario.AP_MAT         = AP_MAT;
        Usuario.NOM_USUARIO    = NOM_USUARIO;
        Usuario.PASSWORD       = PASSWORD;
        Usuario.E_MAIL         = E_MAIL;
        Usuario.FECHA_NAC      = FECHA_NAC;
        Usuario.NUMERO_CELULAR = NUMERO_CELULAR;
        Usuario.DOC_ID         = DOC_ID;

        await Usuario.save();
        res.json({message: "Usuario Usuarizado"});
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

export const deleteUsuario = async (req,res) =>{
    try{
        console.log(req.params.id);
        const{id} = req.params;
        await Usuarios.destroy({
            where: {
                ID_USUARIO: id
            }
        });
        res.json({message: "Usuario exterminado"});
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}