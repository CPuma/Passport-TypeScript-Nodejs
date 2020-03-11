"use strict";
// ***************  Configuracion principal del SERVIDOR
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importaciones
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const special_routes_1 = __importDefault(require("./routes/special.routes"));
const passport_1 = __importDefault(require("passport"));
const passport_2 = __importDefault(require("./middlewares/passport"));
// initializations
const app = express_1.default();
// settings
app.set('port', process.env.PORT || 3000);
// APP.SET  crea variables para la configuracion o uso del servidor
// middlewares
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(passport_1.default.initialize()); // para que inicialize
passport_1.default.use(passport_2.default); // por passport . EJECUTA el middleware
// routes
app.get('/', (req, res) => {
    res.send(`The Api is at  http://localhost:${app.get('port')}`);
});
app.use(auth_routes_1.default);
app.use(special_routes_1.default);
exports.default = app;
