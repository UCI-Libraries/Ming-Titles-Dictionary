# == Schema Information
#
# Table name: discussion_posts
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  post       :text             not null
#  title      :text             not null
#  is_active  :boolean          default(TRUE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class DiscussionPost < ApplicationRecord
  belongs_to :user
  has_many :discussion_comments, foreign_key: 'post_id'
end
