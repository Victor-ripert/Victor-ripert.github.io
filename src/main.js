"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the express in typescript file
const express_1 = __importDefault(require("express"));
// Initialize the express engine
const app = (0, express_1.default)();
// Take a port 3000 for running server.
const port = 3000;
// let path: string = "";
app.use(express_1.default.static('front/index.html'));
// Handling '/' Request
app.get('/', function (req, res) {
    res.sendFile(__dirname + 'front/index.html');
    res.send();
});
// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express : http://localhost:${port}/`);
});
