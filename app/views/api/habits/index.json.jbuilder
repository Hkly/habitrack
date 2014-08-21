json.array! @habits do |habit|
  json.id habit.id
  json.title habit.title
  json.user_id habit.user_id
  json.num_days_per_week habit.num_days_per_week
  json.weight habit.weight
  json.current_habit_days habit.current_habit_days do |habit_day|
    json.id habit_day.id
    json.habit_id habit_day.habit_id
    json.day habit_day.day
    json.week_of habit_day.week_of
  end
  json.all_habit_days habit.habit_days do |habit_day|
    json.id habit_day.id
    json.habit_id habit_day.habit_id
    json.day habit_day.day
    json.week_of habit_day.week_of
  end
end