# == Schema Information
#
# Table name: translations
#
#  id                 :integer          not null, primary key
#  translation_text   :string           not null
#  title_id           :integer          not null
#  user_id            :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  approved           :boolean          default(FALSE)
#  explanation        :text
#  additional_comment :text
#  scholars           :text
#  comment_added_at   :datetime
#  flagged            :boolean          default(FALSE)
#  flag               :boolean          default(FALSE)
#

class Translation < ApplicationRecord
  belongs_to :title
  belongs_to :user
  has_many :comments

  after_create :update_parent
  after_update :update_user_status

  def update_parent
    if self.title
      self.title.translation_count = 7
      self.title.save!
    end
  end

  def update_user_status
    if self.user
      self.user.has_contributed = self.user.translations.any? do |t|
         t.approved
      end
      self.user.save!
    end
  end
end
