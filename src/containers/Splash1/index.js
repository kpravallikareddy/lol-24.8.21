import React, { useEffect,useState } from 'react';
import {View,BackHandler, Image,Text,Platform,Dimensions,Modal} from 'react-native';

export function Splash1({navigation}) {

    useEffect(() =>{

        setTimeout(() => {
            //     navigation.navigate('Splash')
            setShowlogo(true)
             }, 2000);
        setTimeout(() => {
            setShowlogo(false)
            navigation.navigate('Login')
        }, 3000);
        

    },[]);

    const [showlogo,setShowlogo] = useState(false)

    return (
        <View>
            <Image source={require('../../../assets/images/splash1.png')} style={{height:Dimensions.get('window').height,width:Dimensions.get('window').width,}}/>
            <Modal
            animationType="slide"
            transparent={true}
            //onRequestClose={() => }
            visible={showlogo}
            >
            <View style={{position:'absolute',top:Dimensions.get('window').height/3,left:90,right:90,alignItems:'center',justifyContent:'center'}}>
                <Image source={require('../../../assets/images/lolgrp.png')}  style={{height:Dimensions.get('window').height/5,width:Dimensions.get('window').width/2}}/>
            </View>
            </Modal>
        
        </View>
    )
}

// export default Splash;