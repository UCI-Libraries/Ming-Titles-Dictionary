class CreateTranslations < ActiveRecord::Migration[5.0]
  def change
    create_table :translations do |t|
      t.string :translation, null: false
      t.integer :title_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :translations, :title_id
    add_index :translations, :user_id

  end
end
