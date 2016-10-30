class AddArchivedBoolToTitles < ActiveRecord::Migration[5.0]
  def change
    add_column :titles, :archived, :boolean, :default => false
  end
end
