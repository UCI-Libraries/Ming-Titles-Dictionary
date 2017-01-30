# == Schema Information
#
# Table name: discussion_comments
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  post_id    :integer          not null
#  post       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class DiscussionComment < ApplicationRecord
  belongs_to :discussion_post, primary_key: 'post_id'
  belongs_to :user

end
