class UsersController < ApplicationController
  before_action :ensure_signed_out, only: [:new, :create]

  def new
    @user = User.new
    render 'new'
  end

  def create
    @user = User.new(user_params)

    if @user.save
      signin_user!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render 'new'
    end
  end

  def update

  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end

end
cd
