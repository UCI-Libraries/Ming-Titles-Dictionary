class AddTitleIdToDiscussionTopics < ActiveRecord::Migration[5.0]
  def change
    add_column :discussion_posts, :title_id, :integer
  end
end
