class SessionsController < ApplicationController
  def new
    render json: { message: 'Login successfully!' }
  end

  def create
    user = User.find_by_email(params[:email])
    if user != nil && user.authenticate(params[:password])
      session[:user_id] = user.id
    else
      flash[:alert] = 'Email or password did not match'
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
    render json: { message: 'Logout successfully!' }
  end
end
