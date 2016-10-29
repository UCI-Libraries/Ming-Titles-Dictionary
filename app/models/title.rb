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
  has_many :pinyin_comments, dependent: :destroy
  has_many :title_comments, dependent: :destroy

  def self.to_csv_array
    attributes = %w(id chinese_title pinyin_title translation_count)
    array = []
    all.each do |translation|
      hash = {}
      attributes.each { |attr| hash[attr] = translation[attr]}
      hash["institutions"] = "["+ translation.institutions.map { |i| i.id }.join(",") + "]"
      array << hash
    end
    array
  end

end
