import express from "express";
import { create, deleteUser, fetch, update } from "../controller/userController.js";

const route=express.Router();


route.get("/fetch",fetch); //To fetch data:- http://localhost:5000/api/user/fetch

route.post("/create",create); //To insert data:- http://localhost:5000/api/user/create

route.put("/update/:id",update)

route.delete("/delete/:id",deleteUser)

export default route;

