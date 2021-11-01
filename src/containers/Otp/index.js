import React, { useEffect, useState } from 'react';
import { View, BackHandler, StyleSheet, Image, Text, Platform, Dimensions, ImageBackground, TouchableOpacity, ScrollView, TextInput } from 'react-native';
//import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Brands';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function Otp({ navigation }) {

    useEffect(() => {
        // setTimeout(() => {
        //     //navigation.navigate('Signup')
        //      navigation.navigate('Live')
        // }, 2000);
    }, []);

    const [phonenumber, setPhonenumber] = useState();
    const [otp, setOtp] = useState();

    return (
        <View style={{ flex: 1 }}>
            

                {/*<ImageBackground source={require('../../../assets/images/128171.png')} style={{height:Dimensions.get('window').height,width:Dimensions.get('window').width,}}/>
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
                    <TouchableOpacity>
                    <Image source={require('../../../assets/images/phone.png')}  style={{height:30,width:30}}/>
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
    </View>*/}
                <View style={{ flex: 0.9 }}>
                <ScrollView>
                    <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 10, alignItems: 'center' }}>
                        <View>
                            <TouchableOpacity>
                                <FontAwesome5 name="arrow-left" size={20} color={'#202020'} style={{ marginRight: 10 }} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ fontFamily: 'Raleway', fontSize: 18, fontWeight: '600', color: '#202020' }}>
                                Login via verification code
                            </Text>
                        </View>
                    </View>

                    <View style={{ height: 50, width: Dimensions.get('window').width, marginTop: 30, justifyContent: 'center', }}>
                        <View style={{ flexDirection: 'row', marginLeft: 20, alignItems: 'center', borderBottomColor: '#DDDDDD', borderBottomWidth: 1, marginRight: 20 }}>
                            <View>
                                <Entypo name="mobile" size={25} color={'#DDDDDD'} style={{ marginRight: 5 }} />
                            </View>
                            <View>

                            </View>
                            <View>
                                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
                                    +91
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Entypo name="triangle-down" size={15} />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TextInput
                                    placeholder="Phone Number"
                                    placeholderTextColor="#DDDDDD"
                                    maxLength={10}
                                    onChangeText={(text) =>setPhonenumber(text)}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ height: 50, width: Dimensions.get('window').width, marginTop: 30, justifyContent: 'center', }}>
                        <View style={{ flexDirection: 'row', marginLeft: 20, alignItems: 'center', borderBottomColor: '#DDDDDD', borderBottomWidth: 1, marginRight: 20, justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ marginRight: 10 }}>
                                    <Ionicons name="chatbubble-ellipses-outline" size={20} color={'#DDDDDD'} />
                                </View>
                                <View>
                                    <TextInput
                                        placeholder="Verification Code"
                                        placeholderTextColor="#DDDDDD"
                                        style={{ fontWeight: 'bold', fontSize: 14, width: Dimensions.get('window').width / 2 }}
                                        onChangeText={(text) =>setOtp(text)}
                                    />
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={{ height: 30, width: 100, borderWidth: 1, borderColor: '#DDDDDD', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <Text style={{ fontFamily: 'Raleway', fontSize: 16, fontWeight: 'bold', color: '#DDDDDD' }}>
                                        Get Code
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                        <TouchableOpacity
                            style={{ height: 40, width: Dimensions.get('window').width - 40, borderRadius: 20, backgroundColor: '#f5deb3', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Text style={{ fontFamily: 'Raleway', fontSize: 18, fontWeight: 'bold', color: '#ffffff' }}>
                                LOGIN
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                        <View>
                            <Text style={{ fontFamily: 'Raleway', fontSize: 14, fontWeight: 'bold', color: '#DDDDDD' }}>
                                Any problems when login?
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={{ fontFamily: 'Raleway', fontWeight: 'bold', fontSize: 14, color: '#ffd700', textDecorationLine: 'underline' }}>
                                Try another option
                            </Text>
                        </TouchableOpacity>
                    </View>
                    </ScrollView>
                </View>
               
                <View style={{ flex: 0.1, position: 'absolute', top: Dimensions.get('window').height-100 }}>
                    <View style={{ height: 70, width: Dimensions.get('window').width, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Text>
                                    ----------{' '}
                                </Text>
                            </View>
                            <View>
                                <Text>
                                    Other login options{' '}
                                </Text>
                            </View>
                            <View>
                                <Text>
                                    ----------
                                </Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10}}>
                        <TouchableOpacity style={{marginRight:20}}>
                        <Entypo name="facebook-with-circle" size={35} color={'#4267B2'} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image source={require('../../../assets/images/google.png')}  style={{height:30,width:30}}/>
                    </TouchableOpacity>
                        </View>
                    </View>
                </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    signuptext: {
        fontFamily: 'Raleway',
        fontWeight: '800',
        fontSize: 22,
        textAlign: 'center',
        color: '#ffffff'
    },
    signingup: {
        fontFamily: 'Raleway',
        fontWeight: '600',
        fontSize: 12,
        textAlign: 'center',
        color: '#ffffff'
    },
    terms: {
        fontFamily: 'Raleway',
        fontWeight: '800',
        fontSize: 12,
        textAlign: 'center',
        color: '#ffffff'
    }
})