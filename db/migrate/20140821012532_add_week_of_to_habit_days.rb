class AddWeekOfToHabitDays < ActiveRecord::Migration
  def change
    add_column :habit_days, :week_of, :date
  end
end
