class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.boolean :approved, :default => false, null: false
      t.boolean :is_admin, :default => false, null: false
      t.string :user_handle, null: false
      t.string :user_email, null: false
      t.timestamps
    end
  end
end
