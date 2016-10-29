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

  after_create :update_parent
  after_create :update_user_status


  def update_parent
    if self.translation
      self.translation.comment_added_at = self.created_at
      self.translation.save
    end
  end

  def update_user_status
    # 2 is the Charles Hucker account
    if self.user && self.user.id != 2
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
