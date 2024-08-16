import mongoose from 'mongoose';
import app from './app';
import { Server } from 'http';
import config from './config';
let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();

process.on('unhandledRejection', () => {
  console.log(`😈 UnahandledRejection is detected , shutting down ...`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('unhandledException', () => {
  console.log(`😈 UncaughtException is detected , shutting down ...`);
  process.exit(1);
});
