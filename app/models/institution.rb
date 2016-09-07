# == Schema Information
#
# Table name: institutions
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  ancestry   :string
#

class Institution < ApplicationRecord
  has_many :institutions_and_titles
  has_many :titles, through: :institutions_and_titles
  has_ancestry

  def self.all_with_ancestry
    all_trees = []
    self.roots.each do |root|
     all_trees += root.subtree.arrange_serializable
    end
    all_trees
  end

end
