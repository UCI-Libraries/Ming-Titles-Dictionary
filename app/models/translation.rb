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
#

class Translation < ApplicationRecord
  belongs_to :title
  belongs_to :user
  has_many :comments
end
