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
#  flag               :boolean          default(FALSE)
#  reviewed           :boolean          default(TRUE)
#

require 'test_helper'

class TranslationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
