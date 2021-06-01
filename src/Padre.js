import React from 'react';
import Conthijo1 from './Conthijo1';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { incrementCont, decrementCont } from './actions/AppActions';

class Padre extends React.PureComponent {

  constructor(props) {
    super(props);
   this.cont = 0;

   this.state = {
    contador : 0
  
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
      <View style={{flex:0.1, flexDirection:'row', backgroundColor:'cyan'}}>
            <Text>Esteban</Text>
            <Text>Pasiandolo</Text>
            <Text>Jose Maria Moreno 2087</Text>
      </View>
      <View style={{flex:0.8,}}>
           <TouchableOpacity onPress={() => this.press()}>
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
    conta: state.conta
   };
 };
 const mapDispatchToProps = {
  incrementCont,
  decrementCont
 }
 export default connect(mapStateToProps, mapDispatchToProps)(Padre);