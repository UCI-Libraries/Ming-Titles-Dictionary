class MyMailer < Devise::Mailer
  helper :application # gives access to all helpers defined within `application_helper`.
  # helper :devise # gives access to all helpers defined within `devise_helper`.
  #include Devise::Controllers # Optional. eg. `confirmation_url`
  include Devise::Mailers::Helpers
  default template_path: 'devise/mailer' # to make sure that your mailer uses the devise views
  default from: 'mingtitles@lib.uci.edu'

  def greeting(id)
    @user = User.find_by_id(id)
    mail(to: @user.email, subject: 'Ming Government Official Titles: A Crowd-Translation Project')
  end

  def new_translation(user_id, translation_id)
    @user = User.find_by_id(user_id)
    @translation = Translation.find_by_id(translation_id)
    mail(to: @user.email, subject: 'New Translation Submitted')
  end

  def notify_superadmin_new_translation(translation_id)
    puts "???????"
    puts translation_id
    #superadmin is hardcoded here:
    @user = User.find_by_id(1)
    @translation = Translation.find_by_id(translation_id)
    puts @translation
    puts @translation.title
    puts @translation.translation_text
    puts @translation.user
    mail(to: @user.email, subject: 'New Translation Submitted')
  end

  def notify_superadmin_new_scholar(id)
    #superadmin is hardcoded here:
    @admin = User.find_by_id(1)
    @scholar =  User.find_by_id(id)
    mail(to: @admin.email, subject: 'New Scholar Application')
  end

  def acceptance(user)
    @user = user
    mail(to: @user.email, subject: 'Congratulations! You have been accepted as a contributing scholar.')
  end

end
