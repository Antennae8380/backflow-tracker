// === pages/api/testers.js: START ===
import { prisma } from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, licenseExp } = JSON.parse(req.body);
    const newTester = await prisma.tester.create({
      data: { name, licenseExp: new Date(licenseExp) },
    });
    return res.status(201).json(newTester);
  }
  // For non‑POST requests, return existing testers
  const testers = await prisma.tester.findMany();
  res.json(testers);
}
// === pages/api/testers.js: END ===
