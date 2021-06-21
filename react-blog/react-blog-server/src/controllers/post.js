import PostRepository from '../models/Post';
class Post {
  async store(req, res) {
    const { title, description, author, bannerUrl } = req.body;
    try {
      if (
        !title.trim() ||
        !description.trim() ||
        !bannerUrl.trim() ||
        !author.trim()
      )
        return res.status(401).json({ error: 'please, fill all fields' });

      const post = await PostRepository.create({
        title,
        author,
        description,
        bannerUrl,
      });
      return res.json(post);
    } catch (error) {
      return res.json({
        error:
          error.message +
          ', ' +
          'one of property that you send, is not correct',
      });
    }
  }

  async index(req, res) {
    const posts = await PostRepository.find();

    return res.json(posts);
  }
}

export default new Post();
