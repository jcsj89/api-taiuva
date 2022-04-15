import connection from '../database/connection';
console.log('connnn');

/// testar many to many
const teste = async () => {
  const users = await connection('users').select('id');
  const roles = await connection('roles').select('id');

  const user_role = {
    user_id: users[1].id,
    role_id: roles[1].id,
  };

  const consult = await connection('users')
    .select('users.email', 'roles.role')
    .join('user_role', 'users.id', '=', 'user_id')
    .join('roles', 'user_role.role_id', '=', 'roles.id');
  console.log(consult);
};
teste();
module.exports = { teste };
