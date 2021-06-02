import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Modal
} from 'react-native';
import { connect } from 'react-redux';
import { incrementCont, incrementByNumber } from './actions/AppActions';
 
 
class IncrementModal extends React.PureComponent {
 
 
 constructor(props) {
   super(props);
  this.cont = 0;
 
  this.state = {
   // contador : 0,
   numberI: '',
   // showModalIncrement: false
 
  }
 }
 
 
 
 
 incrementContByNumber = () =>
 {
   // this.props.incrementCont();
   this.props.incrementByNumber(Number(this.state.numberI))
 }
 
//  closeModalIncrement = () =>
//  {
//    this.setState({showModalIncrement: false})
//  }
 
 
   render() {
       // <View style={{flex:0.1, flexDirection:'row', backgroundColor:'yellow' }}>
    console.log('render padre')
     return (
       <SafeAreaView style={styles.safeArea}>
      
         <View style={{flex:1, flexDirection:'column'}}>
        
{/* Modal */}
 
<Modal
         visible={this.state.showModalIncrement}
         transparent={true}
         onRequestClose={() => console.log("Close was requested")}
       >
         <View
    
           style={{
             //  margin:20,
             padding: 10,
          //   backgroundColor: "#475788",
              backgroundColor:"rgba(0,0,0,0.85)",
             top: 20,
             left: 15,
             right: 15,
             position: "absolute",
             borderBottomLeftRadius: 22,
             borderBottomRightRadius: 22,
             borderTopLeftRadius: 22,
             borderTopRightRadius: 22
 
             //  alignItems: 'center'
           }}
         >
           <View style={{ flex: 1, alignItems: "center" }}>
           <TextInput
             style={{height: 40, backgroundColor: 'white'}}
             placeholder="enter number"
             onChangeText={textinp => this.setState({numberI: textinp}) }
             defaultValue={this.state.numberI}
           /> 
              <TouchableOpacity
               onPress={() => this.incrementContByNumber()}
               style={{ paddingTop: 8, paddingBottom: 4, flex: 0.5 }}
             >
               <Text style={{ color: "#999", fontSize: 22 }}>Increment</Text>
             </TouchableOpacity>
         
             <TouchableOpacity
               onPress={() => this.props.closemodalincrement()}
               style={{ paddingTop: 8, paddingBottom: 4, flex: 0.5 }}
             >
               <Text style={{ color: "#999", fontSize: 22 }}>Cerrar Modal</Text>
             </TouchableOpacity>

           </View>
         </View>
       </Modal>
 
 
 
        
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
 incrementByNumber
}
export default connect(mapStateToProps, mapDispatchToProps)(IncrementModal);
