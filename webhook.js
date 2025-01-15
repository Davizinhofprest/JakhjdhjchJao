const webhookURL = 'https://discord.com/api/webhooks/1329086217836298358/oaOWIYrT3Dn-RuctUW0IrrLff_WrqOCJ8dgyZvVr9eMjvhYaD3MyXwmecxzoOa9vR8lh';

// Função para enviar mensagem ao Discord com embed e hora atual
async function enviarMensagem(msg) {
  // Obter a hora atual
  const now = new Date();
  const horas = now.getHours().toString().padStart(2, '0');
  const minutos = now.getMinutes().toString().padStart(2, '0');
  const horaAtual = `${horas}:${minutos}`;

  try {
    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: msg,
        embeds: [{
          title: `New access to ${horaAtual}`, // Título com a hora
          description: "A visitor has accessed the site.",
          color: 65427, // Cor azul
          timestamp: now.toISOString() // Adiciona o timestamp no embed
        }]
      })
    });

    if (response.ok) {
      console.log("Mensagem enviada com sucesso!");
    } else {
      console.error("Erro ao enviar a mensagem:", response.statusText);
    }
  } catch (error) {
    console.error("Erro:", error);
  }
}

// Chamada da função
enviarMensagem();
