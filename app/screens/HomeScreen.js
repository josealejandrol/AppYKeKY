import React,{Component} from 'react';
import {ImageBackground,View,Text,Image,TouchableOpacity,Alert,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Logo extends React.Component {
    render() {
        return (
            //Add your logo in the image tag
            <View style={{ flex: 0.8 }}>
            <Image
                source={require('../assets/logo-ultimate01.png')}
                resizeMode = "contain"
                style = {{width: 100,
                marginTop: 0,alignSelf:'center'}}
            />
            </View>
        );
    }
}

class MenuButton extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress = {() => this.props} ><Text><Icon name="bars" size={30} color="black" /></Text></TouchableOpacity>
        );
    }
}

export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <MenuButton />,
            headerTitle: <Logo />,
            headerBackTitle: "Home",
            headerLayoutPreset: "center"
        };
      };
    render() {
        return (
            <ImageBackground source={require('../assets/screen2.png')} style={{width: '100%', height: '100%'}}>
                <View style={styles.container}>
                    <View>

                    </View>
                </View>
            </ImageBackground>
        );s
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(11,27,105, .4)'
    }
})