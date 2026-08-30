const bedrock = require('bedrock-protocol');
const config = require('./config.json');

function startBot() {
  console.log('🚀 Bedrock Bot serverga ulanmoqda...');

  const client = bedrock.createClient({
    host: config.serverHost,
    port: Number(config.serverPort),
    username: config.botUsername,
    offline: true,
    skipPing: true
  });

  client.on('join', () => {
    console.log(`✅ ${config.botUsername} Bedrock serverga muvaffaqiyatli kirdi!`);
  });

  client.on('text', (packet) => {
    // Server chat xabarlarini cheklovsiz qabul qilish
  });

  client.on('error', (err) => {
    console.error('⚠️ Xatolik:', err.message);
  });

  client.on('close', () => {
    console.log('⛔️ Aloqa uzildi. 10 soniyadan keyin qayta ulanadi...');
    setTimeout(startBot, 10000);
  });
}

startBot();
      
