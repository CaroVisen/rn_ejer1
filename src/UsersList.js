import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';
 
import { connect } from 'react-redux';
import {setPicture}  from './actions/AppActions';

const DATA = [
   {
     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
     name: 'Jorge',
     lastName: 'Ibizu',
     street: 'Magallanes 2345',
     picture: 'https://randomuser.me/api/portraits/med/men/32.jpg'
   },
   {
     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
     name: 'Martin',
     lastName: 'Spika',
     street: 'Trelew 345',
     picture: 'https://randomuser.me/api/portraits/med/women/41.jpg'
   },
   {
     id: '58694a0f-3da1-471f-bd96-145571e29d72',
     name: 'Esteban',
     lastName: 'Quito',
     street: 'Lezama 5987',
     picture: 'https://randomuser.me/api/portraits/med/women/74.jpg'
   },
 ];
 
 
 
class UsersList extends React.PureComponent {
 
  
 constructor(props) {
   super(props);
   this.state = {
    image: ''
   }
 }

 
 
 
 renderItem = ({ item }) => (
   <View>
       {/* {this.state.image!='' &&
       <Image source = {{uri: this.state.image}}
       style = {{ width: 200, height: 200 }}
       />
 } */}
        <TouchableOpacity onPress={() => this._onPress(item)}  style={{flexDirection:'row'}}>
                 <Text style={{flex:0.2}}>{item.name} </Text>
                 <Text style={{flex:0.2}}>{item.lastName} </Text>
                 <Text style={{flex:0.5}}>{item.street} </Text>
     </TouchableOpacity>
  </View>
);
 
_onPress = (item) => {
 console.log('press en: '+item.name)
 this.setState({image: item.picture});
 console.log(this.state.image);
 this.props.setPicture(this.state.image);
}
 
 
 
   render() {
  
 console.log('users list')
     return (
       <SafeAreaView style={styles.safeArea}>
        <View>
       
             <FlatList
              data={DATA}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
             />
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
    };
 };
 const mapDispatchToProps = {
    setPicture
  }
 export default connect(mapStateToProps, mapDispatchToProps)(UsersList);