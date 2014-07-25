# == Schema Information
#
# Table name: habit_days
#
#  id         :integer          not null, primary key
#  habit_id   :integer          not null
#  day        :string(255)      not null
#  created_at :datetime
#  updated_at :datetime
#

class HabitDay < ActiveRecord::Base
  belongs_to :habit

end
