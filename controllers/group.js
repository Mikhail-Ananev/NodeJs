import { groupService } from "../services/group"

export const getGroup = async (req, res) => {
  const groupData = await groupService.getById(req.params.id);
  res.status(200).json(groupData);
}

export const getGroups = async (req, res) => {
  const groupData = await groupService.getList();
  res.status(200).json(groupData);
}

export const createGroup = async (req, res) => {
  const groupData = await groupService.create(req.body);
  res.status(200).json(groupData);
}

export const editGroup = async (req, res) => {
  const groupData = await groupService.edit(req.body);
  res.status(200).json(groupData);
}

export const deletGroup = async (req, res) => {
  await groupService.delete(req.params.id);
  res.status(200).send();
}
