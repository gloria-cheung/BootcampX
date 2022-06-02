SELECT count(assistance_requests.*) as total_assistance, students.name as name
FROM assistance_requests
JOIN students ON student_id = students.id
WHERE students.name = 'Elliot Dickinson'
GROUP BY students.name;