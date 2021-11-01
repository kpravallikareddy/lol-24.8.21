import React, { Component } from 'react';
import { View, BackHandler, Image, Text, Platform, Dimensions, StyleSheet, TouchableOpacity, ScrollView, Modal, ImageBackground, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { LinearTextGradient } from "react-native-text-gradient";
import { Icon } from 'react-native-gradient-icon';
import LottieView from 'lottie-react-native';

// export function Live({navigation}) {

// useEffect(() =>{
//     // setTimeout(() => {
//     //     navigation.navigate('Login')
//     // }, 2000);

// },[]);

// const [liveselected,setLiveselected] = useState(true);
// const [partyselected,setPartyselected] = useState(false);

export default class Explore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            followingselected: false,
            squareselected: true,
            exploreselected: false,
            livetabselected: false,
            exploretabselected: true,
            hometabselected: false,
            chattabselected: false,
            profiletabselected: false,
            unseenmessages: 0,
        }
    }

    componentDidMount() {
        //  this.setState({liveselected:!this.state.liveselected})
        // setTimeout(() => {
        //     this.props.navigation.navigate('Channelsearch')
        // }, 2000);
    }

    getnotifications = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(BASE_URL + "notification/4", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if (result.status == 200) {
                    this.setState({ unseenmessages: result.data.unseen })
                }
            })
            .catch(error => console.log('error', error));
    }


    renderuser = () => {
        return (
            <View>
                <View style={styles.userview}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginRight: 15, alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.profileview}>
                                <ImageBackground
                                    style={{ height: 70, width: 70, alignItems: 'center', justifyContent: 'center' }}
                                    source={require('../../../assets/images/profileiconbg.png')}>
                                    <Image
                                        source={require('../../../assets/images/lolgrp.png')}
                                        style={styles.profileimage}
                                    />
                                </ImageBackground>
                                <View style={{marginTop:-30,marginLeft:47}}>
                                <View style={{ backgroundColor: '#ffffff', height: 16, width: 16, borderRadius: 8, marginRight: 5 }}>
                                    <LottieView
                                        source={require('../../../assets/json/24425-sound-yellow.json')}
                                        autoPlay={true}
                                        loop={true}
                                        speed={1}
                                        ref={(animation) => {
                                            this.anim = animation;
                                        }}
                                        style={{ height: 14, width: 14 }}
                                    />
                                </View>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.username}>
                                    Username
                                </Text>
                            </View>
                        </View>

                        <LinearGradient
                            start={{ x: 0.0, y: 1.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            useAngle={true}
                            angle={360}
                            colors={['#01007E', '#FD01FC',]}
                            style={{ height: 38, width: 98, alignItems: 'center', justifyContent: 'center', borderRadius: 12 }}
                        >
                            <TouchableOpacity style={{ height: 36, width: 94, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: 12 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    {/* <LinearTextGradient
                                    style={{ fontWeight: "700", fontSize: 16,fontFamily:'Raleway' }}
                                    locations={[0, 1]}
                                    colors={["#FD01FC", "#01007E"]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                > */}
                                    <SimpleLineIcons name="user-follow" size={15} style={{ marginRight: 5 }} />
                                    <Text>
                                        Follow
                                    </Text>
                                    {/* </LinearTextGradient> */}
                                </View>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>

                    <View style={styles.userimageview}>
                        <Image
                            source={require('../../../assets/images/lolgrp.png')}
                            style={styles.userimage} />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginTop: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <LinearGradient
                                start={{ x: 0.0, y: 1.0 }}
                                end={{ x: 1.0, y: 1.0 }}
                                //useAngle={true}
                                //angle={360}
                                colors={['#FF002E', '#CF0968',]}
                                style={{ height: 40, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginRight: 20 }}
                            >
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Ionicons name="heart-outline" size={15} style={{ marginRight: 5 }} color={'#ffffff'} />
                                        <Text style={{ fontFamily: 'Raleway', fontSize: 16, fontWeight: '500', color: '#ffffff' }}>
                                            120
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </LinearGradient>

                            <TouchableOpacity style={{ marginRight: 20 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Ionicons name="chatbubble-ellipses-outline" size={25} style={{ marginRight: 5 }} />
                                    <Text style={{ fontFamily: 'Raleway', fontSize: 16, fontWeight: '500', color: '#202020' }}>
                                        24
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <FontAwesome5 name="share" size={25} />
                            </TouchableOpacity>
                        </View>

                        {/* <LinearGradient
                        start={{ x: 0.0, y: 1.0 }}
                        end={{ x: 1.0, y: 1.0 }}
                        //useAngle={true}
                        //angle={360}
                        colors={['rgba(253, 1, 252, 0.6)', 'rgba(1, 0, 126, 0.6)',]}
                        style={{ height: 100, width: 100, alignItems: 'center', justifyContent: 'center', }}
                    > */}
                        <TouchableOpacity>
                            <Image
                                source={require('../../../assets/images/cam.png')}
                                style={{ height: 30, width: 99 }} />
                            {/* <Entypo name="camera" size={20} color={'#ffffff'} /> */}
                        </TouchableOpacity>
                        {/* </LinearGradient> */}
                    </View>

                </View>
            </View>
        )
    }

    // renderfooter = () => {
    //     return (
    //         <View>
    //             <View style={{ height: 80, width: Dimensions.get('window').width, backgroundColor: 'rgba(255, 255, 255, 0.9)', justifyContent: 'center', }}>
    //                 <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 10, justifyContent: 'space-between', }}>
    //                     <View>
    //                         {this.state.livetabselected ?
    //                             <View>
    //                                 <TouchableOpacity
    //                                  onPress={() =>this.props.navigation.navigate('Live')}
    //                                     style={{ height: 42, width: 42, alignItems: 'center', justifyContent: 'center' }}
    //                                 >
    //                                     <LinearGradient
    //                                         start={{ x: 0, y: 0.5 }}
    //                                         end={{ x: 1, y: 0.5 }}
    //                                         colors={['#01007E', '#FD01FC',]}
    //                                         style={{ height: 3, width: 15, alignSelf: 'center', marginBottom: 5 }}
    //                                     >
    //                                     </LinearGradient>
    //                                     <Image source={require('../../../assets/images/mdi_party-popper.png')} style={{ height: 30, width: 30 }} />
    //                                 </TouchableOpacity>
    //                             </View>
    //                             :
    //                             <TouchableOpacity
    //                             onPress={() =>this.props.navigation.navigate('Live')}
    //                                 style={{ height: 42, width: 42, alignItems: 'center', justifyContent: 'center' }}
    //                             >
    //                                 <Image source={require('../../../assets/images/mdi_party-popper1.png')} style={{ height: 30, width: 30 }} />
    //                             </TouchableOpacity>
    //                         }
    //                     </View>

    //                     <View>
    //                         {this.state.exploretabselected ?
    //                             <View>
    //                                 <TouchableOpacity
    //                                  onPress={() =>this.props.navigation.navigate('Explore')}
    //                                     style={{ height: 42, width: 42, alignItems: 'center', justifyContent: 'center' }}
    //                                 >
    //                                     <LinearGradient
    //                                         start={{ x: 0, y: 0.5 }}
    //                                         end={{ x: 1, y: 0.5 }}
    //                                         colors={['#01007E', '#FD01FC',]}
    //                                         style={{ height: 3, width: 15, alignSelf: 'center', marginBottom: 5 }}
    //                                     >
    //                                     </LinearGradient>
    //                                     <Image source={require('../../../assets/images/bx_bxs-planet1.png')} style={{ height: 30, width: 30 }} />
    //                                 </TouchableOpacity>
    //                             </View>
    //                             :
    //                             <TouchableOpacity
    //                             onPress={() =>this.props.navigation.navigate('Explore')}
    //                                 style={{ height: 42, width: 42, alignItems: 'center', justifyContent: 'center' }}
    //                             >
    //                                 <Image source={require('../../../assets/images/bx_bxs-planet.png')} style={{ height: 30, width: 30 }} />
    //                             </TouchableOpacity>
    //                         }
    //                     </View>

    //                     <View>
    //                         {/* {this.state.hometabselected? */}
    //                         <View>
    //                             <TouchableOpacity
    //                                 style={{ height: 42, width: 42, alignItems: 'center', justifyContent: 'center' }}
    //                             >
    //                                 <LinearGradient
    //                                     start={{ x: 0, y: 0.5 }}
    //                                     end={{ x: 1, y: 0.5 }}
    //                                     colors={['#01007E', '#FD01FC',]}
    //                                     style={{ height: 3, width: 15, alignSelf: 'center', marginBottom: 5 }}
    //                                 >
    //                                 </LinearGradient>
    //                                 {/* <MaterialIcons name="home" size={30} /> */}
    //                                 <Icon name="home" size={40} type="material" 

    //                                 colors={[
    //                                     { color: "#01007E", offset: "1", opacity: "1" },
    //                                     { color: "#FD01FC", offset: "0", opacity: "1" },
    //                                 ]} />
    //                                 {/* <Image source={require('../../../assets/images/mdi_party-popper.png')} style={{ height: 30, width: 30 }} /> */}
    //                             </TouchableOpacity>
    //                         </View>
    //                         {/* :
    //                     <TouchableOpacity
    //                     style={{ height: 42, width: 42, alignItems: 'center', justifyContent: 'center' }}
    //                     >
    //                         <MaterialIcons name="home" size={30} />

    //                     </TouchableOpacity>
    //                     } */}
    //                     </View>

    //                     <View>
    //                         {this.state.chattabselected ?
    //                             <View>
    //                                 <TouchableOpacity
    //                                  onPress={() =>this.props.navigation.navigate('Chat')}
    //                                     style={{ height: 42, width: 42, alignItems: 'center', justifyContent: 'center' }}
    //                                 >
    //                                     <LinearGradient
    //                                         start={{ x: 0, y: 0.5 }}
    //                                         end={{ x: 1, y: 0.5 }}
    //                                         colors={['#01007E', '#FD01FC',]}
    //                                         style={{ height: 3, width: 15, alignSelf: 'center', marginBottom: 5 }}
    //                                     >
    //                                     </LinearGradient>
    //                                     <Icon name="chatbubble-ellipses" size={30} type="ionicon" 
    //                                  useAngle={true}
    //                                  angle={180}
    //                                 colors={[
    //                                     { color: "#01007E", offset: "1", opacity: "1" },
    //                                     { color: "#FD01FC", offset: "0", opacity: "1" },
    //                                 ]} />
    //                                     {/* <Ionicons name="chatbubble-ellipses" size={30} /> */}
    //                                     {/* <Image source={require('../../../assets/images/mdi_party-popper.png')} style={{ height: 30, width: 30 }} /> */}
    //                                 </TouchableOpacity>
    //                             </View>
    //                             :
    //                             <TouchableOpacity
    //                             onPress={() =>this.props.navigation.navigate('Chat')}
    //                                 style={{ height: 42, width: 42, alignItems: 'center', justifyContent: 'center' }}
    //                             >
    //                                 <Ionicons name="chatbubble-ellipses" size={30} />
    //                                 {/* <Image source={require('../../../assets/images/mdi_party-popper1.png')} style={{ height: 30, width: 30 }} />   */}
    //                             </TouchableOpacity>
    //                         }
    //                     </View>

    //                     <View>
    //                         {this.state.profiletabselected ?
    //                             <View style={{alignItems:'center',justifyContent:'center'}}>
    //                                 <TouchableOpacity
    //                                  onPress={() =>this.props.navigation.navigate('Profile')}
    //                                     style={{ height: 42, width: 42, alignItems: 'center', justifyContent: 'center' }}
    //                                 >
    //                                     <LinearGradient
    //                                         start={{ x: 0, y: 0.5 }}
    //                                         end={{ x: 1, y: 0.5 }}
    //                                         colors={['#01007E', '#FD01FC',]}
    //                                         style={{ height: 3, width: 15, alignSelf: 'center', marginBottom: 5 }}
    //                                     >
    //                                     </LinearGradient>
    //                                     <Icon name="person" size={30} type="material" 
    //                                  useAngle={true}
    //                                  angle={180}
    //                                 colors={[
    //                                     { color: "#01007E", offset: "1", opacity: "1" },
    //                                     { color: "#FD01FC", offset: "0", opacity: "1" },
    //                                 ]} />
    //                                     {/* <MaterialIcons name="person" size={30} /> */}
    //                                     {/* <Image source={require('../../../assets/images/mdi_party-popper.png')} style={{ height: 30, width: 30 }} /> */}
    //                                 </TouchableOpacity>
    //                             </View>
    //                             :
    //                             <TouchableOpacity
    //                             onPress={() =>this.props.navigation.navigate('Profile')}
    //                                 style={{ height: 42, width: 42, alignItems: 'center', justifyContent: 'center' }}
    //                             >
    //                                 <MaterialIcons name="person" size={30} />
    //                                 {/* <Image source={require('../../../assets/images/mdi_party-popper1.png')} style={{ height: 30, width: 30 }} />   */}
    //                             </TouchableOpacity>
    //                         }
    //                     </View>
    //                 </View>
    //             </View>
    //         </View>
    //     )
    // }

    renderfooter = () => {
        return (
            <View>
                <View style={{ height: 60, width: Dimensions.get('window').width, backgroundColor: 'rgba(255, 255, 255, 0.9)', justifyContent: 'center', }}>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 10, justifyContent: 'space-between', }}>
                        <View>
                            {this.state.livetabselected ?
                                <View>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('Live')}
                                        style={{ height: 42, width: 42, alignItems: 'center', justifyContent: 'center' }}
                                    >
                                        <LinearGradient
                                            start={{ x: 0, y: 0.5 }}
                                            end={{ x: 1, y: 0.5 }}
                                            colors={['#01007E', '#FD01FC',]}
                                            style={{ height: 3, width: 15, alignSelf: 'center', marginBottom: 5 }}
                                        >
                                        </LinearGradient>
                                        <Image source={require('../../../assets/images/mdi_party-popper.png')} style={{ height: 30, width: 30 }} />
                                    </TouchableOpacity>
                                </View>
                                :
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Live')}
                                    style={{ height: 42, width: 42, alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <Image source={require('../../../assets/images/mdi_party-popper1.png')} style={{ height: 30, width: 30 }} />
                                </TouchableOpacity>
                            }
                        </View>

                        <View>
                            {this.state.exploretabselected ?
                                <View>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('Explore')}
                                        style={{ height: 42, width: 42, alignItems: 'center', justifyContent: 'center' }}
                                    >
                                        <LinearGradient
                                            start={{ x: 0, y: 0.5 }}
                                            end={{ x: 1, y: 0.5 }}
                                            colors={['#01007E', '#FD01FC',]}
                                            style={{ height: 3, width: 15, alignSelf: 'center', marginBottom: 5 }}
                                        >
                                        </LinearGradient>
                                        <Image source={require('../../../assets/images/bx_bxs-planet1.png')} style={{ height: 30, width: 30 }} />
                                    </TouchableOpacity>
                                </View>
                                :
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Explore')}
                                    style={{ height: 42, width: 42, alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <Image source={require('../../../assets/images/bx_bxs-planet.png')} style={{ height: 30, width: 30 }} />
                                </TouchableOpacity>
                            }
                        </View>

                        <View>
                            {this.state.hometabselected ?
                                <View>
                                    <TouchableOpacity
                                        // style={{ height: 42, width: 42,borderRadius:21, alignItems: 'center', justifyContent: 'center',borderWidth:2,borderColor:'#FFF8F8' }}
                                        style={{ alignItems: 'center', justifyContent: 'center', marginTop: -20 }}
                                    >
                                        <LinearGradient
                                            start={{ x: 0, y: 0.5 }}
                                            end={{ x: 1, y: 0.5 }}
                                            colors={['#FD01FC', '#01007E',]}
                                            // style={{ height: 3, width: 15, alignSelf: 'center', marginBottom: 5 }}
                                            style={{ height: 60, width: 60, borderRadius: 30, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#FFFFFF' }}
                                        >
                                            <MaterialIcons name="home" size={30} color={'#ffffff'} />
                                            {/* <Icon name="home" size={30} type="material" 
                                   colors={[
                                       { color: "#01007E", offset: "1", opacity: "1" },
                                       { color: "#FD01FC", offset: "0", opacity: "1" },
                                   ]} 
                                   style={{alignSelf:'center'}}
                                   /> */}
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                                :
                                <TouchableOpacity
                                    onPress={() => this.setState({ hometabselected: true })}
                                    style={{ height: 60, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 30, borderColor: '#ffffff', borderWidth: 2, marginTop: -20, backgroundColor: '#000000' }}
                                >
                                    <MaterialIcons name="home" size={30} color={'#ffffff'} />
                                </TouchableOpacity>
                            }
                        </View>

                        <View>
                            {this.state.chattabselected ?
                                <View>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('Chat')}
                                        style={{ height: 42, width: 42, alignItems: 'center', justifyContent: 'center' }}
                                    >
                                        <LinearGradient
                                            start={{ x: 0, y: 0.5 }}
                                            end={{ x: 1, y: 0.5 }}
                                            colors={['#01007E', '#FD01FC',]}
                                            style={{ height: 3, width: 15, alignSelf: 'center', marginBottom: 5 }}
                                        >
                                        </LinearGradient>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon name="chatbubble-ellipses" size={30} type="ionicon"
                                                useAngle={true}
                                                angle={180}
                                                colors={[
                                                    { color: "#01007E", offset: "1", opacity: "1" },
                                                    { color: "#FD01FC", offset: "0", opacity: "1" },
                                                ]} />
                                            <View style={{ height: 16, width: 16, borderRadius: 8, backgroundColor: '#D8382B', borderColor: '#ffffff', borderWidth: 1, marginLeft: -10, marginTop: -3, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ fontFamily: 'Raleway', fontWeight: '600', fontSize: 10, color: '#ffffff' }}>
                                                    {this.state.unseenmessages}
                                                </Text>
                                            </View>
                                        </View>

                                        {/* <Ionicons name="chatbubble-ellipses" size={30} /> */}
                                        {/* <Image source={require('../../../assets/images/mdi_party-popper.png')} style={{ height: 30, width: 30 }} /> */}
                                    </TouchableOpacity>
                                </View>
                                :
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Chat')}
                                    style={{ height: 42, width: 42, alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <View style={{ flexDirection: 'row' }}>
                                        <Ionicons name="chatbubble-ellipses" size={30} />
                                        <View style={{ height: 16, width: 16, borderRadius: 8, backgroundColor: '#D8382B', borderColor: '#ffffff', borderWidth: 1, marginLeft: -10, marginTop: -3, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Raleway', fontWeight: '600', fontSize: 10, color: '#ffffff' }}>
                                                {this.state.unseenmessages}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            }
                        </View>

                        <View>
                            {this.state.profiletabselected ?
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('Profile')}
                                        style={{ height: 42, width: 42, alignItems: 'center', justifyContent: 'center' }}
                                    >
                                        <LinearGradient
                                            start={{ x: 0, y: 0.5 }}
                                            end={{ x: 1, y: 0.5 }}
                                            colors={['#01007E', '#FD01FC',]}
                                            style={{ height: 3, width: 15, alignSelf: 'center', marginBottom: 5 }}
                                        >
                                        </LinearGradient>
                                        <Icon name="person" size={30} type="material"
                                            useAngle={true}
                                            angle={180}
                                            colors={[
                                                { color: "#01007E", offset: "1", opacity: "1" },
                                                { color: "#FD01FC", offset: "0", opacity: "1" },
                                            ]} />
                                        {/* <MaterialIcons name="person" size={30} /> */}
                                        {/* <Image source={require('../../../assets/images/mdi_party-popper.png')} style={{ height: 30, width: 30 }} /> */}
                                    </TouchableOpacity>
                                </View>
                                :
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Profile')}
                                    style={{ height: 42, width: 42, alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <MaterialIcons name="person" size={30} />
                                    {/* <Image source={require('../../../assets/images/mdi_party-popper1.png')} style={{ height: 30, width: 30 }} />   */}
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                </View>
            </View>
        )
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.9 }}>
                    <View style={{
                        height: 124,
                        width: Dimensions.get('window').width,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        backgroundColor: '#ffffff',
                        justifyContent: 'center',

                    }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginRight: 15, alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Text style={styles.followingtext}>
                                    Following
                                </Text>
                            </TouchableOpacity>
                            {this.state.squareselected ?
                                <TouchableOpacity>
                                    <Text style={styles.squaretext}>
                                        Square
                                    </Text>
                                    <LinearGradient
                                        start={{ x: 0, y: 0.5 }}
                                        end={{ x: 1, y: 0.5 }}
                                        colors={['#01007E', '#FD01FC',]}
                                        style={{ height: 3, width: 15, alignSelf: 'center' }}
                                    >
                                    </LinearGradient>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity>
                                    <Text style={styles.followingtext}>
                                        Square
                                    </Text>
                                </TouchableOpacity>
                            }

                            {/* <TouchableOpacity>
                            <Text style={styles.followingtext}>
                                Explore
                            </Text>
                        </TouchableOpacity> */}
                            <TouchableOpacity>
                                <Image
                                    source={require('../../../assets/images/bell.png')}
                                    style={{ height: 25, width: 25 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView>
                        <View style={{ marginLeft: 15, marginRight: 15, marginTop: 20 }}>
                            {this.renderuser()}
                        </View>
                        {/*<View style={{ alignItems: 'center', justifyContent: 'center' }}>
                             <TouchableOpacity
                            > 
                            <Image
                                source={require('../../../assets/images/cam.png')}
                                style={{ height: 200, width: 200 }}
                            />
                             </TouchableOpacity> 
                        </View>*/}
                    </ScrollView>

                </View>
                <View style={{ flex: 0.1, position: 'absolute', bottom: 0, left: 0, }}>
                    {this.renderfooter()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    followingtext: {
        fontFamily: 'Raleway',
        fontSize: 22,
        fontWeight: '600',
        color: '#4D4D4D',
    },
    squaretext: {
        fontFamily: 'Raleway',
        fontSize: 30,
        fontWeight: '800',
        color: '#202020',
    },
    userview: {
        height: Dimensions.get('window').height / 2 + 150,
        width: Dimensions.get('window').width - 30,
        borderRadius: 30,
        backgroundColor: '#ffffff',
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        elevation: 10,
    },
    profileview: {
        height: 82,
        width: 82,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileimage: {
        height: 36,
        width: 36,
        borderRadius: 18,
    },
    username: {
        fontFamily: 'Raleway',
        fontSize: 16,
        fontWeight: '700',
        color: '#202020',
    },
    userimageview: {
        height: Dimensions.get('window').height / 2 - 20,
        width: Dimensions.get('window').width - 30,
        borderRadius: 30,
        backgroundColor: '#C4C4C4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    userimage: {
        height: Dimensions.get('window').height / 2 - 20,
        width: Dimensions.get('window').width - 60,
        borderRadius: 30,
    }

})

