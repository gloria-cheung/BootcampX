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
  SELECT teachers.name as teacher, cohorts.name as cohort
  FROM teachers
  JOIN assistance_requests ON teachers.id = teacher_id
  JOIN students ON students.id = student_id
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE $1
  GROUP BY teachers.name, cohorts.name
  ORDER BY teachers.name;
  `;
const cohortName = arg[0];
const values = [`%${cohortName}%`];

pool.query(queryString, values)
  .then(res => {
    const result = res.rows;
    for (let row of result) {
      console.log(`${row.cohort}: ${row.teacher}`);
    }
  });