class PostsController < ApplicationController
  before_action :set_post, only: [:show, :showwithauthor, :update, :destroy]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts
  end

  # GET /posts/1
  def show
    render json: @post
  end

  def showwithauthor
    # render json: @post, include: :user
    render json: @post, :include => {:user => {:only => [:first_name, :avatar]}}
  end


  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :created, location: @post
      @room = Room.find(params[:room_id])
      @posts = @room.posts
      
      # ActionCable.server.broadcast("Room_#{params[:room_id]}", @posts)
      # Unsure how to include models that relate to post (like users)
      ActionCable.server.broadcast("Room_#{params[:room_id]}", 1)
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:content, :room_id, :user_id)
    end
end
