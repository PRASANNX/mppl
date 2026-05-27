#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const prompts_1 = require("@clack/prompts");
const promises_1 = __importDefault(require("fs/promises"));
const supabase_js_1 = require("./supabase.js");
const vercel_js_1 = require("./vercel.js");
const program = new commander_1.Command();
program
    .name('prx-os')
    .description('Magic Deploy CLI for PRX Startup OS')
    .action(async () => {
    (0, prompts_1.intro)('⬛ PRX Startup OS: Executive Infrastructure Setup ⬛');
    const supabaseToken = await (0, prompts_1.text)({
        message: 'Enter your Supabase Personal Access Token:',
        placeholder: 'sbp_...',
    });
    if ((0, prompts_1.isCancel)(supabaseToken)) {
        (0, prompts_1.cancel)('Setup aborted.');
        return;
    }
    const dbRef = await (0, prompts_1.text)({
        message: 'Enter your Supabase Project Reference ID (e.g., abcdefghijklm):',
    });
    if ((0, prompts_1.isCancel)(dbRef)) {
        (0, prompts_1.cancel)('Setup aborted.');
        return;
    }
    const s = (0, prompts_1.spinner)();
    s.start('Linking Supabase and pushing migrations (001 to 005)...');
    try {
        await (0, supabase_js_1.linkSupabase)(dbRef, supabaseToken);
        await (0, supabase_js_1.pushMigrations)(supabaseToken);
        s.stop('✔ Database migrations applied successfully.');
    }
    catch (error) {
        s.stop('✖ Database push failed.');
        console.error(error?.message || error);
        process.exit(1);
    }
    // Generate strict .env.local
    const envContent = `NEXT_PUBLIC_SUPABASE_URL=https://${dbRef}.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
# Update secret keys manually in Vercel dashboard
`;
    await promises_1.default.writeFile('.env.local', envContent);
    const vercelToken = await (0, prompts_1.text)({
        message: 'Enter your Vercel Access Token (optional, press enter to skip):',
        placeholder: '...',
    });
    if (!(0, prompts_1.isCancel)(vercelToken) && vercelToken) {
        const vSpinner = (0, prompts_1.spinner)();
        vSpinner.start('Linking Vercel project...');
        try {
            await (0, vercel_js_1.linkVercel)(vercelToken);
            vSpinner.stop('✔ Vercel project linked successfully.');
        }
        catch (error) {
            vSpinner.stop('✖ Vercel linking failed. You can do this later.');
            console.error(error?.message || error);
        }
    }
    (0, prompts_1.outro)('✅ PRX OS is ready. Start building.');
});
program.parse();
