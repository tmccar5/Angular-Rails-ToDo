Rails.application.routes.draw do
  root 'application#home'
  resources :posts, defaults: { format: 'json' }

end
