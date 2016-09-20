# == Schema Information
#
# Table name: comments
#
#  id             :integer          not null, primary key
#  translation_id :integer          not null
#  user_id        :integer          not null
#  comment_text   :text
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Comment < ApplicationRecord
  belongs_to :translation
  belongs_to :user

  after_create :send_welcome_mail
  after_create :update_parent


  def send_welcome_mail
    # TitlesMailer.welcome_email(@user).deliver
    # p @user
    MyMailer.new_comment(User.first).deliver
  end

  def update_parent
    if self.translation
      self.translation.comment_added_at = self.created_at
      self.translation.save
    end
  end

end
