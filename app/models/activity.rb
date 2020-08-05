class Activity < ApplicationRecord
    validates :title, :sport, :duration, :distance, :user_id, presence: true

    belongs_to :user
    belongs_to :route

    has_one_attached :map_img
end
