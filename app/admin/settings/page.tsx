export default function AdminSettings() {
  return (
    <div>
      <h1 className="text-3xl font-bold grad-text mb-6">Settings</h1>
      <div className="glass p-6 space-y-4 text-sm text-gray-300">
        <p><strong>Site Name:</strong> CREATORA S.R</p>
        <p><strong>Tagline:</strong> Your Ideas Our Creation : &quot;Powerful Digital Solution&quot;</p>
        <p><strong>Contact:</strong> +91 7015804907 | creatoras.r27@gmail.com | Hisar, Haryana, India</p>
        <p><strong>AI Chatbot:</strong> Google Gemini (set GEMINI_API_KEY in .env)</p>
        <p><strong>Database:</strong> PostgreSQL (set DATABASE_URL in .env)</p>
        <p className="text-gray-500">Edit these values in your codebase / environment variables.</p>
      </div>
    </div>
  );
}
