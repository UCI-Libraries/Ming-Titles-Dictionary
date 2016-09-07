class AddIndexToUserApprovedCol < ActiveRecord::Migration[5.0]
  def change
    add_index  :users, :approved
  end
end
