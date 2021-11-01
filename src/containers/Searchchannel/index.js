import React, { Component } from 'react';
import { View, BackHandler, Image, Text, Platform, Dimensions, StyleSheet, TouchableOpacity, ScrollView, Modal, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LottieView from 'lottie-react-native';
import { Icon } from 'react-native-gradient-icon';

// export function Live({navigation}) {

// useEffect(() =>{
//     // setTimeout(() => {
//     //     navigation.navigate('Login')
//     // }, 2000);

// },[]);

// const [liveselected,setLiveselected] = useState(true);
// const [partyselected,setPartyselected] = useState(false);

export default class Searchchannel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            livetabselected: false,
            exploretabselected: false,
            hometabselected: false,
            chattabselected: true,
            profiletabselected: false,
            unseenmessages:0,
        }
    }

    componentDidMount() {
        //  this.setState({liveselected:!this.state.liveselected})
        setTimeout(() => {
            this.props.navigation.navigate('Searchchatroom')
        }, 2000);
    }

    getnotifications =() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(BASE_URL+"notification/4", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if(result.status ==200){
                    this.setState({unseenmessages:result.data.unseen})
                }
            })
            .catch(error => console.log('error', error));
    }



    renderchannel = () => {
        return (
            <View>
                <View style={styles.frinedview}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 10, marginLeft: 15 }}>
                        <View style={{ flexDirection: 'row', }}>
                            <View style={{ marginRight: 10 }}>
                                <Image source={require('../../../assets/images/lolgrp.png')} style={styles.profile} />
                            </View>
                            <View>
                                <Text style={styles.topsearch}>
                                    Channel Name
                                </Text>
                                <Text style={styles.idtext}>
                                    ID: xyz123
                                </Text>
                            </View>
                            <View>
                            </View>
                        </View>
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
                                     onPress={() =>this.props.navigation.navigate('Live')}
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
                                onPress={() =>this.props.navigation.navigate('Live')}
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
                                     onPress={() =>this.props.navigation.navigate('Explore')}
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
                                onPress={() =>this.props.navigation.navigate('Explore')}
                                    style={{ height: 42, width: 42, alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <Image source={require('../../../assets/images/bx_bxs-planet.png')} style={{ height: 30, width: 30 }} />
                                </TouchableOpacity>
                            }
                        </View>

                        <View>
                            {this.state.hometabselected?
                            <View>
                                <TouchableOpacity
                                   // style={{ height: 42, width: 42,borderRadius:21, alignItems: 'center', justifyContent: 'center',borderWidth:2,borderColor:'#FFF8F8' }}
                                style={{alignItems:'center',justifyContent:'center',marginTop:-20}}
                                >
                                    <LinearGradient
                                        start={{ x: 0, y: 0.5 }}
                                        end={{ x: 1, y: 0.5 }}
                                        colors={['#FD01FC','#01007E', ]}
                                       // style={{ height: 3, width: 15, alignSelf: 'center', marginBottom: 5 }}
                                       style={{ height: 60, width: 60,borderRadius:30, alignItems: 'center', justifyContent: 'center',borderWidth:2,borderColor:'#FFFFFF' }}
                                    >
                                        <MaterialIcons name="home" size={30} color={'#ffffff'}/>
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
                        onPress={() =>this.setState({hometabselected:true})}
                        style={{ height: 60, width: 60, alignItems: 'center', justifyContent: 'center',borderRadius:30,borderColor:'#ffffff',borderWidth:2,marginTop:-20,backgroundColor:'#000000' }}
                        >
                            <MaterialIcons name="home" size={30} color={'#ffffff'}/>
                        </TouchableOpacity>
                        } 
                        </View>

                        <View>
                            {this.state.chattabselected ?
                                <View>
                                    <TouchableOpacity
                                     onPress={() =>this.props.navigation.navigate('Chat')}
                                        style={{ height: 42, width: 42, alignItems: 'center', justifyContent: 'center' }}
                                    >
                                        <LinearGradient
                                            start={{ x: 0, y: 0.5 }}
                                            end={{ x: 1, y: 0.5 }}
                                            colors={['#01007E', '#FD01FC',]}
                                            style={{ height: 3, width: 15, alignSelf: 'center', marginBottom: 5 }}
                                        >
                                        </LinearGradient>
                                        <View style={{flexDirection:'row'}}>
                                        <Icon name="chatbubble-ellipses" size={30} type="ionicon" 
                                     useAngle={true}
                                     angle={180}
                                    colors={[
                                        { color: "#01007E", offset: "1", opacity: "1" },
                                        { color: "#FD01FC", offset: "0", opacity: "1" },
                                    ]} />
                                    <View style={{height:16,width:16,borderRadius:8,backgroundColor:'#D8382B',borderColor:'#ffffff',borderWidth:1,marginLeft:-10,marginTop:-3,alignItems:'center',justifyContent:'center'}}>
                                        <Text style={{fontFamily:'Raleway',fontWeight:'600',fontSize:10,color:'#ffffff'}}>
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
                                onPress={() =>this.props.navigation.navigate('Chat')}
                                    style={{ height: 42, width: 42, alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <View style={{flexDirection:'row'}}>
                                    <Ionicons name="chatbubble-ellipses" size={30} />
                                    <View style={{height:16,width:16,borderRadius:8,backgroundColor:'#D8382B',borderColor:'#ffffff',borderWidth:1,marginLeft:-10,marginTop:-3,alignItems:'center',justifyContent:'center'}}>
                                        <Text style={{fontFamily:'Raleway',fontWeight:'600',fontSize:10,color:'#ffffff'}}>
                                            {this.state.unseenmessages}
                                        </Text>
                                    </View>
                                    </View>
                                </TouchableOpacity>
                            }
                        </View>

                        <View>
                            {this.state.profiletabselected ?
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity
                                     onPress={() =>this.props.navigation.navigate('Profile')}
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
                                onPress={() =>this.props.navigation.navigate('Profile')}
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
            <View style={{flex:1}}>
                <View style={{flex:0.9}}>
                <View style={{
                    height: 150,
                    width: Dimensions.get('window').width,
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    backgroundColor: '#ffffff'
                }}>
                    <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: 10, marginRight: 10, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={{ alignItems: 'center', justifyContent: 'center', marginRight: 20, }}
                            // onPress={() => this.setState({ friendsselected: !this.state.friendsselected, followingselected: false,followerselected:false,channelselected:false })}
                            >
                                <Ionicons name="arrow-back" size={25} />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.searchtext}>
                                    Channel
                                </Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={{ alignItems: 'center', justifyContent: 'center', marginRight: 20 }}
                            // onPress={() => this.setState({ friendsselected: !this.state.friendsselected, followingselected: false,followerselected:false,channelselected:false })}
                            >
                                       <Ionicons name="close-outline" size={25} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    
                    <ScrollView horizontal>
                    <View style={{ height: 40, width: Dimensions.get('window').width, marginTop: 20, marginLeft: 5, }}>
                            <View style={{ flexDirection: 'row', justifyContent:'space-evenly',alignItems:'center' }}>

                                {/* {this.state.channelselected ? */}
                                <View>
                                    <TouchableOpacity
                                        style={{ alignItems: 'center', justifyContent: 'center', }}
                                        onPress={() => this.setState({ friendsselected: false, followingselected: false, followerselected: false, channelselected: true })}
                                    >
                                        <View>
                                            {/* <LinearGradient
                                                start={{ x: 0, y: 0.5 }}
                                                end={{ x: 1, y: 0.5 }}
                                                colors={['#009A2B', '#7CC97A',]}
                                                style={{ height: 34, width: 114, alignItems: 'center', justifyContent: 'center', borderRadius: 16.5 }}
                                            > */}
                                                <View style={{ flexDirection: 'row' }}>
                                                    {/* <View style={{ backgroundColor: '#ffffff', height: 24, width: 24, borderRadius: 12, marginRight: 5 }}>
                                                        <LottieView
                                                            source={require('../../../assets/json/69472-mrsnowden-3-animation.json')}
                                                            autoPlay={true}
                                                            loop={true}
                                                            speed={1}
                                                            ref={(animation) => {
                                                                this.anim = animation;
                                                            }}
                                                            style={{ height: 25, width: 25, marginRight: 15 }}
                                                        />
                                                    </View> */}
                                                    <Text style={styles.userstext}>
                                                        Users
                                                    </Text>
                                                </View>
                                            {/* </LinearGradient> */}
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                {/* :
                                    <TouchableOpacity
                                        style={{ marginLeft: 0, marginTop: 0 }}
                                        onPress={() => this.setState({ friendsselected: false, followingselected: false, followerselected: false, channelselected: true })}
                                    >
                                        <Text style={styles.followingtext}>
                                            Channel
                                        </Text>
                                    </TouchableOpacity>
                                } */}


                                <View>
                                    <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('Searchchatroom')}
                                    >
                                    <LinearGradient
                                                start={{ x: 0, y: 0.5 }}
                                                end={{ x: 1, y: 0.5 }}
                                                colors={['#0826C0', '#FD01FC',]}
                                                style={{ height: 34, width: 112, alignItems: 'center', justifyContent: 'center', borderRadius: 16.5 }}
                                            >
                                        <Text style={styles.chattext}>
                                            Chat Room
                                        </Text>
                                    </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity >
                                        <Text style={styles.userstext}>
                                            Channel
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                    </View>
                    </ScrollView>
                </View>
                
               

               
                    <View style={{marginLeft:10,marginRight:10,marginTop:20}}>
                        {this.renderchannel()}
                    </View>
                </View>

            <View style={{ flex: 0.1, position: 'absolute', bottom: 0, left: 0, }}>
                    {this.renderfooter()}
                </View>  
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mobiletopview: {
        height: 180,
        width: Dimensions.get('window').width,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: '#ffffff'
    },
    searchtext: {
        fontFamily: 'Raleway',
        fontWeight: '600',
        fontSize: 16,
        color: '#202020'
    },
    userstext: {
        fontFamily: 'Raleway',
        fontWeight: '700',
        fontSize: 16,
        color: '#888888'
    },
    
    topsearch: {
        fontFamily: 'Raleway',
        fontWeight: '600',
        fontSize: 16,
        color: '#202020',
        //textAlign: 'center',
        // marginTop: 10
    },
    idtext: {
        fontFamily: 'Raleway',
        fontWeight: '600',
        fontSize: 14,
        color: '#888888',
        //textAlign: 'center',
        // marginTop: 10
    },
    topsearchtagsview: {
        paddingLeft: 10,
        paddingRight: 10,
        //paddingTop:2,
        //paddingBottom:2,
        height: 34,
        borderRadius: 16.5,
        backgroundColor: '#C4C4C4',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    suggestedpartiesview: {
        height: 108,
        width: Dimensions.get('window').width / 2 - 50,
        borderRadius: 18,
        backgroundColor: '#CEBFEE',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:15
    },
    suggestedprofile:{
        width:30,
        height:30,
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
        borderBottomLeftRadius:16,
        borderWidth:1,
        borderColor:'#ffffff',
        zIndex:1,
    },
    suggestedchat:{
        width:65,
        height:30,
        //borderTopLeftRadius:16,
        borderTopRightRadius:16,
        //borderBottomLeftRadius:16,
        backgroundColor:'#6B38DE',
        //alignItems:'center',
        justifyContent:'center',
        marginLeft:-15,
    },
    chattext:{
        fontFamily: 'Raleway',
        fontWeight: '700',
        fontSize: 16,
        color: '#ffffff',
        //marginLeft:22,
        //textAlign:'center'
    },
    friendstext: {
        fontFamily: 'Raleway',
        fontWeight: '700',
        fontSize: 16,
        color: '#ffffff'
    },
    makefreindsview:{
        height:22,
        width:90,
        borderRadius:20,
        backgroundColor:'#FFC6D2',
        alignItems:'center',
        justifyContent:'center',
    },
    makefriendstext:{
        fontFamily: 'Raleway',
        fontWeight: '500',
        fontSize: 12,
        color: '#EC899E',
    },
    usersview:{
        height:22,
        width:45,
        borderRadius:20,
        backgroundColor:'#E8D7FF',
        alignItems:'center',
        justifyContent:'center',
        marginRight:5
    },
    usernumber:{
        fontFamily: 'Raleway',
        fontWeight: '400',
        fontSize: 12,
        color: '#B57AD0',
    },
    mobilecontactstext: {
        fontFamily: 'Raleway',
        fontWeight: '800',
        fontSize: 22,
        color: '#202020'
    },
    
    followingtext: {
        fontFamily: 'Raleway',
        fontWeight: '700',
        fontSize: 16,
        color: '#4D4D4D',
        marginLeft: 0,
    },
    youhavetext: {
        fontFamily: 'Raleway',
        fontWeight: '600',
        fontSize: 14,
        color: '#4D4D4D'
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 16,
        //backgroundColor: '#ffffff'
    },
    frinedview: {
        height: 80,
        width: Dimensions.get('window').width - 20,
        //borderBottomColor: '#D9D9D9',
        //borderBottomWidth: 1,
        // alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
         borderRadius: 20,
        // marginLeft: 5,
        // marginRight: 5,
        // marginTop: 5,
    },

    intext: {
        fontFamily: 'Raleway',
        fontWeight: '600',
        fontSize: 12,
        color: '#4D4D4D'
    },
    games: {
        fontFamily: 'Raleway',
        fontWeight: '700',
        fontSize: 16,
        color: '#4D4D4D'
    },
    partyroomtext: {
        fontFamily: 'Raleway',
        fontWeight: '800',
        fontSize: 16,
        color: '#ffffff'
    },
    trendingtext: {
        fontFamily: 'Raleway',
        fontWeight: '500',
        fontSize: 12,
        color: '#ffffff'
    },
    numtext: {
        fontFamily: 'Raleway',
        fontWeight: '600',
        fontSize: 12,
        color: '#ffffff'
    },
    pickme: {
        fontFamily: 'Raleway',
        fontWeight: '700',
        fontSize: 12,
        color: '#ffffff'
    },
    numtextpartyroom: {
        fontFamily: 'Raleway',
        fontWeight: '500',
        fontSize: 16,
        color: '#ffffff'
    },
    partytext: {
        fontFamily: 'Raleway',
        fontWeight: '800',
        fontSize: 18,
        color: '#ffffff'
    },
    seats: {
        fontFamily: 'Raleway',
        fontWeight: '700',
        fontSize: 16,
        // color: '#ffffff'
    },
    textfollowing: {
        fontFamily: 'Raleway',
        fontWeight: '600',
        fontSize: 16,
        color: '#202020',
    },
    modalimage: {

        width: 80,
        height: 80,
        borderRadius: 30,
        //backgroundColor: '#ffffff'
    },
    areyousure: {
        fontFamily: 'Raleway',
        fontWeight: '600',
        fontSize: 16,
        color: '#ffffff',
        // textAlign:'center',
    },
    cancelbutton: {
        height: 35,
        width: 105,
        borderRadius: 16,
        backgroundColor: 'rgba(196, 196, 196, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ffffff',
        marginRight: 10,
    },
    unfollowbutton: {
        height: 35,
        width: 105,
        borderRadius: 16,
        // backgroundColor:'rgba(196, 196, 196, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ffffff'
    },
    createchannel: {
        width: Dimensions.get('window').width / 2 - 20,
        height: 50,
        backgroundColor: '#01007E',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    findchannel: {
        width: Dimensions.get('window').width / 2 - 20,
        height: 50,
        backgroundColor: '#BA25B9',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    grommentstyle: {
        width: 40,
        height: 40,
        borderRadius: 16,
        backgroundColor: '#4F4ED7',
        marginRight: 5,
    },
    sharelocation: {
        width: 40,
        height: 40,
        borderRadius: 16,
        backgroundColor: '#E96FE8',
        marginRight: 5,
    },
    channelmanagedview: {
        height: 80,
        width: Dimensions.get('window').width - 20,
        //borderBottomColor: '#D9D9D9',
        //borderBottomWidth: 1,
        //alignItems:'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#ffffff'
        // marginLeft: 5,
        // marginRight: 5,
        // marginTop: 5,
    },


})

