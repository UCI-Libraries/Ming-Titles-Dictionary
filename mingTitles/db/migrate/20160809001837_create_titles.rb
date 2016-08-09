class CreateTitles < ActiveRecord::Migration[5.0]
  def change
    create_table :titles do |t|
      t.string :chinese_title, null: false
      t.string :pinyin_title
      t.timestamps
    end
  end
end
