// === components/AddTesterForm.jsx: START ===
import { useState } from 'react';

export function AddTesterForm({ onAdded }) {
  const [name, setName] = useState('');
  const [licenseExp, setLicenseExp] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/testers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, licenseExp }),
    });
    const result = await res.json();

    if (!res.ok) {
      alert('Error adding tester: ' + (result.error || 'Unknown error'));
      return;
    }

    // on success
    setName('');
    setLicenseExp('');
    onAdded(result);
    alert(`Added tester: ${result.name}`);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <div>
        <label className="block font-medium">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <div>
        <label className="block font-medium">License Expiry</label>
        <input
          type="date"
          value={licenseExp}
          onChange={(e) => setLicenseExp(e.target.value)}
          className="border p-2"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Tester
      </button>
    </form>
  );
}
// === components/AddTesterForm.jsx: END ===
