import React from 'react';
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

class Conthijo2 extends React.PureComponent {

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
            <Text style={{ fontSize: 24, color: 'red' }}>
                cont hijo2: {this.props.contador}
            </Text>
            <Text style={{ fontSize: 24, color: 'green' }}>
              VarGlobal: {this.props.testreduxmessage}
            </Text>
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
    testreduxmessage: state.test
   };
 };
 const mapDispatchToProps = {
 }
 export default connect(mapStateToProps, mapDispatchToProps)(Conthijo2);
