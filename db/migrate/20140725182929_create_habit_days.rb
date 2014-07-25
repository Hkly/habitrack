class CreateHabitDays < ActiveRecord::Migration
  def change
    create_table :habit_days do |t|
      t.integer :habit_id, null: false
      t.string :day, null: false

      t.timestamps
    end
    add_index :habit_days, :habit_id
  end
end
