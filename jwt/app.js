"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
let users = [];
app.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body, "req");
    const { username, password } = req.body;
    const existingUser = users.find(user => user.username === username);
    if (existingUser)
        return res.status(400).json({ message: "user already exists" });
    const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
    const user = {
        username,
        password: hashedPassword
    };
    users.push(user);
    return res.status(400).json({ message: "user inserted successfully" });
}));
app.listen(3000, () => {
    console.log("listening to PORT 3000");
});
