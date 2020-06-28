class Route < ApplicationRecord
    validates :route_name, :user_id, :route_data, presence: true

    belongs_to :user

end
