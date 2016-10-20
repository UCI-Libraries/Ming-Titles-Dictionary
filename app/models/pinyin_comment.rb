# == Schema Information
#
# Table name: pinyin_comments
#
#  id           :integer          not null, primary key
#  title_id     :integer          not null
#  user_id      :integer          not null
#  comment_text :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class PinyinComment < ApplicationRecord
  belongs_to :title
  belongs_to :user


end
