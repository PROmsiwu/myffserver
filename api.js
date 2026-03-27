// api.js - الملف الرئيسي في جذر المشروع
module.exports = async (req, res) => {
  // تعيين رؤوس CORS للسماح للعبة بالاتصال
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // معالجة طلبات OPTIONS المسبقة
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  try {
    // رابط السيرفر الحالي
    const serverUrl = `https://${req.headers.host || 'localhost'}`;
    
    // البيانات المطلوبة من اللعبة
    const responseData = {
      verAddr: serverUrl + "/",
      resetGuest: true,
      status: "active",
      news: "✅ Server Running | For Content Creation ✅",
      skin_access: true,
      server_time: new Date().toISOString(),
      features: {
        all_skins: true,
        all_emotes: true,
        all_vehicles: true,
        all_weapons: true
      }
    };
    
    // إرسال الرد بنجاح
    res.status(200).json(responseData);
    
  } catch (error) {
    // في حالة حدوث أي خطأ
    console.error('Server Error:', error);
    res.status(200).json({
      verAddr: "https://version.astutech.online/",
      resetGuest: true,
      status: "active",
      news: "Server is running",
      skin_access: true
    });
  }
};