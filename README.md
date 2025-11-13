# 🌌 Cosmic Gallery

Website hasil latihan membuat galeri fotografi alam semesta yang menampilkan keindahan objek-objek langit seperti planet, galaksi, nebula, dan fenomena astronomi lainnya.

## 📖 Deskripsi

Cosmic Gallery adalah platform galeri fotografi yang didedikasikan untuk menampilkan keindahan alam semesta. Website ini menampilkan koleksi foto-foto spektakuler dari berbagai objek langit termasuk:

- 🪐 8 Planet di Tata Surya
- 🌌 Galaksi (Andromeda, Bima Sakti, Sombrero, dll)
- ☁️ Nebula (Orion, Carina, Eagle, dll)
- ⭐ Objek Langit Lainnya (Aurora, Komet, Black Hole)

## ✨ Fitur

- **Halaman Beranda**: Profil fotografer dengan informasi lengkap
- **Galeri Interaktif**: Tampilan grid responsif dengan 20+ foto astronomi
- **Filter Kategori**: Filter foto berdasarkan kategori (Planet, Galaksi, Nebula, Lainnya)
- **Halaman Tentang**: Informasi detail tentang galeri dan statistik
- **Formulir Kontak**: Halaman kontak dengan informasi media sosial
- **Desain Responsif**: Optimized untuk desktop, tablet, dan mobile
- **UI Modern**: Gradien cosmic dengan efek glassmorphism dan blur

## 🚀 Teknologi yang Digunakan

- **HTML5**: Struktur website
- **CSS3**: Styling dengan gradient, backdrop-filter, dan animasi
- **JavaScript**: Interaktivitas dan filter galeri
- **Font Awesome 6.4.0**: Icon library

## 📂 Struktur Folder

```
cosmic-gallery/
│
├── index.html              # Halaman utama
├── style.css               # File styling
├── script.js               # JavaScript untuk interaktivitas
├── README.md               # Dokumentasi
│
├── assets/
│   └── images/             # Folder gambar
│       ├── Merkurius.jpg
│       ├── Venus.jpg
│       ├── Bumi.jpg
│       ├── Mars.jpg
│       ├── Jupiter.jpg
│       ├── Saturnus.jpg
│       ├── Uranus.jpg
│       ├── Neptunus.jpg
│       ├── Andromeda.jpg
│       ├── Galaksi Bima Sakti.jpg
│       ├── Sombrero.jpg
│       ├── Centaurus.jpg
│       ├── Triangulum.jpg
│       ├── Orion.jpg
│       ├── Carina.jpg
│       ├── Helix.jpg
│       ├── Eagle.jpg
│       ├── Crab.jpg
│       ├── Bulan.jpg
│       ├── Aurora.jpg
│       ├── halley.jpg
│       └── Lubang Hitam.jpg
│
└── Profile.jpg             # Foto profil fotografer
```

## 🛠️ Instalasi & Penggunaan

### Cara 1: Clone Repository

```bash
# Clone repository
git clone https://github.com/candra2006/space-gallery.git

# Masuk ke folder project
cd space-gallery

# Buka index.html di browser
```

### Cara 2: Download ZIP

1. Download file ZIP dari repository
2. Extract file ke folder pilihan Anda
3. Buka `index.html` dengan browser

### Cara 3: Live Server (Recommended untuk Development)

```bash
# Jika menggunakan VS Code dengan Live Server extension
# Klik kanan pada index.html → Open with Live Server
```

## 📸 Menambahkan Foto Baru

Untuk menambahkan foto baru ke galeri:

1. Letakkan file gambar di folder `assets/images/`
2. Edit file `script.js` dan tambahkan objek baru ke array `galleryData`:

```javascript
{
    title: "Nama Objek",
    description: "Deskripsi singkat objek",
    category: "planet/galaksi/nebula/lainnya",
    image: "assets/images/nama-file.jpg"
}
```

## 🎨 Kustomisasi

### Mengubah Warna Theme

Edit variabel warna di `style.css`:

```css
/* Background gradient */
background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);

/* Accent color */
color: #667eea; /* Biru-ungu */
color: #764ba2; /* Ungu */
```

### Mengubah Font

Ganti font di bagian `body` pada `style.css`:

```css
body {
    font-family: 'Your-Font-Name', sans-serif;
}
```

## 📱 Responsive Design

Website ini fully responsive dengan breakpoints:

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🌟 Fitur yang Akan Datang

- [ ] Lightbox untuk preview gambar full screen
- [ ] Fitur search untuk mencari objek spesifik
- [ ] Pagination untuk galeri
- [ ] Integrasi dengan EmailJS untuk form kontak
- [ ] Dark/Light mode toggle
- [ ] Animasi loading untuk gambar
- [ ] Zoom in/out pada gambar

## 👤 Autor

**Candra Sya'bana Putra Gunadi**

- 📧 Email: [chandraq818@gmail.com](mailto:chandraq818@gmail.com)
- 📷 Instagram: [@404.cndr](https://www.instagram.com/404.cndr)
- 💼 LinkedIn: [Candra Sya'bana Putra Gunadi](https://www.linkedin.com/in/candra-sya-bana-putra-gunadi-088048353)
- 🎵 TikTok: [@_cndrsy](https://www.tiktok.com/@_cndrsy?is_from_webapp=1&sender_device=pc)


## 🙏 Kredit

- Font Awesome untuk icon library
- Unsplash untuk beberapa gambar referensi
- Wikipedia untuk sumber gambar astronomi

## 🐛 Pelaporan Bug

Jika Anda menemukan bug atau masalah, silakan buat issue baru di repository atau hubungi melalui email.

## 💡 Kontribusi

Kontribusi selalu welcome! Jika Anda ingin berkontribusi:

1. Fork repository
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

---

⭐ Jangan lupa berikan star jika Anda menyukai project ini!

🌌 **"Exploring the Universe, One Photo at a Time"**
