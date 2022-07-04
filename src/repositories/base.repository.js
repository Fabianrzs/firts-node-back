export default class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async get(id) {}

  async getAll() {}

  async create() {}

  async update() {}

  async delete() {}
}
