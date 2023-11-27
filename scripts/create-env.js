const fs = require('fs');
const envContent = `API_WAITLIST=${process.env.API_WAITLIST}`;

fs.writeFileSync('./.env', envContent.trim());