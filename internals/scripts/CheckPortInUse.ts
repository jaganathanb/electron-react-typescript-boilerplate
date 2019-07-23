import chalk from 'chalk';
import detectPort = require('detect-port');

(function CheckPortInUse() {
  const port = parseInt(process.env.PORT || '1212');

  detectPort(port, (err: Error, availablePort: number) => {
    if (port !== availablePort) {
      throw new Error(
        chalk.whiteBright.bgRed.bold(
          `Port "${port}" on "localhost" is already in use. Please use another port. ex: PORT=4343 yarn dev`
        )
      );
    } else {
      process.exit(0);
    }
  });
})();
