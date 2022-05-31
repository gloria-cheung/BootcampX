SELECT sum(assignment_submissions.duration) as total_duration
FROM students 
JOIN assignment_submissions ON assignment_submissions.student_id = students.id
WHERE students.name = 'Ibrahim Schimmel';