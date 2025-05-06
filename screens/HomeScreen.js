import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView,
  Image, TextInput, TouchableOpacity
} from 'react-native';

export default function HomeScreen({ navigation }) {
    const [activeCategory, setActiveCategory] = useState('Semua');
  
    const categories = ['Semua', 'Pantai', 'Gunung', 'Budaya', 'Kuliner'];
  
    const filteredData = activeCategory === 'Semua'
      ? rekomendasiData
      : rekomendasiData.filter((item) => item.category === activeCategory);
  
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Temukan Paket Wisata Impianmu</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Cari destinasi, paket, atau kota..."
          placeholderTextColor="#aaa"
        />
  
        {/* Tabs */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabContainer}>
          {categories.map((cat, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.tab,
                activeCategory === cat && styles.activeTab
              ]}
              onPress={() => setActiveCategory(cat)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeCategory === cat && styles.activeTabText
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
  
        {/* Highlight Cards Vertical */}
        <Text style={styles.sectionTitle}>✨ Paket Populer</Text>
        {highlightData.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSub}>{item.sub}</Text>
              <Text style={styles.cardPrice}>Mulai dari {item.price}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Detail', { item })}
              >
                <Text style={styles.buttonText}>Lihat Detail</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
  
        {/* Horizontal Recommendations */}
        <Text style={styles.sectionTitle}>🔥 Rekomendasi {activeCategory}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {filteredData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.horizontalCard}
              onPress={() => navigation.navigate('Detail', { item })}
            >
              <Image source={item.image} style={styles.horizontalImage} />
              <Text style={styles.horizontalTitle}>{item.title}</Text>
              <Text style={styles.horizontalSub}>{item.location}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
  
        {/* Tambah highlight lagi di bawah */}
        <Text style={styles.sectionTitle}>🌄 Destinasi Lainnya</Text>
        {moreHighlight.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSub}>{item.sub}</Text>
              <Text style={styles.cardPrice}>Mulai dari {item.price}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Detail', { item })}
              >
                <Text style={styles.buttonText}>Lihat Detail</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  }
  

const highlightData = [
  {
    title: 'Explore Bali 4D3N',
    sub: 'Kuta, Ubud, Nusa Penida',
    price: 'Rp 2.499.000',
    image: require('../assets/bali.jpg')
  },
  {
    title: 'Bromo Sunrise',
    sub: 'Gunung Bromo, Jawa Timur',
    price: 'Rp 1.200.000',
    image: require('../assets/bromo.jpg')
  }
];

const moreHighlight = [
  {
    title: 'Komodo Island',
    sub: 'NTT, Indonesia',
    price: 'Rp 3.500.000',
    image: require('../assets/komodo.jpg')
  },
  {
    title: 'Raja Ampat Dive',
    sub: 'Papua Barat',
    price: 'Rp 4.900.000',
    image: require('../assets/rajaampat.jpg')
  }
];

const rekomendasiData = [
  { title: 'Labuan Bajo', location: 'NTT', image: require('../assets/labuanbajo.jpg'), category: 'Pantai' },
  { title: 'Lombok Adventure', location: 'NTB', image: require('../assets/lombok.jpg'), category: 'Pantai' },
  { title: 'Borobudur Tour', location: 'Yogyakarta', image: require('../assets/borobudur2.jpg'), category: 'Budaya' },
  { title: 'Kuliner Padang', location: 'Sumatera Barat', image: require('../assets/nasipadang.jpg'), category: 'Kuliner' },
  { title: 'Bromo Tour', location: 'Jawa Timur', image: require('../assets/bromo2.jpg'), category: 'Gunung' },
  { title: 'Labuan Bajo', location: 'NTT', image: require('../assets/labuanbajo.jpg'), category: 'Pantai' },
  { title: 'Lombok Adventure', location: 'NTB', image: require('../assets/lombok.jpg'), category: 'Pantai' },
  { title: 'Borobudur Tour', location: 'Yogyakarta', image: require('../assets/borobudur2.jpg'), category: 'Budaya' },
  { title: 'Kuliner Padang', location: 'Sumatera Barat', image: require('../assets/nasipadang.jpg'), category: 'Kuliner' },
  { title: 'Bromo Tour', location: 'Jawa Timur', image: require('../assets/bromo2.jpg'), category: 'Gunung' },
  { title: 'Labuan Bajo', location: 'NTT', image: require('../assets/labuanbajo.jpg'), category: 'Pantai' },
  { title: 'Lombok Adventure', location: 'NTB', image: require('../assets/lombok.jpg'), category: 'Pantai' },
  { title: 'Borobudur Tour', location: 'Yogyakarta', image: require('../assets/borobudur2.jpg'), category: 'Budaya' },
  { title: 'Kuliner Padang', location: 'Sumatera Barat', image: require('../assets/nasipadang.jpg'), category: 'Kuliner' },
  { title: 'Bromo Tour', location: 'Jawa Timur', image: require('../assets/bromo2.jpg'), category: 'Gunung' },
  { title: 'Labuan Bajo', location: 'NTT', image: require('../assets/labuanbajo.jpg'), category: 'Pantai' },
  { title: 'Lombok Adventure', location: 'NTB', image: require('../assets/lombok.jpg'), category: 'Pantai' },
  { title: 'Borobudur Tour', location: 'Yogyakarta', image: require('../assets/borobudur2.jpg'), category: 'Budaya' },
  { title: 'Kuliner Padang', location: 'Sumatera Barat', image: require('../assets/nasipadang.jpg'), category: 'Kuliner' },
  { title: 'Bromo Tour', location: 'Jawa Timur', image: require('../assets/bromo2.jpg'), category: 'Gunung' }
];

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    paddingBottom: 60
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 10,
    color: '#222'
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 20
  },
  tabContainer: {
    marginBottom: 10
  },
  tab: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f1f1f1',
    marginRight: 10
  },
  activeTab: {
    backgroundColor: '#0033A0'
  },
  tabText: {
    color: '#333',
    fontWeight: '500'
  },
  activeTabText: {
    color: '#fff'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#333'
  },
  card: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    marginBottom: 20
  },
  image: {
    width: '100%',
    height: 180
  },
  cardContent: {
    padding: 15
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  cardSub: {
    fontSize: 14,
    color: '#777',
    marginVertical: 5
  },
  cardPrice: {
    fontSize: 16,
    color: '#007bff',
    fontWeight: '600',
    marginBottom: 10
  },
  button: {
    backgroundColor: '#0033A0',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  horizontalCard: {
    marginRight: 15,
    width: 150
  },
  horizontalImage: {
    width: '100%',
    height: 100,
    borderRadius: 10
  },
  horizontalTitle: {
    fontWeight: 'bold',
    marginTop: 5
  },
  horizontalSub: {
    fontSize: 12,
    color: '#555'
  }
});
