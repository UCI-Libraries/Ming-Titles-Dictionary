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
#  pinyin_comment   :text
#  links            :text
#  scholars         :text
#

class Translation < ApplicationRecord
  belongs_to :title
  belongs_to :user
  has_many :comments
end
