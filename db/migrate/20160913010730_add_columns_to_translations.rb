class AddColumnsToTranslations < ActiveRecord::Migration[5.0]
  def change
    add_column :translations, :explanation, :text
    add_column :translations, :pinyin_comment, :text
    add_column :translations, :links, :text
    add_column :translations, :scholars, :text
  end
end
