import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Keyboard, Button } from "react-native";
import { useFormik } from "formik";/*El formik es un paquete para validar formularios o inputs*/
import * as Yup from "yup";
import { user, userDatails } from "../../utils/userDB";


export default function LoginForm (){
    const [error, setError] = useState("");


    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),/*Al momento de enviarse el formulario aunque este vacio se seguirá enviando, entonces el Yup tiene propiedades
        en la permite validar que información sale o entra*/
        /* validateOnChange: false, *///Esto valida cuando se envíe el formulario
        onSubmit: (formValue) => {
            setError('');
            const { userName, password } = formValue;

            if( userName !== user.userName || password !== user.password){
                setError("el usuario o la contraseña no son correcta");
            }else{
                console.log("está correcto");
                console.log(userDatails);
            }
        }
    })


    return(
        <View>
            <Text style={style.title}>Iniciar Sesion</Text>
            
            <TextInput style={style.input} 
            placeholder="Nombre de usuario" 
            autoCapitalize="none"
            value={formik.values.userName}
            onChangeText={(text) => formik.setFieldValue('userName', text)}
            />{/* la propiedad autoCapitalize hace que la primera letra del texto sea minuscula. 
            Toda informacion que se pase al formik llegará como parametro en el valor onSubmit */}
            
            <Text style={style.error}>{formik.errors.userName}</Text>

            <TextInput style={style.input} 
            placeholder="Contraseña" 
            autoCapitalize="none" 
            secureTextEntry={true}
            value={formik.values.password}
            onChangeText={(text) => formik.setFieldValue('password', text)}/>{/* El secureTextEntry sirve para ocultar el texto con puntos.*/}
            
            <Text style={style.error}>{formik.errors.password}</Text>

            <Button style={style.button} 
            title="Entrar" 
            onPress={formik.handleSubmit}/>
            
            <Text style={style.error}>{error}</Text>

        </View>
    )
};

function initialValues(){
    return{
        userName: "",
        password: "",
    }
};

function validationSchema(){
    return{
        userName: Yup.string().required("El usuario es obligatorio"),/*Acá que le decimos que este input sea obligatorio*/
        password: Yup.string().required("La contraseña es obligatoria")
    }
};

const style = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 15
    },

    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10
    },

    error: {
        margin: 10,
        textAlign: "center",
        color: "red",
    },

    button:{
        padding: 20
    }
});