json.(@habit, :id, :user_id, :title, :weight, :num_days_per_week)
json.habit_days @habit.habit_days, :habit_id, :day, :week_of
