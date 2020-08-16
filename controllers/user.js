import { userService } from "../services/user"

export const getUser = async (req, res) => {
  const userData = await userService.getById(req.params.id);
  res.status(200).json(userData);
}

export const getUsers = async (req, res) => {
  const usersData = await userService.getList(req.query.loginSubstring, req.query.limit);
  res.status(200).json(usersData);
}

export const createUser = async (req, res) => {
  const userData = await userService.create(req.body);
  res.status(200).json(userData);
}

export const editUser = async (req, res) => {
  const userData = await userService.edit(req.body);
  res.status(200).json(userData);
}

export const deleteUser = async (req, res) => {
  await userService.delete(req.params.id);
  res.status(200).send();
}
