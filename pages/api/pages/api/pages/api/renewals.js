// === pages/api/renewals.js: START ===
import { prisma } from '../../lib/prisma';

export default async function handler(req, res) {
  const now = new Date();
  const upcoming = new Date();
  upcoming.setDate(now.getDate() + 30);

  const expiringKits = await prisma.testKit.findMany({
    where: { calibExp: { lte: upcoming } },
  });
  const expiringLicenses = await prisma.tester.findMany({
    where: { licenseExp: { lte: upcoming } },
  });

  res.json({ kits: expiringKits, licenses: expiringLicenses });
}
// === pages/api/renewals.js: END ===
