//blog routes

const express = require('express');
const L1 = require('./../models/L1');
const router = express.Router();

//define storage for the images

router.get('/new', (request, response) => {
  response.render('l1/new');
});

//view route
router.get('/:id', async (request, response) => {
  let blog = await L1.findOne({ id: request.params.id });

  if (blog) {
    response.render('show', { blog: blog });
  } else {
    response.redirect('/');
  }
});

//view route
router.get('/', async (request, response) => {
  let blog = await L1.findOne({ id: request.params.id });

  if (blog) {
    response.render('show', { blog: blog });
  } else {
    response.redirect('/');
  }
});

//view route
router.get('/q/:title', async (request, response) => {
  let blogs = await Blog.find({ title: request.params.title });

  if (blogs) {
    response.render('q', { blogs: blogs });
  } else {
    response.redirect('/');
  }
});

//route that handles new post
router.post('/', (request, response) => {
  let l1 = new L1({
    l1id: request.body.l1id,
    l1name: request.body.l1name
  });

  try {
    l1 = l1.save();

    response.redirect(`dno/new`);
  } catch (error) {
    console.log(error);
  }
});

// route that handles edit view
router.get('/edit/:id', async (request, response) => {
  let blog = await Blog.findById(request.params.id);
  response.render('edit', { blog: blog });
});

//route to handle updates
router.put('/:id', async (request, response) => {
  request.l1 = await L1.findById(request.params.id);
  let l1 = request.l1;
  l1.l1id = request.body.l1id;
  l1.l1name = request.body.l1name;
  try {
    l1 = await l1.save();
    //redirect to the view route
    response.redirect(`/dno/${blog.slug}`);
  } catch (error) {
    console.log(error);
    response.redirect(`/dno/edit/${blog.id}`, { blog: blog });
  }
});

///route to handle delete
router.delete('/:id', async (request, response) => {
  await Blog.findByIdAndDelete(request.params.id);
  response.redirect('/');
});

module.exports = router;
