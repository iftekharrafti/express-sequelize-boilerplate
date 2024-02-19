class BaseRepository {
	constructor(model) {
		this.model = model;
	}

	async create(payload = {}, transaction = {}) {
		return await this.model.create(payload, transaction);
	}

	async bulkCreate(payload = []) {
		return await this.model.bulkCreate(payload);
	}

	async findOrCreate(query = {}, payload = {}, transaction) {
		return await this.model.findOrCreate({
			where: query,
			defaults: payload,
			transaction,
		});
	}

	async upsert(payload = {}, query = {}) {
		return await this.model.upsert(payload, query);
	}

	async findAll(query = {}) {
		return await this.model.findAll(query);
	}

	async findOne(query = {}) {
		return await this.model.findOne(query);
	}

	async findByPk(id, query = {}) {
		return await this.model.findByPk(id, query);
	}

	async count(query = {}) {
		return await this.model.count(query);
	}

	async update(payload = {}, query = {}) {
		return await this.model.update(payload, query);
	}

	async updateByPk(id, payload = {}) {
		return await this.model.update(payload, { where: { id } });
	}

	async delete(query = {}) {
		return await this.model.destroy(query);
	}

	async deleteByPk(id) {
		return await this.model.destroy({ where: { id } });
	}
}

export default BaseRepository;
