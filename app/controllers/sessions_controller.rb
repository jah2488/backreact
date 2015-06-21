class SessionsController < ApplicationController

  def create
    user = User.find_by_email(params[:email])
    if user != nil && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: { message: 'Login Successful!' }, status: 200
    else
      flash[:alert] = 'Email or password did not match'
      render json: { message: 'Login did not work!' }, status: 401
    end
  end

  def destroy
    session[:user_id] = nil
    render json: { message: 'Logout successful!' }
  end
end
