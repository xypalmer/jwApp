class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception


  def current_user
  	@current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def session_new
  	@session_new ||= User.new
  end

  def user_new
  	@user_new ||= User.new
  end

  def projects_all 
    @projects_all ||= current_user.projects.all
  end

  helper_method :projects_all

  helper_method :current_user 

  helper_method :user_new

  helper_method :session_new
end

