class DeleteParentIdFromInstitutions < ActiveRecord::Migration[5.0]
  def change
    remove_column :institutions, :parent_id, :integer

  end
end
