class TitleCommentsController < ApplicationController
  before_action :set_title_comment, only: [:show, :edit, :update, :destroy]

  # GET /title_comments
  # GET /title_comments.json
  def index
    @comments = TitleComment.includes(:title).all
    render json: @comments.to_json({include: [:title]})
  end

  # GET /title_comments/1
  # GET /title_comments/1.json
  def show
  end

  # GET /title_comments/new
  def new
    @title_comment = TitleComment.new
  end

  # GET /title_comments/1/edit
  def edit
  end

  # POST /title_comments
  # POST /title_comments.json
  def create
    @title_comment = TitleComment.new(title_comment_params)

    respond_to do |format|
      if @title_comment.save
        format.html { redirect_to @title_comment, notice: 'TitleComment was successfully created.' }
        format.json { render json: @title_comment }
      else
        format.html { render :new }
        format.json { render json: @title_comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /title_comments/1
  # PATCH/PUT /title_comments/1.json
  def update
    respond_to do |format|
      if @title_comment.update(title_comment_params)
        format.html { redirect_to @title_comment, notice: 'TitleComment was successfully updated.' }
        format.json { render json: @title_comment, status: :ok, location: @title_comment }
      else
        format.html { render :edit }
        format.json { render json: @title_comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /title_comments/1
  # DELETE /title_comments/1.json
  def destroy
    @title_comment.destroy
    respond_to do |format|
      format.html { redirect_to title_comments_url, notice: 'TitleComment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_title_comment
      @title_comment = TitleComment.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def title_comment_params
      params.require(:title_comment).permit(:comment_text, :title_id, :user_id, :id)
    end

end
