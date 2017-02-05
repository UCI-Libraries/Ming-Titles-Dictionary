class DiscussionCommentsController < ApplicationController
  before_action :set_discussion_comment, only: [:show, :edit, :update, :destroy]

  # GET /discussion_comments
  # GET /discussion_comments.json
  def index
    @comments = DiscussionComment.all
    render json: @comments
  end

  # GET /discussion_comments/1
  # GET /discussion_comments/1.json
  def show
  end

  # POST /discussion_comments
  # POST /discussion_comments.json
  def create
    @discussion_comment = DiscussionComment.new(discussion_comment_params)

    respond_to do |format|
      if @discussion_comment.save
        format.html { redirect_to @discussion_comment, notice: 'DiscussionComment was successfully created.' }
        format.json { render json: @discussion_comment }
      else
        format.html { render :new }
        format.json { render json: @discussion_comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /discussion_comments/1
  # PATCH/PUT /discussion_comments/1.json
  def update
    respond_to do |format|
      if @discussion_comment.update(discussion_comment_params)
        format.html { redirect_to @discussion_comment, notice: 'DiscussionComment was successfully updated.' }
        format.json { render json: @discussion_comment }
      else
        format.html { render :edit }
        format.json { render json: @discussion_comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /discussion_comments/1
  # DELETE /discussion_comments/1.json
  def destroy
    @discussion_comment.destroy
    respond_to do |format|
      format.html { redirect_to discussion_comments_url, notice: 'DiscussionComment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_discussion_comment
      @discussion_comment = DiscussionComment.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def discussion_comment_params
      params.require(:discussion_comment).permit(:post_id, :post, :user_id)
    end
end
