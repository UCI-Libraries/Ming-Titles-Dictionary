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
  
end
