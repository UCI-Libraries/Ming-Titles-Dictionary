class CreateDiscussionPosts < ActiveRecord::Migration[5.0]
  def change
    create_table :discussion_posts do |t|
      t.integer :user_id, null: false
      t.text :post, null: false
      t.text :title, null: false
      t.boolean :is_active, :default => true, null: false
      t.timestamps
    end

    create_table :discussion_comments do |t|
      t.integer :user_id, null: false
      t.integer :post_id, null: false
      t.text :post, null: false
      t.timestamps
    end
  end
end
