import { promisify } from "util";
import { db } from "../database/database.js";
import {
  allUsers,
  deleteShoeFromCart,
  dupShoeCheck,
  emailCheck,
  employee,
  fireEmployee,
  makeEmployee,
  postToCart,
  postUser,
  user,
  userLogin,
  usernameCheck,
} from "./queries.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

/*
          -- GETS ALL USERS DATA FROM DB -- 
*/
export const getAllUser = async (_, res) => {
  try {
    const results = await db.query(allUsers);
    results.rowCount === 0
      ? res.status(404).json("No Users Found")
      : res.status(200).json(results.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json("Error While Locating Users");
  }
};
/*
          -- GETS A SINGLE USERS DATA FROM DB -- 
*/
export const getUser = async (_, res) => {
  try {
    const results = await db.query(user);
    results.rowCount === 0
      ? res.status(404).json("User Not Found")
      : res.status(200).json(results.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json("Error While Locating User");
  }
};
/*
          -- GETS ALL EMPLOYEE DATA FROM DB -- 
*/
export const getEmployees = async (_, res) => {
  const results = await db.query(employee);
  try {
    results.rowCount === 0
      ? res.status(404).json("Employee Not Found")
      : res.status(200).json(results.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json("Error While Locating Employees");
  }
};
/*
          -- GIVES USERS EMPLOYEE STATUS -- 
*/
export const makeUserEmployee = async (req, res) => {
  const id = Number(req.params.id);
  const results = await db.query(makeEmployee, [id]);
  try {
    results.rowCount === 0
      ? res.status(404).json("Employee Not Found")
      : res.status(202).json(results.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json("Error While Upgrading User");
  }
};
/*
          -- TAKES AWAY USERS EMPLOYEE STATUS -- 
*/
export const unMakeUserEmployee = async (req, res) => {
  const id = Number(req.params.id);
  const results = await db.query(fireEmployee, [id]);
  try {
    results.rowCount === 0
      ? res.status(404).json("Employee Not Found")
      : res.status(202).json(results.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error While Upgrading User" });
  }
};
/*
          -- POSTS NEW USER TO DB -- 
*/
export const addUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // return error if user doesn't send all required information

    if (!username || !email || !password)
      return res.status(400).json({
        message: "Failed To Register User",
        error: "Ensure a ALL Fields Are Filled",
      });

    const passhash = await bcrypt.hash(password, 10); // encrypts users password for security

    //return error if username already exists
    const checkForUsername = await db.query(usernameCheck, [username]);
    if (checkForUsername.rowCount !== 0)
      return res.status(401).json({ message: "Username Not Available" });

    // return error if email already exists
    const checkForEmail = await db.query(emailCheck, [email]);
    if (checkForEmail.rowCount !== 0)
      return res.status(401).json({ message: "Email In Use" });

    const results = await db.query(postUser, [username, email, passhash]);

    const token = jwt.sign(
      { id: results.rows[0].id },
      process.env.SECRET_TOKEN
    );

    res.status(201).json({
      results: results.rows[0],
      message: "Successfully Registered User",
      token: token,
      username: username,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json("Error While Creating New User");
  }
};
/*
          -- ALLOWS USER TO LOG IN -- 
*/
export const logUserIn = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await db.query(userLogin, [username]);
    if (username === "" || password === "" || user.rowCount === 0) {
      return res
        .status(400)
        .json({ message: "Username or Password is incorrect" });
    }

    // if password is correct assign user a token with their id and employee status
    if (await bcrypt.compare(password, user.rows[0].password)) {
      const token = jwt.sign(
        { id: user.rows[0].id, employee: user.rows[0].is_employee },
        process.env.SECRET_TOKEN
      );
      return res.status(201).json({
        token: token,
      });
    } else {
      return res.status(400).json("Incorrect Username or Password.");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error While Logging In" });
  }
};

export const protectRoutes = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token)
      return res
        .status(401)
        .json({ message: "Must be signed in to use this feature" });

    const decoded = await promisify(jwt.verify)(
      token,
      process.env.SECRET_TOKEN
    );

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error While Verifying Token" });
  }
};

// add shoe to users cart
export const addToCart = async (req, res) => {
  try {
    const { shoeName } = req.body;
    const id = Number(req.params.id);

    if (id === 0)
      return res.status(400).json({ message: "Sign in to use this feature" });
    // check if shoe already exists
    const shoeCheck = await db.query(dupShoeCheck, [id]);
    // if shoe does exists send user message
    if (shoeCheck.rows[0].cart.includes(shoeName))
      return res
        .status(400)
        .json({ message: "This Shoe Is Already In Your Cart" });

    const results = await db.query(postToCart, [shoeName, id]);

    res.status(200).json(results.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error Adding Shoe to Cart" });
  }
};

// remove shoe from cart
export const removeFromCart = async (req, res) => {
  try {
    const { username, shoeName } = req.body;
    const results = await db.query(deleteShoeFromCart, [shoeName, username]);
    res
      .status(200)
      .json({ message: "Shoe Removed From Cart", results: results.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error While Removing Shoe From Cart" });
  }
};
// add shoe to users past purchases
