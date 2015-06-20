class PostsController < ApplicationController
  before_action :authenticate_user!, only: [:show, :edit, :update, :destroy]

  def index
    post = Post.all
    # @links_and_votes = Link.select('links.id, post, title, sum(number) as "vote_count"')
    #                      .joins('left join votes on votes.link_id = links.id')
    #                      .group('links.id')
  end

  def show
    post = Post.find(params[:id])
  end


  def create


    if @post.save
      redirect_to @post, notice: 'Link was successfully created.'
    else
      render :new
    end
  end

def update
  set_post
  if @post.update(post_params)
    redirect_to @link, notice: 'Link was successfully updated.'
  else
    render :edit
  end

  end


  def destroy
    set_post
    @link.destroy
    redirect_to posts_url, notice: 'Link was successfully destroyed.'
  end

  private
  def set_post
    @post = Post.find(params[:id])
  end

  def link_params
    params.require(:post).permit(:body, :user_id)
  end
end
