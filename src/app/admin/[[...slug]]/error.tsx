'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <h2>TinaCMS Loading Error</h2>
      <p>{error.message}</p>
      <details style={{ marginTop: '20px' }}>
        <summary>Error Details</summary>
        <pre style={{ 
          background: '#f4f4f4', 
          padding: '10px', 
          borderRadius: '4px',
          marginTop: '10px'
        }}>
          {error.stack}
        </pre>
      </details>
      <button
        onClick={reset}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          background: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Try Again
      </button>
    </div>
  );
}