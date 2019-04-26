let DB_URI;

if (process.env.NODE_ENV === 'test') {
  DB_URI = 'stringly-test';
} else {
  DB_URI = process.env.DATABASE_URL || 'stringly';
}

module.exports = {
  DB_URI,
};
