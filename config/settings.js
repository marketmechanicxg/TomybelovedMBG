/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN BIRTHDAY — SEMUA PENGATURAN DI SINI         ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "011005";              // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "Shabrina Aliyyah Zahra";           // ← GANTI NAMA


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title:  "Hari Bersamanya",             // ← GANTI JUDUL LAGU
    artist: "Sheila on 7",                   // ← GANTI NAMA ARTIS
    src:    "assets/music/song1.mp3",    //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
    cover:  "assets/music/song1.jpeg",   //   (nama file cover — jangan diubah kecuali nama filenya beda)
    startTime: 0,                           // ← MULAI DARI DETIK KE BERAPA
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:  assets/images/
   Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
   Ganti caption (keterangan foto) di setiap baris.               */
const GALLERY_PHOTOS = [
  { file: "img1.jpeg", caption: "ngl one smile from you and my whole day just gets so much better." },  // ← GANTI CAPTION
  { file: "img2.jpeg", caption: "you're literally the reason my heart feels this full, no cap." },
  { file: "img3.jpeg", caption: "every single sec with you is hands down my fave." },
  { file: "img4.jpeg", caption: "some people search their whole life for happiness, i just found it in you, fr." },
  { file: "img5.jpeg", caption: "you turned my whole ordinary life into something this beautiful, idk how." },
  { file: "img6.jpeg", caption: "my heart genuinely feels safest whenever it's with you." },
  { file: "img7.jpeg", caption: "if i could relive literally any moment, i'd pick us every single time." },
  { file: "img8.jpeg", caption: "still my favorite person, like, always and forever." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
"Happy 21st Birthday, Shabrina Aliyyah Zahra ❤️",
"Selamat ulang tahun yang ke-21 ya, sayangku, Ade. Walaupun umurku lebih tua dikit dari kamu, tapi jiwanya tetep seumuran lah ya, haha.",
"De, terima kasih banyak ya udah nemenin aku dari awal. Kamu bener-bener ada di titik terendah hidupku—waktu aku sempat kena dismiss dan harus keluar dari IIUM, sampai akhirnya jungkir balik berjuang lagi buat readmission. Masa-masa itu berat dan menyedihkan banget. Kalau waktu itu kamu nggak ada di sampingku buat nguatin, jujur aku nggak tahu apakah aku masih sanggup bertahan dan bisa lanjut kuliah di sini lagi seperti sekarang.",
"Hampir setiap hari kamu selalu ngisi hari-hariku. Dari kamu, aku belajar banyak hal baru yang sebelumnya aku nggak tahu dan bahkan nggak aware. Karena kamu juga, aku jadi belajar buat lebih peduli sama diriku sendiri dan ngerasa kalau aku nggak seburuk apa yang orang lain bicarakan tentang aku.",
"Dan yang paling bikin aku tersentuh, terima kasih banyak ya De udah selalu pasang badan ngelindungin dan nangkis semua hal buruk yang orang lain omongin tentang aku. Sampai tanpa sadar, kamu udah berkorban banyak banget buat aku. Mungkin aku nggak tahu semuanya, tapi dari obrolan terakhir kita pas kamu cerita, aku sebenernya udah paham banyak hal tanpa perlu kamu kasih tahu detailnya. Aku tahu itu berat banget buat kamu, apalagi orang-orang ngomongnya bukan langsung ke aku, tapi malah ke kamu—sampai kamu yang kena gosip, diisengin, bahkan dijauhin.",
"Makasih banyak ya udah jadi guardian angel-ku, malaikat tanpa sayap, anjay. Walaupun tanpa sayap, tapi kamu tetep yang paling manis, anjay haha.",
"Sama satu lagi, maafin aku ya kalau selama ini aku masih banyak kurangnya—bahkan kurang banget. Masih ada beberapa hal yang kadang aku belum sadar atau peka.",
" Mudah-mudahan pelan-pelan ke depannya bisa terus aku perbaiki. Aku pengen bisa jadi the one and only person that you can trust with everything. Pengen jadi tempat ternyaman buat kamu pulang. Mungkin bukan rumah pertama atau rumah kedua, tapi salah satu rumah ternyaman buat kamu kembali lagi. Aseeekkk~",
"Terima kasih ya sudah menjadi bagian paling penting di perjalanan hidupku yang panjang ini. Di umurmu yang ke-21 ini, aku doain semoga semua langkahmu selalu dimudahkan dan hatimu selalu dipeluk bahagia. Semoga apa pun yang kita impikan bareng-bareng di tahun-tahun mendatang bisa terwujud satu per satu.",
"A very big thanks for everything, and once again, happy birthday, Ade. Aku bersyukur banget punya kamu. 🤍🎂✨",

];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year:  "Chapter One",
    title: "where it all started",
    text:  "that exact moment when everything just clicked, dan tiba-tiba semuanya mulai make so much sense.",
  },
  {
    depth: "8m",
    year:  "Chapter Two",
    title: "the quiet days",
    text:  "literally cuma kamu, aku, and those lil simple moments yang ternyata ended up meaning everything.",
  },
  {
    depth: "16m",
    year:  "Chapter Three",
    title: "through the storms",
    text:  "we've had our rough patches fr, ada badai dan chaos juga, but somehow kita selalu find our way back to each other.",
  },
  {
    depth: "24m",
    year:  "Chapter Four",
    title: "finding the light",
    text:  "you're genuinely the brightest part of my whole journey, yang selalu bikin everything feels a little lighter even when things get heavy.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "wave",    text: "may this year give you all the calm of the ocean, dan sedalam itu juga hati kamu yang selalu penuh dengan kindness, fr." },
  { icon: "shell",   text: "hope your days stay this bright, kayak sun yang mantul di atas water, and your nights tetap peaceful seperti tide yang pelan-pelan balik ke laut." },
  { icon: "star",    text: "may every lil wish kamu pelan-pelan come true, exactly when you need it the most, no cap." },
  { icon: "compass", text: "wherever this year takes you, i hope kamu selalu find your way back to the people who genuinely care and adore you." },
  { icon: "anchor",  text: "stay grounded, stay grateful, and tbh tetap jadi kamu yang sekarang — beautiful in your own way, always." },
  { icon: "heart",   text: "happy birthday istg — cheers buat another year penuh memories yang bakal selalu worth keeping." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
const WHATSAPP_NUMBER = "6281387737530";   // ← GANTI NOMOR WA YANG ORDER
const WHATSAPP_MESSAGE = "heyy i just opened the bottle, tysm for making my day so much better! ✨"; // ← GANTI PESAN OTOMATIS

window.OCEAN_SETTINGS = {
    recipientName:    String(RECIPIENT_NAME),
    galleryPhotos:    GALLERY_PHOTOS,
    musicTracks:      MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories:         MEMORIES,
    wishes:           WISHES,
    whatsappNumber:   WHATSAPP_NUMBER,
    whatsappMessage:  WHATSAPP_MESSAGE
  };
})(window);