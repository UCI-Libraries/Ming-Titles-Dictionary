class PinyinCommentsController < ApplicationController
  before_action :set_pinyin_comment, only: [:show, :edit, :update, :destroy]

  # GET /pinyin_comments
  # GET /pinyin_comments.json
  def index
    @comments = PinyinComment.includes(:title).all
    render json: @comments.to_json({include: [:title]})
  end

  # GET /pinyin_comments/1
  # GET /pinyin_comments/1.json
  def show
  end

  # GET /pinyin_comments/new
  def new
    @pinyin_comment = PinyinComment.new
  end

  # GET /pinyin_comments/1/edit
  def edit
  end

  # POST /pinyin_comments
  # POST /pinyin_comments.json
  def create
    @pinyin_comment = PinyinComment.new(pinyin_comment_params)

    respond_to do |format|
      if @pinyin_comment.save
        format.html { redirect_to @pinyin_comment, notice: 'PinyinComment was successfully created.' }
        format.json { render json: @pinyin_comment }
      else
        format.html { render :new }
        format.json { render json: @pinyin_comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /pinyin_comments/1
  # PATCH/PUT /pinyin_comments/1.json
  def update
    respond_to do |format|
      if @pinyin_comment.update(pinyin_comment_params)
        format.html { redirect_to @pinyin_comment, notice: 'PinyinComment was successfully updated.' }
        format.json { render json: @pinyin_comment }
      else
        format.html { render :edit }
        format.json { render json: @pinyin_comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pinyin_comments/1
  # DELETE /pinyin_comments/1.json
  def destroy
    @pinyin_comment.destroy
    respond_to do |format|
      format.html { redirect_to pinyin_comments_url, notice: 'PinyinComment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def export
    @comments = PinyinComment.all
    respond_to do |format|
      format.json do
        render json: @comments.to_csv_array
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pinyin_comment
      @pinyin_comment = PinyinComment.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def pinyin_comment_params
      params.require(:pinyin_comment).permit(:comment_text, :title_id, :user_id, :id)
    end
end
