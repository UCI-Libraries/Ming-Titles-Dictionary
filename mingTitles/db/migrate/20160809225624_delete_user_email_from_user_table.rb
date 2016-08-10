class DeleteUserEmailFromUserTable < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :user_email, :string
  end
end
