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

export default class Contacts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            friendsselected: true,
            followingselected: false,
            followerselected: false,
            channelselected: false,
            showmodal: false,
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
            this.props.navigation.navigate('Channelsearch')
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


    renderfriends = () => {
        return (
            <View>
                <View style={styles.frinedview}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 0, marginLeft: 15 }}>
                        <View style={{ flexDirection: 'row', }}>
                            <View style={{ marginRight: 10 }}>
                                <Image source={require('../../../assets/images/lolgrp.png')} style={styles.profile} />
                            </View>
                            <View>
                                <Text style={styles.username}>
                                    Username
                                </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Ionicons name="male" size={15} color={'#4D4D4D'} />
                                    <Text style={styles.intext}>
                                        24 ,{' '}
                                    </Text>
                                    <MaterialIcons name="location-on" size={15} color={'#4D4D4D'} />
                                    <Text style={styles.intext}>
                                        In
                                    </Text>
                                </View>
                            </View>
                            <View>
                            </View>
                        </View>

                        <LinearGradient
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            colors={['#01007E', '#FD01FC',]}
                            style={{ height: 38, width: 120, alignItems: 'center', justifyContent: 'center', borderRadius: 16 }}
                        >
                            <TouchableOpacity>
                                <View style={{ flexDirection: 'row' }}>
                                    <Feather name="user-check" size={15} color={'#ffffff'} style={{ marginRight: 5 }} />
                                    <Text style={styles.friendstext}>
                                        Friends
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </LinearGradient>

                    </View>
                </View>
            </View>
        )
    }

    renderfollowing = () => {
        return (
            <View>
                <View style={styles.frinedview}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 0, marginLeft: 15, alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <View style={{ marginRight: 10 }}>
                                <Image source={require('../../../assets/images/lolgrp.png')} style={styles.modalimage} />
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={styles.username}>
                                    Username
                                </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Ionicons name="male" size={15} color={'#4D4D4D'} />
                                    <Text style={styles.intext}>
                                        24 ,{' '}
                                    </Text>
                                    <MaterialIcons name="location-on" size={15} color={'#4D4D4D'} />
                                    <Text style={styles.intext}>
                                        In
                                    </Text>
                                </View>
                            </View>

                        </View>

                        {/* <LinearGradient
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            colors={['#01007E', '#FD01FC',]}
                            style={{ height: 38, width: 120, alignItems: 'center', justifyContent: 'center', borderRadius: 16 }}
                        > */}
                        <View
                            style={{ height: 38, width: 120, alignItems: 'center', justifyContent: 'center', borderRadius: 16, borderWidth: 1, borderColor: '#202020' }}
                        >
                            <TouchableOpacity
                                onPress={() => this.setState({ showmodal: !this.state.showmodal })}
                            >
                                {/* <View style={{ flexDirection: 'row' }}> */}
                                {/* <Feather name="user-check" size={15} color={'#ffffff'} style={{ marginRight: 5 }} /> */}
                                <Text style={styles.textfollowing}>
                                    Following
                                </Text>
                                {/* </View> */}
                            </TouchableOpacity>
                        </View>
                        {/* </LinearGradient> */}

                    </View>
                </View>
                <View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.showmodal}
                    >
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 5,

                            }}
                        >
                            <View style={{ width: Dimensions.get('window').width - 50, height: Dimensions.get('window').height / 3, backgroundColor: 'rgba(32, 32, 32, 0.7)', alignItems: 'center', justifyContent: 'center', borderRadius: 40 }}>
                                <View>
                                    <Image source={require('../../../assets/images/lolgrp.png')} style={styles.profile} />
                                </View>
                                <View style={{ marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={styles.areyousure}>
                                        Are you sure you want to
                                    </Text>
                                    <Text style={styles.areyousure}>
                                        unfollow this user?
                                    </Text>
                                </View>
                                <View>
                                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                        <TouchableOpacity
                                            style={styles.cancelbutton}
                                        >
                                            <Text style={styles.areyousure}>
                                                Cancel
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.unfollowbutton}
                                        >
                                            <Text style={styles.areyousure}>
                                                Unfollow
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </Modal>
                </View>
            </View>
        )
    }

    renderfollowers = () => {
        return (
            <View>
                <View style={styles.frinedview}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 0, marginLeft: 15, alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <View style={{ marginRight: 10 }}>
                                <Image source={require('../../../assets/images/lolgrp.png')} style={styles.modalimage} />
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={styles.username}>
                                    Username
                                </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Ionicons name="male" size={15} color={'#4D4D4D'} />
                                    <Text style={styles.intext}>
                                        24 ,{' '}
                                    </Text>
                                    <MaterialIcons name="location-on" size={15} color={'#4D4D4D'} />
                                    <Text style={styles.intext}>
                                        In
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/* <LinearGradient
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            colors={['#01007E', '#FD01FC',]}
                            style={{ height: 38, width: 120, alignItems: 'center', justifyContent: 'center', borderRadius: 16 }}
                        > */}
                        <View
                            style={{ height: 38, width: 120, alignItems: 'center', justifyContent: 'center', borderRadius: 16, borderWidth: 1, borderColor: '#202020' }}
                        >
                            <TouchableOpacity
                                onPress={() => this.setState({ showmodal: !this.state.showmodal })}
                            >
                                {/* <View style={{ flexDirection: 'row' }}> */}
                                {/* <Feather name="user-check" size={15} color={'#ffffff'} style={{ marginRight: 5 }} /> */}
                                <Text style={styles.textfollowing}>
                                    Following
                                </Text>
                                {/* </View> */}
                            </TouchableOpacity>
                        </View>
                        {/* </LinearGradient> */}

                    </View>
                </View>
                {/* <View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.showModal}
                    >
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 5,

                            }}
                        >
                            <View style={{ width: Dimensions.get('window').width - 50, height: Dimensions.get('window').height / 3, backgroundColor: 'rgba(32, 32, 32, 0.7)', alignItems: 'center', justifyContent: 'center', borderRadius: 40 }}>
                                <View>
                                    <Image source={require('../../../assets/images/lolgrp.png')} style={styles.profile} />
                                </View>
                                <View style={{ marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={styles.areyousure}>
                                        Are you sure you want to
                                    </Text>
                                    <Text style={styles.areyousure}>
                                        unfollow this user?
                                    </Text>
                                </View>
                                <View>
                                    <View style={{flexDirection:'row',marginTop:15}}>
                                        <TouchableOpacity
                                        style={styles.cancelbutton}
                                        >
                                            <Text style={styles.areyousure}>
                                                Cancel
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                        style={styles.unfollowbutton}
                                        >
                                            <Text style={styles.areyousure}>
                                                Unfollow
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </Modal>
                </View> */}

                <View style={styles.frinedview}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 0, marginLeft: 15, alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <View style={{ marginRight: 10 }}>
                                <Image source={require('../../../assets/images/lolgrp.png')} style={styles.modalimage} />
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={styles.username}>
                                    Username
                                </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Ionicons name="male" size={15} color={'#4D4D4D'} />
                                    <Text style={styles.intext}>
                                        24 ,{' '}
                                    </Text>
                                    <MaterialIcons name="location-on" size={15} color={'#4D4D4D'} />
                                    <Text style={styles.intext}>
                                        In
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <LinearGradient
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            colors={['#01007E', '#FD01FC',]}
                            style={{ height: 38, width: 120, alignItems: 'center', justifyContent: 'center', borderRadius: 16 }}
                        >
                            {/* <View
                            style={{ height: 38, width: 120, alignItems: 'center', justifyContent: 'center', borderRadius: 16, borderWidth: 1, borderColor: '#202020' }}
                        > */}
                            <TouchableOpacity
                                onPress={() => this.setState({ showmodal: !this.state.showmodal })}
                            >
                                <View style={{ flexDirection: 'row' }}>
                                    <Feather name="user-plus" size={15} color={'#ffffff'} style={{ marginRight: 5 }} />
                                    <Text style={styles.friendstext}>
                                        Follow
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            {/* </View> */}
                        </LinearGradient>

                    </View>
                </View>
                {/* <View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.showModal}
                    >
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 5,

                            }}
                        >
                            <View style={{ width: Dimensions.get('window').width - 50, height: Dimensions.get('window').height / 3, backgroundColor: 'rgba(32, 32, 32, 0.7)', alignItems: 'center', justifyContent: 'center', borderRadius: 40 }}>
                                <View>
                                    <Image source={require('../../../assets/images/lolgrp.png')} style={styles.profile} />
                                </View>
                                <View style={{ marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={styles.areyousure}>
                                        Are you sure you want to
                                    </Text>
                                    <Text style={styles.areyousure}>
                                        unfollow this user?
                                    </Text>
                                </View>
                                <View>
                                    <View style={{flexDirection:'row',marginTop:15}}>
                                        <TouchableOpacity
                                        style={styles.cancelbutton}
                                        >
                                            <Text style={styles.areyousure}>
                                                Cancel
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                        style={styles.unfollowbutton}
                                        >
                                            <Text style={styles.areyousure}>
                                                Unfollow
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </Modal>
                </View> */}
            </View>
        )
    }

    renderchannel = () => {
        return (
            <View>
                <View style={{ marginLeft: 10, marginTop: 15, marginBottom: 0 }}>
                    <Text style={styles.games}>
                        Channel I Managed (2 Channels)
                    </Text>
                </View>

                <View style={{ margin: 10 }}>
                    {this.renderchannelmanaged()}
                </View>

                <View style={{ marginLeft: 10, marginTop: 15, marginBottom: 0 }}>
                    <Text style={styles.games}>
                        Channel I Joined (24 Channels)
                    </Text>
                </View>

                <View style={{ margin: 10 }}>
                    {this.renderchanneljoined()}
                </View>
            </View>
        )
    }

    renderchannelmanaged = () => {
        return (
            <View style={styles.channelmanagedview}>
                <View style={{ flexDirection: 'row', }}>
                    <View style={{ marginRight: 10, marginLeft: 5, marginTop: 5, marginBottom: 5 }}>
                        <Image source={require('../../../assets/images/lolgrp.png')} style={styles.profile} />
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.username}>
                            Your Channel Name
                        </Text>
                        <Text style={styles.intext}>
                            ID: xyz1234
                        </Text>
                    </View>
                    <View>
                    </View>
                </View>

            </View>
        )
    }

    renderchanneljoined = () => {
        return (
            <View style={styles.channelmanagedview}>
                <View style={{ flexDirection: 'row', }}>
                    <View style={{ marginRight: 10, marginLeft: 5, marginTop: 5, marginBottom: 5 }}>
                        <Image source={require('../../../assets/images/lolgrp.png')} style={styles.profile} />
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.username}>
                            Your Channel Name
                        </Text>
                        <Text style={styles.intext}>
                            ID: xyz1234
                        </Text>
                    </View>
                    <View>
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
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.9 }}>
                    <View style={{
                        height: this.state.followingselected ? 280 : this.state.channelselected ? 230 : 180,
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
                                    <Text style={styles.mobilecontactstext}>
                                        Mobile Contacts
                                    </Text>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={{ alignItems: 'center', justifyContent: 'center', marginRight: 20 }}
                                // onPress={() => this.setState({ friendsselected: !this.state.friendsselected, followingselected: false,followerselected:false,channelselected:false })}
                                >
                                    <MaterialIcons name="person-add-alt-1" size={25} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ height: 40, width: Dimensions.get('window').width, alignItems: 'center', justifyContent: 'center', marginTop: 20, marginLeft: 5 }}>
                            <ScrollView horizontal>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <TouchableOpacity
                                        style={{ marginRight: 20 }}
                                        onPress={() => this.setState({ friendsselected: true, followingselected: false, followerselected: false, channelselected: false })}
                                    >
                                        {this.state.friendsselected ?
                                            <View>
                                                <LinearGradient
                                                    start={{ x: 0, y: 0.5 }}
                                                    end={{ x: 1, y: 0.5 }}
                                                    colors={['#1E62E4', '#002B6B',]}
                                                    style={{ height: 34, width: 115, justifyContent: 'center', borderRadius: 16.5, alignItems: 'center' }}
                                                >
                                                    <View style={{ flexDirection: 'row', }}>
                                                        <LottieView
                                                            source={require('../../../assets/json/29774-dance-party.json')}
                                                            autoPlay={true}
                                                            loop={true}
                                                            speed={1}
                                                            ref={(animation) => {
                                                                this.anim = animation;
                                                            }}
                                                            style={{ height: 25, width: 25, marginRight: 15 }}
                                                        />
                                                        <Text style={styles.friendstext}>
                                                            Friends
                                                        </Text>
                                                    </View>
                                                </LinearGradient>
                                            </View>
                                            :
                                            <TouchableOpacity
                                                style={{ marginLeft: 0, marginTop: 8 }}
                                                onPress={() => this.setState({ friendsselected: true, followingselected: false, followerselected: false, channelselected: false })}
                                            >
                                                <Text style={styles.followingtext}>
                                                    Friends
                                                </Text>
                                            </TouchableOpacity>
                                        }

                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={{ alignItems: 'center', justifyContent: 'center', marginRight: 20 }}
                                        onPress={() => this.setState({ friendsselected: false, followingselected: true, followerselected: false, channelselected: false })}
                                    >
                                        {this.state.followingselected ?
                                            <View>
                                                <LinearGradient
                                                    start={{ x: 0, y: 0.5 }}
                                                    end={{ x: 1, y: 0.5 }}
                                                    colors={['#FF3407', '#EF693F',]}
                                                    style={{ height: 34, width: 115, alignItems: 'center', justifyContent: 'center', borderRadius: 16.5 }}
                                                >

                                                    <View style={{ flexDirection: 'row' }}>
                                                        <View style={{ backgroundColor: '#ffffff', height: 24, width: 24, borderRadius: 12 }}>
                                                            <LottieView
                                                                source={require('../../../assets/json/20032-follow-icon.json')}
                                                                autoPlay={true}
                                                                loop={true}
                                                                speed={1}
                                                                ref={(animation) => {
                                                                    this.anim = animation;
                                                                }}
                                                                style={{ height: 25, width: 25, marginRight: 15 }}
                                                            />
                                                        </View>
                                                        <Text style={styles.friendstext}>
                                                            Following
                                                        </Text>
                                                    </View>
                                                </LinearGradient>
                                            </View>
                                            :
                                            <TouchableOpacity
                                                style={{ marginLeft: 0, marginTop: 0 }}
                                                onPress={() => this.setState({ friendsselected: false, followingselected: true, followerselected: false, channelselected: false })}
                                            >
                                                <Text style={styles.followingtext}>
                                                    Following
                                                </Text>
                                            </TouchableOpacity>
                                        }

                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={{ alignItems: 'center', justifyContent: 'center', marginRight: 20 }}
                                        onPress={() => this.setState({ friendsselected: false, followingselected: false, followerselected: true, channelselected: false })}
                                    >
                                        {this.state.followerselected ?
                                            <View>
                                                <LinearGradient
                                                    start={{ x: 0, y: 0.5 }}
                                                    end={{ x: 1, y: 0.5 }}
                                                    colors={['#F79423', '#FBBC05',]}
                                                    style={{ height: 34, width: 115, alignItems: 'center', justifyContent: 'center', borderRadius: 16.5 }}
                                                >
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <View style={{ backgroundColor: '#ffffff', height: 24, width: 24, borderRadius: 12, marginRight: 5 }}>
                                                            <LottieView
                                                                source={require('../../../assets/json/42513-man-chatting-on-his-mobile-phone.json')}
                                                                autoPlay={true}
                                                                loop={true}
                                                                speed={1}
                                                                ref={(animation) => {
                                                                    this.anim = animation;
                                                                }}
                                                                style={{ height: 25, width: 25, marginRight: 15 }}
                                                            />
                                                        </View>
                                                        <Text style={styles.friendstext}>
                                                            Follower
                                                        </Text>
                                                    </View>
                                                </LinearGradient>
                                            </View>
                                            :
                                            <TouchableOpacity
                                                style={{ marginLeft: 0, marginTop: 0 }}
                                                onPress={() => this.setState({ friendsselected: false, followingselected: false, followerselected: true, channelselected: false })}
                                            >
                                                <Text style={styles.followingtext}>
                                                    Follower
                                                </Text>
                                            </TouchableOpacity>
                                        }

                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={{ alignItems: 'center', justifyContent: 'center', marginRight: 20 }}
                                        onPress={() => this.setState({ friendsselected: false, followingselected: false, followerselected: false, channelselected: true })}
                                    >
                                        {this.state.channelselected ?
                                            <View>
                                                <LinearGradient
                                                    start={{ x: 0, y: 0.5 }}
                                                    end={{ x: 1, y: 0.5 }}
                                                    colors={['#009A2B', '#7CC97A',]}
                                                    style={{ height: 34, width: 114, alignItems: 'center', justifyContent: 'center', borderRadius: 16.5 }}
                                                >
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <View style={{ backgroundColor: '#ffffff', height: 24, width: 24, borderRadius: 12, marginRight: 5 }}>
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
                                                        </View>
                                                        <Text style={styles.friendstext}>
                                                            Channel
                                                        </Text>
                                                    </View>
                                                </LinearGradient>
                                            </View>
                                            :
                                            <TouchableOpacity
                                                style={{ marginLeft: 0, marginTop: 0 }}
                                                onPress={() => this.setState({ friendsselected: false, followingselected: false, followerselected: false, channelselected: true })}
                                            >
                                                <Text style={styles.followingtext}>
                                                    Channel
                                                </Text>
                                            </TouchableOpacity>
                                        }

                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>

                        {this.state.friendsselected ?
                            <View style={{ margin: 15 }}>
                                <Text style={styles.youhavetext}>
                                    You have 62 friends
                                </Text>
                            </View>
                            :
                            this.state.followingselected ?
                                <View>
                                    <View style={{ marginLeft: 15, marginRight: 15, marginBottom: 15, marginTop: 15 }}>
                                        <Text style={styles.username}>
                                            Stories
                                        </Text>
                                    </View>
                                    <ScrollView horizontal>
                                        <View style={{ flexDirection: 'row' }}>
                                            <LinearGradient
                                                start={{ x: 0, y: 0.5 }}
                                                end={{ x: 1, y: 0.5 }}
                                                colors={['#01007E', '#FD01FC',]}
                                                style={{ height: 50, width: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 25, marginRight: 15, marginLeft: 15 }}
                                            >
                                            </LinearGradient>
                                            <LinearGradient
                                                start={{ x: 0, y: 0.5 }}
                                                end={{ x: 1, y: 0.5 }}
                                                colors={['#01007E', '#FD01FC',]}
                                                style={{ height: 50, width: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 25, marginRight: 15, marginLeft: 0 }}
                                            >
                                            </LinearGradient>
                                            <LinearGradient
                                                start={{ x: 0, y: 0.5 }}
                                                end={{ x: 1, y: 0.5 }}
                                                colors={['#01007E', '#FD01FC',]}
                                                style={{ height: 50, width: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 25, marginRight: 15, marginLeft: 0 }}
                                            >
                                            </LinearGradient>
                                            <LinearGradient
                                                start={{ x: 0, y: 0.5 }}
                                                end={{ x: 1, y: 0.5 }}
                                                colors={['#01007E', '#FD01FC',]}
                                                style={{ height: 50, width: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 25, marginRight: 15, marginLeft: 0 }}
                                            >
                                            </LinearGradient>
                                            <LinearGradient
                                                start={{ x: 0, y: 0.5 }}
                                                end={{ x: 1, y: 0.5 }}
                                                colors={['#01007E', '#FD01FC',]}
                                                style={{ height: 50, width: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 25, marginRight: 15, marginLeft: 0 }}
                                            >
                                            </LinearGradient>
                                            <LinearGradient
                                                start={{ x: 0, y: 0.5 }}
                                                end={{ x: 1, y: 0.5 }}
                                                colors={['#01007E', '#FD01FC',]}
                                                style={{ height: 50, width: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 25, marginRight: 15, marginLeft: 0 }}
                                            >
                                            </LinearGradient>
                                            <LinearGradient
                                                start={{ x: 0, y: 0.5 }}
                                                end={{ x: 1, y: 0.5 }}
                                                colors={['#01007E', '#FD01FC',]}
                                                style={{ height: 50, width: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 25, marginRight: 15, marginLeft: 0 }}
                                            >
                                            </LinearGradient>
                                            <LinearGradient
                                                start={{ x: 0, y: 0.5 }}
                                                end={{ x: 1, y: 0.5 }}
                                                colors={['#01007E', '#FD01FC',]}
                                                style={{ height: 50, width: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 25, marginRight: 15, marginLeft: 0 }}
                                            >
                                            </LinearGradient>

                                        </View>
                                    </ScrollView>

                                    <View style={{ margin: 15, marginTop: 20 }}>
                                        <Text style={styles.youhavetext}>
                                            You have followed 26 users
                                        </Text>
                                    </View>
                                </View>
                                : this.state.followerselected ?
                                    <View style={{ margin: 15 }}>
                                        <Text style={styles.youhavetext}>
                                            10.5K Followers
                                        </Text>
                                    </View>
                                    : this.state.channelselected ?
                                        <View style={{ margin: 15 }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <TouchableOpacity
                                                    style={styles.createchannel}
                                                >
                                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                        <View style={styles.grommentstyle}>
                                                        <Feather name="tv" size={20} color={'#ffffff'}  />
                                                        </View>
                                                        <Text style={styles.areyousure}>
                                                            Create Channel
                                                        </Text>
                                                    </View>

                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    style={styles.findchannel}
                                                    onPress={() => this.props.navigation.navigate('Channelsearch')}
                                                >
                                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                        <View style={styles.sharelocation}>
                                                        <Image source={require('../../../assets/images/share_loc.png')} style={{height:25,width:25,}} />
                                                        </View>
                                                        <Text style={styles.areyousure}>
                                                            Find Channel
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        : null
                        }
                    </View>
                    {this.state.friendsselected ?
                        <View>
                            {this.renderfriends()}
                        </View>
                        : null}
                    {this.state.followingselected ?
                        <View>
                            {this.renderfollowing()}
                        </View>
                        : null
                    }
                    {this.state.followerselected ?
                        <View>
                            {this.renderfollowers()}
                        </View>
                        : null
                    }
                    {this.state.channelselected ?
                        <View>
                            {this.renderchannel()}
                        </View>
                        : null
                    }
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
    mobilecontactstext: {
        fontFamily: 'Raleway',
        fontWeight: '800',
        fontSize: 22,
        color: '#202020'
    },
    friendstext: {
        fontFamily: 'Raleway',
        fontWeight: '700',
        fontSize: 16,
        color: '#ffffff'
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
        width: Dimensions.get('window').width - 30,
        borderBottomColor: '#D9D9D9',
        borderBottomWidth: 1,
        // alignItems:'center',
        justifyContent: 'center'
        // borderRadius: 24,
        // marginLeft: 5,
        // marginRight: 5,
        // marginTop: 5,
    },
    username: {
        fontFamily: 'Raleway',
        fontWeight: '700',
        fontSize: 16,
        color: '#202020',
        //textAlign: 'center',
        // marginTop: 10
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
        alignItems:'center',
        justifyContent:'center'
    },
    sharelocation: {
        width: 40,
        height: 40,
        borderRadius: 16,
        backgroundColor: '#E96FE8',
        marginRight: 5,
        alignItems:'center',
        justifyContent:'center'
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

