import * as Yup from 'yup';

export const validateLogin = Yup.object().shape({
    name:Yup.string()
        .min(3,"Nombre muy corto")
        .max(50,'Nombre muy largo')
        .required('El nombre es requerido'),
    email:Yup.string()
        .email('Email invalido')
        .required('El email es requerido')
})

export const validateEmail = Yup.object().shape({
    email:Yup.string()
        .email('Email invalido')
        .required('El email es requerido')
})

export const validateUser = Yup.object().shape({
    name:Yup.string()
        .min(3,"Nombre muy corto")
        .max(50,'Nombre muy largo')
        .matches('^[a-zA-Z]+$','Formato inválido')
        .required('El nombre es requerido'),
    surname:Yup.string()
        .min(5,'El apellido es muy corto')
        .max(50,'El apellido es un largo')
        .matches('^[a-zA-Z]+$','Formato inválido')
        .required('El apellido es requerido'),
    password:Yup.string()
        .min(8)
        .max(40)
        .matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%])','Formato inválido')
        .required('La contraseña es requerida'),
    phone:Yup.string()
        .min(3,'El teléfono es muy corto')
        .max(30,'El teléfono es demasiado largo')
        .matches('^+$','Formato inválido')
        .required('El teléfono es requerido'),
    address:Yup.string()
        .min(3)
        .max(40)
        .matches('^[a-zA-Z0-9.,]+$','Formato inválido')
        .required('La dirección es requerida'),
    number:Yup.string()
        .min(3)
        .max(10)
        .matches('^[a-zA-Z0-9]+$','Formato inválido')
        .required('El numero es requrido'),
    location:Yup.string()
        .min(3)
        .max(40)
        .matches('^[a-zA-Z0-9.,]+$','Formato inválido')
        .required('La localidad es requerida'),
    state:Yup.string()
        .min(3)
        .max(40)
        .matches('^[a-zA-Z0-9.,]+$','Formato inválido')
        .required('La provincia es requerida'),
    country:Yup.string()
        .min(3)
        .max(40)
        .matches('^[a-zA-Z0-9.,]+$','Formato inválido')
        .required('El país es requerido'),
})  