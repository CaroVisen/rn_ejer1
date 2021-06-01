import React from 'react';
import Conthijo2 from './Conthijo2';
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

class Conthijo1 extends React.PureComponent {

  constructor(props) {
    super(props);

   this.state = {
    contadorHijo1 : 0
  
   }
 
  }
  
  static getDerivedStateFromProps(props, state) {
 
    console.log('getDerived:' + props.contador)
    console.log('getDerived:' + state.contadorHijo1)
    if(state.contadorHijo1===0)
    return {
       contadorHijo1: props.contador
    };

  // }
  return null;
}

  press = () => {
    this.setState({contadorHijo1: this.state.contadorHijo1 + 1})
  }
 

   render() {
   
      return (
       <SafeAreaView style={styles.safeArea}>
       <View style={{flex:1, flexDirection:'column'}}>
            <TouchableOpacity onPress={() => this.press()}>
                <Text>
                    Press ContHijo1
                </Text>
            </TouchableOpacity>
           <Text style={{ fontSize: 24, color: 'red' }}>
                   cont hijo1: {this.props.contador}
            </Text>
            <Text>
            cont hijo1 state: {this.state.contadorHijo1}
            </Text>
            {(this.props.contador>5)  ?
                <Text style={{ fontSize: 24, color: 'red' }}>
                contador hijo 1 supero 5
                </Text> 
            :
                <Text style={{ fontSize: 24, color: 'red' }}>
                contador hijo 1 NO supero 5
                </Text>
            } 
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
            <Conthijo2 contador={this.props.contador} />
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
 export default connect(mapStateToProps, mapDispatchToProps)(Conthijo1);
