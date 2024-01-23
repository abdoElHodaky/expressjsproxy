#!/user/bin/bash
npx tsc
node swagger-autogen.js
node ./dist/app.js
