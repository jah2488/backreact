class PostsController < ApplicationController
  before_action :authenticate_user!, only: [:show, :edit, :update, :destroy]


  def index
   # @posts_and_votes = Link.all
    # @links_and_votes = Link.select('links.id, post, title, sum(number) as "vote_count"')
    #                        .joins('left join votes on votes.link_id = links.id')
    #                        .group('links.id')
    # begin
    #   time = Time.new
    #   room = Room.all
    #   recent_chats = []
    #   room.each do |element|
    #     if (time - element.created_at) <= display_range_seconds
    #       recent_chats << element
    #     end
    #   end
    #   recent_chats = recent_chats.group_by { |room| room.user }–
    #                              .map { |rooms| rooms.first }
    #   recent_chats = recent_chats - ["room master"]
    #   render json: recent_chats
    # rescue Exception => error
    #   render json: { error: error.message + " --- time range must be expressed as seconds >= 1."}, status: 422
    # end
    render json: { message: 'Not Implemented Yet' }, status: 501
  end

  def show
    set_post
  end

  def new
    @post = Post.new
    @all_users = User.select_users
  end

  def edit
    set_post
    @all_users = User.select_users
  end


  def create
    @post = post.new(link_params)

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
