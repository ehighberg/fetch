class Team < ApplicationRecord
    belongs_to :manager, class_name: 'User', optional: true
    has_many :users
end
