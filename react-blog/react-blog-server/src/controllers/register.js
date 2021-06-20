import User from '../models/User';

class Resgister {
  async store(req, res) {
    const { name, email, password } = req.body;

    if (!name.trim() || !email.trim() || !password.trim())
      return res.status(401).json({ error: 'please, fill all fields' });

    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists)
      return res
        .status(401)
        .json({ error: 'This email is already used by another user' });

    const user = await User.create({ name, email, password });

    return res.json(user);
  }

  // async index(req, res) {
  //   const users = await User.find();

  //   return res.json(users);
  // }
}

export default new Resgister();
