# == Schema Information
#
# Table name: institutions
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Institution < ApplicationRecord
  has_many :institutions_and_titles
  has_many :titles, through: :institutions_and_titles
  # has_many :child_institutions, foreign_key: "parent_id", class_name: "Institution"
  has_ancestry


  # Institution.includes(child_institutions: :child_institutions).where(parent_id: nil)

  # has_one :other_address, foreign_key => "address_id_2", class_name => "Address"
end
