class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string  :username
      t.string  :email
      t.string  :password_digest
      t.string  :phone_number
      t.string  :address
      t.string  :zip_code

      t.timestamps null: false
    end
  end
end
