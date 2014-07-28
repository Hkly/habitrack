class AddWeightedPointsToHabits < ActiveRecord::Migration
  def change
    add_column :habits, :weighted_points, :integer
  end
end
