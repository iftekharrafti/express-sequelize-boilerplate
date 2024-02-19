class BaseService {
	#repository;
	constructor(repository, serviceName) {
		this.#repository = repository;
		this.serviceName = serviceName;
	}

	async create(payload = {}, transaction = {}) {
		return await this.#repository.create(payload, transaction);
	}

	async bulkCreate(payload = []) {
		return await this.#repository.bulkCreate(payload);
	}

	async findOrCreate(query = {}, payload = {}) {
		return await this.#repository.findOrCreate(query, payload);
	}

	async upsert(payload = {}, query = {}) {
		return await this.#repository.upsert(payload, query);
	}

	async findAll(query = {}) {
		return await this.#repository.findAll(query);
	}

	async findOne(query = {}) {
		return await this.#repository.findOne(query);
	}

	async findByPk(id, query = {}) {
		return await this.#repository.findByPk(id, query);
	}

	async count(query = {}) {
		return await this.#repository.count(query);
	}

	async update(payload = {}, query = {}) {
		return await this.#repository.update(payload, query);
	}

	async updateByPk(id, payload = {}) {
		return await this.#repository.updateByPk(id, payload);
	}

	async delete(query = {}) {
		return await this.#repository.delete(query);
	}

	async deleteByPk(id) {
		return await this.#repository.deleteByPk(id);
	}
}

export default BaseService;
