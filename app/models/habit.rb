# == Schema Information
#
# Table name: habits
#
#  id                :integer          not null, primary key
#  title             :string(255)      not null
#  user_id           :integer          not null
#  num_days_per_week :integer          not null
#  weight            :string(255)      not null
#  created_at        :datetime
#  updated_at        :datetime
#

class Habit < ActiveRecord::Base
  validates :title, :user_id, :num_days_per_week, presence: true
  validates :weight, presence: true, inclusion: %w(heavy medium light)

  belongs_to :user
  has_many :habit_days

end
