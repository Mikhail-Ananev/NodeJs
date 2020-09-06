import { userGroupService } from "../services/userGroup"

export const getUserGroups = async (req, res) => {
  const userGroupsData = await userGroupService.getList();
  res.status(200).json(userGroupsData);
};

export const addUserGroup = async (req, res) => {
  const userGroupData = await userGroupService.create(req.body);
  res.status(200).json(userGroupData);
};
