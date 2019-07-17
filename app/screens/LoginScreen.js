import React,{Component} from 'react';
import {View,Image,Text,TextInput,ImageBackground,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    }

    // onLoginPressed = () => {
    //     try{

    //     }catch(error){
    //         console.warn("Error: ", error)
    //     }
    // }

    render() {
        return (
            <ImageBackground source={require('../assets/screen2.png')} style={{width:'100%',height:'100%'}} >
                <ImageBackground source={require('../assets/screen1.png')} style={{width:'100%',height:'100%'}}>
                    <View style={styles.container}>
                        <View style={styles.logoContainer}>
                            <Image source={require('../assets/logo-ultimate01.png')} style={styles.logo} />
                        </View>
                        <View style={styles.form}>
                            <Text style={styles.titulo}>CREA UNA NUEVA</Text>
                            <Text style={styles.titulo}>CUENTA</Text>
                            <TextInput
                                style={styles.textInput} 
                                placeholder={'Nombre de Usuario'}
                            />
                            {/* <Icon name="rocket" size={30} color="#900" />; */}
                            <TextInput
                                style={styles.textInput} 
                                placeholder={'Contraseña'}
                            />
                            <TouchableOpacity><Text>¿Olvido su contraseña?</Text></TouchableOpacity>
                            <TouchableOpacity><Text>INICIAR SESIÓN</Text></TouchableOpacity>
                            <Text>Inicia sesión con:</Text>
                            <TouchableOpacity style={styles.botonR}><Text>FB</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.botonR}><Text>Google</Text></TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'red'
    },
    logo: {
        width: 250,
        height: 150,
        resizeMode: 'contain'
    },
    form: {
        alignItems: 'center'
    },
    titulo: {
        // fontFamily: 'Roboto',
        fontSize: 40,
        //fontWeight: 'bold',
        color: 'rgba(2,2,53, 1.0)'
    },
    textInput: {
        width: '80%',
        borderBottomColor: 'rgba(2,2,53, 1.0)',
        borderBottomWidth: 2
    },
    botonR: {
        borderRadius: 50
    }
})