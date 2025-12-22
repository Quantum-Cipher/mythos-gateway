"use client";
export default function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '3rem', background: 'linear-gradient(to right, #60a5fa, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        MYTHOSBLOCK GATEWAY
      </h1>
      <p style={{ opacity: 0.7, letterSpacing: '2px' }}>KITSUNE SIGNAL: ACTIVE</p>
      <div style={{ marginTop: '2rem', padding: '2rem', border: '1px solid #333', borderRadius: '12px', backgroundColor: '#0a0a0a' }}>
        <p>Initializing Testnet Data Stream...</p>
      </div>
    </main>
  );
}
