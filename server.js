module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  res.json({
    verAddr: "https://" + req.headers.host + "/",
    resetGuest: true,
    status: "active",
    news: "اشترك في القناة لدعم المحتوى",
    skin_access: true
  });
};