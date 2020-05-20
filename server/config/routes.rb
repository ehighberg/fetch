Rails.application.routes.draw do
  resources :posts
  resources :users
  resources :rooms
  resources :tags
  resources :teams

  get '/postwithdetails/:id' => 'posts#showwithauthor'
  get '/roomwithdetails/:id' => 'rooms#showwithposts'
  get '/teamwithdetails/:id' => 'teams#showwithmanagerandusers'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
