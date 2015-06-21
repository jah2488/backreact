class PostsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :show, :update, :destroy]
  before_action :allowed_to_modify!, only: [:update, :destroy]

  def index
    render json: post = Post.all
  end

  def show
    render json: post = Post.find(params[:id])
  end

  def create
    begin
      post = Post.create(body: params[:body], user_id: params[:user_id])
      render json: post, status: 200
    rescue ActionController::ParameterMissing => error
      render json: { error: error.message }, status: 422
    end
  end

  def update
    if Post.exists? (params[:id])
      post = Post.find(params[:id])
      post.body = params.fetch(:body, post.body)
      render json: post
    else
      render json: { error: 'Post not found' }, status: 404
    end
  end


  def destroy
    if Post.exists?(params[:id])
    deleted_post = Post.destroy (params[:id])
    render json: deleted_post
    else
      render json: { error: 'Post not found' }, status: 404
    end
  end

  def get_recent_post
    post = Post.all
    recent_post = []
    time = Time.new
    post.each do |element|
      if (time - element.created_at) < 36000
        recent_post << element
      end
    end
    render json: recent_post
  end

  private

  def allowed_to_modify!
    if Post.exists? (params[:id])
      post = Post.find(params[:id])
      if post.user_id != @current_user.id
        redirect_to :back, alert: "Users can only modify their own data."
      end
    else
      redirect_to :back, alert: "Could not find the selected post in the DB."
    end
  end

end

