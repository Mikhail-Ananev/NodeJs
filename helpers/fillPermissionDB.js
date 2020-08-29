import { Permission } from "../db-layer/permissionDB";

export const fillPermissionDB = () => {
	Permission.bulkCreate([
		{ operation: 'READ' },
		{ operation: 'WRITE' },
		{ operation: 'CREATE' },
		{ operation: 'DELETE' },
		{ operation: 'SHARE' },
		{ operation: 'UPLOAD_FILES' },
	]);
};