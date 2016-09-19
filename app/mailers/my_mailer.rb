class MyMailer < Devise::Mailer
  helper :application # gives access to all helpers defined within `application_helper`.
  # helper :devise # gives access to all helpers defined within `devise_helper`.
  #include Devise::Controllers # Optional. eg. `confirmation_url`
  include Devise::Mailers::Helpers
  default template_path: 'devise/mailer' # to make sure that your mailer uses the devise views
  default from: 'clairewoods@gmail.com'
  # default from: 'devnull@cygnus.uci.edu'

  def greeting(user)
    @user = user
    @url  = 'http://example.com/login'
    mail(to: @user.email, subject: 'Welcome')
  end

  def new_comment(user)
    @user = user
    @url  = 'http://example.com/login'
    mail(to: @user.email, subject: 'Welcome')
  end

end
