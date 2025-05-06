import React, { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, ScrollView,
  TouchableOpacity, Image
} from 'react-native';

export default function RegistScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onRegister = () => {
    if (!email || !password || !confirmPassword) {
      alert('Isi semua field!');
      return;
    }
    if (password !== confirmPassword) {
      alert('Password tidak cocok!');
      return;
    }
    navigation.replace('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      <Text style={styles.heading}>Create your Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={onRegister}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>— Or sign up with —</Text>

      <View style={styles.socialRow}>
        <SocialIcon platform="google" />
        <SocialIcon platform="facebook" />
        <SocialIcon platform="twitter" />
      </View>
    </ScrollView>
  );
}

const SocialIcon = ({ platform }) => {
  const logos = {
    google: require('../assets/google.png'),
    facebook: require('../assets/facebook.png'),
    twitter: require('../assets/twitter.png'),
  };

  return (
    <TouchableOpacity style={styles.socialButton}>
      <Image source={logos[platform]} style={styles.socialIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 160,
    resizeMode: 'contain',
    marginBottom: 1
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333'
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: '#0033A0',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600'
  },
  orText: {
    marginVertical: 15,
    color: '#999'
  },
  socialRow: {
    flexDirection: 'row',
    gap: 10
  },
  socialButton: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginHorizontal: 5
  },
  socialIcon: {
    width: 25,
    height: 25
  }
});
