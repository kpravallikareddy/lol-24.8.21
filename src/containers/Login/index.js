import React, { useEffect } from 'react';
import {View,BackHandler, StyleSheet, Image,Text,Platform,Dimensions,ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export function Login({navigation}) {

    useEffect(() =>{
        setTimeout(() => {
            //navigation.navigate('Signup')
             navigation.navigate('Live')
        }, 2000);
    },[]);

    return (
        <View>
            <ScrollView>
            <ImageBackground source={require('../../../assets/images/128171.png')} style={{height:Dimensions.get('window').height,width:Dimensions.get('window').width,}}/>
            <View style={{position:'absolute',top:Dimensions.get('window').height/7,left:90,right:90}}>
                <Image source={require('../../../assets/images/lolgrp.png')}  style={{height:Dimensions.get('window').height/5,width:Dimensions.get('window').width/2}}/>
            </View>
            <View style={{height:100,width:Dimensions.get('window').width,alignItems:'center',position:'absolute',top:Dimensions.get('window').height/2-50,justifyContent:'center',}}>
                <Text style={{fontFamily:'Raleway',fontSize:40,color:'#ffffff',fontWeight:'900',textAlign:'center', }}>
                    Interact around
                </Text>
                <Text style={{fontFamily:'Raleway',fontSize:40,color:'#ffffff',fontWeight:'900',textAlign:'center',lineHeight:36 }}>
                    the world
                </Text> 
            </View>
            <View style={{height:90,width:Dimensions.get('window').width-100,alignItems:'center',position:'absolute',top:Dimensions.get('window').height/2+100,left:50,right:50}}>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity>
                    <Text style={styles.signuptext}>
                        Sign Up/
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.signuptext}>
                        Login
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={{height:60,width:Dimensions.get('window').width-140,position:'absolute',top:Dimensions.get('window').height/2+140,left:70,right:70,backgroundColor:'#ffffff',borderRadius:26,justifyContent:'center'}}>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <TouchableOpacity>
                    <Image source={require('../../../assets/images/google.png')}  style={{height:30,width:30}}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image source={require('../../../assets/images/fb.png')}  style={{height:30,width:30}}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() =>navigation.navigate('Otp')}
                    >
                    <Entypo name="mobile" size={25} color={'#4267B2'}/>
                    {/* <Image source={require('../../../assets/images/phone.png')}  style={{height:30,width:30}}/> */}
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{height:60,width:Dimensions.get('window').width,position:'absolute',bottom:20,justifyContent:'center',alignItems:'center',}}>
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                <Text style={styles.signingup}>
                    By signing up you agree to our{' '}
                </Text>
                <TouchableOpacity>
                    <Text style={styles.terms}>Terms of Service{' '}</Text>

                </TouchableOpacity>
                <Text style={styles.terms}>
                    &
                </Text>
                <TouchableOpacity>
                    <Text style={styles.terms}> Privacy Policy</Text>
                </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    signuptext:{
        fontFamily:'Raleway',
        fontWeight:'800',
        fontSize:22,
        textAlign:'center',
        color:'#ffffff'
    },
    signingup:{
        fontFamily:'Raleway',
        fontWeight:'600',
        fontSize:12,
        textAlign:'center',
        color:'#ffffff'
    },
    terms:{
        fontFamily:'Raleway',
        fontWeight:'800',
        fontSize:12,
        textAlign:'center',
        color:'#ffffff'
    }
})