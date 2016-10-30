class TranslationsController < ApplicationController
  before_action :set_translation, only: [:show, :edit, :update, :destroy]

  # GET /translations
  # GET /translations.json
  def index
    @translations = Translation.includes(:user, :title, :comments).where(titles: {archived: false})
    render json: @translations.to_json({include: [:user, :comments, :title]})
  end

  # GET /translations/1
  # GET /translations/1.json
  def show
  end

  # GET /translations/new
  def new
    @translation = Translation.new
  end

  # GET /translations/1/edit
  def edit
  end

  # POST /translations
  # POST /translations.json
  def create
    @translation = Translation.new(translation_params)

    respond_to do |format|
      if @translation.save
        @translation.comment_added_at = @translation.created_at
        @translation.save!
        format.json { render json: {status: :created, translation: @translation} }
      else
        format.html { render :new }
        format.json { render json: @translation.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /translations/1
  # PATCH/PUT /translations/1.json
  def update
    respond_to do |format|
      if @translation.update(translation_params)
        format.html { redirect_to @translation, notice: 'Translation was successfully updated.' }
        format.json { render json: {status: :ok, translation: @translation} }
      else
        format.html { render :edit }
        format.json { render json: @translation.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /translations/1
  # DELETE /translations/1.json
  def destroy
    @translation.destroy
    @translation.title.translation_count = @translation.title.translations.count
    @translation.title.save!
    respond_to do |format|
      format.html { redirect_to translations_url, notice: 'Translation was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def export
    @translations = Translation.all
    respond_to do |format|
      format.json do
        render json: @translations.to_csv_array
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_translation
      @translation = Translation.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def translation_params
      params.require(:translation).permit(:translation_text, :title_id, :user_id, :scholars, :explanation, :approved, :flag)
    end
end
