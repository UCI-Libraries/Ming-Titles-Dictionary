class CreateMingTitles < ActiveRecord::Migration
  def change
    create_table :ming_titles do |t|

      t.timestamps null: false
    end
  end
end
