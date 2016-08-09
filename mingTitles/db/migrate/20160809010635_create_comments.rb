class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.integer :translation_id, null: false
      t.integer :user_id, null: false
      t.text :comment
      t.timestamps
    end

    add_index :comments, :translation_id
    add_index :comments, :user_id

  end
end
