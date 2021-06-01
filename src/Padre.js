import React from 'react';
import Conthijo1 from './Conthijo1';
import UsersList from './UsersList';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { incrementCont, decrementCont, incrementByNumber } from './actions/AppActions';

class Padre extends React.PureComponent {

  constructor(props) {
    super(props);
   this.cont = 0;

   this.state = {
    contador : 0,
    numberI: ''
  
   }
 
  }
  
  
  press = () => {
      console.log('press button')
      this.cont = this.cont + 1;
      console.log(this.cont);
      this.setState({contador: this.state.contador + 1});
  }
 

   render() {
   
      return (
       <SafeAreaView style={styles.safeArea}>
       <View style={{flex:0.1, flexDirection:'row', backgroundColor:'yellow'}}>
         <View style={{flex:1, flexDirection:'row'}}>
          <View style={{flex:0.20}}>
            <Text>Nombre</Text>
          </View>
          <View style={{flex:0.20}}>
            <Text>Apellido</Text>
          </View>
          <View style={{flex:0.60}}>
            <Text>Direccion</Text>
          </View>
        </View>
      </View>
      <View style={{flex:0.4, flexDirection:'row', backgroundColor:'cyan'}}>
            {/* <Text>Esteban</Text>
            <Text>Pasiandolo</Text>
            <Text>Jose Maria Moreno 2087</Text> */}
            {this.props.picture!='' &&
              <Image source = {{uri: this.props.picture}}
              style = {{ width: 200, height: 200 }}
              />
            } 
            <UsersList />
      </View>
      <View style={{flex:0.5}}>
        <TextInput
             style={{height: 40}}
             placeholder="enter number"
             onChangeText={textinp => this.setState({numberI: textinp}) }
             defaultValue={this.state.numberI}
        />
        <TouchableOpacity onPress={() => this.props.incrementByNumber(Number(this.state.numberI))}>
                <Text style={{ fontSize: 24, color: 'blue' }}>
               Press IncrementContByNum
               </Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => this.incrementCont()}>
              <Text style={{ fontSize: 24, color: 'red' }}>
                Press
              </Text>
           </TouchableOpacity>
           <Text style={{ fontSize: 24, color: 'red' }}>
              state contador padre: {this.state.contador}
            </Text>
            <Text style={{ fontSize: 24, color: 'green' }}>
              VarGlobal: {this.props.testreduxmessage}
            </Text>
            <TouchableOpacity onPress={() => this.props.incrementCont()}>
              <Text style={{ fontSize: 24, color: 'blue' }}>
                Press IncrementCont
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.decrementCont()}>
              <Text style={{ fontSize: 24, color: 'blue' }}>
                Press DecrementCont
              </Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 24, color: 'green' }}>
                {this.props.conta}
              </Text>
            <Conthijo1 contador={this.state.contador} />
         </View>
    </SafeAreaView>

     );
   }
 }
  const styles = StyleSheet.create({
   safeArea: {
     flex: 1,
     backgroundColor: '#ddd'
   }
 });

 const mapStateToProps = state => {
  return { 
    testreduxmessage: state.test,
    conta: state.conta,
    picture: state.image
   };
 };
 const mapDispatchToProps = {
  incrementCont,
  decrementCont,
  incrementByNumber
 }
 export default connect(mapStateToProps, mapDispatchToProps)(Padre);