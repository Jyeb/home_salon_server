const express = require('express')
const router = express.Router()
const Testimonial = require('../../models/testimonials')
const auth = require('../../middleware/auth')

const { check, validationResult } = require('express-validator')

// email validation needs to go in
router.post('/', (req, res) => {
  const errors = validationResult(req)
  res.json(errors)
  try {
    const newTestimonial = await new Testimonial({
      name: req.body.name
      
    })
  } catch (err) {
    console.error(err)
    res.status(500).send('Server Error')
  }
})
