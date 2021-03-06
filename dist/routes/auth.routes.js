"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
const express_1 = require("express");
const router = express_1.Router();
router.post('/signup', user_controller_1.signUp);
router.post('/signin', user_controller_1.signIn);
exports.default = router;
