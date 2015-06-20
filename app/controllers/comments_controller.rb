class CommentsController < ApplicationController
<<<<<<< HEAD
 # before_action :authenticate_user!, only: [:show, :edit, :update, :destroy]

 #  def index
 #    @comments = Comment.all
 #  end

 #  def show
 #    set_comment
 #  end


 #  def new
 #    @comment = Comment.new
 #    @all_users = User.select_users
 #    @all_posts = Post.select_posts
 #  end


 #  def edit
 #    set_comment
 #    @all_users = User.select_users
 #    @all_posts = Post.select_posts
 #  end


 #  def create
 #    @comment = Comment.new(comment_params)

 #    if @comment.save
 #      redirect_to @comment, notice: 'Comment was successfully created.'
 #    else
 #      render :new
 #    end
 #  end


 #  def update
 #    set_comment
 #    if @comment.update(comment_params)
 #      redirect_to @comment, notice: 'Comment was successfully updated.'
 #    else
 #      render :edit
 #    end
 #  end


 #  def destroy
 #    set_comment
 #    @comment.destroy
 #    redirect_to comments_url, notice: 'Comment was successfully destroyed.'
 #  end

 #  private
 #  def set_comment
 #    @comment = Comment.find(params[:id])
 #  end

 #  def comment_params
 #    params.require(:comment).permit(:body, :user_id, :post_id)
 #  end
=======
  before_action :authenticate_user!, only: [:show, :create, :update, :destroy]
  before_action :allowed_to_modify!, only: [:update, :destroy]
  def index
    render json: comment = Comment.all
  end

  def show
    render json: comment = Comment.find(params[:id])
  end


  def create
    comment = Comment.create(words: params[:words], user_id: params[:id], post_id: params[:post_id])
    render json: comment
  end


  def destroy
    if Comment.exists? (params[:id])
      deleted_comment = Comment.destroy (params[:id])
      render json: deleted_comment
    else
      render json: { error: 'Comment not found' }, status: 404
    end
  end

  private

  def allowed_to_modify!
    if Comment.exists? (params[:id])
      comment = Comment.find(params[:id])
      if comment.user_id != @current_user.id
        redirect_to :back, status: 301 # alert: "Users can only modify their own data."
      end
    else
      redirect_to :back, status: 302 # alert: "Could not find the selected comment in the DB."
    end
  end
>>>>>>> gracie
end
