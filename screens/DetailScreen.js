import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, Image,
  TouchableOpacity
} from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const item = route?.params?.item || {
    title: 'Paket Wisata Default',
    image: 'https://source.unsplash.com/800x400/?travel',
    sub: 'Lokasi tidak diketahui',
    price: 'Rp 0',
    description: 'Detail tidak tersedia. Silakan pilih paket dari HomeScreen.',
    rating: 4.5,
    reviews: 100,
    duration: '4 Hari 3 Malam'
  };

  const getImageSource = (img) => {
    return typeof img === 'number' ? img : { uri: img };
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={getImageSource(item.image)}
        style={styles.mainImage}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.location}>{item.sub || item.location}</Text>
        <Text style={styles.duration}>{item.duration || 'Durasi tidak diketahui'}</Text>

        {/* ⭐ RATING */}
        <View style={styles.ratingRow}>
          <Text style={styles.ratingText}>⭐ {item.rating || 4.5} </Text>
          <Text style={styles.reviewText}>({item.reviews || 100} ulasan)</Text>
        </View>

        <Text style={styles.price}>Mulai dari {item.price || 'Rp 0'}/orang</Text>

        {/* Deskripsi */}
        <Text style={styles.sectionTitle}>Tentang Paket Ini</Text>
        <Text style={styles.description}>
          {item.description || 'Perjalanan menyenangkan dengan berbagai pengalaman unik. Termasuk akomodasi, transportasi, dan itinerary menarik yang akan membuat liburanmu berkesan.'}
        </Text>

        {/* Fasilitas */}
        <Text style={styles.sectionTitle}>Fasilitas</Text>
        <View style={styles.facilityGrid}>
          {facilities.map((fasil, index) => (
            <View key={index} style={styles.facilityItem}>
              <Image source={{ uri: fasil.icon }} style={styles.facilityIcon} />
              <Text style={styles.facilityText}>{fasil.name}</Text>
            </View>
          ))}
        </View>

        {/* Tombol Booking */}
        <TouchableOpacity
          style={styles.bookingButton}
          onPress={() => navigation.navigate('Booking')}
        >
          <Text style={styles.bookingButtonText}>Pesan Sekarang</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const facilities = [
  { name: 'Hotel 3 Malam', icon: 'https://img.icons8.com/color/48/000000/room.png' },
  { name: 'Transport', icon: 'https://img.icons8.com/color/48/000000/bus.png' },
  { name: 'Tour Guide', icon: 'https://img.icons8.com/color/48/000000/tour-guide.png' },
  { name: 'Tiket Wisata', icon: 'https://img.icons8.com/color/48/000000/ticket.png' },
  { name: 'Makan 3x Sehari', icon: 'https://img.icons8.com/color/48/000000/meal.png' },
  { name: 'Asuransi', icon: 'https://img.icons8.com/color/48/000000/health-book.png' }
];

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40
  },
  mainImage: {
    width: '100%',
    height: 260
  },
  content: {
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4
  },
  location: {
    fontSize: 14,
    color: '#777',
    marginBottom: 2
  },
  duration: {
    fontSize: 14,
    color: '#444',
    marginBottom: 6
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  ratingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f5a623',
  },
  reviewText: {
    fontSize: 14,
    color: '#777',
    marginLeft: 6
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007bff',
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10
  },
  description: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22
  },
  facilityGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15
  },
  facilityItem: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 20
  },
  facilityIcon: {
    width: 40,
    height: 40,
    marginBottom: 5
  },
  facilityText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333'
  },
  bookingButton: {
    backgroundColor: '#0033A0',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 50
  },
  bookingButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
