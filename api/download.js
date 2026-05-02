// Vercel Serverless Function
module.exports = (req, res) => {
  const { file, password } = req.query;
  const correctPassword = 'cloudisk'; // 密码仅存于服务端（前端无法获取）

  // 情况1：未提供密码
  if (!password) {
    return res.status(401).send('未提供密码');
  }
  
  // 情况2：密码错误
  if (password !== correctPassword) {
    return res.status(403).send('密码错误，无法下载！');
  }
  
  // 情况3：验证通过 → 重定向到文件
  res.redirect(302, `/files/${file}`);
};
