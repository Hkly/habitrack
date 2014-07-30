json.(@user, :id, :gravatar)
json.friends @user.friends, :username, :gravatar
