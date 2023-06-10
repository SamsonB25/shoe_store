/*
            ---ALL SHOE QUERIES BELOW---
*/

// query for all shoes
export const allShoes = `SELECT * FROM shoes`;

// query for the featured shoes limited to 4 and randomly sorted
export const featuredShoes = `SELECT * FROM shoes ORDER BY RANDOM ()LIMIT 4`;

// query for updating shoe information
export const patchShoe = `
  UPDATE shoes
  SET type = COALESCE( $1, type ), name = COALESCE( $2, name ),
  image[0] = COALESCE( $3, image[0] ), price = COALESCE( $4, price ),
  description = COALESCE( $5, description ) WHERE id =$6 RETURNING *`;

// query for deleting a shoe from database
export const deleteShoe = `Delete FROM shoes Where id=$1 RETURNING *`;

/*
            ---ALL USER QUERIES BELOW---
*/

// query for getting all users
export const allUsers = `SELECT * FROM users`;

// query for getting a single user
export const user = `SELECT * FROM users WHERE id=$1`;

// query for getting all users that are employees
export const employee = `SELECT * FROM users WHERE is_employee = 'true'`;

// query for for creating a new user
export const postUser = `
  INSERT INTO users(username, email, password, is_employee)
  VALUES($1, $2, $3, $4)`;

// query for updating user information
export const patchUser = `
  UPDATE users SET username = COALESCE($1, username), email = COALESCE($2, email),
  password = COALESCE($3, password), is_employee = COALESCE($4, is_employee)
  WHERE username = $5 AND password = $6 RETURNUNG *`;

// query for deleting a user from the database
export const deleteUser = `DELETE FROM users WHERE id = $1 RETURNING *`;
