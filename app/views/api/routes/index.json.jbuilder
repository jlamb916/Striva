@routes.each do |route|
    json.set! route.id do
        json.extract! route, :id, :route_name, :route_description, :route_data, :user_id, :created_at
    end
end