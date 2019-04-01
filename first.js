import React, { Component } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Image, Animated
} from 'react-native';

HEADER_MAX_HEIGHT = 120
HEADER_MIN_HEIGHT = 70
PROFILE_IMAGE_MAX_HEIGHT = 150
PROFILE_IMAGE_MIN_HEIGHT = 50



class App extends Component {
  constructor(props){
    super(props)
      this.state={
        scrollY: new Animated.Value(0)
      }
  }
  render() {

    const headerHeight =this.state.scrollY.interpolate({
      inputRange:[0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
      outputRange:[HEADER_MAX_HEIGHT,HEADER_MIN_HEIGHT],
      extrapolate:'clamp'
    })
    const profileImageHeight =this.state.scrollY.interpolate({
      inputRange:[0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
      outputRange:[PROFILE_IMAGE_MAX_HEIGHT,PROFILE_IMAGE_MIN_HEIGHT],
      extrapolate:'clamp'
    })
    const profileImageMarginTop =this.state.scrollY.interpolate({
      inputRange:[0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
      outputRange:[HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT / 2),PROFILE_IMAGE_MAX_HEIGHT + 5],
      extrapolate:'clamp'
    })
    const headerZindex =this.state.scrollY.interpolate({
      inputRange:[0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
      outputRange:[0,1],
      extrapolate:'clamp'
    })
    const headerTitleBottom =this.state.scrollY.interpolate({
      inputRange:[0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT, HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT+5+PROFILE_IMAGE_MIN_HEIGHT,
      HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT+5+PROFILE_IMAGE_MIN_HEIGHT+26,
      ],
      outputRange:[-20,-20, -20, 0],
      extrapolate:'clamp'
    })



    return (
      <View style={styles.container}>
        <Animated.View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'blue',
          height: headerHeight,
          zIndex: headerZindex,
          alignItems: 'center',
        }}>
        <Animated.View style={{position:'absolute', bottom:headerTitleBottom}}>
          <Text style={{color:'black',fontSize:14, fontWeight:'bold'}}> Kshitij Surendra Ukey</Text>
        </Animated.View>
        </Animated.View>

        <ScrollView style={{ flex: 1}}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent:{contentOffset:{y:this.state.scrollY}}}]
          )}
        >
          <Animated.View style={{
            height: profileImageHeight,
            width: profileImageHeight,
            borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
            borderColor: 'white',
            borderWidth: 3,
            overflow: 'hidden',
            marginTop: profileImageMarginTop,
            marginLeft: 10,
          }}>
            <Image source={require('./images/me1.jpg')}
              style={{ flex: 1, width: null, height: null }} />
          </Animated.View>
          <View style={{height:10}}></View>
        <View>
          <Image source={require('./images/me1.jpg')} style={{width:'100%', height:'50%', marginTop:2, marginBottom:2}}/>
          <Image source={require('./images/me.jpg')} style={{width:'100%', height:'50%', marginTop:2, marginBottom:2}}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black'
  }
});