class CreateActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
      t.string :title, null: false
      t.string :sport, null: false
      t.string :duration, null: false
      t.float :distance, null: false
      t.integer :elevation
      t.string :description, null: false
      t.integer :user_id, null: false
      t.integer :route_id
      t.timestamps
    end
    add_index :activities, :user_id
    add_index :activities, :route_id
  end
end
