import { db } from "../database/database.js";
import {
  allUsers,
  emailCheck,
  employee,
  fireEmployee,
  makeEmployee,
  postUser,
  user,
  usernameCheck,
} from "./queries.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// get all users
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

// get a single user
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

// get all users that are employees
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

// give user employee status
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

// remove employee status from user
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

// create/register new users
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
    });
  } catch (error) {
    console.error(error);
    res.status(500).json("Error While Creating New User");
  }
};

// log existing users in
const logUserIn = async (req, res) => {
  try {
    const username = req.params.username;
    const password = req.params.password;

    const user = await db.query(usersLogin, [username]);
    if (user.rowCount === 0) {
      return res.status(404).json("Username not found");
    }
    if (await bcrypt.compare(password, user.rows[0].password)) {
      const accessToken = jwt.sign(username, process.env.ACCESS_TOKEN_SECRET);
      return res
        .status(201)
        .json({ accessToken: accessToken, username: username });
    } else {
      return res.status(404).json("Incorrect Username or Password.");
    }
  } catch (err) {
    console.error(err);
  }
};
// add shoe to users cart
// add shoe to users past purchases
