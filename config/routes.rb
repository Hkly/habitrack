Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show]
    resources :friendships, only: [:create, :destroy]
    resources :habits, except: [:new] do
      resources :habit_days, only: [:create, :destroy]
    end
  end

end
