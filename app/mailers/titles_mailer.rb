class TitlesMailer < ApplicationMailer
  default from: 'do-not-reply@uci.edu'

  def welcome_email(user)
    @user = user
    @url  = 'http://example.com/login'
    mail(to: @user.email, subject: 'Welcome to My Awesome Site')
  end

end
