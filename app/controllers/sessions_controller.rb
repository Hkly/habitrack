class SessionsController < ApplicationController
  before_action :ensure_signed_out, except: [:destroy]


  def create
    @user = User.find_by_credentials(params[:username], params[:password])

    if @user
      signin_user!(@user)
      redirect_to root_url
    else
      @user = User.new(username: params[:username])
      flash.now[:danger] = ["Invalid username/password combo"]
      render "users/new"
    end
  end

  def destroy
    signout_user!
    redirect_to new_user_url
  end

  def demo_account
    @demo_user = User.find_by_username('USAsteve')

    signin_user!(@demo_user)
    redirect_to root_url
  end
end
