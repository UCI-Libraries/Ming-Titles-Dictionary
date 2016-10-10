class AddTranslationCountToTitles < ActiveRecord::Migration[5.0]
  def change
    add_column :titles, :translation_count, :integer, :default => 0
  end
end
