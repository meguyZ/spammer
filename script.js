document.addEventListener('DOMContentLoaded', function() {
  const webhookUrl = 'https://discord.com/api/webhooks/1183089301458784318/0H1vOCcM3bjLnL-fcpHbpqWObE9PxPI_zainVjZpIKkZY5YPjJA5z3gINUVQpPv4qd9B'; // ใส่ URL ของ Webhook ที่ต้องการใช้

  const sendWebhookButton = document.getElementById('sendWebhookButton');
  sendWebhookButton.addEventListener('click', function() {
    sendWebhook(webhookUrl);
  });

  function sendWebhook(url) {
    const webhookData = {
      content: "@everyone @here",
      embeds: [
        {
          title: "โดนกูเล่นไงโค้ดเว็ปกระจอกๆ ไปทำมาใหม่นะน้อง",
          url: "https://discord.gg/Ue4kpvkhhh",
          color: 36863,
          author: {
            name: "ดักควยไรปัญญาอ่อน",
            icon_url: "https://cdn.discordapp.com/attachments/1166692256166723634/1178598829281509376/20231127_143035.png?ex=657ff532&is=656d8032&hm=560c45848fc0604701e985531359f912367702d4c6592c40c0a4727cc0b73ea2&"
          },
          footer: {
            text: "©2023 TATRAKHA.SHOP"
          },
          image: {
            url: "https://cdn.discordapp.com/attachments/1120136514370801694/1183281735602020412/standard.gif?ex=6587c3fe&is=65754efe&hm=ee3e69a7493783c6cd9bacbd5cb323cc1e70c3ad64eb5e423985bac938a46f4a&"
          }
        },
        {
          url: "https://shorturl.asia/ke5dA",
          color: 41983,
          author: {
            name: "Discord | TATRAKHA SHOP",
            url: "https://shorturl.asia/ke5dA",
            icon_url: "https://shorturl.asia/TyXIM"
          }
        },
        {
          url: "http://tatrakha.shop/",
          color: 41983,
          author: {
            name: "Website | TATRAKHA SHOP",
            url: "http://tatrakha.shop/",
            icon_url: "https://cdn.discordapp.com/attachments/1100553679133745172/1169953971432063017/SIXTY9_STUDIO.png?ex=65856c0b&is=6572f70b&hm=620934e19fb8508b083755da3c2f96677a5be050cb56de22fa2ad6f13796f38b&"
          }
        },
        {
          url: "https://cdn.discordapp.com/attachments/1120136514370801694/1183279230755295232/SRC_Free_By.TATRAKHA.zip?ex=6587c1a8&is=65754ca8&hm=3fe3271c51170906dbd968d4ab59cb1eb7e74e4e98016932701138ac33786aee&",
          color: 41983,
          author: {
            name: "โหลด Src เว็ปกระจอกๆของมัน",
            url: "https://cdn.discordapp.com/attachments/1120136514370801694/1183279230755295232/SRC_Free_By.TATRAKHA.zip?ex=6587c1a8&is=65754ca8&hm=3fe3271c51170906dbd968d4ab59cb1eb7e74e4e98016932701138ac33786aee&",
            icon_url: "https://commondenominator.email/wp-content/uploads/2020/08/do-you-want-to-send-spam-free-high-converting-emails.gif"
          }
        }
      ],
      username: "ตัดราคา ช็อป",
      avatar_url: "https://cdn.discordapp.com/attachments/1100553679133745172/1169953971432063017/SIXTY9_STUDIO.png?ex=65856c0b&is=6572f70b&hm=620934e19fb8508b083755da3c2f96677a5be050cb56de22fa2ad6f13796f38b&",
      attachments: []
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to send webhook');
        }
        console.log('Webhook sent successfully');
      })
      .catch(error => {
        console.error('Error sending webhook:', error);
      });
  }
});
