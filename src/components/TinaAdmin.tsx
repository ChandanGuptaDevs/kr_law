"use client";

export function TinaAdmin() {
  // Tina CMS will only work when properly configured with API keys
  // See TINA_SETUP.md for configuration instructions
  return (
    <div style={{ padding: "50px", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>Tina CMS Admin</h1>
      <p>To enable the CMS, please follow these steps:</p>
      <ol style={{ textAlign: "left", maxWidth: "600px", margin: "20px auto" }}>
        <li>Create an account at <a href="https://app.tina.io" target="_blank">app.tina.io</a></li>
        <li>Connect this GitHub repository</li>
        <li>Add the API keys to your Vercel environment variables</li>
        <li>Redeploy the application</li>
      </ol>
      <p>See TINA_SETUP.md for detailed instructions</p>
    </div>
  );
}