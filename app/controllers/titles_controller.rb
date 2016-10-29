class TitlesController < ApplicationController
  before_action :set_title, only: [:show, :edit, :update, :destroy]

  # GET /titles
  # GET /titles.json
  def index
    @titles = Title.includes(translations: :user).all
    render json: @titles, include: [translations: {include: :user}]
  end

  def titles_by_institution
    @titles = Institution.find_by(id: params[:id]).titles.includes(translations: :user)
    render json: @titles, include: [translations: {include: :user}]
  end

  # GET /titles/1
  # GET /titles/1.json
  def show
    @title = Title.includes([pinyin_comments: :user], :title_comments, translations: [:user, comments: :user]).order("translations.created_at").find_by(id: params[:id])
    if params[:official]
      @title =  @title.where({translations: {approved: true}})
    end
    render json: @title, include: [:pinyin_comments, :title_comments, translations: {include: [:user, comments: {include: :user}]}]
  end

  # GET /titles/new
  def new
    @title = Title.new
  end

  # GET /titles/1/edit
  def edit
  end

  # POST /titles
  # POST /titles.json
  def create
    @title = Title.new(title_params)

    respond_to do |format|
      if @title.save
        format.html { redirect_to @title, notice: 'Title was successfully created.' }
        format.json { render json: @title }
      else
        format.html { render :new }
        format.json { render json: @title.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /titles/1
  # PATCH/PUT /titles/1.json
  def update
    respond_to do |format|
      if @title.update(title_params)
        format.html { redirect_to @title, notice: 'Title was successfully updated.' }
        format.json { render json: @title }
      else
        format.html { render :edit }
        format.json { render json: @title.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /titles/1
  # DELETE /titles/1.json
  def destroy
    @title.destroy
    respond_to do |format|
      format.html { redirect_to titles_url, notice: 'Title was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def export
    @titles = Title.includes(:institutions).all
    respond_to do |format|
      format.json do
        render json: @titles.to_csv_array
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_title
      @title = Title.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def title_params
      params.fetch(:title, {}).permit(:approved, :id)
    end
end
