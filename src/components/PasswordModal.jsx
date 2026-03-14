import { useState } from "react";

function PasswordModal({ isVisible, onClose, onSuccess }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === "astrophile") {
      onSuccess();
      setPassword("");
      setError("");
    } else {
      setError("Password salah. Silakan hubungi pemilik CV.");
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 w-[90%] max-w-md shadow-2xl">

        <h2 className="text-2xl font-bold mb-2 text-center text-violet-400">
          Akses CV
        </h2>

        <p className="text-zinc-400 text-sm text-center mb-6">
          Masukkan password untuk melihat CV
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="password"
            placeholder="Masukkan password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-violet-500 outline-none"
          />

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <div className="flex gap-3 pt-2">

            <button
              type="button"
              onClick={onClose}
              className="w-full bg-zinc-700 hover:bg-zinc-600 py-3 rounded-lg transition"
            >
              Batal
            </button>

            <button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 py-3 rounded-lg font-semibold transition"
            >
              Buka CV
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}

export default PasswordModal;