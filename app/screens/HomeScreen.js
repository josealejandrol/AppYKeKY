import React,{Component} from 'react';
import {ImageBackground,View,Text,Image,TouchableOpacity} from 'react-native';

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
            <TouchableOpacity onPress = {this.props.onPress} ><Image source={require('../assets/menu.png')} style={{width: 30, height: 30}}/></TouchableOpacity>
        );
    }
}

export default class Class extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
            headerTitle: <Logo />,
            headerBackTitle: "Home",
            headerLayoutPreset: "center"
        };
      };
    render() {
        return (
            <ImageBackground source={require('../assets/screen2.png')} style={{width: '100%', height: '100%'}}>
                <View>
                    <Text>HomeScreen</Text>
                </View>
            </ImageBackground>
        );
    }
}