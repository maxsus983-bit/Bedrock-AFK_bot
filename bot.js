const bedrock = require('bedrock-protocol');
const config = require('./config.json');

function startBot() {
  console.log('🚀 Bedrock Bot serverga ulanmoqda...');

  const client = bedrock.createClient({
    host: config.serverHost,
    port: Number(config.serverPort),
    username: config.botUsername || 'AFK_Bot',
    offline: true,
    skipPing: false, // Serverdan avval ping olib, versiyani moslashtiradi
    connectTimeout: 30000
  });

  client.on('join', () => {
    console.log(`✅ ${config.botUsername} Bedrock serverga muvaffaqiyatli kirdi!`);
  });

  client.on('disconnect', (packet) => {
    console.log('⚠️ Serverdan uzildi. Sababi:', packet.reason || JSON.stringify(packet));
  });

  client.on('kick', (packet) => {
    console.log('⚠️ Kick qilindi. Sababi:', packet.message || JSON.stringify(packet));
  });

  client.on('error', (err) => {
    console.error('⚠️ Xatolik:', err.message);
  });

  client.on('close', () => {
    console.log('⛔️ Aloqa uzildi. 15 soniyadan keyin qayta ulanadi...');
    setTimeout(startBot, 15000);
  });
}

startBot();
            
