import express from "express";
import Joi from "joi";
import UserController from "../controllers/user.controller";

const createUserValidate = Joi.object().keys({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().email().required(),
});

const updateUserValidate = Joi.object().keys({
  firstName: Joi.string(),
  lastName: Joi.string(),
  password: Joi.string(),
});


const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new UserController();
  const response = await controller.getUsers();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new UserController();
  const {error, value } = createUserValidate.validate(req.body)
  if (error){
    return res.status(400).json({ error: error.details[0].message });
  }
  try{
    const response = await controller.createUser(value);
    return res.send(response);
  }catch(error){
    const { message } = error
    if (message === "User exist"){
      return res.status(409).send({message})
    }else{
      return res.status(500).send({message: "Internal Server Error"})
    }
    }
});

router.get("/:id", async (req, res) => {
  const controller = new UserController();
  const response = await controller.getUserById(req.params.id);
  if (!response) {
    return res.status(404).send({message: "No user found"})
  }
  return res.send(response);
});

router.delete("/:id", async (req, res) => {
  const controller = new UserController();
  const response = await controller.deleteUser(req.params.id);
  if (response){
    return res.status(204).send()
  }
  return  res.status(404).send({message: "No user found"});
});


router.put("/:id", async (req, res) => {
  const controller = new UserController();
  const {error, value } = updateUserValidate.validate(req.body)
  if (error){
    return res.status(400).json({ error: error.details[0].message });
  }
  const response = await controller.updateUser(req.params.id, value);
  if (!response) {
    return res.status(404).send({message: "No user found"})
  }
  return res.send(response);
});

export default router
