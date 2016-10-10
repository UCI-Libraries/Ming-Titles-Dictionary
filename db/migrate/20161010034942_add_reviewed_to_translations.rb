class AddReviewedToTranslations < ActiveRecord::Migration[5.0]
  def change
    add_column :translations, :reviewed, :boolean, :default => true
  end
end
