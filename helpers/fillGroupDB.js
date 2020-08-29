import { Group } from "../db-layer/groupDB";

export const fillGroupDB = () => {
    Group.bulkCreate([
        { name: 'AllAccess', permissions: ['READ', 'WRITE', 'DELETE', 'SHARE', 'UPLOAD_FILES'] },
        { name: 'ReadWrite', permissions: ['READ', 'WRITE'] },
        { name: 'ShareUpload', permissions: ['SHARE', 'UPLOAD_FILES'] },
        { name: 'Custom', permissions: ['DELETE', 'SHARE', 'UPLOAD_FILES'] },
    ])
};
