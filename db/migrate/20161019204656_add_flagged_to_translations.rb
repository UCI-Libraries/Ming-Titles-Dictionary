class AddFlaggedToTranslations < ActiveRecord::Migration[5.0]
  def change
    add_column :translations, :flagged, :boolean, :default => false
  end
end
