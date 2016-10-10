class AddFlaggingToTitles < ActiveRecord::Migration[5.0]
  def change
    add_column :translations, :flag, :boolean, :default => false
  end
end
