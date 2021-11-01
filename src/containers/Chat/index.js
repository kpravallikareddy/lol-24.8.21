import React, { useEffect } from 'react';
import { View, BackHandler, Image, Text, Platform, Dimensions, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-gradient-icon';


export default class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showfull: true,
            livetabselected: false,
            exploretabselected: false,
            hometabselected: false,
            chattabselected: true,
            profiletabselected: false,
            unseenmessages:0,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Contacts')
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


    rendermessages = () => {
        return (
            <View>
                <View>
                    <View style={{ height: 70, width: Dimensions.get('window').width, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', marginLeft: 15, alignItems: 'center', }}>
                            <View style={{ marginRight: 10 }}>
                                <Image source={require('../../../assets/images/lolgrp.png')} style={styles.profileimage} />
                                <View style={{ marginTop: -10, marginLeft: 43 }}>
                                    <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: '#009A2B' }}>

                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: Dimensions.get('window').width - 95, marginRight: 15 }}>
                                    <Text style={styles.username}>
                                        Username
                                    </Text>
                                    <Text style={styles.time}>
                                        06:30 PM
                                    </Text>
                                </View>
                                <View>
                                    <Text>
                                        A message may be delivered by various..
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: Dimensions.get('window').width, height: 1, backgroundColor: '#DDDDDD', marginTop: 10 }}>
                        </View>
                    </View>
                    <View style={{ height: 70, width: Dimensions.get('window').width, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', marginLeft: 15, alignItems: 'center', }}>
                            <View style={{ marginRight: 15 }}>
                                <Image source={require('../../../assets/images/lolgrp.png')} style={styles.profileimage} />

                            </View>
                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: Dimensions.get('window').width - 95, marginRight: 15 }}>
                                    <Text style={styles.username}>
                                        Username
                                    </Text>
                                    <Text style={styles.time}>
                                        06:30 PM
                                    </Text>
                                </View>
                                <View>
                                    <Text>
                                        A message may be delivered by various..
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: Dimensions.get('window').width, height: 1, backgroundColor: '#DDDDDD', marginTop: 10 }}>

                        </View>
                    </View>

                    <View style={{ height: 70, width: Dimensions.get('window').width, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', marginLeft: 15, alignItems: 'center', }}>
                            <View style={{ marginRight: 15 }}>
                                <Image source={require('../../../assets/images/lolgrp.png')} style={styles.profileimage} />

                            </View>
                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: Dimensions.get('window').width - 95, marginRight: 15 }}>
                                    <Text style={styles.username}>
                                        Username
                                    </Text>
                                    <Text style={styles.time}>
                                        06:30 PM
                                    </Text>
                                </View>
                                <View>
                                    <Text>
                                        A message may be delivered by various..
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: Dimensions.get('window').width, height: 1, backgroundColor: '#DDDDDD', marginTop: 10 }}>

                        </View>
                    </View>


                    <View style={{ height: 70, width: Dimensions.get('window').width, alignItems: 'center', justifyContent: 'center' }}>

                        <View style={{ flexDirection: 'row', marginLeft: 15, alignItems: 'center', }}>
                            <View style={{ marginRight: 15 }}>
                                <Image source={require('../../../assets/images/lolgrp.png')} style={styles.profileimage} />

                            </View>
                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: Dimensions.get('window').width - 95, marginRight: 15 }}>
                                    <Text style={styles.username}>
                                        Username
                                    </Text>
                                    <Text style={styles.time}>
                                        06:30 PM
                                    </Text>
                                </View>
                                <View>
                                    <Text>
                                        A message may be delivered by various..
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: Dimensions.get('window').width, height: 1, backgroundColor: '#DDDDDD', marginTop: 10 }}>

                        </View>
                        <View style={{ marginTop: -15 }}>
                            <TouchableOpacity
                                onPress={() => this.setState({ showfull: !this.state.showfull })}
                            >
                                <Ionicons name="chevron-down" size={25} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>
        )
    }


    rendervisitedpeople = () => {
        return (
            <View>
                <View style={{ height: Dimensions.get('window').height / 3, width: Dimensions.get('window').width - 30, backgroundColor: '#F39EB0', borderRadius: 30 }}>
                    <View style={{ height: Dimensions.get('window').height / 6, width: Dimensions.get('window').width - 30 }}>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Image source={require('../../../assets/images/lolgrp.png')} style={styles.profile} />
                                </View>
                                <View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: Dimensions.get('window').width - 95, marginRight: 10 }}>
                                        <Text style={styles.username}>
                                            People who visited me
                                        </Text>
                                        <Text style={styles.time}>
                                            06:20 AM
                                        </Text>
                                    </View>
                                    <View>
                                        <Text>
                                            Look at who visited your profile
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
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
                {/* <Image source={require('../../../assets/images/splash.png')} style={{height:Dimensions.get('window').height,width:Dimensions.get('window').width,}}/> */}
                <View style={{flex:0.9}}>
                <ScrollView>
                    <View elevation={10} style={{ height: Dimensions.get('window').height / 2, width: Dimensions.get('window').width, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, backgroundColor: '#ffffff' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginRight: 15, alignItems: 'center', marginTop: 20 }}>
                            <View>
                                <Text style={styles.messagetext}>
                                    Messages
                                </Text>
                                <LinearGradient
                                    start={{ x: 0, y: 0.5 }}
                                    end={{ x: 1, y: 0.5 }}
                                    colors={['#01007E', '#FD01FC',]}
                                    style={{ height: 3, width: 15, alignSelf: 'center' }}
                                >
                                </LinearGradient>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity 
                                style={{ marginRight: 15 }}
                                onPress={() =>this.props.navigation.navigate('Contacts')}
                                >
                                    <SimpleLineIcons name="user-follow" size={25} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginRight: 15 }}>
                                    <Ionicons name="search" size={25} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                onPress={() =>alert('Coming soon ...')}
                                >
                                    <Feather name="plus-square" size={25} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            {this.state.showfull ?

                                this.rendermessages()
                                :
                                null
                            }
                        </View>
                    </View>

                    <View style={{ marginTop: 30, alignItems:'center',justifyContent:'center' }}>
                            {/* {this.rendervisitedpeople()} */}
                            <View style={{ height: 200, width: Dimensions.get('window').width - 30, backgroundColor: '#F39EB0', borderRadius: 30 }}>
                                <View style={{ height:100, width: Dimensions.get('window').width - 30,alignItems:'center',justifyContent:'center',borderBottomColor:'#F0F0F0',borderBottomWidth:1 }}>
                                    <TouchableOpacity>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View>
                                                <Image source={require('../../../assets/images/lolgrp.png')} style={styles.profile} />
                                            </View>
                                            <View style={{justifyContent:'center'}}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: Dimensions.get('window').width - 145, marginRight: 10, }}>
                                                    <Text style={styles.username}>
                                                        People who visited me
                                                    </Text>
                                                    <Text style={styles.time}>
                                                        06:20 AM
                                                    </Text>
                                                </View>
                                                <View>
                                                    <Text>
                                                        Look at who visited your profile
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>



                                <View style={{ height:100, width: Dimensions.get('window').width - 30,alignItems:'center',justifyContent:'center' }}>
                                    <TouchableOpacity>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View>
                                                <Image source={require('../../../assets/images/lolgrp.png')} style={styles.profile} />
                                            </View>
                                            <View style={{justifyContent:'center'}}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: Dimensions.get('window').width - 145, marginRight: 10, }}>
                                                    <Text style={styles.username}>
                                                        Interactive Notifications
                                                    </Text>
                                                    <Text style={styles.time}>
                                                        06:20 AM
                                                    </Text>
                                                </View>
                                                <View>
                                                    <Text>
                                                        Look at who visited your profile
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
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
    messagetext: {
        fontFamily: 'Raleway',
        fontWeight: '800',
        fontSize: 30,
        //textAlign:'center',
        color: '#202020'
    },
    profileimage: {
        width: 50,
        height: 50,
        borderRadius: 16,

    },
    username: {
        fontFamily: 'Raleway',
        fontWeight: '700',
        fontSize: 16,
        //textAlign:'center',
        color: '#202020'
    },
    time: {
        fontFamily: 'Raleway',
        fontWeight: '500',
        fontSize: 12,
        //textAlign:'center',
        color: '#4D4D4D'
    },
    messages: {
        fontFamily: 'Raleway',
        fontWeight: '500',
        fontSize: 14,
        //textAlign:'center',
        color: '#202020'
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 26,
        marginLeft: 10,
        marginRight: 10,
    },
})