class Project
  include Mongoid::Document
  field :title, type: String
  field :text

  belongs_to :user
end