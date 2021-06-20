import { sign } from 'jsonwebtoken';
import User from '../models/User';

class Login {
  async authenticat(req, res) {
    const { email, password } = req.body;

    if (!email.trim() || !password.trim())
      return res.status(401).json({ error: 'please, fill all fields' });

    const user = await User.findOne({ email });
    if (!user || user.password !== password)
      return res.status(401).json({ error: 'Email or password is incorrect' });

    const MD5_HASH = process.env.MD5_HASH;
    const token = sign({ id: user._id }, MD5_HASH, { expiresIn: '1d' });

    return res.json({ token, user: { name: user.name, id: user._id } });
  }
}

export default new Login();
