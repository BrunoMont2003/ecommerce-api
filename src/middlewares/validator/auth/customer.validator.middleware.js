const customerValidator = (req, res, next) => {
  const { role } = req.user
  if (role === 'customer') {
    next()
  } else {
    return res.status(401).json({
      message: 'Unauthorized'
    })
  }
}

export default customerValidator
