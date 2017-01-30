class DiscussionPostsController < ApplicationController
  before_action :set_discussion_post, only: [:show, :edit, :update, :destroy]

  # GET /discussion_posts
  # GET /discussion_posts.json
  def index
    @posts = DiscussionPost.includes(:discussion_comments)

    @posts = @posts.where(is_active: params[:is_active]) if params.key?(:is_active)

    render json: @posts.to_json({include: [:discussion_comments]})
  end

  # GET /discussion_posts/1
  # GET /discussion_posts/1.json
  def show
  end

  # POST /discussion_posts
  # POST /discussion_posts.json
  def create
    p discussion_post_params
    @discussion_post = DiscussionPost.new(discussion_post_params)

    respond_to do |format|
      if @discussion_post.save
        format.html { redirect_to @discussion_post, notice: 'DiscussionPost was successfully created.' }
        format.json { render json: @discussion_post }
      else
        format.html { render :new }
        format.json { render json: @discussion_post.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /discussion_posts/1
  # PATCH/PUT /discussion_posts/1.json
  def update
    respond_to do |format|
      if @discussion_post.update(discussion_post_params)
        format.html { redirect_to @discussion_post, notice: 'DiscussionPost was successfully updated.' }
        format.json { render json: @discussion_post }
      else
        format.html { render :edit }
        format.json { render json: @discussion_post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /discussion_posts/1
  # DELETE /discussion_posts/1.json
  def destroy
    @discussion_post.destroy
    respond_to do |format|
      format.html { redirect_to discussion_posts_url, notice: 'DiscussionPost was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_discussion_post
      @discussion_post = DiscussionPost.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def discussion_post_params
      params.require(:discussion_post).permit(:user_id, :title, :post, :is_active)
    end
end
