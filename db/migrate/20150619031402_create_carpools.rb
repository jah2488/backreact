class CreateCarpools < ActiveRecord::Migration
  def change
    create_table :carpools do |t|
      t.string :distance
      t.string :direction
      t.belongs_to :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
