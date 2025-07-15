// === cron/alerts.js: START ===
import cron from 'node-cron';
import { prisma } from '../lib/prisma';
import { sendAlert } from '../lib/mail';

// run daily at 8am UTC
cron.schedule('0 8 * * *', async () => {
  const now = new Date();
  const upcoming = new Date();
  upcoming.setDate(now.getDate() + 7);

  const items = await prisma.testKit.findMany({
    where: { calibExp: { lte: upcoming } },
  });
  for (const kit of items) {
    await sendAlert(
      'ops@company.com',
      'Kit Expiring Soon',
      `Kit ${kit.serial} expires on ${kit.calibExp.toDateString()}`
    );
  }

  const testers = await prisma.tester.findMany({
    where: { licenseExp: { lte: upcoming } },
  });
  for (const t of testers) {
    await sendAlert(
      'ops@company.com',
      'License Expiring Soon',
      `Tester ${t.name} license expires on ${t.licenseExp.toDateString()}`
    );
  }
});
// === cron/alerts.js: END ===
