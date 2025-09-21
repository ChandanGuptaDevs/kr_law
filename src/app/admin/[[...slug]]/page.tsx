"use client";

import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    // Check if we have the required environment variables
    const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
    const branch = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || 'main';
    
    if (!clientId) {
      console.error('NEXT_PUBLIC_TINA_CLIENT_ID is not set');
      return;
    }

    // Build the Tina Cloud admin URL
    const tinaAdminUrl = `https://app.tina.io/projects/${clientId}/overview`;
    
    // For now, redirect to Tina Cloud dashboard
    // This ensures the admin interface works while we fix the embedded version
    window.location.href = tinaAdminUrl;
  }, []);

  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f2f5',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ 
        textAlign: 'center',
        padding: '40px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ marginBottom: '20px', color: '#333' }}>TinaCMS Admin</h1>
        <p style={{ color: '#666', marginBottom: '30px' }}>
          Redirecting to Tina Cloud dashboard...
        </p>
        <p style={{ fontSize: '14px', color: '#999' }}>
          If you're not redirected, {' '}
          <a 
            href={`https://app.tina.io/projects/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/overview`}
            style={{ color: '#0070f3', textDecoration: 'none' }}
          >
            click here
          </a>
        </p>
      </div>
      
      <div style={{ marginTop: '40px', color: '#666', fontSize: '14px' }}>
        <p>To edit content:</p>
        <ol style={{ textAlign: 'left', marginTop: '10px' }}>
          <li>Log in to Tina Cloud</li>
          <li>Navigate to your content</li>
          <li>Make your changes</li>
          <li>Changes will sync to GitHub automatically</li>
        </ol>
      </div>
    </div>
  );
}