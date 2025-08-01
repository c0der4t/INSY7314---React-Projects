const healthCheck = async (req, res) => {
    console.log('Health check endpoint hit');
    res.status(200).json({ status: 'OK' });
};

module.exports = {
    healthCheck
}