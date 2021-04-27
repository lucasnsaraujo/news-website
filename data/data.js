module.exports = {
  data: [],

  generateId() {
    return Math.random().toString(36).substring(2, 9);
  },
  newPost(title, description, content, category, imgurl) {
    let id = this.generateId();
    this.data.push({ id, title, description, content, category, imgurl });
  },
  getAll() {
    return this.data;
  },
};
