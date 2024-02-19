import { Role } from '../../models/role/role.model.mjs';
import BaseRepository from '../base/base.repository.mjs';

class RoleRepository extends BaseRepository {
	constructor(model) {
		super(model);
	}
}

export default new RoleRepository(Role);
