"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkSupabase = linkSupabase;
exports.pushMigrations = pushMigrations;
const execa_1 = require("execa");
async function linkSupabase(projectRef, token) {
    await (0, execa_1.execa)('npx', ['supabase', 'link', '--project-ref', projectRef], {
        env: { ...process.env, SUPABASE_ACCESS_TOKEN: token },
    });
}
async function pushMigrations(token) {
    await (0, execa_1.execa)('npx', ['supabase', 'db', 'push'], {
        env: { ...process.env, SUPABASE_ACCESS_TOKEN: token },
    });
}
