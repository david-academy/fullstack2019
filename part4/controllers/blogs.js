const blogRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

blogRouter.get('/', async (request, response) => {
    const blogs = await Blog
                    .find({})
                    .populate('user', {username: 1, name: 1})
    response.json(blogs.map(blog => blog.toJSON()))
  })
  
  blogRouter.post('/', async (request, response) => {
    const body = request.body
    const user = await User.findById(body.userId)
    
    try{
        if (body.title && body.url) {

		    const blog = new Blog({
			    title: body.title,
			    author: body.author,
			    url: body.url,
                likes: body.likes === undefined 
                    ? 0 
                    : body.likes,
                user: user._id
		})
    
        const result = await blog.save()
        user.blogs = user.blogs.concat(result._id)
        await user.save()
		response.json(result.toJSON())
	} 
} catch (exception){
   console.log('Ooops', exception)
}
  })

  blogRouter.delete('/:id', async (request, response)=>{
      try{
          await Blog.findByIdAndDelete(request.params.id)
          response.status(204).end()
      } catch (exception){
          'error'
      }
  })
  blogRouter.put('/:id', async(request, response)=>{
      const body = request.body
        const blog ={
            title: body.title,
            author: body.author,
            url: body.url,
            likes: body.likes,
            
        }
      
        
        await Blog.findByIdAndUpdate(request.params.id, body, {new: true})
            .then(updatedBlog=>{
                response.json(updatedBlog.toJSON())
            })
            .catch(error => 'error')
  } )


  module.exports = blogRouter