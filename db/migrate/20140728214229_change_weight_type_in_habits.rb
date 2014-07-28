class ChangeWeightTypeInHabits < ActiveRecord::Migration
  def change
    change_column :habits, :weight, :integer
  end
end
