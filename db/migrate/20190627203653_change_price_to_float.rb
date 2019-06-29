class ChangePriceToFloat < ActiveRecord::Migration[5.2]
  def change
    change_column :items, :price, :float
  end
end
