# == Schema Information
#
# Table name: titles
#
#  id                :integer          not null, primary key
#  chinese_title     :string           not null
#  pinyin_title      :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  translation_count :integer          default(0)
#  source            :text             default("UCI")
#

class Title < ApplicationRecord
  has_many :institutions_and_titles
  has_many :institutions, through: :institutions_and_titles
  has_many :translations, dependent: :destroy

end
