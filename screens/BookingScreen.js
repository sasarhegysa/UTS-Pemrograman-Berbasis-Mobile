import React, { useState } from 'react';
import {
  View, Text, TextInput, Button, ScrollView, StyleSheet, Platform, Alert, TouchableOpacity
} from 'react-native';
import Slider from '@react-native-community/slider';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function BookingScreen() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [tanggal, setTanggal] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [jumlahDewasa, setJumlahDewasa] = useState(1);
  const [jumlahAnak, setJumlahAnak] = useState(0);
  const [durasi, setDurasi] = useState('');
  const [paket, setPaket] = useState('Ekonomis');
  const [fasilitas, setFasilitas] = useState({
    'Antar Jemput Bandara': false,
    'Dokumentasi Perjalanan': false,
    'Tiket Masuk Tambahan': false
  });
  const [catatan, setCatatan] = useState('');
  const [metodeBayar, setMetodeBayar] = useState('');
  const [setujuSK, setSetujuSK] = useState(false);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleDateChange = (event, selectedDate) => {
    setShowDate(false);
    if (selectedDate) setTanggal(selectedDate);
  };

  const handleSubmit = () => {
    if (!nama || !email || !whatsapp || !durasi || !metodeBayar) {
      Alert.alert('Gagal', 'Semua field wajib diisi!');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Format Email Salah', 'Masukkan email yang valid!');
      return;
    }

    if (!setujuSK) {
      Alert.alert('Belum Setuju', 'Kamu harus menyetujui Syarat & Ketentuan.');
      return;
    }

    const fasilitasDipilih = Object.keys(fasilitas).filter(k => fasilitas[k]);

    Alert.alert(
      '✅ Pemesanan Berhasil!',
      `Nama: ${nama}\nEmail: ${email}\nWA: ${whatsapp}\nTanggal: ${tanggal.toDateString()}\nDewasa: ${jumlahDewasa}, Anak: ${jumlahAnak}\nDurasi: ${durasi}\nPaket: ${paket}\nFasilitas: ${fasilitasDipilih.join(', ')}\nCatatan: ${catatan}\nMetode: ${metodeBayar}`
    );

    setNama('');
    setEmail('');
    setWhatsapp('');
    setTanggal(new Date());
    setJumlahDewasa(1);
    setJumlahAnak(0);
    setDurasi('');
    setPaket('Ekonomis');
    setFasilitas({
      'Antar Jemput Bandara': false,
      'Dokumentasi Perjalanan': false,
      'Tiket Masuk Tambahan': false
    });
    setCatatan('');
    setMetodeBayar('');
    setSetujuSK(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Form Pemesanan</Text>

      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Nama Lengkap"
          value={nama}
          onChangeText={setNama}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Aktif"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Nomor WhatsApp"
          keyboardType="phone-pad"
          value={whatsapp}
          onChangeText={setWhatsapp}
        />

        <TouchableOpacity style={styles.dateButton} onPress={() => setShowDate(true)}>
          <Text style={styles.dateText}>{tanggal.toDateString()}</Text>
        </TouchableOpacity>
        {showDate && (
          <DateTimePicker
            value={tanggal}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={handleDateChange}
          />
        )}

        <Text style={styles.label}>Jumlah Dewasa: {jumlahDewasa}</Text>
        <Slider
          minimumValue={1}
          maximumValue={10}
          step={1}
          value={jumlahDewasa}
          onValueChange={setJumlahDewasa}
        />

        <Text style={styles.label}>Jumlah Anak-anak: {jumlahAnak}</Text>
        <Slider
          minimumValue={0}
          maximumValue={5}
          step={1}
          value={jumlahAnak}
          onValueChange={setJumlahAnak}
        />

        <TextInput
          style={styles.input}
          placeholder="Durasi (contoh: 3H2M)"
          value={durasi}
          onChangeText={setDurasi}
        />

        <Text style={styles.label}>Pilih Jenis Paket</Text>
        {['Ekonomis', 'Premium', 'Private'].map((option) => (
          <TouchableOpacity
            key={option}
            style={styles.radioOption}
            onPress={() => setPaket(option)}
          >
            <Text style={styles.radioText}>
              {paket === option ? '🔘' : '⚪'} {option}
            </Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.label}>Fasilitas Tambahan</Text>
        {Object.keys(fasilitas).map((key) => (
          <TouchableOpacity
            key={key}
            style={styles.checkbox}
            onPress={() => setFasilitas((prev) => ({ ...prev, [key]: !prev[key] }))}
          >
            <Text>{fasilitas[key] ? '✅' : '⬜'} {key}</Text>
          </TouchableOpacity>
        ))}

        <TextInput
          style={[styles.input, { height: 80 }]}
          multiline
          placeholder="Catatan tambahan (opsional)"
          value={catatan}
          onChangeText={setCatatan}
        />

        <TextInput
          style={styles.input}
          placeholder="Metode Pembayaran (Transfer, QRIS, dll)"
          value={metodeBayar}
          onChangeText={setMetodeBayar}
        />

        <TouchableOpacity onPress={() => setSetujuSK(!setujuSK)} style={styles.checkbox}>
          <Text>{setujuSK ? '✅' : '⬜'} Saya setuju dengan S&K</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Kirim Pemesanan</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0033A0',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#fff'
  },
  dateButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12
  },
  dateText: {
    fontSize: 16,
    color: '#333'
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#333'
  },
  radioOption: {
    marginBottom: 8
  },
  radioText: {
    fontSize: 16
  },
  checkbox: {
    marginVertical: 6
  },
  submitButton: {
    backgroundColor: '#0033A0',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
