class User < ApplicationRecord
    has_many :arts
    has_secure_password 
end
