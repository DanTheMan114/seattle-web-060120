class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :catchphrase, :imgUrl, :role_name
end
