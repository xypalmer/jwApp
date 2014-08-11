class ProjectsController < ApplicationController
  def index
  	@projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end

  def new
  	@project = Project.new
  end

  def create
    @user = User.find(params[:user_id])
  	@user_project = @user.projects.new(params.require(:project).permit(:title, :text))
  	if user_project
  	  user_project.save
      redirect_to @user
  	end
  end

  def edit
    @user = User.find(params[:user_id])
  	@project = @user.project.find(params[:id])
  end
  
  def update
    @user = User.find(params[:user_id])
  	@user = @user.project.find(params[:id])
  	@project.update_attributes(params.require(:project).permit(:title, :text))
    redirect_to user_path(params[:user_id])
  end

  def destroy
    @user = User.find(params[:user_id])
    @project = Project.find(params[:id]).delete
    redirect_to @user
  end


end
