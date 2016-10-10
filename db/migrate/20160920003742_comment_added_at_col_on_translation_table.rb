class CommentAddedAtColOnTranslationTable < ActiveRecord::Migration[5.0]
  def change
    add_column :translations, :comment_added_at, :timestamptz
    rename_column :translations, :pinyin_comment, :additional_comment
    add_column :translations, :flagged, :boolean, :default => false
    remove_column :translations, :links, :text

  end
end
