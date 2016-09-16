class TitlesMailer < ApplicationMailer
  # default from: 'clairewoods@gmail.com'

  def welcome_email(user)
    # p "IN WELCOME EMAIL"
    # @user = user
    # @url  = "www.url.com"
    # delivery_options = { user_name: ENV["GMAIL_USERNAME"],
    #                      password: ENV["GMAIL_PASSWORD"],
    #                      address: "smtp.gmail.com" }
    # mail(to: @user.email,
    #      subject: "Welcome Email",
    #      delivery_method_options: delivery_options)
    @user = user
    @url  = 'http://example.com/login'
    mail(to: @user.email, subject: 'Welcome to My Awesome Site')
  end


end
