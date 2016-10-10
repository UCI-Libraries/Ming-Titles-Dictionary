class ChangeReviewedOnTranslations < ActiveRecord::Migration[5.0]
  def change
    change_column :translations, :reviewed, :boolean, :default => false
  end
end
