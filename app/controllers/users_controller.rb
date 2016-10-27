class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!

  # GET /users
  # GET /users.json
  def index
    @users = User.all.order("id")
    render json: @users
  end

  def contributors
    @users = User.where(has_contributed: params[:has_contributed])
    render json: @users
  end

  # GET /users/1
  # GET /users/1.json
  def show
  end

  def show_translations
    @user_translations = User.find_by(id: params[:id]).translations.includes([:comments, :title])
    render json: @user_translations, include: [:comments, :title]
  end

  def show_comments
    @user_comments = User.find_by(id: params[:id]).comments.includes(translation: :title)
    p @user_comments
    render json: @user_comments, include: {translation: {include: :title}}
  end

  def change_password
    @user = User.find(current_user.id)
    if @user.update(user_params)
      # Sign in the user by passing validation in case their password changed
      bypass_sign_in(@user)
      render json: {response: "password updated"}
    else
      render json: {response: "password update failed"}
    end
  end

  def update_profile
    @user = User.find(current_user.id)
    if @user.update(user_params)
      # Sign in the user by passing validation in case their password changed
      render json: {response: "profile updated"}
    else
      render json: {response: "profile update failed"}
    end
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)
    respond_to do |format|
      if @user.save
        format.html { redirect_to @user, notice: 'User was successfully created.' }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def authorize
    @users = User.where(approved: false)
    render json: @users
  end

  def approve
    @user = set_user
    if user_params["approved"] == true && @user.approved == false
      # MyMailer.acceptance(@user).deliver
    end

    respond_to do |format|
      if @user.update(user_params)
        p @user
        p "UPDATING??"
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render json: @user, status: :ok }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.fetch(:user, {}).permit(:approved, :id, :source, :has_contributed, :password, :password_confirmation, :email, :institution, :country, :fname, :lname, :research)
    end
end
