import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import gambar (pastikan lokasi gambar benar)
const profileImage = require('../../assets/profile.jpeg');

// Komponen untuk Profile Screen
const ProfileScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Image source={profileImage} style={styles.profileImage} />
      <Text style={styles.title}>Biodata Diri</Text>
      <Text style={styles.label}>NIM: 222505068</Text>
      <Text style={styles.label}>Nama: Tiara Herdiana</Text>
    </View>
  );
};

// Komponen untuk About Me Screen
const AboutMeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tentang Saya</Text>
      <Text style={styles.description}>
        Saya adalah mahasiswa jurusan Sistem Informasi semester 5. Saya suka belajar hal baru dan
        berkreativitas.
      </Text>
    </View>
  );
};

// Komponen untuk Hobbies Screen
const HobbiesScreen = ({ navigation }: { navigation: any }) => {
  const hobbies = ['Desain', 'Menjahit', 'Membuat Program', 'Makeup', 'Menonton Film'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hobi Saya</Text>
      {hobbies.map((hobby, index) => (
        <Text key={index} style={styles.hobbyItem}>
          • {hobby}
        </Text>
      ))}
    </View>
  );
};

// Membuat Drawer Navigator
const Drawer = createDrawerNavigator();

// Komponen Utama
export default function App() {
  return (
    // Tidak perlu NavigationContainer di sini jika sudah ada di root
    <Drawer.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: { backgroundColor: '#9EDF9C' }, // Army green header
        headerTintColor: '#ffffff',
        drawerStyle: { backgroundColor: '#d0e5d8' }, // Light army green background
        drawerActiveTintColor: '#4b5320', // Army green for active item
        drawerInactiveTintColor: '#3c4233', // Darker army green for inactive items
      }}
    >
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="AboutMe" component={AboutMeScreen} />
      <Drawer.Screen name="Hobbies" component={HobbiesScreen} />
    </Drawer.Navigator>
  );
}

// StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4', // Light beige background
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4b5320', // Army green text
  },
  label: {
    fontSize: 18,
    color: '#3c4233', // Darker army green
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#3c4233',
    textAlign: 'center',
    marginBottom: 20,
  },
  hobbyItem: {
    fontSize: 16,
    color: '#4b5320',
    marginBottom: 5,
  },
});
