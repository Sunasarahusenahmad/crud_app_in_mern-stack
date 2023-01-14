import User from "../schema/user-schema.js";

// Add User

export const addUser = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Get All User

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ message: error.message });
  }
};

// GetUser Only One

export const getUser = async (request, response) => {
  try {
    // const user = await User.find({ _id: request.params.id });
    const user = await User.findById(request.params.id); // Second Method
    response.status(200).json(user);
  } catch (err) {
    response.status(404).json({ message: error.message });
  }
};

// EditUser

export const editUser = async (request, response) => {
  let user = request.body;
  const editUser = new User(user);

  try {
    await User.updateOne({ _id: request.params.id }, editUser);
    response.status(201).json(editUser);
  } catch (err) {
    response.status(409).json({ message: err.message });
  }
};

// DeleteUser

export const deleteUser = async (request, response) => {
  try {

    await User.deleteOne({ _id: request.params.id });
    response.status(200).json("User deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
