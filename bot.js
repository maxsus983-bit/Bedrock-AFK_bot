const bedrock = require('bedrock-protocol');
const config = require('./config.json');

function startBot() {
  console.log('🚀 Bedrock Bot serverga ulanmoqda...');

  const client = bedrock.createClient({
    host: config.serverHost,
    port: Number(config.serverPort),
    username: config.botUsername || 'AFK_Bot',
    offline: true,
    skipPing: true,        // Ping tekshiruvini o'chirish (Timeout oldini oladi)
    connectTimeout: 60000  // Ulanish kutish vaqtini 60 soniyaga uzaytirish
  });

  client.on('join', () => {
    console.log(`✅ ${config.botUsername} Bedrock serverga muvaffaqiyatli kirdi!`);
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
            
