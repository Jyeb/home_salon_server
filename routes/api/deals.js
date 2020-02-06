const express = require('express')
const router = express.Router()
const {DealModel} = require('../../models/deals')
// Auth required to create deals
const auth = require('../../middleware/auth')
// Deal validation
const { check, validationResult } = require('express-validator')
// Admin model
const Admin = require('../../models/Admin')

// API route to create deals
// POST req => api/deal
router.post(
  '/',
  [
    auth,
    [
      check('dealname', 'Deal Name required').exists(),
      check('price', 'Deal Price Required').exists(),
      check('services', 'A minimum of one service is required').exists()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    try {
      const newDeal = new DealModel({
        dealname: req.body.dealname,
        price: req.body.price,
        services: req.body.services
      })

      const deal = await newDeal.save()

      res.json(deal)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

// API route to return all deals
router.get('/', async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    const deals = await DealModel.find()
    res.send(deals)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// Route to delete a deal
router.delete('/:id', auth, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    const deal = await DealModel.findById(req.params.id)
  
    await deal.remove();

    res.json({ msg: 'Post removed' });

  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// Route to update a deal
router.patch('/:id', auth, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  try {
    const deal = await DealModel.findByIdAndUpdate(id, req.body, {
      new: true
    })
    res.send(deal)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
