import React, { Component } from 'react';
import { View, BackHandler, Image, Text, Platform, Dimensions, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import { Icon } from 'react-native-gradient-icon';


// export function Live({navigation}) {

// useEffect(() =>{
//     // setTimeout(() => {
//     //     navigation.navigate('Login')
//     // }, 2000);

// },[]);

// const [liveselected,setLiveselected] = useState(true);
// const [partyselected,setPartyselected] = useState(false);

export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            postsselected: true,
            draftsselected: false,
            livetabselected: false,
            exploretabselected: false,
            hometabselected: false,
            chattabselected: false,
            profiletabselected: true,
            unseenmessages:0,
        }
    }

    componentDidMount() {
        this.getprofile();
        setTimeout(() => {
            this.props.navigation.navigate('Chat')
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


    getprofile =() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://192.249.119.102:3000/profile/personal/4", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
            })
            .catch(error => console.log('error', error));
    }    

    renderpartyroom = () => {
        return (
            <View style={{width:Dimensions.get('window').width/2-30,marginLeft:10,marginRight:15,}}>
                <LinearGradient
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    colors={[ '#FD01FC','#F39EB0','#01007E']}
                    style={{ height: 100, width:100 , borderRadius:30, alignItems:'center',justifyContent:'center',zIndex:1,alignSelf:'center' }}
                >
                </LinearGradient>
               <View style={{top:-80}}>
                <LinearGradient
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    colors={[ '#0032E1','#07D2FF',]}
                    style={{ height: 190, width:Dimensions.get('window').width/2-30 , borderRadius:26, alignItems:'center',justifyContent:'center' }}
                >
                    {/* <LinearGradient
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    colors={[ '#3B39FF','#FF1ACD',]}
                    style={{ height: 22, width:Dimensions.get('window').width/4 , borderRadius:20, alignItems:'center',justifyContent:'center',marginTop:5,zIndex:2,marginBottom:8 }}
                >
                    <Text style={styles.trendingtext}>
                        #1 Trending
                    </Text>
                </LinearGradient> */}
                <View style={{flexDirection:'row',marginTop:55}}>
                        <MaterialIcons name="person" size={20}  color={'#ffffff'}/>
                        <Text style={styles.numtextpartyroom}>202</Text>
                        </View>

                    <View style={{paddingTop:0,marginBottom:5}}>
                        <Text style={styles.partytext}>
                            Party Room Name
                        </Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:30,marginRight:30}}>
                        
                        <View style={{paddingTop:3,paddingBottom:3,paddingRight:8, paddingLeft:8,borderRadius:30,backgroundColor:'#ffffff'}}>
                            <TouchableOpacity>
                            <Text style={styles.seats}>
                            6 Seats
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
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
                <View style={styles.liveview}>
                    <Image 
                    blurRadius={Platform.OS =='ios'?10:5}
                    source={require('../../../assets/images/lolgrp.png')}
                    style={styles.liveview}
                    />
                    <View style={{position:'absolute',top:30,flexDirection: 'row',justifyContent: 'space-between',left:20,right:20}}>
                    <TouchableOpacity>
                    <FontAwesome5 name="arrow-left" size={20}  color={'#ffffff'}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Entypo name="share" size={20}  color={'#ffffff'}/>
                    </TouchableOpacity>
                    </View>

                    <View style={{position:'absolute',top:60,}}>
                        <TouchableOpacity
                        >
                        <FontAwesome5 name="camera" size={20}  color={'#ffffff'} />
                        </TouchableOpacity>
                        
                    </View>
                    <View style={{position:'absolute',top:80,}}>
                    <Text style={styles.addcover}>
                            Add Cover
                        </Text>
                        <Text style={styles.addfancytext}>
                        Add fancy photo to attract more people
                        </Text>
                    </View>
             
                </View>
                <View style={{marginTop:-50,marginLeft:20,zIndex:1}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20}}>
                    <View style={styles.profileimage}>
                        <Image 
                        source={require('../../../assets/images/lolgrp.png')}
                        style={{height:90,width:90,borderRadius:45}}
                        />
                    </View>
                    <TouchableOpacity
                    style={{height:40,width:Dimensions.get('window').width/4,alignItems:'center',justifyContent:'center',backgroundColor:'#ffffff',borderRadius:14,marginTop:60}}
                    >
                    <Text style={styles.friends}>
                        + Friends
                    </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={{height:40,width:Dimensions.get('window').width/3-20,alignItems:'center',justifyContent:'center',backgroundColor:'#ffffff',borderRadius:14,marginTop:60}}
                    >
                    <Text style={styles.friends}>
                        Edit Profile
                    </Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginLeft:20}}>
                    <Text style={styles.friends}>
                        Username
                    </Text>
                </View>

                <View style={{flexDirection:'row',marginLeft:15,marginTop:20}}>
                    <TouchableOpacity
                    style={{height:30,width:50,borderRadius:15,backgroundColor:'#D8382B',alignItems:'center',justifyContent:'center',marginRight:10}}
                    >
                        <Text style={styles.place}>
                            Lv 1
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={{height:30,width:50,borderRadius:15,backgroundColor:'#01007E',alignItems:'center',justifyContent:'center',marginRight:10}}
                    >
                        <View style={{flexDirection:'row'}}>
                        <Ionicons name="male" size={15}  color={'#ffffff'} />
                        <Text style={styles.place}>
                            24
                        </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={{height:30,width:96,borderRadius:15,backgroundColor:'#34A853',alignItems:'center',justifyContent:'center'}}
                    >
                        <View style={{flexDirection:'row'}}>
                        <MaterialIcons name="location-on" size={15}  color={'#ffffff'} />
                        <Text style={styles.place}>
                            New Delhi
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <TouchableOpacity style={{height:54,width:Dimensions.get('window').width-30,alignItems:'center',justifyContent:'center',borderRadius:50,backgroundColor:'#ffffff',marginLeft:15,marginRight:15,marginTop:15}}>
                        <Text style={styles.pleasefilltext}>
                            Please fill in the information
                        </Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', marginLeft:15,marginTop:15 }}>
                            <TouchableOpacity
                                style={{ alignItems: 'center', justifyContent: 'center', marginRight: 20 }}
                                onPress={() => this.setState({ postsselected: !this.state.postsselected, draftsselected: false })}
                            >
                                {this.state.postsselected ?
                                    <View>
                                        <Text style={styles.postsselectedtext}>
                                            Posts
                                        </Text>
                                        <LinearGradient
                                            start={{ x: 0, y: 0.5 }}
                                            end={{ x: 1, y: 0.5 }}
                                            colors={['#01007E', '#FD01FC',]}
                                            style={{ height: 3, width: 15,  }}
                                        >
                                        </LinearGradient>
                                    </View>
                                    :
                                    <Text style={styles.draftstext}>
                                        Posts
                                    </Text>
                                }

                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ alignItems: 'center', justifyContent: 'center', }}
                                //  onPress={() =>setLiveselected(false),setPartyselected(true)}
                                onPress={() => this.setState({ postsselected: !this.state.postsselected, draftsselected: true })}
                            >
                                {this.state.draftsselected ?
                                    <View>
                                        <Text style={styles.postsselectedtext}>
                                            Drafts
                                        </Text>
                                        <LinearGradient
                                            start={{ x: 0, y: 0.5 }}
                                            end={{ x: 1, y: 0.5 }}
                                            colors={['#01007E', '#FD01FC',]}
                                            style={{ height: 3, width: 15,  }}
                                        >
                                        </LinearGradient>
                                    </View>
                                    :
                                    <Text style={styles.draftstext}>
                                        Drafts
                                    </Text>
                                }
                            </TouchableOpacity>
                        </View>
                    {this.state.postsselected ?
                        
                        <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 10, justifyContent: 'space-between', marginTop: 15 }}>
                            <View style={styles.liveimageview}>
                                <Image source={require('../../../assets/images/lolgrp.png')} style={styles.image} />
                                <Text style={styles.title}>Title Username</Text>
                            </View>

                            <View style={styles.liveimageview}>
                                <Image source={require('../../../assets/images/lolgrp.png')} style={styles.image} />
                                <Text style={styles.title}>Title Username</Text>
                            </View>
                        </View>
                        :
                       null
                        // <View style={{marginTop:15}}>
                           
                        //     <View style={{marginTop:0}}>
                        //         {this.renderpartyroom()}
                        //     </View>
                        // </View>
                    }
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
    liveview: {
        height: 200,
        width: Dimensions.get('window').width,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: '#ffffff',
        alignItems:'center',
        justifyContent:'center',
    },
    addcover: {
        fontFamily: 'Raleway',
        fontWeight: '800',
        fontSize: 20,
        color: '#ffffff',
        textAlign:'center'
    },
    addfancytext: {
        fontFamily: 'Raleway',
        fontWeight: '500',
        fontSize: 16,
        color: '#ffffff',
        textAlign:'center'
    },
    profileimage:{
        height:100,
        width:100,
        borderRadius:50,
        borderWidth:4,
        borderColor:'#ffffff',
    },
    friends: {
        fontFamily: 'Raleway',
        fontWeight: '700',
        fontSize: 18,
        color: '#202020'
    },
    place: {
        fontFamily: 'Raleway',
        fontWeight: '600',
        fontSize: 12,
        color: '#ffffff'
    },
    pleasefilltext: {
        fontFamily: 'Raleway',
        fontWeight: '600',
        fontSize: 18,
        color: '#202020'
    },
    postsselectedtext:{
        fontFamily: 'Raleway',
        fontWeight: '800',
        fontSize: 18,
        color: '#202020'
    },
    draftstext:{
        fontFamily: 'Raleway',
        fontWeight: '600',
        fontSize: 16,
        color: '#999999'
    },
    liveimageview: {
        width: Dimensions.get('window').width / 2 - 20,
        height: 180,
        borderRadius: 24,
        backgroundColor: '#ffffff'
    },
    image: {
        height: 128,
        width: Dimensions.get('window').width / 2 - 30,
        borderRadius: 24,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    },
    title: {
        fontFamily: 'Raleway',
        fontWeight: '700',
        fontSize: 16,
        color: '#202020',
        textAlign: 'center',
        marginTop: 10
    },
    partyrecommend: {
        fontFamily: 'Raleway',
        fontWeight: '700',
        fontSize: 16,
        color: '#ffffff'
    },
    games: {
        fontFamily: 'Raleway',
        fontWeight: '700',
        fontSize: 16,
        color: '#4D4D4D'
    },
    partyroomtext:{
        fontFamily: 'Raleway',
        fontWeight: '800',
        fontSize: 16,
        color: '#ffffff'
    },
    trendingtext:{
        fontFamily: 'Raleway',
        fontWeight: '500',
        fontSize: 12,
        color: '#ffffff'
    },
    numtext:{
        fontFamily: 'Raleway',
        fontWeight: '600',
        fontSize: 12,
        color: '#ffffff'
    },
    pickme:{
        fontFamily: 'Raleway',
        fontWeight: '700',
        fontSize: 12,
        color: '#ffffff'
    },
    numtextpartyroom:{
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
})

