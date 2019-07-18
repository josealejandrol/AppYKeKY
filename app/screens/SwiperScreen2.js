import React from 'react';
import Ionicons from 'react-native-vector-icons';
import {StyleSheet,View,Text,Image,I18nManager} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';

I18nManager.forceRTL(false)

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    image: {
        width: 320,
        height: 320
    },
    text: {
        color: 'rgba(255,255,255, 0.8)',
        backgroundColor: 'transparent',
        textAlign: 'center',
        paddingHorizontal: 16
    },
    title: {
        fontSize: 22,
        color: 'white',
        backgroundColor: 'transparent',
        textAlign: 'center',
        marginBottom: 16
    }
})

const slides = [
    {
        key: 'somethun',
        title: 'Quick setup',
        text: 'React-Native-App-Intro-Slider',
        icon: 'ios-images',
        colors: ['#63e2ff','#b066fe'],
    },
    {
        key: 'somethun1',
        title: 'Super',
        text: 'The Component',
        icon: 'ios-options',
        colors: ['#a3a1ff','#3a3897'],
    },
    {
        key: 'somethun2',
        title: 'No need',
        text: 'Usage',
        icon: 'ios-beer',
        colors: ['#29abe2','#4f00bc'],
    }
]

export default class SwiperScreen2 extends React.Component{
    _renderItem = props => (
        <LinearGradient
            style={[
                styles.mainContent,
                {
                    paddingTop: props.topSpacer,
                    paddingBottom: props.bottomSpacer,
                    width: props.width,
                    height: props.height
                },
            ]}
            colors={props.colors}
            start={{x:0, y:0.1}}
            end={{x:0, y:1}}
        >
            <Ionicons
                style={{ backgroundColor: 'transparent'}}
                name={props.icon}
                size={200}
                color="white"
            />
            <View>
                <Text style={styles.title} >{props.title}</Text>
                <Text style={styles.text} >{props.text}</Text>
            </View>
        </LinearGradient>
    )

    render(){
        return(
            <AppIntroSlider 
                slides={slides}
                renderItem={this._renderItem}
                showPrevButton
                showSkipButton
            />
        );
    }

}