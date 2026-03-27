// webview.js - صفحة مقلب تظهر في المتصفح
module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>⚠️ تم الاختراق ⚠️</title>
    <style>
      body {
        background: black;
        color: red;
        font-family: monospace;
        text-align: center;
        padding: 50px;
        animation: blink 1s infinite;
      }
      @keyframes blink {
        0% { background: black; }
        50% { background: #330000; }
        100% { background: black; }
      }
      .hacker-text {
        font-size: 30px;
        border: 2px solid red;
        padding: 20px;
        margin: 20px;
      }
      .loading {
        font-size: 20px;
        color: red;
      }
    </style>
  </head>
  <body>
    <div class="hacker-text">
      ⚠️ WARNING ⚠️<br>
      YOUR DEVICE HAS BEEN HACKED<br>
      تم اختراق جهازك<br>
      By: Ahmed Al-Tahrani
    </div>
    <div class="loading">
      <p>جارٍ سرقة البيانات...</p>
      <p>📱 حساب Free Fire: تم الاختراق</p>
      <p>💰 الدايموند: جاري التحويل</p>
      <p>🔑 كلمة المرور: تم تغييرها</p>
      <p>📧 بريد اللعبة: 99 رسالة غير مقروءة</p>
    </div>
    <script>
      setTimeout(() => {
        document.body.innerHTML = '<div class="hacker-text">😂 هذا مجرد مقلب 😂<br>تم تهكير عقلك فقط<br>Ahmed Al-Tahrani</div>';
      }, 5000);
    </script>
  </body>
  </html>
  `;
  
  res.send(html);
};