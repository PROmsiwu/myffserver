// server.js - الملف الرئيسي
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  const host = req.headers.host;
  const url = req.url;
  
  // تحديد نوع الملف المطلوب
  if (url.includes('.so')) {
    // ملف libil2cpp.so - سيتم إعادة التوجيه
    return res.redirect('https://github.com/morristh/freefire-mod/raw/main/libil2cpp.so');
  }
  
  if (url.includes('.dat') || url.includes('data0')) {
    // ملف data0.dat
    return res.redirect('https://github.com/morristh/freefire-mod/raw/main/data0.dat');
  }
  
  if (url.includes('version') || url.includes('json')) {
    // ملف الإصدار
    return res.json({
      version: "1.100.0",
      verAddr: `https://${host}/`,
      status: "active",
      resetGuest: true,
      skin_access: true,
      news: "✅ Server Working - Enjoy ✅"
    });
  }
  
  if (url === '/' || url === '/webview') {
    // الرد الرئيسي
    return res.json({
      verAddr: `https://${host}/`,
      resetGuest: true,
      status: "active",
      news: "✅ اشترك في القناة لدعم المحتوى ✅",
      skin_access: true,
      webview_url: `https://${host}/webview`,
      config_version: "2.0"
    });
  }
  
  // أي طلب آخر
  res.json({
    status: "active",
    server: `https://${host}/`,
    message: "Server is running"
  });
};