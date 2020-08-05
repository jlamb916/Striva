class Route < ApplicationRecord
    validates :route_name, :user_id, :route_data, presence: true

    belongs_to :user
    has_many :activities

    has_one_attached :map_img
end
