import React, { Component } from 'react';
import { View, BackHandler, Image, Text, Platform, Dimensions, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LottieView from 'lottie-react-native';
import { TabRouter } from '@react-navigation/native';
import { Icon } from 'react-native-gradient-icon';
import { BASE_URL } from '../../api';
//import WheelOfFortune from 'react-native-wheel-of-fortune'

// export function Live({navigation}) {

// useEffect(() =>{
//     // setTimeout(() => {
//     //     navigation.navigate('Login')
//     // }, 2000);

// },[]);

// const [liveselected,setLiveselected] = useState(true);
// const [partyselected,setPartyselected] = useState(false);

const participants = [
    '%10',
    '%20',
    '%30',
    '%40',
    '%50',
    '%60',
    '%70',
    '%90',
    'FREE',
  ];

export default class Live extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            liveselected: true,
            partyselected: false,
            liverecommendselected: false,
            livemegastarselected: true,
            liveglobalselected: false,
            livebannerselected: false,
            partyrecommendselected: false,
            partygamesselected: false,
            showbannerdropdown: false,
            livetabselected: true,
            exploretabselected: false,
            hometabselected: false,
            chattabselected: false,
            profiletabselected: false,
            unseenmessages:0,
        }
    }

    componentDidMount() {
        //  this.setState({liveselected:!this.state.liveselected})
        // setTimeout(() => {
        //     this.props.navigation.navigate('Profile')
        // }, 2000);

        this.anim.play();
        setTimeout(() => { }, 9000);
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


    rendertrendingcard = () => {
        return (
            <View style={{ width: Dimensions.get('window').width / 2 - 50, marginLeft: 10, marginRight: 15, }}>
                <LinearGradient
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    colors={['#FD01FC', '#F39EB0', '#01007E']}
                    style={{ height: 60, width: 60, borderRadius: 30, alignItems: 'center', justifyContent: 'center', zIndex: 1, alignSelf: 'center' }}
                >
                </LinearGradient>
                <View style={{ top: -30 }}>
                    <LinearGradient
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        colors={['#0032E1', '#07D2FF',]}
                        style={{ height: 100, width: Dimensions.get('window').width / 2 - 50, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}
                    >
                        <LinearGradient
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            colors={['#3B39FF', '#FF1ACD',]}
                            style={{ height: 22, width: Dimensions.get('window').width / 4, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginTop: 5, zIndex: 2, marginBottom: 8 }}
                        >
                            <Text style={styles.trendingtext}>
                                #1 Trending
                            </Text>
                        </LinearGradient>
                        <View style={{ paddingTop: 0, marginBottom: 5 }}>
                            <Text style={styles.megastar}>
                                Party Room Name
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 30, marginRight: 30 }}>
                            <View style={{ flexDirection: 'row', marginRight: 15 }}>
                                <MaterialIcons name="person" size={15} color={'#ffffff'} />
                                <Text style={styles.numtext}>314</Text>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <Text style={styles.pickme}>
                                        Pick Me
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </LinearGradient>
                </View>
            </View>
        )
    }

    renderpartyroom = () => {
        return (
            <View style={{ width: Dimensions.get('window').width / 2 - 20, marginLeft: 0, }}>
                {/* <LinearGradient
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    colors={['#FD01FC', '#F39EB0', '#01007E']}
                    style={{ height: 100, width: 100, borderRadius: 30, alignItems: 'center', justifyContent: 'center', zIndex: 1, alignSelf: 'center' }}
                >
                </LinearGradient> */}
                <View
                    style={{ height: 100, width: 100, borderRadius: 30, alignItems: 'center', justifyContent: 'center', zIndex: 1, alignSelf: 'center', borderWidth: 1, borderColor: '#ffffff' }}
                >

                </View>
                {/* <View style={{ height:190,width:Dimensions.get('window').width/2-30}}> */}
                {/* <LinearGradient
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        colors={['#0032E1', '#07D2FF',]}
                        style={{ height: 190, width: Dimensions.get('window').width / 2 - 30, borderRadius: 26, alignItems: 'center', justifyContent: 'center' }}
                    > */}

                <ImageBackground
                    //resizeMode={'cover'}
                    source={require('../../../assets/images/edit2.gif')}
                    //source={require('../../../assets/images/63812-gradient-background.gif')}  
                    style={{ height: 190, width: Dimensions.get('window').width / 2 - 20, borderRadius: 26, marginTop: -80, overflow: 'hidden', alignItems: 'center' }}
                >
                    <View style={{ flexDirection: 'row', marginTop: 85 }}>
                        <MaterialIcons name="person" size={20} color={'#ffffff'} />
                        <Text style={styles.numtextpartyroom}>202</Text>
                    </View>

                    <View style={{ paddingTop: 0, marginBottom: 5 }}>
                        <Text style={styles.partytext}>
                            Party Room Name
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 30, marginRight: 30 }}>

                        <View style={{ paddingTop: 3, paddingBottom: 3, paddingRight: 8, paddingLeft: 8, borderRadius: 30, backgroundColor: '#ffffff' }}>
                            <TouchableOpacity>
                                <Text style={styles.seats}>
                                    6 Seats
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>

                {/* <View style={{height:190,width:Dimensions.get('window').width/2-30,borderRadius:26, }}>
                    <LottieView
                        source={require('../../../assets/json/63812-gradient-background.json')}
                        autoPlay={true}
                        loop={true}
                        speed={1}
                        ref={(animation) => {
                            this.anim = animation;
                        }}
                        style={{ 
                            //height: 190, 
                            aspectRatio: 400 / 800,
                           // width: Dimensions.get('window').width / 2-30,
                        }}
                    />
                    </View> */}
                {/* <View style={{ flexDirection: 'row',marginTop:55 }}>
                        <MaterialIcons name="person" size={20} color={'#ffffff'} />
                        <Text style={styles.numtextpartyroom}>202</Text>
                    </View>

                    <View style={{ paddingTop: 0, marginBottom: 5 }}>
                        <Text style={styles.partytext}>
                            Party Room Name
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 30, marginRight: 30 }}>

                        <View style={{ paddingTop: 3, paddingBottom: 3, paddingRight: 8, paddingLeft: 8, borderRadius: 30, backgroundColor: '#ffffff' }}>
                            <TouchableOpacity>
                                <Text style={styles.seats}>
                                    6 Seats
                                </Text>
                            </TouchableOpacity>
                        </View> 
                    </View>*/}
                {/* </LinearGradient> */}
                {/* </View> */}
            </View>
        )
    }

    renderpartyroom1 = () => {
        return (
            <View style={{ width: Dimensions.get('window').width / 2 - 20, marginLeft: 0, }}>
                {/* <LinearGradient
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    colors={['#FD01FC', '#F39EB0', '#01007E']}
                    style={{ height: 100, width: 100, borderRadius: 30, alignItems: 'center', justifyContent: 'center', zIndex: 1, alignSelf: 'center' }}
                >
                </LinearGradient> */}
                <View
                    style={{ height: 100, width: 100, borderRadius: 30, alignItems: 'center', justifyContent: 'center', zIndex: 1, alignSelf: 'center', borderWidth: 1, borderColor: '#ffffff' }}
                >

                </View>
                <View style={{ flex: 1, height: 190, width: Dimensions.get('window').width / 2 - 20 }}>
                    {/* <LinearGradient
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        colors={['#0032E1', '#07D2FF',]}
                        style={{ height: 190, width: Dimensions.get('window').width / 2 - 30, borderRadius: 26, alignItems: 'center', justifyContent: 'center' }}
                    > */}

                    <ImageBackground
                        // source ={{uri:'https://lottiefiles.com/63814-gradient-dots-background'}}
                        // source={require('../../../assets/images/63814-gradient-dots-background.gif')}  
                        source={require('../../../assets/images/edit1.gif')}
                        style={{ height: 190, width: Dimensions.get('window').width / 2 - 30, borderRadius: 26, marginTop: -80, overflow: 'hidden', alignItems: 'center' }}
                    //imageStyle={{ borderRadius: 6}}
                    >

                        <View style={{ flexDirection: 'row', marginTop: 85 }}>
                            <MaterialIcons name="person" size={20} color={'#ffffff'} />
                            <Text style={styles.numtextpartyroom}>202</Text>
                        </View>

                        <View style={{ paddingTop: 0, marginBottom: 5 }}>
                            <Text style={styles.partytext}>
                                Party Room Name
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 30, marginRight: 30 }}>

                            <View style={{ paddingTop: 3, paddingBottom: 3, paddingRight: 8, paddingLeft: 8, borderRadius: 30, backgroundColor: '#ffffff' }}>
                                <TouchableOpacity>
                                    <Text style={styles.seats}>
                                        6 Seats
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </ImageBackground>

                    {/* <View style={{height:190,width:Dimensions.get('window').width/2-30,borderRadius:26, }}>
                    <LottieView
                        source={require('../../../assets/json/63812-gradient-background.json')}
                        autoPlay={true}
                        loop={true}
                        speed={1}
                        ref={(animation) => {
                            this.anim = animation;
                        }}
                        style={{ 
                            //height: 190, 
                            aspectRatio: 400 / 800,
                           // width: Dimensions.get('window').width / 2-30,
                        }}
                    />
                    </View> */}
                    {/* <View style={{ flexDirection: 'row',marginTop:55 }}>
                        <MaterialIcons name="person" size={20} color={'#ffffff'} />
                        <Text style={styles.numtextpartyroom}>202</Text>
                    </View>

                    <View style={{ paddingTop: 0, marginBottom: 5 }}>
                        <Text style={styles.partytext}>
                            Party Room Name
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 30, marginRight: 30 }}>

                        <View style={{ paddingTop: 3, paddingBottom: 3, paddingRight: 8, paddingLeft: 8, borderRadius: 30, backgroundColor: '#ffffff' }}>
                            <TouchableOpacity>
                                <Text style={styles.seats}>
                                    6 Seats
                                </Text>
                            </TouchableOpacity>
                        </View> 
                    </View>*/}
                    {/* </LinearGradient> */}
                </View>
            </View>
        )
    }

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

    bannerdropdown = () => {
        return (
            <View style={{ height: Dimensions.get('window').height / 3, width: Dimensions.get('window').width / 2, backgroundColor: '#ffffff', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, marginTop: 10, marginLeft: Dimensions.get('window').width / 2 }}>
                <TouchableOpacity
                    style={{ height: 40, width: Dimensions.get('window').width / 2, justifyContent: 'center', alignItems: 'center', borderBottomColor: '#EEEEEE', borderBottomWidth: 1 }}
                >
                    <Text style={{ fontSize: 16, fontFamily: 'Raleway', color: '#202020', marginRight: 15 }}>
                        Upcoming Live Events
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ height: 40, width: Dimensions.get('window').width / 2, justifyContent: 'center', alignItems: 'center', borderBottomColor: '#EEEEEE', borderBottomWidth: 1 }}
                >
                    <Text style={{ fontSize: 16, fontFamily: 'Raleway', color: '#202020', marginRight: 15 }}>
                        Performer Ranking
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ height: 40, width: Dimensions.get('window').width / 2, justifyContent: 'center', alignItems: 'center', borderBottomColor: '#EEEEEE', borderBottomWidth: 1 }}
                >
                    <Text style={{ fontSize: 16, fontFamily: 'Raleway', color: '#202020', marginRight: 15 }}>
                        Fan Club ranking
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ height: 40, width: Dimensions.get('window').width / 2, justifyContent: 'center', alignItems: 'center', borderBottomColor: '#EEEEEE', borderBottomWidth: 1 }}
                >
                    <Text style={{ fontSize: 16, fontFamily: 'Raleway', color: '#202020', marginRight: 15 }}>
                        Video Talent Policy
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }


    render() {
        //const wheelOptions = {
        //     rewards: participants,
        //     knobSize: 50,
        //     borderWidth: 5,
        //     borderColor: '#000',
        //     innerRadius: 50,
        //     duration: 4000,
        //     backgroundColor: 'transparent',
        //     textAngle: 'horizontal',
        //     knobSource: require('../../../assets/images/knoob.png'),
        //     getWinner: (value, index) => {
        //       this.setState({winnerValue: value, winnerIndex: index});
        //     },
        //     onRef: ref => (this.child = ref),
        //   };
        return (
            <View
                style={{ flex: 1 }}
            >
                <View style={{ flex: 0.9 }}>
                    <View style={styles.liveview}>
                        <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: 10, marginRight: 10, justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    style={{ alignItems: 'center', justifyContent: 'center', marginRight: 20 }}
                                    onPress={() => this.setState({ liveselected: !this.state.liveselected, partyselected: false })}
                                >
                                    {this.state.liveselected ?
                                        <View>
                                            <Text style={styles.livetextselected}>
                                                Live
                                            </Text>
                                            <LinearGradient
                                                start={{ x: 0, y: 0.5 }}
                                                end={{ x: 1, y: 0.5 }}
                                                colors={['#01007E', '#FD01FC',]}
                                                style={{ height: 3, width: 15, alignSelf: 'center' }}
                                            >
                                            </LinearGradient>
                                        </View>
                                        :
                                        <Text style={styles.livetext}>
                                            Live
                                        </Text>
                                    }

                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ alignItems: 'center', justifyContent: 'center', }}
                                    //  onPress={() =>setLiveselected(false),setPartyselected(true)} partyrecommendselected: true
                                    onPress={() => this.setState({ liveselected: !this.state.liveselected, partyselected: true,  })}
                                >
                                    {this.state.partyselected ?
                                        <View>
                                            <Text style={styles.livetextselected}>
                                                Party
                                            </Text>
                                            <LinearGradient
                                                start={{ x: 0, y: 0.5 }}
                                                end={{ x: 1, y: 0.5 }}
                                                colors={['#01007E', '#FD01FC',]}
                                                style={{ height: 3, width: 15, alignSelf: 'center', }}
                                            >
                                            </LinearGradient>
                                        </View>
                                        :
                                        <Text style={styles.livetext}>
                                            Party
                                        </Text>
                                    }
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginRight: 20 }}>
                                    {/* <MaterialIcons name="person" size={20} /> */}
                                    <Feather name="tv" size={20} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ alignItems: 'center', justifyContent: 'center', marginRight: 20 }}
                                    onPress={() => this.props.navigation.navigate('Channelsearch')}
                                >
                                    <Ionicons name="search-outline" size={20} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginRight: 20 }}>
                                    <FontAwesome5 name="trophy" size={20} color={'#FFA012'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        {this.state.liveselected ?
                            <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 20 }}>
                                {this.state.livemegastarselected ?
                                    <LinearGradient
                                        start={{ x: 0, y: 0.5 }}
                                        end={{ x: 1, y: 0.5 }}
                                        colors={['#FFA012', '#FCA600']}
                                        style={{ height: 34, width: 110, borderRadius: 16, justifyContent: 'center', marginRight: 20 }}
                                    >
                                        <TouchableOpacity
                                            onPress={() => this.setState({ livemegastarselected: true, liveglobalselected: false, liverecommendselected: false, livebannerselected: false })}
                                        //style={{ height: 34, width: 118, borderRadius: 16,alignItems:'center',justifyContent:'center',backgroundColor:'#FFA012',marginRight:20  }} 
                                        >
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                {/* <MaterialIcons name="stars" size={20} color="#ffffff" /> */}

                                                <LottieView
                                                    source={require('../../../assets/json/4892-star.json')}
                                                    autoPlay={true}
                                                    loop={true}
                                                    speed={1}
                                                    ref={(animation) => {
                                                        this.anim = animation;
                                                    }}
                                                    style={{ height: 34, width: 34 }}
                                                />

                                                <Text style={styles.megastar}>
                                                    Megastar
                                                </Text>

                                            </View>

                                        </TouchableOpacity>
                                    </LinearGradient>
                                    :

                                    <TouchableOpacity
                                        style={{ marginRight: 20, alignItems: 'center', justifyContent: 'center' }}
                                        onPress={() => this.setState({ livemegastarselected: true, liveglobalselected: false, liverecommendselected: false, livebannerselected: false })}
                                    // style={{ height: 34, width: 118, borderRadius: 16,alignItems:'center',justifyContent:'center',backgroundColor:'#FFA012'  }} 
                                    >
                                        <Text style={styles.recommend}>
                                            Megastar
                                        </Text>
                                    </TouchableOpacity>
                                }
                                {this.state.liverecommendselected ?
                                    <LinearGradient
                                        start={{ x: 0, y: 0.5 }}
                                        end={{ x: 1, y: 0.5 }}
                                        colors={['#FF5C00', '#EA4335']}
                                        style={{ height: 34, width: 130, borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginRight: 20 }}
                                    >
                                        <TouchableOpacity
                                            onPress={() => this.setState({ livemegastarselected: false, liveglobalselected: false, liverecommendselected: true, livebannerselected: false })}
                                        //style={{ height: 34, width: 118, borderRadius: 16,alignItems:'center',justifyContent:'center',backgroundColor:'#FFA012',marginRight:20  }} 
                                        >
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                {/* <SimpleLineIcons name="fire" size={20} color={'#FFA012'} /> */}
                                                <LottieView
                                                    source={require('../../../assets/json/58634-fire.json')}
                                                    autoPlay={true}
                                                    loop={true}
                                                    speed={1}
                                                    ref={(animation) => {
                                                        this.anim = animation;
                                                    }}
                                                    style={{ height: 20, width: 20 }}
                                                />
                                                <Text style={styles.partyrecommend}>
                                                    Recommend
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                    :
                                    <TouchableOpacity
                                        onPress={() => this.setState({ livemegastarselected: false, liveglobalselected: false, liverecommendselected: true, livebannerselected: false })}
                                        style={{ marginRight: 20, alignItems: 'center', justifyContent: 'center' }}
                                    // style={{ height: 34, width: 118, borderRadius: 16,alignItems:'center',justifyContent:'center',backgroundColor:'#FFA012'  }} 
                                    >
                                        <Text style={styles.recommend}>
                                            Recommend
                                        </Text>
                                    </TouchableOpacity>
                                }
                                {this.state.liveglobalselected ?
                                    <LinearGradient
                                        start={{ x: 0, y: 0.5 }}
                                        end={{ x: 1, y: 0.5 }}
                                        colors={['#3331FF', '#39F3FF']}
                                        style={{ height: 34, width: 100, borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginRight: 20 }}
                                    >
                                        <TouchableOpacity
                                            onPress={() => this.setState({ livemegastarselected: false, liveglobalselected: true, liverecommendselected: false, livebannerselected: false })}
                                        //style={{ height: 34, width: 118, borderRadius: 16,alignItems:'center',justifyContent:'center',backgroundColor:'#FFA012',marginRight:20  }} 
                                        >
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                {/* <FontAwesome5 name="globe" size={20} color={'#FFA012'} /> */}
                                                <LottieView
                                                    source={require('../../../assets/json/43310-globe-map-1.json')}
                                                    autoPlay={true}
                                                    loop={true}
                                                    speed={1}
                                                    ref={(animation) => {
                                                        this.anim = animation;
                                                    }}
                                                    style={{ height: 20, width: 20, marginRight: 5 }}
                                                />
                                                <Text style={styles.partyrecommend}>
                                                    Global
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                    :
                                    <TouchableOpacity
                                        onPress={() => this.setState({ livemegastarselected: false, liveglobalselected: true, liverecommendselected: false, livebannerselected: false })}
                                        style={{ alignItems: 'center', justifyContent: 'center', marginRight: 20 }}
                                    //style={{ height: 34, width: 118, borderRadius: 16,alignItems:'center',justifyContent:'center',backgroundColor:'#FFA012'  }} 
                                    >
                                        <Text style={styles.recommend}>
                                            Global
                                        </Text>
                                    </TouchableOpacity>
                                }
                                {this.state.livebannerselected ?
                                    <LinearGradient
                                        start={{ x: 0, y: 0.5 }}
                                        end={{ x: 1, y: 0.5 }}
                                        colors={['#3331FF', '#39F3FF']}
                                        style={{ height: 34, width: 100, borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginRight: 20 }}
                                    >
                                        <TouchableOpacity
                                            onPress={() => this.setState({ livemegastarselected: false, liveglobalselected: false, liverecommendselected: false, livebannerselected: true, showbannerdropdown: true })}
                                        //style={{ height: 34, width: 118, borderRadius: 16,alignItems:'center',justifyContent:'center',backgroundColor:'#FFA012',marginRight:20  }} 
                                        >
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                {/* <FontAwesome5 name="globe" size={20} color={'#FFA012'} /> */}
                                                <LottieView
                                                    source={require('../../../assets/json/43310-globe-map-1.json')}
                                                    autoPlay={true}
                                                    loop={true}
                                                    speed={1}
                                                    ref={(animation) => {
                                                        this.anim = animation;
                                                    }}
                                                    style={{ height: 20, width: 20, marginRight: 5 }}
                                                />
                                                <Text style={styles.partyrecommend}>
                                                    Banner
                                                </Text>
                                                <Entypo name="triangle-down" size={15} />
                                            </View>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                    :
                                    <TouchableOpacity
                                        onPress={() => this.setState({ livemegastarselected: false, liveglobalselected: false, liverecommendselected: false, livebannerselected: true, showbannerdropdown: true })}
                                        style={{ alignItems: 'center', justifyContent: 'center' }}
                                    //style={{ height: 34, width: 118, borderRadius: 16,alignItems:'center',justifyContent:'center',backgroundColor:'#FFA012'  }} 
                                    >
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={styles.recommend}>
                                                Banner
                                            </Text>
                                            <Entypo name="triangle-down" size={15} />
                                        </View>
                                    </TouchableOpacity>
                                }

                            </View>
                            :
                            <View>
                                <ScrollView
                                    horizontal
                                >
                                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 20 }}>
                                        {this.state.partyrecommendselected ?
                                            <LinearGradient
                                                start={{ x: 0, y: 0.5 }}
                                                end={{ x: 1, y: 0.5 }}
                                                colors={['#FF5C00', '#EA4335']}
                                                style={{ height: 34, width: 130, borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginRight: 20 }}
                                            >
                                                <TouchableOpacity
                                                //style={{ height: 34, width: 118, borderRadius: 16,alignItems:'center',justifyContent:'center',backgroundColor:'#FFA012',marginRight:20  }} 
                                                >
                                                    <View style={{ flexDirection: 'row' }}>
                                                        {/* <SimpleLineIcons name="fire" size={20} color={'#FFA012'} /> */}
                                                        <LottieView
                                                            source={require('../../../assets/json/58634-fire.json')}
                                                            autoPlay={true}
                                                            loop={true}
                                                            speed={1}
                                                            ref={(animation) => {
                                                                this.anim = animation;
                                                            }}
                                                            style={{ height: 20, width: 20 }}
                                                        />
                                                        <Text style={styles.partyrecommend}>
                                                            Recommend
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </LinearGradient>
                                            :
                                            <TouchableOpacity
                                                onPress={() => this.setState({ partyrecommendselected: true, partygamesselected: false, })}
                                                style={{ alignItems: 'center', justifyContent: 'center', marginRight: 20 }}
                                            //style={{ height: 34, width: 118, borderRadius: 16,alignItems:'center',justifyContent:'center',backgroundColor:'#FFA012'  }} 
                                            >
                                                <Text style={styles.games}>
                                                    Recommend
                                                </Text>
                                            </TouchableOpacity>
                                        }
                                        {this.state.partygamesselected ?
                                            <LinearGradient
                                                start={{ x: 0, y: 0.5 }}
                                                end={{ x: 1, y: 0.5 }}
                                                colors={['#FF5C00', '#EA4335']}
                                                style={{ height: 34, width: 108, borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginRight: 20 }}
                                            >
                                                <TouchableOpacity
                                                    style={{ marginRight: 20, alignItems: 'center', justifyContent: 'center' }}
                                                // style={{ height: 34, width: 118, borderRadius: 16,alignItems:'center',justifyContent:'center',backgroundColor:'#FFA012'  }} 
                                                onPress={() => this.setState({ partyrecommendselected: false, partygamesselected: true, })}
                                                >
                                                    <View style={{ flexDirection: 'row' }}>
                                                        {/* <SimpleLineIcons name="fire" size={20} color={'#FFA012'} /> */}
                                                        <LottieView
                                                            source={require('../../../assets/json/58634-fire.json')}
                                                            autoPlay={true}
                                                            loop={true}
                                                            speed={1}
                                                            ref={(animation) => {
                                                                this.anim = animation;
                                                            }}
                                                            style={{ height: 20, width: 20, marginRight: 5 }}
                                                        />
                                                        <Text style={styles.games}>
                                                            Games
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </LinearGradient>
                                            :
                                            <TouchableOpacity
                                                onPress={() => this.setState({ partyrecommendselected: false, partygamesselected: true, })}
                                                style={{ alignItems: 'center', justifyContent: 'center', marginRight: 20 }}
                                            //style={{ height: 34, width: 118, borderRadius: 16,alignItems:'center',justifyContent:'center',backgroundColor:'#FFA012'  }} 
                                            >
                                                <Text style={styles.games}>
                                                    Games
                                                </Text>
                                            </TouchableOpacity>
                                        }

                                        <TouchableOpacity
                                            style={{ alignItems: 'center', justifyContent: 'center', marginRight: 20 }}
                                        //style={{ height: 34, width: 118, borderRadius: 16,alignItems:'center',justifyContent:'center',backgroundColor:'#FFA012'  }} 
                                        >
                                            <Text style={styles.games}>
                                                Dating
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={{ alignItems: 'center', justifyContent: 'center', marginRight: 20 }}
                                        //style={{ height: 34, width: 118, borderRadius: 16,alignItems:'center',justifyContent:'center',backgroundColor:'#FFA012'  }} 
                                        >
                                            <Text style={styles.games}>
                                                Chat
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={{ alignItems: 'center', justifyContent: 'center', marginRight: 20 }}
                                        //style={{ height: 34, width: 118, borderRadius: 16,alignItems:'center',justifyContent:'center',backgroundColor:'#FFA012'  }} 
                                        >
                                            <Text style={styles.games}>
                                                Multi-video
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={{ alignItems: 'center', justifyContent: 'center', marginRight: 20 }}
                                        //style={{ height: 34, width: 118, borderRadius: 16,alignItems:'center',justifyContent:'center',backgroundColor:'#FFA012'  }} 
                                        >
                                            <Text style={styles.games}>
                                                Family
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>
                            </View>
                        }
                    </View>
                    {this.state.showbannerdropdown ?
                        <View>
                            {this.bannerdropdown()}
                        </View>
                        : null}

                    <ScrollView>
                        {this.state.liveselected ?
                            this.state.livemegastarselected ?
                                <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 10, justifyContent: 'space-between', marginTop: 15 }}>
                                    <View style={styles.liveimageview}>
                                        <View elevation={15}
                                            style={styles.imageview}
                                        >
                                            <Image source={require('../../../assets/images/lolgrp.png')} style={styles.image} />
                                        </View>
                                        <Text style={styles.title}>Title Username</Text>
                                    </View>

                                    <View style={styles.liveimageview}>
                                        <View elevation={15}
                                            style={styles.imageview}
                                        >
                                            <ImageBackground
                                                source={require('../../../assets/images/lolgrp.png')}
                                                style={styles.image}>
                                                {/* <View>
                                        <View style={{height:28,width:40,backgroundColor:'rgba(7, 7, 7, 0.8)',borderRadius:24,position:'absolute',left:0,top:-8,}}>

                                        </View>
                                        </View> */}
                                            </ImageBackground>
                                        </View>

                                        <Text style={styles.title}>Title Username</Text>
                                    </View>
                                </View>
                                :
                                this.state.liverecommendselected ?
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
                            // <View style={{ marginTop: 15 }}>
                            //     <View>
                            //         {this.rendertrendingcard()}
                            //     </View>
                            //     <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                            //         <Text style={{ fontFamily: 'Raleway', fontWeight: '600', fontSize: 18, color: '#202020' }}>
                            //             You may like it
                            //         </Text>
                            //     </View>
                            //     <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 0 }}>
                            //         {this.renderpartyroom()}
                            //         {this.renderpartyroom1()}
                            //     </View>
                            // </View>
                            null
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
        height: 150,
        width: Dimensions.get('window').width,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: '#ffffff'
    },
    livetextselected: {
        fontFamily: 'Raleway',
        fontWeight: '800',
        fontSize: 30,
        color: '#202020'
    },
    livetext: {
        fontFamily: 'Raleway',
        fontWeight: '600',
        fontSize: 20,
        color: '#4D4D4D'
    },
    megastar: {
        fontFamily: 'Raleway',
        fontWeight: '600',
        fontSize: 16,
        color: '#ffffff',
        textAlign: 'center',
    },
    recommend: {
        fontFamily: 'Raleway',
        fontWeight: '600',
        fontSize: 16,
        color: '#4D4D4D'
    },
    liveimageview: {
        width: Dimensions.get('window').width / 2 - 20,
        height: 180,
        borderRadius: 24,
        backgroundColor: '#ffffff',
        zIndex: 1,
    },
    imageview: {
        backgroundColor: '#ffffff',
        borderRadius: 24,
        height: 128,
        width: Dimensions.get('window').width / 2 - 30,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        zIndex: 2,
    },
    image: {
        height: 128,
        width: Dimensions.get('window').width / 2 - 30,
        borderRadius: 24,
        //zIndex:1,
        //marginLeft: 5,
        //marginRight: 5,
        // marginTop: 5,

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
})

