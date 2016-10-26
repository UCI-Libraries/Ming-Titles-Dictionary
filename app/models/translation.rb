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
#  flag               :boolean          default(FALSE)
#  reviewed           :boolean          default(FALSE)
#  flagged            :boolean          default(FALSE)
#
require 'csv'
class Translation < ApplicationRecord
  belongs_to :title
  belongs_to :user
  has_many :comments, dependent: :destroy

  after_create :update_parent
  # after_create :send_translation_thank_you
  after_update :update_user_status

  def update_parent
    if self.title
      self.title.translation_count = 7
      self.title.save!
    end
  end

  def send_translation_thank_you
    MyMailer.new_translation(@user, self).deliver
  end

  def update_user_status
    if self.user
      self.user.has_contributed = self.user.translations.any? do |t|
         t.approved
      end
      self.user.save!
    end
  end

  def self.to_csv
    attributes = %w(id translation_text explanation user_id title_id created_at)
    CSV.generate(headers: true) do |csv|
      csv << attributes
      all.each do |translation|
        csv << translation.attributes.values_at(*attributes)
      end
    end
  end
end
