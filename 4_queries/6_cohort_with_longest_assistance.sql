SELECT cohorts.name, avg(completed_at - started_at) as average_assistance_time
FROM students
JOIN cohorts ON cohorts.id = cohort_id
JOIN assistance_requests ON assistance_requests.student_id = students.id
WHERE cohorts.name = 'MAR12'
GROUP BY cohorts.name
ORDER BY average_assistance_time DESC;