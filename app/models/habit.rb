# == Schema Information
#
# Table name: habits
#
#  id                :integer          not null, primary key
#  title             :string(255)      not null
#  user_id           :integer          not null
#  num_days_per_week :integer          not null
#  weight            :integer          not null
#  created_at        :datetime
#  updated_at        :datetime
#

class Habit < ActiveRecord::Base
  validates :title, :user_id, :num_days_per_week, presence: true
  validates :weight, presence: true, inclusion: [1, 2, 3]

  belongs_to :user
  has_many :habit_days

  def current_habit_days
    self.habit_days.where(
      created_at: (Time.zone.now.beginning_of_week .. Time.zone.now + 1.day)
      )
  end

end
