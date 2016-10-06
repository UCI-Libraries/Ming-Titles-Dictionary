class AddSourceToUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :translations, :flagged, :boolean
    add_column :titles, :source, :text, :default => 'UCI'
  end
end
