#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

console.log('🚀 Starting production server...');

// Function to run a command and return a promise
function runCommand(command, args = [], options = {}) {
  return new Promise((resolve, reject) => {
    console.log(`📦 Running: ${command} ${args.join(' ')}`);
    
    const child = spawn(command, args, {
      cwd: rootDir,
      stdio: 'inherit',
      shell: true,
      ...options
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });

    child.on('error', (error) => {
      reject(error);
    });
  });
}

async function startProduction() {
  try {
    // Check if DATABASE_URL is available
    if (!process.env.DATABASE_URL) {
      console.warn('⚠️  DATABASE_URL not found. Database operations may fail.');
    } else {
      console.log('✅ DATABASE_URL found');
    }

    // Try to set up database (this will fail gracefully if DB is not available)
    try {
      console.log('🗄️  Setting up database...');
      await runCommand('npm', ['run', 'db:push']);
      console.log('✅ Database setup completed');
    } catch (error) {
      console.warn('⚠️  Database setup failed, continuing with app start:', error.message);
    }

    // Start the main application
    console.log('🎯 Starting application...');
    await runCommand('npm', ['start']);
    
  } catch (error) {
    console.error('❌ Production start failed:', error.message);
    process.exit(1);
  }
}

startProduction();