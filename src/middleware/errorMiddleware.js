const errorHandler = (err, req, res, next) => {
  console.error(err);

  // Duplicate MongoDB field
  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0];

    return res.status(409).json({
      success: false,
      message: `${field} already exists`,
    });
  }

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
};

module.exports = errorHandler;
