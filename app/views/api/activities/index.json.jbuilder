@activities.each do |activity|
        json.set! activity.id do 
            json.extract! activity, :id, :title, :sport, :duration, :distance, :elevation, :description, :user_id, :route_id
        end
end