import React from 'react';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#0f172a', color: '#fff', minHeight: '100vh', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      {/* Толгойн хэсэг */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1000px', margin: '0 auto 40px auto' }}>
        <h1 style={{ color: '#38bdf8', fontSize: '28px', margin: 0 }}>🎵 AI Mongol Duu Studio</h1>
        <div style={{ backgroundColor: '#1e293b', padding: '8px 16px', borderRadius: '20px', border: '1px solid #334155' }}>
          <span>Үлдэгдэл кредит: <b>100</b> 🪙</span>
        </div>
      </header>

      {/* Үндсэн дуу үүсгэх хэсэг */}
      <main style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#1e293b', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
        <h2 style={{ marginTop: 0, marginBottom: '20px', fontSize: '22px' }}>Шинэ дуу үүсгэх</h2>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#94a3b8' }}>Дууны агуулга, сэдэв, стилийг бичнэ үү:</label>
          <textarea 
            rows="4" 
            placeholder="Жишээ нь: Хөгжилтэй поп рок стилийн, найзын тухай уянгалаг охин хоолойн дуу..." 
            style={{ width: '100%', padding: '12px', borderRadius: '8px', backgroundColor: '#0f172a', border: '1px solid #334155', color: '#fff', fontSize: '15px', resize: 'vertical' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
          <button style={{ flex: 1, padding: '14px', borderRadius: '8px', border: 'none', backgroundColor: '#0284c7', color: '#fff', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>
            🪄 Текстээс Дуу Үүсгэх
          </button>
          <button style={{ flex: 1, padding: '14px', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#0f172a', color: '#fff', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>
            🎙️ Вокал & Фонограмм Салгах
          </button>
        </div>

        {/* Үр дүн харагдах хэсэг */}
        <div style={{ borderTop: '1px solid #334155', paddingTop: '20px' }}>
          <h3 style={{ fontSize: '18px', color: '#94a3b8' }}>Сүүлд үүсгэсэн дуунууд</h3>
          <p style={{ color: '#64748b', fontSize: '14px' }}>Одоогоор үүсгэсэн дуу байхгүй байна.</p>
        </div>
      </main>
    </div>
  );
}
