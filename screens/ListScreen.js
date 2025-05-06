import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ListScreen({ navigation }) {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const json = await AsyncStorage.getItem('dataBooking');
    if (json) setData(JSON.parse(json));
  };

  const deleteItem = async (index) => {
    const filtered = data.filter((_, i) => i !== index);
    setData(filtered);
    await AsyncStorage.setItem('dataBooking', JSON.stringify(filtered));
    Alert.alert('Booking berhasil dihapus!');
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadData);
    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📋 Daftar Booking Tour</Text>

      {data.length === 0 ? (
        <Text style={styles.emptyText}>Belum ada booking. Ayo tambahkan paket perjalanan kamu!</Text>
      ) : (
        data.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>🎫 {item.namaPaket}</Text>
            <Text>ID Booking: {item.idBooking}</Text>
            <Text>Tujuan: {item.lokasiTujuan}</Text>
            <Text>Pemesan: {item.pemesan}</Text>
            <Text>Jumlah Orang: {item.jumlahOrang}</Text>
            <Text>Tanggal Berangkat: {item.tanggalKeberangkatan}</Text>
            <Text>Peserta: {item.namaPeserta}</Text>

            <View style={styles.actions}>
              <Button
                title="✏️ Edit"
                color="#00796B"
                onPress={() => navigation.navigate('Form', { editIndex: index })}
              />
              <Button
                title="🗑 Hapus"
                color="#D32F2F"
                onPress={() => deleteItem(index)}
              />
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F0FDFB',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#00B8A9',
  },
  emptyText: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#888',
    marginTop: 40,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e0f2f1',
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: '#00796B',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
