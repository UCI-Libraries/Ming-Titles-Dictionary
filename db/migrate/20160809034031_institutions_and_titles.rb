class InstitutionsAndTitles < ActiveRecord::Migration[5.0]
  def change
    create_table :institutions_and_titles do |t|
      t.integer :title_id, null: false
      t.integer :institution_id, null: false
    end

  end
end
