const express = require("express");
const router = express.Router();
const userController = require("../controllers/GoogleLogInController");

const upload = require("../middleware/handleImage")
// router.get("/api/users" , userController.allUsers);
router.post("/api/newUserGoogle", userController.newUserGoogle);
// router.get("/api/users/:id", userController.oneUser);
// router.put("/api/users/:id",upload.single("image"), userController.updateUser);
// router.delete("/api/users/:id", userController.deleteUser);

module.exports = router;