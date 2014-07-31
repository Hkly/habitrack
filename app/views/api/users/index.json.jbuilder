json.array! @users do |user|
   json.id user.id
   json.username user.username
   json.gravatar user.gravatar
   json.friends user.friends do |friend|
     json.id friend.id
     json.username friend.username
     json.gravatar friend.gravatar
   end
end
