import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Keyboard, Button } from "react-native";
import { useFormik } from "formik";/*El formik es un paquete para validar formularios o inputs*/
import * as Yup from "yup";
import { user, userDatails } from "../../utils/userDB";
import useAuth from "../../hooks/useAuth";


export default function LoginForm (){
    const [error, setError] = useState("");
    const { login } = useAuth();

    console.log(useAuth());

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
                login(userDatails);
                console.log("está correcto");
                console.log(userDatails);
            }
        }
    })


    return(
        <View style={style.login}>
            <View style={style.login__Container}>
                <Text style={style.title}>Iniciar Sesión</Text>
                
                <View>
                    <TextInput style={style.input} 
                    placeholder="Nombre de usuario" 
                    autoCapitalize="none"
                    value={formik.values.userName}
                    onChangeText={(text) => formik.setFieldValue('userName', text)}
                    placeholderTextColor={'white'}
                    />{/* la propiedad autoCapitalize hace que la primera letra del texto sea minuscula. 
                    Toda informacion que se pase al formik llegará como parametro en el valor onSubmit */}
                    
                    <Text style={style.error}>{formik.errors.userName}</Text>

                    <TextInput style={style.input} 
                    placeholder="Contraseña" 
                    autoCapitalize="none" 
                    secureTextEntry={true}
                    value={formik.values.password}
                    onChangeText={(text) => formik.setFieldValue('password', text)}
                    placeholderTextColor={'white'}
                    />{/* El secureTextEntry sirve para ocultar el texto con puntos.*/}
                    
                    <Text style={style.error}>{formik.errors.password}</Text>
                </View>

                <Button style={style.button} 
                title="Entrar" 
                onPress={formik.handleSubmit}
                color={"black"}/>
                
                <Text style={style.error}>{error}</Text>
            </View>

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
    login: {
        height: "100vh",
        backgroundColor: "#FF4034"
    },

    login__Container: {
        height: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column"
    },

    title: {
        marginTop: 50,
        marginBottom: 15,
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        color: "white"
    },

    input: {
        height: 40,
        padding: 10,
        fontSize: 16,
        borderBottomWidth: 1,
        borderColor: "white"
    },

    error: {
        margin: 10,
        textAlign: "center",
        color: "black",
    },

    button:{
        padding: 20
    }
});