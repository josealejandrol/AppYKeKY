import React,{Component} from 'react';
import {View,Text} from 'react-native';

export default class ResultTestScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            respuestas : this.props.navigation.state.params.respuestas
        }
    }
    componentDidMount = () => {

    }
    render() {
        this.contarElementos = (respuestas) => {

        }
        return (
            <View>
                <Text>{this.state.respuestas}</Text>
            </View>
        );
    }
}