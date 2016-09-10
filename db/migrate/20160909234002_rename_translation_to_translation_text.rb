class RenameTranslationToTranslationText < ActiveRecord::Migration[5.0]
  def change
    rename_column :translations, :translation, :translation_text
  end
end
