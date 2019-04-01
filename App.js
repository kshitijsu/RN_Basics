import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';
import bgImage from './images/bluebg.jpg'

import logo from './images/logo.png'
import { TextInput } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons'

const { width: WIDTH } = Dimensions.get('window')

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      showPass: true,
      press: false
    }
  }
  showPass = () =>{
    if (this.state.press == false){
      this.setState({showPass: false, press : true})
    }
    else{
      this.setState({showPass: true, press : false})
    }
  }
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.bgcontainer}>
        <View style={styles.logocontainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.logotext}>The Egale</Text>
        </View>

        <View style={styles.inputContainer}>
          <Icons name={'ios-person'} size={28} color={'rgb(0,0,0)'}
            style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={'Username'}
            placeholderTextColor={'#C3C3C3'}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icons name={'ios-lock'} size={28} color={'rgb(0,0,0)'}
            style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={'Password'}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'#C3C3C3'}
          />

          <TouchableOpacity style={styles.btneye}
            onPress={this.showPass.bind(this)}>
            <Icons name={this.state.press == false ? 'ios-eye' : 'ios-eye-off'} size={28} color={'rgb(0,0,0)'} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnlogin}>
          <Text style={styles.logintext}>Login</Text>
        </TouchableOpacity>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bgcontainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logocontainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 250,
    height: 250
  },
  logotext: {
    color: 'black',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 10,
    opacity: 1,
  },
  inputContainer: {
    marginTop: 20
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'rgba(255,255,255,1)',
    marginHorizontal: 25
  },
  inputIcon: {
    position: "absolute",
    top: 10,
    left: 37
  },
  btneye: {
    position: "absolute",
    top: 10,
    right: 37
  },
  btnlogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 5,
    backgroundColor: '#1f8ef3',
    justifyContent: 'center',
    marginTop: 30
  },
  logintext: {
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
    textAlign: 'center'
  }
});