// === pages/index.js: START ===
import { Dashboard } from '../components/Dashboard';

export default function Home() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Backflow Compliance Dashboard</h1>
      <Dashboard />
      {/* You can add search inputs, tables, color‑coded lists here */}
    </main>
  );
}
// === pages/index.js: END ===
