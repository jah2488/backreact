class Post < ActiveRecord::Base
  has_many :comments
  belongs_to :user

  def self.select_posts
    all.map { |post| posts.body }
  end
end
