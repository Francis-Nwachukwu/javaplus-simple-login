import User from "../models/user.models.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email: email } });

    if (!existingUser)
      return res.status(404).json({ message: "User does not exist." });

    if (existingUser.password !== password)
      return res.status(400).json({ message: "Invalid credentials." });

    res.status(201).json({ result: existingUser });
  } catch (err) {
    console.log(err.message);
  }
};
