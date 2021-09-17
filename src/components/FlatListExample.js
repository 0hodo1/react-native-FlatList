import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import data from '../../data';

const Item = ({title, company, index}) => (
  <TouchableOpacity
    style={[
      styles.itemContainer,
      {backgroundColor: index % 2 === 0 ? '#f1f1f1' : ''},
    ]}>
    <Image
      style={styles.avatar}
      source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
    />
    <View style={styles.textContainer}>
      <Text style={styles.name}>{title}</Text>
      <Text>{company}</Text>
    </View>
  </TouchableOpacity>
);

const FlatListExample = () => {
  state = {
    text: '',
    contacts: data,
  };
  const renderItem = ({item, index}) => (
    <Item
      title={item.name}
      picture={item.picture}
      company={item.company}
      index={index}
    />
  );

  searchFilter = text => {
    const newData = data.filter(item => {
      const listItem = `${item.name.toLowerCase()} ${item.company.toLowerCase()}`;

      return listItem.indexOf(text.toLowerCase()) > -1;
    });

    this.setState({
      contacts: newData,
    });
  };

  renderHeader = () => {
    const {text} = this.state;
    return (
      <View style={styles.searchContainer}>
        <TextInput
          onChangeText={text => {
            this.setState({text});
            this.searchFilter(text);
          }}
          value={text}
          placeholder="Search..."
          style={styles.searchInput}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={this.renderHeader()}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        data={this.state.contacts}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#3df',
    borderRadius: 25,
    marginHorizontal: 10,
  },
  textContainer: {
    justifyContent: 'space-around',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchInput: {
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  searchContainer: {
    padding: 10,
  },
});

export default FlatListExample;
