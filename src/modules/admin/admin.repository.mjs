import { Admin } from '../../models/admin/admin.model.mjs';
import BaseRepository from '../base/base.repository.mjs';

class AdminRepository extends BaseRepository {
	constructor(model) {
		super(model);
	}
}

export default new AdminRepository(Admin);
