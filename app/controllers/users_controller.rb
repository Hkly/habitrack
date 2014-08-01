class UsersController < ApplicationController
  before_action :ensure_signed_out, only: [:new, :create]
  before_action :ensure_signed_in, only: [:show, :update]

  def new
    @user = User.new
    render 'new'
  end

  def create
    @user = User.new(user_params)

    if @user.save
      signin_user!(@user)
      welcome_habit = @user.habits.create({title: "Welcome to HabiTrack!", weight: 2, num_days_per_week: 1})
      
      redirect_to root_url
    else
      flash.now[:danger] = @user.errors.full_messages
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
