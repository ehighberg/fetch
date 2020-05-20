class User < ApplicationRecord
  belongs_to :team
  has_and_belongs_to_many :tags
  has_many :posts
end
