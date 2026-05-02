// Vercel Serverless Function for password-protected downloads
module.exports = (req, res) => {
  const { file, password } = req.query;
  const correctPassword = 'cloudisk';

  if (!password) {
    res.status(401).send('未提供密码');
    return;
  }

  if (password !== correctPassword) {
    res.status(403).send('密码错误，无法下载！');
    return;
  }


  res.statusCode = 302;
  res.setHeader('Location', `/files/${file}`);
  res.end();
};
