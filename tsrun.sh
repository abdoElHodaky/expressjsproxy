#!/user/bin/bash
npx tsc
node swagautogen.js
node ./dist/app.js
