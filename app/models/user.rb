# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  approved               :boolean          default(FALSE), not null
#  is_admin               :boolean          default(FALSE), not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :inet
#  last_sign_in_ip        :inet
#  confirmation_token     :string
#  confirmed_at           :datetime
#  confirmation_sent_at   :datetime
#  unconfirmed_email      :string
#  institution            :text
#  country                :text
#  fname                  :text
#  lname                  :text
#  research               :text
#

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :translations
  has_many :comments

  after_create :send_welcome_mail
  # TODO: set up admin mailer

  validate :password_complexity

  def password_complexity
    if password.present?
       if !password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z])/)
         errors.add :password, "complexity requirement not met"
       end
    end
  end

  def send_admin_mail
    AdminMailer.new_user_waiting_for_approval(self).deliver
  end

  def send_welcome_mail
    # TitlesMailer.welcome_email(@user).deliver
    p @user
    MyMailer.greeting(User.first).deliver
  end

  def active_for_authentication?
    super && approved?
  end

  def inactive_message
    if !approved?
      :not_approved
    else
      super # Use whatever other message
    end
  end

  def self.send_reset_password_instructions(attributes={})
    recoverable = find_or_initialize_with_errors(reset_password_keys, attributes, :not_found)
    if !recoverable.approved?
      recoverable.errors[:base] << I18n.t("devise.failure.not_approved")
    elsif recoverable.persisted?
      recoverable.send_reset_password_instructions
    end
    recoverable
  end

end
