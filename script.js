document.addEventListener('DOMContentLoaded', () => {
    const envelopeWrapper = document.getElementById('envelope-wrapper');
    const envelope = document.getElementById('envelope');
    const letterContent = document.getElementById('letter-content');
    const typewriterTextElement = document.querySelector('.typewriter-text');
    const signatureElement = document.querySelector('.signature');
    const flowerBackground = document.getElementById('flower-background');

    // Teks yang akan muncul dengan efek mengetik
    const fullText = "Halo ateuu, aku turut berduka cita buat kepergian dede bayi. Semoga kalian sekeluarga tabah menghadapi cobaan ini. Sebelumnya aku mau minta maaf kalo aku ada salah dari segi ucapan dan sikap, maafin yaa; don't cuek cuek with me. Semoga dede bayi tercinta mendapat tempat terbaik di sisi-Nya.";
    
    let i = 0;
    const speed = 20; // Kecepatan ketikan dalam milidetik

    // 1. FUNGSI EFEK MENGETIK
    function typeWriter() {
        if (i < fullText.length) {
            typewriterTextElement.innerHTML += fullText.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            // Munculkan tanda tangan setelah teks selesai diketik
            signatureElement.classList.add('show');
        }
    }

    // 2. LOGIKA KLIK AMPLOP
    envelopeWrapper.addEventListener('click', () => {
        // Tambahkan class open untuk memicu animasi CSS
        envelope.classList.add('open');
        envelopeWrapper.style.cursor = 'default';

        // Beri jeda sedikit agar animasi amplop terbuka terlihat dulu
        setTimeout(() => {
            // Sembunyikan amplop secara halus
            envelopeWrapper.style.transition = 'opacity 0.5s ease';
            envelopeWrapper.style.opacity = '0';

            setTimeout(() => {
                envelopeWrapper.style.display = 'none'; // Hilangkan agar tidak menghalangi
                
                // Tampilkan konten surat
                letterContent.classList.add('show');

                // Mulai efek mengetik setelah surat muncul
                setTimeout(typeWriter, 800);
            }, 500);
        }, 600);
    });

    // 3. ANIMASI BUNGA JATUH (UNLIMITED)
    function createFlower() {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flowerBackground.appendChild(flower);

        // Pengaturan acak untuk setiap bunga
        const startX = Math.random() * window.innerWidth;
        const duration = Math.random() * 5 + 7; // Antara 7-12 detik
        const size = Math.random() * 10 + 10;   // Antara 10-20px
        const opacity = Math.random() * 0.5 + 0.3; // Transparansi acak

        flower.style.left = `${startX}px`;
        flower.style.width = `${size}px`;
        flower.style.height = `${size}px`;
        flower.style.opacity = opacity;
        flower.style.animationDuration = `${duration}s`;
        
        // Hapus elemen bunga dari memori setelah animasinya selesai
        flower.addEventListener('animationend', () => {
            flower.remove();
        });
    }

    // Jalankan pembuat bunga setiap 300 milidetik
    setInterval(createFlower, 300);
});