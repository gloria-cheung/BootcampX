SELECT day, count(*) as number_of_assignments, sum(duration) as duration
FROM assignments
GROUP by day
ORDER by day;