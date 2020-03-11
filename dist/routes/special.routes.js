"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const passport_1 = __importDefault(require("passport"));
router.all('**', passport_1.default.authenticate('jwt', { session: false }));
router.get('/special', (req, res) => {
    res.send('Bienvenido a la ruta protegida');
});
exports.default = router;
