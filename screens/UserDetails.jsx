import React from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const UserDetails = ({ route }) => {
  const { user } = route.params;

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <View style={styles.card}>
        {/* Name */}
        <View style={styles.row}>
          <MaterialIcons name="person" size={20} color="#666" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{user.name}</Text>
          </View>
        </View>

        {/* Email */}
        <View style={styles.row}>
          <MaterialIcons name="email" size={20} color="#666" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{user.email}</Text>
          </View>
        </View>

        {/* Address */}
        <View style={styles.row}>
          <MaterialIcons name="home" size={20} color="#666" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>
              {user.address.street}, {user.address.city}, {user.address.zipcode}
            </Text>
          </View>
        </View>

        {/* Company */}
        <View style={styles.row}>
          <MaterialIcons name="business" size={20} color="#666" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.label}>Company:</Text>
            <Text style={styles.value}>{user.company.name}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  label: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
    marginBottom: 5,
  },
  value: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },
});

export default UserDetails;
