class PostsController < ApplicationController
	def index
		respond_with Post.all
	end

	def create
		respond_with Post.create(post_params)
	end

	def show
		respond_with Post.find(params[:id])
	end

	def destroy
		post = Post.find(params[:id])
		respond_with post.destroy!

	end

	def update
		respond_with Post.find(params[:id]).update(post_params)
	end

	private

	def post_params
		params.require(:post).permit(:title)

	end

end
