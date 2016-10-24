class AddTypeToComments < ActiveRecord::Migration[5.0]
  def change
    create_table :pinyin_comments do |t|
      t.integer :title_id, null: false
      t.integer :user_id, null: false
      t.text :comment_text
      t.timestamps
    end

    create_table :title_comments do |t|
      t.integer :title_id, null: false
      t.integer :user_id, null: false
      t.text :comment_text
      t.timestamps
    end
  end
end
