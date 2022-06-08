const arg = process.argv.slice(2);
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT students.id, students.name, cohorts.name as cohort_name
FROM students
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name LIKE '%${arg[0]}%'
LIMIT ${arg[1]};
`)
.then(res => {
  const results = res.rows;
  for (let row of results) {
    console.log(`${row.name} has an id of ${row.id} and was in the ${row.cohort_name} cohort`)
  }
});