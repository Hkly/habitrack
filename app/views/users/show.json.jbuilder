json.(@current_user, :id, :email)
json.friends @friends, :username, :email
