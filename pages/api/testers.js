// === pages/api/testers.js: START ===
import { prisma } from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, licenseExp } = req.body;
      if (!name || !licenseExp) {
        return res.status(400).json({ error: 'Name and date are required.' });
      }
      const newTester = await prisma.tester.create({
        data: {
          name,
          licenseExp: new Date(licenseExp),
        },
      });
      return res.status(201).json(newTester);
    } catch (err) {
      console.error('API error:', err);
      return res.status(500).json({ error: err.message });
    }
  }

  // For GET requests, return all testers
  const testers = await prisma.tester.findMany();
  res.status(200).json(testers);
}
// === pages/api/testers.js: END ===
