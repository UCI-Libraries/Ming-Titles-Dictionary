class CreateInstitutionsTable < ActiveRecord::Migration[5.0]
  def change

    add_column :institutions, :parent_id, :integer

  end
end
