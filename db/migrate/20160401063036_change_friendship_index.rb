class ChangeFriendshipIndex < ActiveRecord::Migration
  def change
    add_index :friendships, [:init_friend_id, :recp_friend_id], unique: true
  end
end
