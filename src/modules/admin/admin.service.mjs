import BaseService from '../base/base.service.mjs';
import roleRepository from '../role/role.repository.mjs';
import adminRepository from './admin.repository.mjs';

class AdminService extends BaseService {
	#repository;
	#roleRepository;
	constructor(repository, serviceName, roleRepository) {
		super(repository, serviceName);
		this.#repository = repository;
		this.#roleRepository = roleRepository;
	}

	async createAdmin(payload, transaction) {
		const [role, isCreated] = await this.#roleRepository.findOrCreate(
			{ type: 'admin' },
			{
				name: 'Admin',
				type: 'admin',
			},
			transaction
		);

		const admin = await this.#repository.create(
			{
				...payload,
				role_id: payload?.role_id ? payload?.role_id : role?.id,
			},
			{ transaction }
		);

		return admin;
	}
}

export default new AdminService(adminRepository, 'Admin', roleRepository);
