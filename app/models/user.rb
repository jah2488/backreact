class User < ActiveRecord::Base
  has_secure_password
  has_many :posts
  has_many :comments

  def self.select_users
    all.map { |user| [user.name, user.email, user.id, user.zip_code] }
  end
end

