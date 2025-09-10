import { Request, Response } from "express";
import { User } from "../models/user";

class LoginController {
  async loginUser(req: Request, res: Response) {
    const { name, password } = req.body;

    try {
      const user = await User.findOne({ name });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Here you would typically compare the password with a hashed version
      if (user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Successful login logic (e.g., generating a token) goes here
      res.status(200).json({ message: "Login successful", user });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  }
}

export default new LoginController();
