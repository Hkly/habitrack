json.(@habit, :id, :user_id, :title, :weight, :num_days_per_week)
json.current_habit_days @habit.current_habit_days
json.all_habit_days @habit.habit_days