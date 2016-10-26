class AddArchivedToTitles < ActiveRecord::Migration[5.0]
  def change
    remove_column :translations, :additional_comment, :text
    add_column :users, :super_admin, :boolean, :default => false
    add_column :institutions, :rank, :text
  end
end
