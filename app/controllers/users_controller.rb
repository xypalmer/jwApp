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
		redirect_to user_projects
	else
		render 'new'
	end
end

def edit
end

def update
end

def destroy
end
end
			