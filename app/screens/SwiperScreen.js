import React,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

export default class SwiperScreen extends Component {

    render() {
        return (
            <Onboarding
                onDone={() => this.props.navigation.navigate('Login')}
                onSkip={() => this.props.navigation.navigate('Login')}
                pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/FondoPrueba.png')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fe6e58',
                    image: <Image source={require('../assets/FondoPrueba.png')} />,
                    title: 'The Title',
                    subtitle: 'This is the subtitle that sumplements the title.',
                },
                {
                    backgroundColor: '#999',
                    image: <Image source={require('../assets/FondoPrueba.png')} />,
                    title: 'Triangle',
                    subtitle: "Beautiful, isn't it?",
                },
                ]}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {

    }
})