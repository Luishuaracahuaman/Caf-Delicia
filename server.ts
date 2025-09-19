import { APP_BASE_HREF } from '@angular/common';
import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');

  // Serve static files
  server.use(express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  // Handle all other routes with Angular
  server.get('*', async (req, res) => {
    try {
      const { default: bootstrap } = await import('./src/main.server');
      const html = await bootstrap();
      res.send(html);
    } catch (error) {
      console.error('Error rendering application:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  return server;
}

const port = process.env['PORT'] || 4000;
const server = app();

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});