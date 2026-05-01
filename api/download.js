// Vercel Serverless Function for password-protected downloads
module.exports = (req, res) => {
  const { file, password } = req.query;
  const correctPassword = 'cloudisk'; // 此密码仅存于服务端

  if (!password) {
    return res.status(401).send('未提供密码');
  }

  if (password !== correctPassword) {
    return res.status(403).send('密码错误，无法下载！');
  }

  // 密码正确，重定向到实际文件
  res.redirect(302, `/${file}`);
};