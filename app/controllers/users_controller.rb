class UsersController < ApplicationController
  def index
	if current_user
	  @projects = current_user.projects.all
	  @projects = current_user.projects.new
	end
  end

  def new
	@user = User.new
	@is_login = true
  end

  def create
	@user = User.new(params.require(:user).permit(:username, :email, :password, :password_confirmation))
	if @user.save
		session[:user_id] = @user.id.to_s
		redirect_to new_project_path
	else
		render 'new'
	end
end

def home
end

def edit
end

def update
end

def destroy
end
end
			