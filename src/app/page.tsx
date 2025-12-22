"use client";
export default function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', background: 'linear-gradient(to right, #60a5fa, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        MYTHOSBLOCK GATEWAY
      </h1>
      <p style={{ opacity: 0.6, letterSpacing: '4px', textTransform: 'uppercase' }}>Kitsune Signal : Online</p>
      <div style={{ marginTop: '2rem', padding: '1.5rem', border: '1px solid #222', borderRadius: '8px', backgroundColor: '#050505' }}>
        <p style={{ color: '#60a5fa' }}>⚡ Monitoring Eternum Node Traffic...</p>
      </div>
    </main>
  );
}
