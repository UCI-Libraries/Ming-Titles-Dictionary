class AddAncestryToInstitutions < ActiveRecord::Migration[5.0]
  def change
    add_column :institutions, :ancestry, :string
    add_index :institutions, :ancestry

  end
end
