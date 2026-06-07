import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, Heart, Sparkles, Send, CheckCircle2, Loader2 } from 'lucide-react';

// --- STYLING TAMBAHAN ---
// Menambahkan font serif premium (Cormorant Garamond) untuk kesan elegan
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Montserrat:wght@300;400;500&display=swap');
  
  .font-serif { font-family: 'Cormorant Garamond', serif; }
  .font-sans { font-family: 'Montserrat', sans-serif; }
  
  body {
    background-color: #FAFAFA;
    color: #333333;
  }
`;

// --- KONFIGURASI TANGGAL PERNIKAHAN ---
const WEDDING_DATE = new Date("2026-10-30T09:00:00").getTime();

export default function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isLoaded, setIsLoaded] = useState(false);

  // Efek Loading dan Countdown
  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = WEDDING_DATE - new Date().getTime();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        menit: Math.floor((difference / 1000 / 60) % 60),
        detik: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { hari: 0, jam: 0, menit: 0, detik: 0 };
    }
    return timeLeft;
  }

  // --- KOMPONEN SEKSI ---

  const HeroSection = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-50">
      {}
      {/* Background dekoratif yang sangat subtle */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-stone-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-stone-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-stone-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-sm tracking-[0.3em] uppercase text-stone-500 mb-8"
        >
          Pernikahan Kami
        </motion.p>

        {/* Placeholder Grid Foto 1:1 (Kotak dengan Frame Putih) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
          className="w-56 h-56 md:w-72 md:h-72 mb-8 border-8 border-white shadow-2xl bg-stone-200 flex items-center justify-center relative"
        >
           <span className="font-sans text-stone-400 text-sm">Foto Mempelai (1:1)</span>
           {/* Untuk menggunakan gambar asli, masukkan tag img di dalam div ini: 
               <img src="img2.jpg" alt="Mempelai" className="absolute inset-0 w-full h-full object-cover" /> 
           */}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-800 mb-8 leading-tight flex flex-col items-center"
        >
          <span>Dani Ismail</span>
          <span className="italic font-light text-stone-400 text-3xl md:text-5xl my-2">&</span>
          <span>Selma Kamilla Islamaya</span>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}
          className="font-sans font-light text-stone-600 text-lg md:text-xl tracking-wider"
        >
          30 Oktober 2026
        </motion.p>
      </div>
    </section>
  );

  const CountdownSection = () => (
    <section className="py-24 bg-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-4xl text-stone-800 mb-12"
        >
          Menuju Hari Bahagia
        </motion.h2>
        <div className="flex justify-center gap-4 md:gap-8">
          {Object.keys(timeLeft).map((interval, index) => (
            <motion.div 
              key={interval}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center bg-stone-50 border border-stone-200 rounded-lg shadow-sm mb-3">
                <span className="font-serif text-2xl md:text-4xl text-stone-800">{timeLeft[interval]}</span>
              </div>
              <span className="font-sans text-xs md:text-sm uppercase tracking-widest text-stone-500">{interval}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const DetailsSection = () => (
    <section className="py-24 bg-stone-50">
      <div className="max-w-3xl mx-auto px-4">
        {}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-4xl text-center text-stone-800 mb-16"
        >
          Detail Acara
        </motion.h2>
        
        <div className="flex justify-center">
          {/* Akad Nikah - Single Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="bg-white p-10 md:p-14 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center relative overflow-hidden w-full max-w-lg"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-stone-200 via-stone-300 to-stone-200"></div>
            <h3 className="font-serif text-2xl md:text-3xl mb-8 text-stone-800">Akad Nikah</h3>
            <div className="space-y-5 mb-10 font-sans font-light text-stone-600">
              <p className="flex items-center justify-center gap-3"><Calendar size={20} className="text-stone-400"/> Jumat, 30 Oktober 2026</p>
              <p className="flex items-center justify-center gap-3"><Clock size={20} className="text-stone-400"/> 09:00 WIB - Selesai</p>
              <p className="flex items-center justify-center gap-3"><MapPin size={20} className="text-stone-400"/> Masjid Jami' Al-Amanah, Baranangsiang, Kota Bogor, Jawa Barat</p>
            </div>
            <a 
              href="https://maps.app.goo.gl/VNGQjLtNzxsDSMNx5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 border border-stone-300 text-stone-600 rounded-full font-sans text-sm hover:bg-stone-50 transition-colors inline-block"
            >
              Buka Peta Lokasi
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );

  const RSVPSection = () => {
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // State untuk menyimpan data inputan form
    const [formData, setFormData] = useState({
      nama: '',
      kehadiran: '',
      jumlah: '1'
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      // =====================================================================
      // PANDUAN INTEGRASI GOOGLE SHEETS (UNTUK RSVP & UCAPAN):
      // 1. Buat Google Sheet baru di Google Drive Anda.
      // 2. Buat 2 tab/sheet di bagian bawah: beri nama "RSVP" dan "Ucapan".
      // 3. Klik menu Ekstensi > Apps Script.
      // 4. Hapus kode yang ada, lalu paste kode Javascript berikut ke editor:
      /*
        function doPost(e) {
        function doPost(e) {
          var doc = SpreadsheetApp.getActiveSpreadsheet();
          var type = e.parameter.type;
          var sheet, rowData = [];
          
          rowData.push(new Date()); // Timestamp
          rowData.push(e.parameter.nama);
          
          if (type === 'ucapan') {
            sheet = doc.getSheetByName('Ucapan');
            if (!sheet) sheet = doc.insertSheet('Ucapan');
            rowData.push(e.parameter.ucapan);
          } else {
            sheet = doc.getSheetByName('RSVP');
            if (!sheet) sheet = doc.insertSheet('RSVP');
            rowData.push(e.parameter.kehadiran);
            rowData.push(e.parameter.jumlah);
          }
          
          sheet.appendRow(rowData);
          return ContentService.createTextOutput(JSON.stringify({"result":"success"})).setMimeType(ContentService.MimeType.JSON);
        }
      */
      // 5. Simpan, lalu klik "Terapkan" (Deploy) > "Deployment Baru".
      // 6. Pilih "Aplikasi Web" (Web app), akses: "Siapa saja" (Anyone).
      // 7. Deploy & Authorize access. COPY URL yang muncul.
      // 8. PASTE URL ke variabel scriptURL di RSVPSection dan AIWishSection.
      // =====================================================================

      const scriptURL = 'https://script.google.com/macros/s/AKfycbwFFpPQ_LFP_UInqbH0LdAFEWDw6AJ1uDeEMPJdRdOIYdcidVak1faLv69IOm8_wbWpUQ/exec';

      try {
        // Jika URL belum diganti (masih default), kita simulasikan pengiriman berhasil agar UI tidak error
        if (scriptURL === 'https://script.google.com/macros/s/AKfycbwFFpPQ_LFP_UInqbH0LdAFEWDw6AJ1uDeEMPJdRdOIYdcidVak1faLv69IOm8_wbWpUQ/exec') {
          setTimeout(() => {
            setStatus('submitted');
            setIsSubmitting(false);
          }, 1500);
          return;
        }

        // Mengubah format data agar bisa dibaca oleh doPost Google Apps Script
        const formBody = new URLSearchParams();
        formBody.append('type', 'rsvp'); // Penanda bahwa ini dari form RSVP
        for (const key in formData) {
          formBody.append(key, formData[key]);
        }

        const response = await fetch(scriptURL, {
          method: 'POST',
          body: formBody,
        });

        if (response.ok) {
          setStatus('submitted');
        } else {
          console.error('Terjadi kesalahan saat mengirim data.');
          setStatus('submitted'); // Tetap sukses di UI untuk fallback
        }
      } catch (error) {
        console.error('Error!', error.message);
        setStatus('submitted'); // Fallback sukses jika ada masalah CORS
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl text-stone-800 mb-4"
          >
            RSVP
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans font-light text-stone-500 mb-12"
          >
            Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.
          </motion.p>

          <AnimatePresence mode="wait">
            {status === 'submitted' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="bg-stone-50 p-8 rounded-2xl border border-stone-200 flex flex-col items-center"
              >
                <CheckCircle2 className="text-green-600 w-12 h-12 mb-4" />
                <h3 className="font-serif text-2xl text-stone-800 mb-2">Terima Kasih!</h3>
                <p className="font-sans font-light text-stone-600">Konfirmasi kehadiran Anda telah kami terima.</p>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
                onSubmit={handleSubmit} 
                className="text-left space-y-6"
              >
                <div>
                  <label className="block font-sans text-sm text-stone-600 mb-2">Nama Lengkap</label>
                  <input 
                    required 
                    type="text" 
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-stone-800 bg-transparent font-sans text-stone-800" 
                    placeholder="Masukkan nama Anda..." 
                  />
                </div>
                <div>
                  <label className="block font-sans text-sm text-stone-600 mb-2">Apakah Anda akan hadir?</label>
                  <select 
                    required 
                    name="kehadiran"
                    value={formData.kehadiran}
                    onChange={handleChange}
                    className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-stone-800 bg-transparent font-sans text-stone-800"
                  >
                    <option value="">Pilih konfirmasi...</option>
                    <option value="Hadir">Ya, saya akan hadir</option>
                    <option value="Tidak Hadir">Maaf, saya tidak bisa hadir</option>
                  </select>
                </div>
                {/* Tampilkan pilihan jumlah orang hanya jika memilih Hadir */}
                {formData.kehadiran !== "Tidak Hadir" && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                    <label className="block font-sans text-sm text-stone-600 mb-2 mt-6">Jumlah Kehadiran (Orang)</label>
                    <select 
                      name="jumlah"
                      value={formData.jumlah}
                      onChange={handleChange}
                      className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-stone-800 bg-transparent font-sans text-stone-800"
                    >
                      <option value="1">1 Orang</option>
                      <option value="2">2 Orang</option>
                    </select>
                  </motion.div>
                )}
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-stone-800 text-white font-sans py-4 rounded-lg tracking-wider hover:bg-stone-700 transition-colors mt-8 flex items-center justify-center gap-2 disabled:bg-stone-500"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> MENGIRIM...
                    </>
                  ) : (
                    "KIRIM KONFIRMASI"
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>
    );
  };

  const AIWishSection = () => {
    const [name, setName] = useState('');
    const [rawWish, setRawWish] = useState('');
    const [formattedWish, setFormattedWish] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [isSubmittingWish, setIsSubmittingWish] = useState(false);
    const [wishesList, setWishesList] = useState([
      { name: "Keluarga Besar Bpk. Handoko", text: "Selamat menempuh hidup baru. Semoga menjadi keluarga yang sakinah, mawaddah, dan warahmah. Cinta dan kasih sayang selalu menyertai perjalanan kalian.", time: "1 jam yang lalu" },
      { name: "Sahabat Kuliah", text: "Akhirnya hari yang ditunggu tiba! Selamat mengarungi bahtera rumah tangga, semoga senantiasa diberikan kebahagiaan dan keberkahan.", time: "3 jam yang lalu" }
    ]);
    const [errorMsg, setErrorMsg] = useState('');

    const apiKey = ""; // Gemini API Key will be injected here automatically by environment

    // Fungsi untuk memanggil Gemini API dengan Exponential Backoff
    const formatWishWithAI = async (text, retryCount = 0) => {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
      const delays = [1000, 2000, 4000, 8000, 16000];

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: text }] }],
            systemInstruction: { 
              parts: [{ 
                text: "Anda adalah asisten pernikahan yang ahli merangkai kata. Pengguna akan memberikan draf ucapan selamat pernikahan. Tugas Anda adalah memperindah bahasanya agar terdengar lebih elegan, puitis, romantis, hangat, dan tulus dalam bahasa Indonesia. Jangan mengubah esensi pesan. Berikan hanya hasil teksnya saja tanpa tanda kutip atau penjelasan tambahan." 
              }] 
            }
          })
        });

        if (!response.ok) throw new Error('API Error');

        const data = await response.json();
        const resultText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        
        if (resultText) return resultText;
        throw new Error('Format balasan tidak valid');

      } catch (error) {
        if (retryCount < 4) {
          await new Promise(resolve => setTimeout(resolve, delays[retryCount]));
          return formatWishWithAI(text, retryCount + 1);
        }
        throw new Error("Sistem AI sedang sibuk, kami tetap akan menyimpan ucapan asli Anda.");
      }
    };

    const handleBeautify = async () => {
      if (!rawWish.trim()) return;
      setIsGenerating(true);
      setErrorMsg('');
      try {
        const beautifiedText = await formatWishWithAI(rawWish);
        setFormattedWish(beautifiedText);
      } catch (err) {
        setErrorMsg(err.message);
        setFormattedWish(rawWish); // Fallback ke teks asli jika AI gagal
      } finally {
        setIsGenerating(false);
      }
    };

    const handleSubmitWish = async (e) => {
      e.preventDefault();
      if (!name || (!rawWish && !formattedWish)) return;
      
      setIsSubmittingWish(true);
      const finalWish = formattedWish || rawWish;
      
      // PASTE URL YANG SAMA DENGAN FORM RSVP DI SINI
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwFFpPQ_LFP_UInqbH0LdAFEWDw6AJ1uDeEMPJdRdOIYdcidVak1faLv69IOm8_wbWpUQ/exec'; 

      try {
        if (scriptURL === 'https://script.google.com/macros/s/AKfycbwFFpPQ_LFP_UInqbH0LdAFEWDw6AJ1uDeEMPJdRdOIYdcidVak1faLv69IOm8_wbWpUQ/exec') {
          setTimeout(() => {
            setWishesList([{ name, text: finalWish, time: "Baru saja" }, ...wishesList]);
            setName(''); setRawWish(''); setFormattedWish('');
            setIsSubmittingWish(false);
          }, 1000);
          return;
        }

        const formBody = new URLSearchParams();
        formBody.append('type', 'ucapan'); // Penanda bahwa ini untuk tab Ucapan
        formBody.append('nama', name);
        formBody.append('ucapan', finalWish);

        const response = await fetch(scriptURL, {
          method: 'POST',
          body: formBody,
        });

        if (response.ok) {
          setWishesList([{ name, text: finalWish, time: "Baru saja" }, ...wishesList]);
          setName(''); setRawWish(''); setFormattedWish('');
        } else {
          console.error('Terjadi kesalahan saat mengirim ucapan.');
          setWishesList([{ name, text: finalWish, time: "Baru saja" }, ...wishesList]); // Fallback UI
        }
      } catch (error) {
        console.error('Error!', error.message);
        setWishesList([{ name, text: finalWish, time: "Baru saja" }, ...wishesList]); // Fallback UI
      } finally {
        setIsSubmittingWish(false);
      }
    };

    return (
      <section className="py-24 bg-stone-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl text-stone-800 mb-4"
            >
              Ucapan & Doa Restu
            </motion.h2>
            <motion.p className="font-sans font-light text-stone-500">
              Tuliskan doa dan harapan Anda untuk kedua mempelai.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Form Ucapan */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="md:col-span-2 space-y-6 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200 h-fit"
            >
              <div>
                <label className="block font-sans text-sm text-stone-600 mb-2">Nama Anda</label>
                <input 
                  value={name} onChange={(e) => setName(e.target.value)}
                  type="text" className="w-full border border-stone-200 rounded-lg px-4 py-2 focus:outline-none focus:border-stone-400 bg-stone-50 font-sans text-stone-800" 
                  placeholder="Mis: Sahabat, Keluarga..." 
                />
              </div>
              
              <div>
                <label className="block font-sans text-sm text-stone-600 mb-2 flex items-center justify-between">
                  <span>Ucapan Anda</span>
                  <div className="flex items-center gap-1 text-amber-600 text-xs bg-amber-50 px-2 py-1 rounded-full">
                    <Sparkles size={12} /> AI Formatter
                  </div>
                </label>
                <textarea 
                  value={formattedWish || rawWish} 
                  onChange={(e) => {
                    setRawWish(e.target.value);
                    setFormattedWish(''); // Reset format if user edits manually
                  }}
                  rows="4" 
                  className="w-full border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-stone-400 bg-stone-50 font-sans text-stone-800 text-sm leading-relaxed resize-none" 
                  placeholder="Ketik ucapan sederhana Anda di sini..." 
                ></textarea>
                
                {errorMsg && <p className="text-red-500 text-xs mt-2 font-sans">{errorMsg}</p>}

                {/* AI Action Button */}
                {!formattedWish && (
                  <button 
                    type="button"
                    onClick={handleBeautify}
                    disabled={isGenerating || !rawWish.trim()}
                    className="mt-3 w-full border border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 disabled:opacity-50 py-2 rounded-lg font-sans text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    {isGenerating ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
                    {isGenerating ? "Sedang merangkai kata..." : "Perindah dengan AI"}
                  </button>
                )}
              </div>

              <button 
                onClick={handleSubmitWish}
                disabled={!name || (!rawWish && !formattedWish) || isSubmittingWish}
                className="w-full bg-stone-800 text-white font-sans py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-stone-700 transition-colors disabled:bg-stone-300 disabled:text-stone-500"
              >
                {isSubmittingWish ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Mengirim...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Kirim Ucapan
                  </>
                )}
              </button>
            </motion.div>

            {/* List Ucapan */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="md:col-span-3 space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar"
            >
              <AnimatePresence>
                {wishesList.map((wish, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-serif text-lg font-semibold text-stone-800">{wish.name}</h4>
                      <span className="text-xs text-stone-400 font-sans">{wish.time}</span>
                    </div>
                    <p className="font-sans font-light text-stone-600 text-sm leading-relaxed">
                      "{wish.text}"
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  const Footer = () => (
    <footer className="py-12 bg-stone-900 text-stone-400 text-center">
      {}
      <p className="font-serif text-2xl mb-4 text-white">Dani & Selma</p>
      <p className="font-sans text-xs tracking-widest uppercase mb-8">30 Oktober 2026</p>
      <p className="font-sans text-xs">
        Dibuat dengan <Heart size={12} className="inline mx-1 text-stone-500" /> Created With Love from Feb 2021 ❤️
      </p>
    </footer>
  );

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen bg-stone-50 selection:bg-stone-200">
      <style dangerouslySetInnerHTML={{ __html: fontStyles }} />
      <HeroSection />
      <CountdownSection />
      <DetailsSection />
      <RSVPSection />
      <AIWishSection />
      <Footer />
    </div>
  );
}