const adminValidator = (req, res, next) => {
  const { role } = req.user
  if (role === 'admin') {
    next()
  } else {
    return res.status(401).json({
      message: 'Unauthorized'
    })
  }
}

export default adminValidator
