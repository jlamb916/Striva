class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.string :route_name, null: false
      t.text :route_data, null: false
      t.text :route_description
      t.integer :user_id, null:false
      t.timestamps
    end
    add_index :routes, :user_id
  end
end
