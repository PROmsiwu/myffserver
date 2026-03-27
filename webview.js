module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  res.json({
    server_url: "https://" + req.headers.host + "/",
    game_server: "custom",
    enabled: true,
    version: "1.0"
  });
};