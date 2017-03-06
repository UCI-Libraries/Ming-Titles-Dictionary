# == Schema Information
#
# Table name: translations
#
#  id               :integer          not null, primary key
#  translation_text :string           not null
#  title_id         :integer          not null
#  user_id          :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  approved         :boolean          default(FALSE)
#  explanation      :text
#  scholars         :text
#  comment_added_at :datetime
#  flag             :boolean          default(FALSE)
#  reviewed         :boolean          default(FALSE)
#  flagged          :boolean          default(FALSE)
#  note             :text
#

require 'csv'
class Translation < ApplicationRecord
  belongs_to :title
  belongs_to :user
  has_many :comments, dependent: :destroy

  after_create :update_parent
  after_create :send_translation_emails
  after_update :update_user_status

  def update_parent
    if self.title
      self.title.translation_count = self.title.translations.count
      self.title.save!
    end
  end

  def send_translation_emails
    MyMailer.new_translation(self.user.id, self.id).deliver_now
    MyMailer.notify_superadmin_new_translation(self.id).deliver_now
  end

  def update_user_status
    # 2 is the Charles Hucker account
    if self.user && self.user.id != 2
      ## below would be the method if only looking for approved translations
      # self.user.has_contributed = self.user.translations.any? do |t|
      #    t.approved
      # end
      self.user.has_contributed = true
      self.user.save!
    end
  end

  def self.to_csv_array
    attributes = %w(id translation_text explanation user_id title_id created_at)
    array = []
    all.each do |translation|
      hash = {}
      attributes.each { |attr| hash[attr] = translation[attr]}
      array << hash
    end
    array
  end

end
