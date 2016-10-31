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
#  has_contributed        :boolean          default(FALSE)
#  super_admin            :boolean          default(FALSE)
#

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :translations, dependent: :destroy
  has_many :comments, dependent: :destroy

  after_create :send_welcome_mail

  validate :password_complexity

  def password_complexity
    if password.present?
       if !password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z])/)
         errors.add :password, "complexity requirement not met"
       end
    end
  end

  def send_welcome_mail
    MyMailer.greeting(self.id).deliver_now
    MyMailer.notify_superadmin_new_scholar(self.id).deliver_now
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

  def self.to_csv_array
    attributes = %w(id approved is_admin created_at updated_at email institution country fname lname research has_contributed)
    array = []
    all.each do |translation|
      hash = {}
      attributes.each { |attr| hash[attr] = translation[attr]}
      array << hash
    end
    array
  end

end
