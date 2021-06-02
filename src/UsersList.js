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
  Image,
  ActivityIndicator
} from 'react-native';
 
import { connect } from 'react-redux';
import {setPicture, fetchUsers  }  from './actions/AppActions';

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
    image: '',
    dataSource: [],
    isLoading: true
   }
 }

 async componentDidMount() {
  //  setTimeout(() => {
  //   return fetch('https://randomuser.me/api/?results=3')
  //   .then(response => response.json())
  //   .then(responseJson => {
  //       console.log('datasource: ');
  //       console.log(responseJson)
  //     this.setState(
  //       {
  //         isLoading: false,
  //         dataSource: responseJson,
  //       }
  //     );
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
  //  }, 5000);
  ///////////////////
  // try {
  //   const respo = await fetch('https://randomuser.me/api/?results=3')
  //   const responseJson = await respo.json();
  //    console.log(responseJson)
  //       this.setState(
  //         {
  //           isLoading: false,
  //           dataSource: responseJson,
  //         }
  //       );
  //   } catch (error)
  //   {
  //     console.log(error)
  //   }
  /////////////////
  this.props.fetchUsers();
}

 
 
 
 renderItem = ({ item }) => (
   <View>
       {/* {this.state.image!='' &&
       <Image source = {{uri: this.state.image}}
       style = {{ width: 200, height: 200 }}
       />
 } */}
      <TouchableOpacity onPress={() => this._onPress(item)}>
        <Text>{item.name.first} </Text>
        <Text>{item.name.last} </Text>
        <Text>{item.location.street.name} {item.location.street.number}</Text>
     </TouchableOpacity>
    </View>
);


_onPress = (item) => {
 console.log('press en: '+item.name.first)
}

 
 
 
   render() {
  
     return (
      <SafeAreaView style={styles.safeArea}>
      {/* { (!this.state.isLoading) ? */}
           { (this.props.isfetching===false) ?
       <View>
            <FlatList
            //  data={this.state.dataSource.results}
            data={this.props.userslist.results}
             renderItem={this.renderItem}
             keyExtractor={item => item.login.uuid}
            />
      </View>
       :
       <View>
        <ActivityIndicator size="large" color="#00ff00"/>
       </View>
   }
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
    userslist: state.users,
    isfetching: state.isFetching
    };
 };
 const mapDispatchToProps = {
    setPicture,
    fetchUsers
  }
 export default connect(mapStateToProps, mapDispatchToProps)(UsersList);