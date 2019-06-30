// App Imports
import models from '../../models';

// Get users by ID
export async function getById(parentValue, { id }) {
  return await models.User.findOne({ where: { id } });
}

// Get all users
export async function getAll() {
  return await models.User.findAll({ order: [['createdAt', 'DESC']] });
}

// Create user
export async function create(parentValue, { firstName, lastName, email }) {
  console.log(firstName);
  console.log(lastName);
  console.log(email);
  return await models.User.create({ firstName, lastName, email });
}

// Delete user
export async function remove(parentValue, { id }) {
  return await models.User.destroy({ where: { id } });
}
