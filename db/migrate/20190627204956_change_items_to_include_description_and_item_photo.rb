class ChangeItemsToIncludeDescriptionAndItemPhoto < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :description, :string
    add_column :items, :photo, :string 
  end
end
