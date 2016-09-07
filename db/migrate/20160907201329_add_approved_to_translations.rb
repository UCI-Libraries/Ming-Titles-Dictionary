class AddApprovedToTranslations < ActiveRecord::Migration[5.0]
  def change
    add_column :translations, :approved, :boolean, :default => false
  end
end
