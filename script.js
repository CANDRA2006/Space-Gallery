const galleryData = [
    // 8 PLANET TATA SURYA
    { title: "Merkurius", description: "Planet terkecil dan terdekat dengan Matahari. Merkurius memiliki permukaan yang dipenuhi kawah dan suhu ekstrem.", category: "planet", image: "assets/images/Merkurius.jpg" },
    { title: "Venus", description: "Planet terpanas di tata surya dengan atmosfer tebal. Dikenal sebagai Bintang Fajar atau Bintang Senja.", category: "planet", image: "assets/images/Venus.jpg" },
    { title: "Bumi", description: "Planet ketiga dari Matahari dan satu-satunya planet yang diketahui memiliki kehidupan. Planet biru kita yang indah.", category: "planet", image: "assets/images/Bumi.jpg" },
    { title: "Mars", description: "Planet merah yang menjadi target utama eksplorasi manusia. Memiliki gunung tertinggi di tata surya, Olympus Mons.", category: "planet", image: "assets/images/Mars.jpg" },
    { title: "Jupiter", description: "Planet terbesar di tata surya dengan Bintik Merah Besar yang ikonik. Memiliki 79 bulan yang diketahui.", category: "planet", image: "assets/images/Jupiter.jpg" },
    { title: "Saturnus", description: "Planet dengan sistem cincin paling spektakuler. Cincinnya terbuat dari miliaran partikel es dan batuan.", category: "planet", image: "assets/images/Saturnus.jpg" },
    { title: "Uranus", description: "Planet es raksasa yang berotasi miring. Sumbu rotasinya hampir sejajar dengan bidang orbitnya.", category: "planet", image: "assets/images/Uranus.jpg" },
    { title: "Neptunus", description: "Planet terjauh dari Matahari dengan angin tercepat di tata surya. Memiliki bulan Triton yang menarik.", category: "planet", image: "assets/images/Neptunus.jpg" },

    // GALAKSI (5 items)
    { title: "Galaksi Andromeda", description: "Galaksi spiral terdekat dengan Bima Sakti. Akan bertabrakan dengan galaksi kita dalam 4 miliar tahun.", category: "galaksi", image: "assets/images/Andromeda.jpg" },
    { title: "Galaksi Bima Sakti", description: "Galaksi rumah kita yang berbentuk spiral barr. Memiliki miliaran bintang dan lubang hitam supermasif di pusatnya.", category: "galaksi", image: "assets/images/Galaksi Bima Sakti.jpg" },
    { title: "Galaksi Sombrero", description: "Galaksi spiral dengan cincin debu yang menyerupai topi sombrero. Terletak 29 juta tahun cahaya dari Bumi.", category: "galaksi", image: "assets/images/Sombrero.jpg" },
    { title: "Galaksi Centaurus A", description: "Galaksi elips dengan jet radio dari lubang hitam supermasif. Salah satu objek radio paling terang di langit.", category: "galaksi", image: "assets/images/Centaurus.jpg" },
    { title: "Galaksi Triangulum", description: "Galaksi spiral kecil di konstelasi Triangulum. Anggota Grup Lokal seperti Bima Sakti.", category: "galaksi", image: "assets/images/Triangulum.jpg" },

    // NEBULA (5 items)
    { title: "Nebula Orion", description: "Nebula emisi terdekat yang terlihat dengan mata telanjang. Tempat kelahiran bintang-bintang baru.", category: "nebula", image: "assets/images/Orion.jpg" },
    { title: "Nebula Carina", description: "Nebula emisi raksasa di rasi Carina. Salah satu wilayah pembentukan bintang paling aktif di langit.", category: "nebula", image: "assets/images/Carina.jpg" },
    { title: "Nebula Helix", description: "Nebula planetary yang dikenal sebagai Mata Setan. Terletak 650 tahun cahaya dari Bumi.", category: "nebula", image: "assets/images/Helix.jpg" },
    { title: "Nebula Eagle", description: "Nebula emisi dengan Pilar Penciptaan yang ikonik. Rumah bagi gugus bintang muda.", category: "nebula", image: "assets/images/Eagle.jpg" },
    { title: "Nebula Crab", description: "Sisa supernova dari ledakan tahun 1054. Berisi pulsar yang berputar 30 kali per detik.", category: "nebula", image: "assets/images/Crab.jpg" },

    // TAMBAHAN CAMPURAN (4 items)
    { title: "Bulan Purnama", description: "Foto langit malam dengan Bulan purnama yang dramatis di atas lanskap pegunungan.", category: "planet", image: "assets/images/Bulan.jpg" },
    { title: "Aurora Borealis", description: "Cahaya utara yang menakjubkan di langit Arktik, disebabkan oleh partikel matahari.", category: "lainnya", image: "assets/images/Aurora.jpg" },
    { title: "Komet Halley", description: "Komet periodik terkenal yang terlihat setiap 76 tahun. Foto saat mendekati Matahari.", category: "lainnya", image: "assets/images/halley.jpg" },
    { title: "Black Hole M87", description: "Gambar pertama lubang hitam supermasif yang diambil oleh Event Horizon Telescope.", category: "galaksi", image: "assets/images/Lubang Hitam.jpg" }
];


        function showSection(sectionId) {
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => section.classList.remove('active'));

            document.getElementById(sectionId).classList.add('active');

            const links = document.querySelectorAll('.nav-links a');
            links.forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');

            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.remove('active');
        }

        // Fungsi toggle menu mobile
        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }

        // Fungsi toggle dropdown filter
        function toggleDropdown() {
            const dropdown = document.getElementById('filterDropdown');
            dropdown.classList.toggle('active');
        }

        // Fungsi filter galeri
        function filterGallery(category) {
            const galleryContainer = document.getElementById('galleryContainer');
            galleryContainer.innerHTML = '';

            const filteredData = category === 'all' ? galleryData : galleryData.filter(item => item.category === category);

            filteredData.forEach(item => {
                const article = document.createElement('article');
                article.innerHTML = `
                    <img src="${item.image}" alt="${item.title}" class="article-image">
                    <div class="article-content">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <span class="category-tag">${item.category.toUpperCase()}</span>
                    </div>
                `;
                galleryContainer.appendChild(article);
            });

            // Tutup dropdown
            document.getElementById('filterDropdown').classList.remove('active');
        }

        // Fungsi populate galeri awal
        function populateGallery() {
            filterGallery('all');
        }

        // Fungsi handle form submit
        (function(){
            emailjs.init("YOUR_USER_ID"); // Ganti dengan User ID EmailJS kamu
        })();

        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Kirim email via EmailJS
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message
            }).then(() => {
                alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.`);
                event.target.reset();
            }, (error) => {
                alert('Gagal mengirim pesan: ' + error.text);
            });
        });

        // Event listener untuk klik di luar dropdown
        document.addEventListener('click', function(event) {
            const dropdown = document.getElementById('filterDropdown');
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove('active');
            }
        });

        // Inisialisasi saat halaman dimuat
        document.addEventListener('DOMContentLoaded', function() {
            populateGallery();
        });