// === components/Dashboard.jsx: START ===
import { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/renewals')
      .then((r) => r.json())
      .then((d) => {
        const items = [
          { name: 'Kits', count: d.kits.length },
          { name: 'Licenses', count: d.licenses.length },
        ];
        setData(items);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Expiring Soon (next 30 days)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
// === components/Dashboard.jsx: END ===
