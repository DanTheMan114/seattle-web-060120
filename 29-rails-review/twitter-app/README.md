## Cheatsheet:

```Ruby
# Polymorphic: 
Books
  belongs_to :user, polymorphic: :true
Librarian/Guest: 
  has_many :books, as: :user
```



```Ruby
# - Self joins
Friends
  belongs_to :follower, class_name: "User", foreign_key: :follower_id
  belongs_to :followee, class_name: "User", foreign_key: :followee_id
User
  has_many :friends_who_follow_me, class_name: "Friend", foreign_key: :follower_id
  has_many :followers, through: :friends_who_follow_me, source: :follower
  has_many :friend_i_follow, class_name: "Friend", foreign_key: :followee_id
  has_many :followees, through: :friend_i_follow, foreign_key: :followee
```