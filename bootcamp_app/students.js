const arg = process.argv.slice(2);
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

// to prevent SQL injection
const queryString = `
  SELECT students.id, students.name, cohorts.name as cohort_name
  FROM students
  JOIN cohorts ON students.cohort_id = cohorts.id
  WHERE cohorts.name LIKE $1
  LIMIT $2;
  `;
const cohortName = arg[0];
const limit = arg[1];
const values = [`%${cohortName}%`, limit];

pool.query(queryString, values)
  .then(res => {
    const results = res.rows;
    for (let row of results) {
      console.log(`${row.name} has an id of ${row.id} and was in the ${row.cohort_name} cohort`);
    }
  });