class AddHasCOntributedToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :has_contributed, :boolean, :default => false
  end
end
