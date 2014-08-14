class Project
  include Mongoid::Document
  field :title, type: String
  field :text
  field :creation_date, type: Date, default: Date.today
  belongs_to :user
end