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
#  archived          :boolean          default(FALSE)
#

class Title < ApplicationRecord
  has_many :institutions_and_titles
  has_many :institutions, through: :institutions_and_titles
  has_many :translations, dependent: :destroy
  has_many :pinyin_comments, dependent: :destroy
  has_many :title_comments, dependent: :destroy

  def self.to_csv_array
    attributes = %w(id cbdb_id chinese_title pinyin_title translation_count alternate_chinese_title alternate_pinyin_title)
    array = []
    all.each do |title|
      hash = {}
      attributes.each { |attr| hash[attr] = title[attr]}
      if title.institutions[0]
        hash["institution_1_name"] = title.institutions[0].name
        hash["institution_1_id"] = title.institutions[0].id
      else
        hash["institution_1_name"] = nil
        hash["institution_1_id"] = nil
      end

      if title.institutions[1]
        hash["institution_2_name"] = title.institutions[1].name
        hash["institution_2_id"] = title.institutions[1].id
      else
        hash["institution_2_name"] = nil
        hash["institution_2_id"] = nil
      end

      if title.institutions[2]
        hash["institution_3_name"] = title.institutions[2].name
        hash["institution_3_id"] = title.institutions[2].id
      else
        hash["institution_3_name"] = nil
        hash["institution_3_id"] = nil
      end
      array << hash
    end
    array
  end

end
