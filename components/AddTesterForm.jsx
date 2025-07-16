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

    // success path
    setName('');
    setLicenseExp('');
    onAdded(result);
    alert(`Added tester: ${result.name}`);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-2">
      <div>
        <label className="block">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-1 w-full"
          required
        />
      </div>
      <div>
        <label className="block">License Expiry</label>
        <input
          type="date"
          value={licenseExp}
          onChange={(e) => setLicenseExp(e.target.value)}
          className="border p-1"
          required
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Tester
      </button>
    </form>
  );
}
// === components/AddTesterForm.jsx: END ===
