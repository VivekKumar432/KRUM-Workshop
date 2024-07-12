const logoutController = (req, res) => {
  try {
    res.clearCookie("sessionToken");
    return res.status(200).json({ message: "Logout Success" });
  } catch (error) {
    return res.status(500).json({ message: "Server error during logout" });
  }
};

module.exports = logoutController;
