import { response } from "express";
import User from "../model/user-schema.js";
import Product from "../model/product-schema.js";
export const userSignup = async (request, response) => {
  try {
    const exist = await User.findOne({ username: request.body.username });

    if (exist) {
      return response.status(401).json({ message: "Username already exist" });
    }

    const user = request.body;
    const newUser = new User(user);
    await newUser.save();
    response.status(200).json({ data: user });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const userLogin = async (request, response) => {
  console.log(request.body);
  try {
    const username = request.body.username;
    const password = request.body.password;
    let user = await User.findOne({ username: username, password: password });

    if (user) {
      return response.status(200).json({ data: user });
    } else {
      return response.status(401).json("Sit Invalid login");
    }
  } catch (error) {
    response.status(500).json("Error", error.message);
  }
};

export const addToCart = async (req, res) => {
   const {id,quantity,username}=req.body;
   try {
      const user = await User.findOne({ username });
      const _id=user._id;
      // Check if the item with the given ID already exists in the cart
      const foundObjectIndex = user.cart.findIndex((obj) => obj.id === id);
      if (foundObjectIndex === -1) {
        // If the item doesn't exist in the cart, add it
        user.cart.push({ id, quantity });
        console.log("Item pushed!");
      } else {
        // If the item already exists, update its quantity
        user.cart[foundObjectIndex].quantity += quantity;
        console.log(user.cart[foundObjectIndex].quantity);

        console.log("Item quantity updated!");
      }
    
      // Save the updated user document back to the database
      await User.findByIdAndUpdate(_id,user);
    } catch (error) {
      // Handle any errors that may occur during the database operation
      console.error("Error:", error);
    }
    
};
