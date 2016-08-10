# == Schema Information
#
# Table name: institutions_and_titles
#
#  id             :integer          not null, primary key
#  title_id       :integer          not null
#  institution_id :integer          not null
#

class InstitutionsAndTitle < ApplicationRecord
  belongs_to :institution
  belongs_to :title
end
