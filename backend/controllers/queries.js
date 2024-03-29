/*
            --- ALL SHOE QUERIES BELOW ---
*/

// query for all shoes
export const allShoes = `SELECT * FROM shoes`;

// query to get shoe by id
export const shoe = `SELECT * FROM shoes WHERE id = $1`;

// query for the featured shoes limited to 4 and randomly sorted
export const featuredShoes = `SELECT * FROM shoes ORDER BY RANDOM ()LIMIT 4`;

// query for fancy shoes
export const fancy = `SELECT * FROM shoes WHERE type = 'fancy'`;

// query for sport shoes
export const sport = `SELECT * FROM shoes WHERE type = 'sport'`;

// query for casual shoes
export const casual = `SELECT * FROM shoes WHERE type = 'casual'`;

// query for creating a new shoe
export const postShoe = `
INSERT INTO shoes(username, email, password)
VALUES($1, $2, $3) RETURNING *`;

// query for updating shoe information
export const patchShoe = `
  UPDATE shoes
  SET type = COALESCE( $1, type ), name = COALESCE( $2, name ),
  image[0] = COALESCE( $3, image[0] ), price = COALESCE( $4, price ),
  description = COALESCE( $5, description ) WHERE id =$6 RETURNING *`;

// query for deleting a shoe from database
export const deleteShoe = `Delete FROM shoes Where id=$1 RETURNING *`;

/*
            --- ALL USER QUERIES BELOW ---
*/

// query for getting all users
export const allUsers = `SELECT id, username, email, is_employee, cart, purchases FROM users`;

// query for getting a single user
export const user = `SELECT id, username, email, cart, purchases FROM users WHERE id=$1`;

// query for only usernames for user registration/login
export const usernameCheck = `Select username FROM users WHERE username = $1`;

// query for only emails for user registration
export const emailCheck = `Select email FROM users WHERE email = $1`;

// query for only usernames for user registration/login
export const userLogin = `Select id, password, is_employee FROM users WHERE username = $1`;

// query for getting all users that are employees
export const employee = `SELECT * FROM users WHERE is_employee = 'true'`;

// query for making a user an employee
export const makeEmployee = `UPDATE users SET is_employee = 't' WHERE id = $1 RETURNING *`;

// query for making a user an employee
export const fireEmployee = `UPDATE users SET is_employee = 'f' WHERE id = $1 RETURNING *`;

// query for for creating a new user
export const postUser = `
  INSERT INTO users(username, email, password)
  VALUES($1, $2, $3) RETURNING *`;

// query for updating user information
export const patchUser = `
  UPDATE users SET username = COALESCE($1, username), email = COALESCE($2, email),
  password = COALESCE($3, password), is_employee = COALESCE($4, is_employee)
  WHERE username = $5 AND password = $6 RETURNUNG *`;

// query for deleting a user from the database
export const deleteUser = `DELETE FROM users WHERE id = $1 RETURNING *`;

// query for adding shoe to cart
export const postToCart = `UPDATE users SET cart = ARRAY_APPEND(cart, $1 ::int) 
WHERE id = $2 RETURNING username, cart`;

// query to check if shoe is already in the cart
export const dupShoeCheck = `SELECT username, cart FROM users WHERE id = $1`;

// query to delete shoe from cart
export const deleteShoeFromCart = `UPDATE users SET cart = array_remove(cart, $1 ::int) WHERE username = $2;`;
/*
          --- ALL QUERIES FOR REVIEWS ---
*/

// query for all reviews
export const getReviews = `
SELECT * FROM users
JOIN reviews ON reviews.users_id = users.username`;
export const postReview = `INSERT INTO reviews(review, posted_on, users_id) VALUES($1, $2, $3) RETURNING *`;
