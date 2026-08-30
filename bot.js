const bedrock = require('bedrock-protocol');
const config = require('./config.json');

function startBot() {
  console.log('🚀 Bedrock Bot serverga ulanmoqda...');

  const client = bedrock.createClient({
    host: config.serverHost.trim(),
    port: parseInt(config.serverPort, 10),
    username: config.botUsername || 'AFK_Bedrock_Bot',
    offline: true,
    skipPing: true
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
                  
