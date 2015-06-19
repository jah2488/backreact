class UsersController < ApplicationController
  def index
    render json: User.all
  end

  def show
    render json: User.where(zip_code: params[:zip_code])
  end


  def create
    begin
      user = User.create(user_params)
      render json: user
    rescue ActionController::ParameterMissing => error
      render json: { error: error.message }, status: 422
    end
  end

  def update
    if User.exists?(params[:id])
    user = User.find(params[:id])
    user.username = params[:username] if params[:username].present?
    user.email = params[:email]      if params[:email].present?
    user.password = params[:password] if params[:password ].present?
    user.password_confirmation = params[:password_confirmation]      if params[:password_confirmation].present?
    user.phone_number = params[:phone_number]      if params[:phone_number].present?
    user.address = params[:address]      if params[:address].present?
    user.zip_code = params[:zip_code]      if params[:zip_code].present?
    user.save
    render json: user
    else
      render json: { error: 'User not found' }, status: 404
    end

  end

  def destroy
    if User.exists?(params[:id])
    deleted_user = User.destroy (params[:id])
    render json: deleted_user
    else
      render json: { error: 'User not found' }, status: 404
    end
  end

private
  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation, :phone_number, :address, :zip_code)
  end
end
