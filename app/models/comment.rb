class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :post

  def self.select_posts
    all.map { |comment| [comment.words }
  end
end
