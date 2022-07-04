import ApiError from "./../utils/ApiError";
import MESSAGE from "./../constants/MESSAGE";

export default class BaseService {
  constructor(repository) {
    this.repository = repository;
  }

  async get(id) {
    if (!id) {
      throw new ApiError(400, MESSAGE.ID_IS_REQUIRED);
    }

    const entity = await this.repository.get(id);

    if (!entity) {
      throw new ApiError(404, MESSAGE.ENTITY_NOT_FOUND);
    }

    return entity;
  }

  async getAll(pagSize, pagNum) {
    return this.repository.getAll(pagSize, pagNum);
  }

  async create(entity) {
    return this.repository.create(entity);
  }

  async update(id, entity) {
    await this.get(id);

    return this.repository.update(id, entity);
  }

  async delete(id) {
    if (!id) {
      throw new ApiError(400, MESSAGE.ID_IS_REQUIRED);
    }
    return this.repository.delete(id);
  }
}
