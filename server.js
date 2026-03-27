// server.js - سيرفر المقلب
module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  const host = req.headers.host;
  
  // رسائل المقلب
  const prankMessages = [
    "🔥 تم اختراق حسابك بنجاح 🔥",
    "👑 تم تهكيرك عن طريق Ahmed Al-Tahrani 👑",
    "💀 Your account has been HACKED 💀",
    "⚠️ تم تسجيل الدخول إلى حسابك من جهاز آخر ⚠️",
    "🎮 تم سرقة جميع السكنات والأسلحة 🎮",
    "📱 تم تغيير كلمة المرور بنجاح 📱",
    "💰 تم تحويل 5000 دايموند إلى حساب آخر 💰",
    "🚫 تم حظر حسابك نهائياً 🚫"
  ];
  
  const randomMessage = prankMessages[Math.floor(Math.random() * prankMessages.length)];
  
  // الرد الرئيسي الذي يظهر للعبة
  const response = {
    verAddr: `https://${host}/`,
    resetGuest: true,
    status: "active",
    news: randomMessage,
    skin_access: false,
    account_status: "hacked",
    hacker: "Ahmed Al-Tahrani",
    messages: 99,
    // رسائل وهمية في بريد اللعبة
    inbox: [
      { from: "Garena", subject: "⚠️ تنبيه أمني ⚠️", message: "تم اكتشاف محاولة اختراق لحسابك" },
      { from: "Ahmed Al-Tahrani", subject: "🔥 هاك 🔥", message: "تم تهكير حسابك بنجاح 😂" },
      { from: "Free Fire", subject: "🎮 تغيير في الحساب 🎮", message: "تم تغيير كلمة المرور من جهاز غير معروف" },
      { from: "Support", subject: "🚫 حظر الحساب 🚫", message: "تم حظر حسابك بسبب استخدام سيرفر غير رسمي" },
      { from: "Diamond Shop", subject: "💎 عملية شراء 💎", message: "تم شراء 5000 دايموند من حسابك" }
    ],
    // إشعار يظهر فوق الشاشة
    notification: {
      title: "⚠️ تنبيه ⚠️",
      body: "تم تهكير حسابك عن طريق Ahmed Al-Tahrani",
      type: "warning"
    },
    // إعدادات وهمية
    settings: {
      hacked_by: "Ahmed Al-Tahrani",
      date: new Date().toLocaleDateString(),
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress || "192.168.1.1"
    }
  };
  
  res.json(response);
};