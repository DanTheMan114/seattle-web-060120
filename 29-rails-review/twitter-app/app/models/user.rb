class User < ApplicationRecord
  #set up the has_many relationship with the joins ( friends )
  has_many :friends_that_follow_me, class_name: "Friend", foreign_key: :follower_id
  # set up the has_many, through: with other other model
  has_many :followers, through: :friends_that_follow_me, source: :follower

  #set up the has_many relationship with the joins ( friends )
  has_many :friends_i_follow, class_name: "Friend", foreign_key: :followee_id
  # set up the has_many, through: with other other model
  has_many :followees, through: :friends_i_follow, source: :followee
end