// === pages/api/licenses.js: START ===
import { prisma } from '../../lib/prisma';

export default async function handler(req, res) {
  const testers = await prisma.tester.findMany({ include: { kits: true } });
  res.json(testers);
}
// === pages/api/licenses.js: END ===
