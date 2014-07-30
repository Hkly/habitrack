# == Schema Information
#
# Table name: friendships
#
#  id             :integer          not null, primary key
#  init_friend_id :integer          not null
#  recp_friend_id :integer          not null
#  created_at     :datetime
#  updated_at     :datetime
#

class Friendship < ActiveRecord::Base
  belongs_to :init_user, foreign_key: :init_friend_id, class_name: "User"
  belongs_to :recp_user, foreign_key: :recp_friend_id, class_name: "User"
end
