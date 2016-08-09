class InstitutionTitle < ActiveRecord::Migration[5.0]
  def change
    create_table :institutions_and_titles do |t|
      t.belongs_to :title, index: true
      t.belongs_to :institution, index: true
    end
  end
end
