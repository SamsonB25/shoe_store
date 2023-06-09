export const allShoes = `SELECT * FROM shoes`;

export const featuredShoes = `SELECT * FROM shoes ORDER BY RANDOM ()LIMIT 4`;

export const patchShoe = `UPDATE shoes
  SET type = COALESCE( $1, type ), name = COALESCE( $2, name ),
  image[0] = COALESCE( $3, image[0] ), price = COALESCE( $4, price ),
  description = COALESCE( $5, description ) WHERE id =$6 RETURNING *`;

export const deleteShoe = `Delete FROM shoes Where id=$1 RETURNING *`;
