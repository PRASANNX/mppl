"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkVercel = linkVercel;
exports.addVercelEnv = addVercelEnv;
const execa_1 = require("execa");
async function linkVercel(token) {
    await (0, execa_1.execa)('npx', ['vercel', 'link', '--yes'], {
        env: { ...process.env, VERCEL_TOKEN: token },
    });
}
async function addVercelEnv(key, value, token) {
    await (0, execa_1.execa)('npx', ['vercel', 'env', 'add', key, 'production'], {
        input: value,
        env: { ...process.env, VERCEL_TOKEN: token },
    });
}
