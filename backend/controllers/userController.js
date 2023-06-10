import { db } from "../database/database.js";
import {
  allUsers,
  employee,
  fireEmployee,
  makeEmployee,
  postUser,
  user,
} from "./queries.js";

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
    res.status(500).json("Error While Upgrading User");
  }
};

// create new users
export const addUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const results = await db.query(postUser, [username, email, password]);
    username == null || email == null || password == null
      ? res.status(406).json("Some Fields Left Blank")
      : res.status(201).json(results.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json("Error While Creating New User");
  }
};

// add shoe to users cart
// add shoe to users past purchases
