"use client";

export function TinaAdmin() {
  // Redirect to the actual Tina CMS admin page
  if (typeof window !== 'undefined') {
    window.location.href = '/admin/index.html';
  }
  
  return (
    <div style={{ 
      padding: "50px", 
      textAlign: "center", 
      fontFamily: "sans-serif",
      minHeight: "100vh",
      background: "#f5f5f5"
    }}>
      <h1 style={{ color: "#333" }}>Redirecting to Tina CMS...</h1>
      <p style={{ color: "#666" }}>If you're not redirected, <a href="/admin/index.html">click here</a></p>
    </div>
  );
}