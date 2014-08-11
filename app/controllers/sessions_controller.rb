class SessionsController < ApplicationController
	def new 
		@user = User.new
		@is_login = true
	end

	def create
		u = User.where(email: params[:user][:email]).first
		if u && u.authenticate(params[:user][:password])
			session[:user_id] = u.id.to_s
			redirect_to user_projects_path(:index, @user, @projects)
		else
			redirect_to new_sessions_path
		end
	end

	def home
	end

	def destroy
		reset_sessions
		redirect_to users_path
	end

end
