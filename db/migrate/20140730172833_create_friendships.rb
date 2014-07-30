class CreateFriendships < ActiveRecord::Migration
  def change
    create_table :friendships do |t|
      t.integer :init_friend_id, null: false
      t.integer :recp_friend_id, null: false

      t.timestamps
    end
    add_index :friendships, :recp_friend_id
  end
end
