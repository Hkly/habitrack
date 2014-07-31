class Api::FriendshipsController < ApplicationController
  def create
    recp_friend = User.find_by_username(params[:username])
    if recp_friend.nil?
      render json: "Invalid username", status: :unprocessible_entity
    else
      friendship1 = current_user.created_friendships.create(recp_friend_id: recp_friend.id)
      friendship2 = recp_friend.created_friendships.create(recp_friend_id: current_user.id)
      redirect_to api_user_url(recp_friend.id)
    end
  end

  def destroy

  end
end
