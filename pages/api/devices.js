// === pages/api/devices.js: START ===
import { prisma } from '../../lib/prisma';

export default async function handler(req, res) {
  const devices = await prisma.device.findMany({
    include: { property: true },
  });
  res.json(devices);
}
// === pages/api/devices.js: END ===
