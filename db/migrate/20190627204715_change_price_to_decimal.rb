class ChangePriceToDecimal < ActiveRecord::Migration[5.2]
  def change
    change_column :items, :price, :decimal
  end
end
