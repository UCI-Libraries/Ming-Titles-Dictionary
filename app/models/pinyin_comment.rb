# == Schema Information
#
# Table name: pinyin_comments
#
#  id           :integer          not null, primary key
#  title_id     :integer          not null
#  user_id      :integer          not null
#  comment_text :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class PinyinComment < ApplicationRecord
  belongs_to :title
  belongs_to :user

  def self.to_csv_array
    attributes = %w(id title_id user_id comment_text created_at)
    array = []
    all.each do |translation|
      hash = {}
      attributes.each { |attr| hash[attr] = translation[attr]}
      array << hash
    end
    array
  end


end
