class RemoveUserHandleFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :user_handle, :string
  end
end
