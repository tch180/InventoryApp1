class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :sku
      t.integer :price
      t.integer :available

      t.timestamps
    end
  end
end
