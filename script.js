// Gallery Data - File foto berada di folder assets/
const galleryData = [
    // 8 PLANET TATA SURYA
    { title: "Merkurius", description: "Planet terkecil dan terdekat dengan Matahari. Merkurius memiliki permukaan yang dipenuhi kawah dan suhu ekstrem.", category: "planet", image: "assets/Merkurius.jpg" },
    { title: "Venus", description: "Planet terpanas di tata surya dengan atmosfer tebal. Dikenal sebagai Bintang Fajar atau Bintang Senja.", category: "planet", image: "assets/Venus.jpg" },
    { title: "Bumi", description: "Planet ketiga dari Matahari dan satu-satunya planet yang diketahui memiliki kehidupan. Planet biru kita yang indah.", category: "planet", image: "assets/Bumi.jpg" },
    { title: "Mars", description: "Planet merah yang menjadi target utama eksplorasi manusia. Memiliki gunung tertinggi di tata surya, Olympus Mons.", category: "planet", image: "assets/Mars.jpg" },
    { title: "Jupiter", description: "Planet terbesar di tata surya dengan Bintik Merah Besar yang ikonik. Memiliki 79 bulan yang diketahui.", category: "planet", image: "assets/Jupiter.jpg" },
    { title: "Saturnus", description: "Planet dengan sistem cincin paling spektakuler. Cincinnya terbuat dari miliaran partikel es dan batuan.", category: "planet", image: "assets/Saturnus.jpg" },
    { title: "Uranus", description: "Planet es raksasa yang berotasi miring. Sumbu rotasinya hampir sejajar dengan bidang orbitnya.", category: "planet", image: "assets/Uranus.jpg" },
    { title: "Neptunus", description: "Planet terjauh dari Matahari dengan angin tercepat di tata surya. Memiliki bulan Triton yang menarik.", category: "planet", image: "assets/Neptunus.jpg" },

    // GALAKSI (5 items)
    { title: "Galaksi Andromeda", description: "Galaksi spiral terdekat dengan Bima Sakti. Akan bertabrakan dengan galaksi kita dalam 4 miliar tahun.", category: "galaksi", image: "assets/Andromeda.jpg" },
    { title: "Galaksi Bima Sakti", description: "Galaksi rumah kita yang berbentuk spiral barr. Memiliki miliaran bintang dan lubang hitam supermasif di pusatnya.", category: "galaksi", image: "assets/Galaksi Bima Sakti.jpg" },
    { title: "Galaksi Sombrero", description: "Galaksi spiral dengan cincin debu yang menyerupai topi sombrero. Terletak 29 juta tahun cahaya dari Bumi.", category: "galaksi", image: "assets/Sombrero.jpg" },
    { title: "Galaksi Centaurus A", description: "Galaksi elips dengan jet radio dari lubang hitam supermasif. Salah satu objek radio paling terang di langit.", category: "galaksi", image: "assets/Centaurus.jpg" },
    { title: "Galaksi Triangulum", description: "Galaksi spiral kecil di konstelasi Triangulum. Anggota Grup Lokal seperti Bima Sakti.", category: "galaksi", image: "assets/Triangulum.jpg" },

    // NEBULA (5 items)
    { title: "Nebula Orion", description: "Nebula emisi terdekat yang terlihat dengan mata telanjang. Tempat kelahiran bintang-bintang baru.", category: "nebula", image: "assets/Orion.jpg" },
    { title: "Nebula Carina", description: "Nebula emisi raksasa di rasi Carina. Salah satu wilayah pembentukan bintang paling aktif di langit.", category: "nebula", image: "assets/Carina.jpg" },
    { title: "Nebula Helix", description: "Nebula planetary yang dikenal sebagai Mata Setan. Terletak 650 tahun cahaya dari Bumi.", category: "nebula", image: "assets/Helix.jpg" },
    { title: "Nebula Eagle", description: "Nebula emisi dengan Pilar Penciptaan yang ikonik. Rumah bagi gugus bintang muda.", category: "nebula", image: "assets/Eagle.jpg" },
    { title: "Nebula Crab", description: "Sisa supernova dari ledakan tahun 1054. Berisi pulsar yang berputar 30 kali per detik.", category: "nebula", image: "assets/Crab.jpg" },

    // TAMBAHAN CAMPURAN (4 items)
    { title: "Bulan Purnama", description: "Foto langit malam dengan Bulan purnama yang dramatis di atas lanskap pegunungan.", category: "planet", image: "assets/Bulan.jpg" },
    { title: "Aurora Borealis", description: "Cahaya utara yang menakjubkan di langit Arktik, disebabkan oleh partikel matahari.", category: "lainnya", image: "assets/Aurora.jpg" },
    { title: "Komet Halley", description: "Komet periodik terkenal yang terlihat setiap 76 tahun. Foto saat mendekati Matahari.", category: "lainnya", image: "assets/halley.jpg" },
    { title: "Black Hole M87", description: "Gambar pertama lubang hitam supermasif yang diambil oleh Event Horizon Telescope.", category: "lainnya", image: "assets/Lubang Hitam.jpg" }
];

console.log('Script loaded, total gallery items:', galleryData.length);

$(document).ready(function() {
    
    console.log('jQuery ready!');
    console.log('Gallery container exists:', $('#galleryContainer').length > 0);
    
    // Navigation Click Handler
    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        
        const sectionId = $(this).data('section');
        console.log('Navigation clicked:', sectionId);
        
        // Update active nav link
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        
        // Hide all sections
        $('.section').removeClass('active').hide();
        
        // Show selected section with fade effect
        $('#' + sectionId).addClass('active').fadeIn(500);
        
        // Close mobile menu if open
        $('.navbar-collapse').collapse('hide');
        
        // Scroll to top smoothly
        $('html, body').animate({ scrollTop: 0 }, 400);
    });

    // Navbar scroll effect
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }

        // Scroll to top button visibility
        if ($(this).scrollTop() > 300) {
            $('#scrollTop').fadeIn();
        } else {
            $('#scrollTop').fadeOut();
        }
    });

    // Scroll to top button click
    $('#scrollTop').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

    // Gallery render function
    function renderGallery(filter) {
        const container = $('#galleryContainer');
        
        console.log('=== RENDERING GALLERY ===');
        console.log('Filter:', filter);
        console.log('Container found:', container.length > 0);
        console.log('Total items in data:', galleryData.length);
        
        // Hide container with fade
        container.fadeOut(300, function() {
            container.empty();

            // Filter data
            const filteredData = filter === 'all' 
                ? galleryData 
                : galleryData.filter(item => item.category === filter);

            console.log('Filtered items:', filteredData.length);

            // Create gallery items
            filteredData.forEach((item, index) => {
                console.log(`Creating item ${index + 1}:`, item.title, '| Path:', item.image);
                
                const col = $('<div>', {
                    class: 'col-md-6 col-lg-4 gallery-item-wrapper animate__animated animate__fadeInUp',
                    css: { 'animation-delay': (index * 0.1) + 's' }
                });

                const card = $('<div>', { class: 'glass-card gallery-item' });
                
                const img = $('<img>', {
                    src: item.image,
                    alt: item.title,
                    class: 'gallery-image'
                });
                
                // Add error handler
                img.on('error', function() {
                    console.error('❌ FAILED to load:', item.image);
                    $(this).attr('src', 'https://via.placeholder.com/400x250/667eea/ffffff?text=' + encodeURIComponent(item.title));
                });
                
                // Add success handler
                img.on('load', function() {
                    console.log('✅ SUCCESS loaded:', item.image);
                });

                const overlay = $('<div>', { class: 'gallery-overlay' });
                overlay.append($('<h5>', { class: 'gradient-text mb-2', text: item.title }));
                overlay.append($('<p>', { class: 'mb-2 small', text: item.description }));
                overlay.append($('<span>', { class: 'category-badge', text: item.category.toUpperCase() }));

                card.append(img).append(overlay);
                col.append(card);
                container.append(col);
            });

            console.log('Gallery HTML created, items added to container');
            
            // Show container with fade
            container.fadeIn(500);
            
            console.log('=== GALLERY RENDER COMPLETE ===');
        });
    }

    // Filter button click handler
    $('.filter-btn').on('click', function() {
        console.log('Filter button clicked');
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        const filter = $(this).data('filter');
        renderGallery(filter);
    });

    // Contact form submission
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        const form = $(this);
        const submitBtn = form.find('button[type="submit"]');
        const submitText = submitBtn.find('.submit-text');
        const spinner = submitBtn.find('.spinner-border');
        
        // Get form values
        const name = $('#name').val();
        const email = $('#email').val();
        const subject = $('#subject').val();
        const message = $('#message').val();
        
        // Show loading state
        submitBtn.prop('disabled', true);
        submitText.text('Mengirim...');
        spinner.removeClass('d-none');
        
        // Simulate sending email (replace with actual email service like EmailJS)
        setTimeout(function() {
            // Reset form
            form[0].reset();
            
            // Hide loading state
            submitBtn.prop('disabled', false);
            submitText.text('Kirim Pesan');
            spinner.addClass('d-none');
            
            // Show success modal
            $('#successModal').modal('show');
            
            // Optional: Log form data (for testing)
            console.log('Form submitted:', { name, email, subject, message });
        }, 1500);
    });

    // Initialize gallery with all items
    console.log('Initializing gallery...');
    renderGallery('all');

    // Close mobile navbar when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.navbar').length) {
            $('.navbar-collapse').collapse('hide');
        }
    });

    // Smooth scroll for anchor links
    $('a[href^="#"]').on('click', function(e) {
        const target = $(this).attr('href');
        if (target !== '#' && $(target).length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(target).offset().top - 80
            }, 600);
        }
    });

    // Add animation class when elements come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('animate__animated animate__fadeInUp');
            }
        });
    }, observerOptions);

    // Observe elements with animation class
    $('.glass-card').each(function() {
        observer.observe(this);
    });

    console.log('All event handlers registered!');

});