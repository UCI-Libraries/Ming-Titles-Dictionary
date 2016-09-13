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
end
