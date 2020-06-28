
# established scope of router DSL
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #rails routes "/" to static_pages#root views
  root "static_pages#root"

  # modifys default response to format json for the users and session routes nested under api
  namespace :api, defaults: {format: :json} do
    #http verbs and url's to controller action
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :routes, only: [:create, :index, :show, :destroy]
  end

end
