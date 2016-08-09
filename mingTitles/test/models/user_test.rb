# == Schema Information
#
# Table name: users
#
#  id          :integer          not null, primary key
#  approved    :boolean          default(FALSE), not null
#  is_admin    :boolean          default(FALSE), not null
#  user_handle :string           not null
#  user_email  :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
