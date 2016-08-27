class AddColumnsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :institution, :text
    add_column :users, :country, :text
    add_column :users, :fname, :text
    add_column :users, :lname, :text
    add_column :users, :research, :text
  end
end
