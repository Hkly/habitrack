class CreateHabits < ActiveRecord::Migration
  def change
    create_table :habits do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.integer :num_days_per_week, null: false
      t.integer :weight, null: false

      t.timestamps
    end
    add_index :habits, :title
    add_index :habits, :user_id
  end
end
