import React, { Component } from 'react';
import { View, BackHandler, Image, Text, Platform, Dimensions, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, FlatList, TextInput, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LottieView from 'lottie-react-native';
import { BlurView } from '@react-native-community/blur'
//import Share from 'react-native-share';

// export function Live({navigation}) {

// useEffect(() =>{
//     // setTimeout(() => {
//     //     navigation.navigate('Login')
//     // }, 2000);

// },[]);

// const [liveselected,setLiveselected] = useState(true);
// const [partyselected,setPartyselected] = useState(false);

export default class Searchchatroom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showsettingmodal: false,
            result: '',
            showoverflowmenu: false,
            showchatroomoptions:false,
            mute:true,
        }
    }

    componentDidMount() {
        //  this.setState({liveselected:!this.state.liveselected})
        setTimeout(() => {
            this.props.navigation.navigate('Explore')
        }, 2000);
    }


    renderusers = () => {
        return (
            <View>
                <View style={{}}>
                    <Image
                        source={require('../../../assets/images/chartroombg.jpg')}
                        style={styles.profile}
                    />
                </View>
                <View style={styles.chatusers}>
                    <View style={{ marginTop: 35, alignItems: 'center' }}>
                        <Text style={styles.username}>
                            Username
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <View>
                                <Image
                                    source={require('../../../assets/images/diamond1.png')}
                                    style={{ height: 10, width: 10, marginRight: 5 }}
                                />
                            </View>
                            <Text style={styles.diamond}>
                                0
                            </Text>
                        </View>
                    </View>
                </View>

            </View>
        )
    }

    renderchats = () => {
        return (
            <View style={{ alignItems: 'center' }}>
                <View style={{}}>
                    <View style={{}}>
                        <Image
                            source={require('../../../assets/images/chartroombg.jpg')}
                            style={styles.chatprofile}
                        />
                    </View>
                    <View style={styles.chatview}>
                        <View style={{ marginLeft: 30, marginRight: 10 }}>
                            <Text style={styles.username}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin mauris, condimentum hac ut feugiat tellus, vestibulum enim consequat.
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    renderfooterview = () => {
        return (
            <View style={styles.footerview}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <TextInput
                        placeholder='Send a message'
                        placeholderTextColor='#ffffff'
                        style={styles.sendmessageview}
                    />
                    <View style={{ position: 'absolute', marginLeft: Dimensions.get('window').width / 2 - 30, marginTop: 10 }}>
                        <Feather name="smile" size={20} color={'#ffffff'} />
                    </View>

                    <View>
                        <TouchableOpacity
                        onPress={() =>this.setState({mute:!this.state.mute})}
                        >
                        {this.state.mute?
                         <Ionicons name="mic-off-sharp" size={25} color={'#ffffff'} />
                         :
                        <Ionicons name="mic-sharp" size={25} color={'#ffffff'} />
                        }
                        </TouchableOpacity>
                    </View>

                    <View >
                        <TouchableOpacity 
                        style={{ flexDirection: 'row' }}
                        onPress={() => this.setState({showchatroomoptions:true})}
                        >
                        <Image
                            source={require('../../../assets/images/diamond.png')}
                            style={{ height: 20, width: 20, }}
                        />
                        <View style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: '#FF002E', marginLeft: -10, marginTop: -5 }}>
                        </View>
                        </TouchableOpacity>
                    </View>
                    
                    <View>
                        <TouchableOpacity>
                        <Image
                            source={require('../../../assets/images/stone.png')}
                            style={{ height: 20, width: 20, }}
                        />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                        <Image
                            source={require('../../../assets/images/gift.png')}
                            style={{ height: 20, width: 20, }}
                        />
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        )
    }

    chatroomdropdown = () => {
        return (
            <View style={{ height: Dimensions.get('window').height / 3, width: Dimensions.get('window').width / 2, backgroundColor: '#ffffff', borderBottomLeftRadius: 0, borderBottomRightRadius: 0, marginTop: 10, marginLeft: Dimensions.get('window').width / 2,marginBottom:55 }}>
                <ScrollView>
                <TouchableOpacity
                    style={{ height: 40, width: Dimensions.get('window').width / 2, justifyContent: 'center', alignItems: 'center', borderBottomColor: '#EEEEEE', borderBottomWidth: 1 }}
                >
                    <Text style={{ fontSize: 16, fontFamily: 'Raleway', color: '#202020', marginRight: 15 }}>
                        Theme
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ height: 40, width: Dimensions.get('window').width / 2, justifyContent: 'center', alignItems: 'center', borderBottomColor: '#EEEEEE', borderBottomWidth: 1 }}
                >
                    <Text style={{ fontSize: 16, fontFamily: 'Raleway', color: '#202020', marginRight: 15 }}>
                        Music Player
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ height: 40, width: Dimensions.get('window').width / 2, justifyContent: 'center', alignItems: 'center', borderBottomColor: '#EEEEEE', borderBottomWidth: 1 }}
                >
                    <Text style={{ fontSize: 16, fontFamily: 'Raleway', color: '#202020', marginRight: 15 }}>
                        Calculator
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ height: 40, width: Dimensions.get('window').width / 2, justifyContent: 'center', alignItems: 'center', borderBottomColor: '#EEEEEE', borderBottomWidth: 1 }}
                >
                    <Text style={{ fontSize: 16, fontFamily: 'Raleway', color: '#202020', marginRight: 15 }}>
                        Suitcase
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ height: 40, width: Dimensions.get('window').width / 2, justifyContent: 'center', alignItems: 'center', borderBottomColor: '#EEEEEE', borderBottomWidth: 1 }}
                >
                    <Text style={{ fontSize: 16, fontFamily: 'Raleway', color: '#202020', marginRight: 15 }}>
                        Diamond Hunts
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ height: 40, width: Dimensions.get('window').width / 2, justifyContent: 'center', alignItems: 'center', borderBottomColor: '#EEEEEE', borderBottomWidth: 1 }}
                >
                    <Text style={{ fontSize: 16, fontFamily: 'Raleway', color: '#202020', marginRight: 15 }}>
                        Ludo
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ height: 40, width: Dimensions.get('window').width / 2, justifyContent: 'center', alignItems: 'center', borderBottomColor: '#EEEEEE', borderBottomWidth: 1 }}
                >
                    <Text style={{ fontSize: 16, fontFamily: 'Raleway', color: '#202020', marginRight: 15 }}>
                        Party Mode
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ height: 40, width: Dimensions.get('window').width / 2, justifyContent: 'center', alignItems: 'center', borderBottomColor: '#EEEEEE', borderBottomWidth: 1 }}
                >
                    <Text style={{ fontSize: 16, fontFamily: 'Raleway', color: '#202020', marginRight: 15 }}>
                        Coming soon
                    </Text>
                </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }


    shareMultipleImages = async () => {
        const shareOptions = {
            title: 'Invite to join the channel',
            failOnCancel: false,
            urls: ['https://play.google.com/store/apps/details?id=com.romegamart'], //[this.state.url],
        };

        // If you want, you can use a try catch, to parse
        // the share response. If the user cancels, etc.
        try {
            const ShareResponse = await Share.open(shareOptions);
            this.setState(JSON.stringify({ result: ShareResponse }));
        } catch (error) {
            console.log('Error =>', error);
            this.setState({ result: 'error: '.concat(getErrorString(error)) });
        }
    };

    render() {
        return (
            <View style={{ flex: 1 }}>

                <ImageBackground
                    source={require('../../../assets/images/chartroombg.jpg')}
                    style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width }}
                    blurRadius={this.state.showsettingmodal ? 4 : 0}
                >

                    <View style={{ flex: 0.9 }}>
                        <ScrollView>
                            <View style={{
                                height: 390,
                                width: Dimensions.get('window').width,
                                borderBottomLeftRadius: 30,
                                borderBottomRightRadius: 30,
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',

                            }}>
                                <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: 10, marginRight: 10, justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <TouchableOpacity
                                            style={{ alignItems: 'center', justifyContent: 'center', marginRight: 20, }}
                                        // onPress={() => this.props.navigation.goBack()}

                                        >
                                            <Ionicons name="arrow-back" size={25} color={'#ffffff'} />
                                        </TouchableOpacity>
                                        <View>
                                            <Text style={styles.searchtext}>
                                                Chat Room Name
                                            </Text>
                                            <Text style={styles.onlinetext}>
                                                Online: 20
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <TouchableOpacity
                                            style={{ alignItems: 'center', justifyContent: 'center', marginRight: 10 }}
                                            onPress={() => this.shareMultipleImages()}
                                        >
                                            <FontAwesome5 name="share" size={25} color={'#ffffff'} />

                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={{ alignItems: 'center', justifyContent: 'center', marginRight: 10 }}
                                            onPress={() => this.setState({ showsettingmodal: true })}
                                        >
                                            <Ionicons name="settings-sharp" size={25} color={'#ffffff'} />
                                            {/* color={'#ffffff'} */}
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={{ alignItems: 'center', justifyContent: 'center', marginRight: 10 }}
                                            onPress={() => this.setState({ showoverflowmenu: true })}
                                        >
                                            <Ionicons name="menu-outline" size={25} color={'#ffffff'} />
                                            {/* color={'#ffffff'} */}
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View>
                                    <Modal
                                        animationType="fade"
                                        transparent={true}
                                        onRequestClose={() => this.setState({ showsettingmodal: false })}
                                        visible={this.state.showsettingmodal}
                                    >
                                        <View
                                            style={{
                                                flex: 1,
                                                justifyContent: 'flex-start',

                                            }}
                                        >
                                            <View style={{
                                                height: 390,
                                                width: Dimensions.get('window').width,
                                                borderBottomLeftRadius: 30,
                                                borderBottomRightRadius: 30,
                                                backgroundColor: '#ffffff',

                                            }}>
                                                <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: 10, marginRight: 10, justifyContent: 'space-between' }}>

                                                    <TouchableOpacity
                                                        style={{ alignItems: 'center', justifyContent: 'center', marginRight: 20, }}
                                                        onPress={() => this.setState({ showsettingmodal: false })}
                                                    >
                                                        <Ionicons name="arrow-back" size={25} />
                                                    </TouchableOpacity>

                                                    <TouchableOpacity
                                                        style={{ alignItems: 'center', justifyContent: 'center', marginRight: 10 }}
                                                    // onPress={() => this.setState({ friendsselected: !this.state.friendsselected, followingselected: false,followerselected:false,channelselected:false })}
                                                    >
                                                        <FontAwesome5 name="share" size={25} />
                                                    </TouchableOpacity>
                                                </View>

                                                <View style={{ height: 56, width: Dimensions.get('window').width, marginTop: 10, justifyContent: 'center' }}>
                                                    <View style={{ flexDirection: 'row', marginLeft: 15 }}>
                                                        <View style={{ marginRight: 10 }}>
                                                            <Image source={require('../../../assets/images/lolgrp.png')} style={styles.profileimage} />
                                                        </View>
                                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                            <Text style={styles.username1}>
                                                                Username
                                                            </Text>
                                                            <Text style={styles.id}>
                                                                ID:abcd1234
                                                            </Text>
                                                        </View>
                                                    </View>
                                                </View>

                                                <View style={{ marginLeft: 15, marginRight: 15, marginTop: 10 }}>
                                                    <View style={styles.billboardview}>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20 }}>
                                                            <View>
                                                                <Text style={styles.billboard}>
                                                                    Billboard
                                                                </Text>
                                                            </View>
                                                            <TouchableOpacity>
                                                                <MaterialIcons name="keyboard-arrow-right" size={25} />
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>
                                                    <View style={styles.billboardview}>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20 }}>
                                                            <View>
                                                                <Text style={styles.billboard}>
                                                                    Adminstrator
                                                                </Text>
                                                            </View>
                                                            <TouchableOpacity>
                                                                <MaterialIcons name="keyboard-arrow-right" size={25} />
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>
                                                    <View style={styles.billboardview}>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20 }}>
                                                            <View>
                                                                <Text style={styles.billboard}>
                                                                    Report Room
                                                                </Text>
                                                            </View>
                                                            <TouchableOpacity>
                                                                <MaterialIcons name="keyboard-arrow-right" size={25} />
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>
                                                </View>

                                            </View>
                                        </View>
                                    </Modal>
                                </View>

                                <View>
                                    <Modal
                                        animationType="fade"
                                        transparent={true}
                                        onRequestClose={() => this.setState({ showoverflowmenu: false })}
                                        visible={this.state.showoverflowmenu}
                                    >
                                        <ScrollView>
                                            <View
                                                style={{
                                                    flex: 1,
                                                    justifyContent: 'flex-start',
                                                    alignItems: 'flex-end',
                                                }}
                                            >
                                                <View style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width - 20, backgroundColor: '#ffffff' }}>
                                                    <View style={{ marginLeft: 10, marginTop: 30 }}>
                                                        <Text style={styles.billboard}>
                                                            Recommended
                                                        </Text>
                                                    </View>

                                                    <View style={{marginTop:10,marginLeft:10,marginRight:10,flexDirection:'row',justifyContent:'space-between'}}>
                                                        <LinearGradient
                                                        start={{ x: 0, y: 0.5 }}
                                                        end={{ x: 1, y: 0.5 }}
                                                        useAngle={true}
                                                        angle={180}
                                                        colors={['#2A5F58', '#0C1E5F',]}
                                                        style={{height: 170,
                                                            width: Dimensions.get('window').width / 2 - 35,
                                                            borderRadius: 20,
                                                            alignItems: 'center',
                                                            justifyContent: 'center',}}
                                                        >
                                                            <View>
                                                            <Image source={require('../../../assets/images/lolgrp.png')} style={styles.recommendprofile} />
                                                            </View>

                                                            <View style={styles.recommendusers}>
                                                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                                            <Feather name="users" size={12} color={'#D8382B'} />
                                                            <Text style={styles.usercount}>
                                                                240
                                                            </Text>
                                                            </View>
                                                            </View>

                                                            <View style={{marginTop:10}}>
                                                                <Text style={styles.roomname}>
                                                                    Room name
                                                                </Text>
                                                            </View>

                                                        </LinearGradient>

                                                        <LinearGradient
                                                        start={{ x: 0, y: 0.5 }}
                                                        end={{ x: 1, y: 0.5 }}
                                                        useAngle={true}
                                                        angle={180}
                                                        colors={['#EB0038', '#0128B1',]}
                                                        style={{height: 170,
                                                            width: Dimensions.get('window').width / 2 - 35,
                                                            borderRadius: 20,
                                                            alignItems: 'center',
                                                            justifyContent: 'center',}}
                                                        >
                                                            <View>
                                                            <Image source={require('../../../assets/images/lolgrp.png')} style={styles.recommendprofile} />
                                                            </View>

                                                            <View style={styles.recommendusers}>
                                                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                                            <Feather name="users" size={12} color={'#D8382B'} />
                                                            <Text style={styles.usercount}>
                                                                240
                                                            </Text>
                                                            </View>
                                                            </View>

                                                            <View style={{marginTop:10}}>
                                                                <Text style={styles.roomname}>
                                                                    Room name
                                                                </Text>
                                                            </View>

                                                        </LinearGradient>
                                                    </View>

                                                </View>
                                            </View>
                                        </ScrollView>
                                    </Modal>
                            </View>


                            <View style={{ flexDirection: 'row', height: 25, width: Dimensions.get('window').width, marginTop: 20 }}>
                                <View style={{ marginRight: 0, marginLeft: 15 }}>
                                    <Image
                                        source={require('../../../assets/images/trophy.png')}
                                        style={{ height: 20, width: 20, }}
                                    />
                                </View>
                                <View style={{ marginRight: 5 }}>
                                    <Text style={styles.onlinetext}>
                                        190.8 K
                                    </Text>
                                </View>
                                <View style={{ marginRight: 10 }}>
                                    <Image
                                        source={require('../../../assets/images/trophy.png')}
                                        style={{ height: 20, width: 20, }}
                                    />
                                </View>
                            </View>


                            <ScrollView horizontal>
                                <View style={{ marginLeft: 10, marginRight: 10, flexDirection: 'row', marginTop: 15 }}>
                                    {this.renderusers()}
                                </View>
                            </ScrollView>
                            </View>

                        <View style={{ marginTop: 20 }}>
                            {this.renderchats()}
                        </View>

                        </ScrollView>
                    </View>
                    {this.state.showchatroomoptions?
                    <View>
                        {this.chatroomdropdown()}
                    </View>
                    :null
                    }                                        
                <View style={{ flex: 0.1 }}>
                    {this.renderfooterview()}

                </View>
                {this.state.showsettingmodal ?
                    <BlurView
                        style={styles.blurView}
                        reducedTransparencyFallbackColor="gray"
                        blurType="light"
                        blurAmount={20}
                    />
                    : null}

                    {this.state.showoverflowmenu ?
                    <BlurView
                        style={styles.blurView}
                        reducedTransparencyFallbackColor="gray"
                        blurType="light"
                        blurAmount={20}
                    />
                    : null}


                </ImageBackground>



            </View >
        )
    }
}

const styles = StyleSheet.create({
    searchtext: {
        fontFamily: 'Raleway',
        fontWeight: '600',
        fontSize: 16,
        color: '#ffffff'
    },
    chattext: {
        fontFamily: 'Raleway',
        fontWeight: '700',
        fontSize: 16,
        color: '#ffffff',
        //marginLeft:22,
        //textAlign:'center'
    },
    diamond: {
        fontFamily: 'Raleway',
        fontWeight: '500',
        fontSize: 12,
        color: '#ffffff'
    },
    username: {
        fontFamily: 'Raleway',
        fontWeight: '500',
        fontSize: 14,
        color: '#ffffff',
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignSelf: 'center',
        zIndex: 1,
        //backgroundColor: '#ffffff'
    },
    chatprofile: {
        width: 50,
        height: 50,
        borderRadius: 25,
        // alignSelf: 'center',
        zIndex: 1,
        borderWidth: 1,
        borderColor: '#ffffff',
        //backgroundColor: '#ffffff',
    },
    onlinetext: {
        fontFamily: 'Raleway',
        fontWeight: '600',
        fontSize: 12,
        color: '#ffffff',
        // textAlign:'center',
    },
    chatusers: {
        height: 83,
        width: Dimensions.get('window').width / 4 - 10,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.12)',
        marginTop: -35,
        alignItems: 'center',
        //justifyContent:'center'
    },
    chatview: {
        height: 100,
        width: Dimensions.get('window').width - 60,
        borderTopRightRadius: 45,
        borderBottomLeftRadius: 45,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        marginTop: -35,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ffffff',
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerview: {
        position: 'absolute',
        height: 85,
        left: 0,
        width: Dimensions.get('window').width,
        backgroundColor: 'rgba(39, 39, 39, 0.5)',
        bottom: 0,
        //flexDirection: 'row', 
        justifyContent: 'center',
        //alignItems: 'center', 
    },
    sendmessageview: {
        height: 42,
        width: Dimensions.get('window').width / 2,
        backgroundColor: 'rgba(9, 9, 9, 0.6)',
        borderRadius: 20,
        fontSize: 16,
        color: '#ffffff',
        paddingLeft: 15,
    },
    profileimage: {
        width: 50,
        height: 50,
        borderRadius: 18,
    },
    username1: {
        fontWeight: '600',
        fontFamily: 'Raleway',
        fontSize: 16,
        color: '#000000'
    },
    id: {
        fontWeight: '500',
        fontFamily: 'Raleway',
        fontSize: 12,
        color: '#888888'
    },
    billboard: {
        fontWeight: '600',
        fontFamily: 'Raleway',
        fontSize: 16,
        color: '#202020'
    },
    billboardview: {
        height: 60,
        width: Dimensions.get('window').width - 30,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        elevation: 10,
        justifyContent: 'center',
        marginTop: 10,
    },
    blurView: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    recommendview: {
        height: 170,
        width: Dimensions.get('window').width / 2 - 35,
        backgroundColor: '#C4C4C4',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    recommendprofile: {
        height: 60,
        width: 60,
        borderRadius: 20,
        borderColor: '#ffffff',
        borderWidth: 1,
    },
    recommendusers: {
        width: 55,
        height: 22,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10,
    },
    roomname: {
        fontFamily: 'Raleway',
        fontSize: 14,
        color: '#ffffff',
        fontWeight: '400',
    },
    usercount: {
        fontFamily: 'Raleway',
        fontSize: 14,
        color: '#D8382B',
        fontWeight: '400',
    }



})

