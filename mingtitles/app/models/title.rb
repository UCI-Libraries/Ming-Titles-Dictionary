# == Schema Information
#
# Table name: titles
#
#  id            :integer          not null, primary key
#  chinese_title :string           not null
#  pinyin_title  :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Title < ApplicationRecord
  has_and_belongs_to_many :institutions
  has_many :translations

end
