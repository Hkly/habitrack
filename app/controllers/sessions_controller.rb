class SessionsController < ApplicationController
  before_action :ensure_signed_out, except: [:destroy]

  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(params[:username], params[:password])

    if @user
      signin_user!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid username/password combo"]
      render :new
    end
  end

  def destroy
    signout_user!
    redirect_to new_session_url
  end
end
