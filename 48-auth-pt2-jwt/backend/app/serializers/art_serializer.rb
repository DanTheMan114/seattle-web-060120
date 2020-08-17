class ArtSerializer < ActiveModel::Serializer
  attributes :id, :title, :image
  has_one :user
  has_one :artist
end
