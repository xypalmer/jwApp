class SessionsController < ApplicationController
	def new
		# Present an empty login form
		@user = User.new
		@is_login = true
	end

	def create
		u = User.where(email: params[:user][:email]).first
		if u && u.authenticate(params[:user][:password])
			session[:user_id] = u.id.to_s
			redirect_to projects_path
		else
			redirect_to new_sessions_path
		end
	end

	def home
	end

	def destroy
		reset_session
		redirect_to new_sessions_path
	end

end
