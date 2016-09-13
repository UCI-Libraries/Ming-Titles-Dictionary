class RenameCommentToCommentText < ActiveRecord::Migration[5.0]
  def change
    rename_column :comments, :comment, :comment_text
  end
end
