// Backbone Model
var Blog = Backbone.Model.extend({
  defaults: {
    author: '',
    title: '',
    url: '',
  }
});

// Backbone Collection

var Blogs = Backbone.Collection.extend({});

// instantiate to Blogs

var blog1 = new Blog({
  author: 'Admin',
  title: 'test',
  url: 'https://test.com',
});
var blog2 = new Blog({
  author: 'John',
  title: 'John\'s blog',
  url: 'https://johnsblog.com',
});

// instantiate a Collection

var blogs = new Blogs([blog1, blog2]);