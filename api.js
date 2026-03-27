// هذا هو ملف السيرفر الرئيسي
module.exports = (req, res) => {
  // السماح بالاتصال من أي مصدر (لأن اللعبة تحتاج هذا)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  
  // الرد على طلبات التحقق المسبق
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // رابط السيرفر الخاص بك (سيتم تعبئته تلقائياً)
  const serverUrl = `https://${req.headers.host}`;
  
  // البيانات التي تريدها اللعبة
  const response = {
    verAddr: serverUrl + "https://myffserver.vercel.app/",
    resetGuest: true,
    status: "active",
    news: "اشترك في قناتي لدعم المحتوى ❤️",
    skin_access: true,
    server_name: "My FF Server",
    version: "1.0",
    // إعدادات السكنات - يمكنك تعديلها
    skins: {
      all_unlocked: true,
      vehicles: true,
      weapons: true,
      bundles: true
    }
  };
  
  res.json(response);
};

// مسار إضافي للسكنات (بعض السيرفرات تحتاجه)
app?.get('/skins', (req, res) => {
  res.json({
    status: "success",
    skins_list: [
      "All Elite Pass Skins",
      "All Legendary Weapons",
      "All Vehicle Skins"
    ]
  });
});