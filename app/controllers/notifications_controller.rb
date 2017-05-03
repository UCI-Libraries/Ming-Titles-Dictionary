class NotificationsController < ApplicationController
  def assign
    if params.key?(:user_id) && params.key?(:translation_id)
      MyMailer.assignment(params[:message], params[:translation_id], params[:user_id], current_user).deliver_now
      render json: {message: 'successful message sent', status: :ok}
    else
      render json: {message: 'please make include a translation id and a user id with this request', status: :unprocessable_entity}
    end
  end
end
