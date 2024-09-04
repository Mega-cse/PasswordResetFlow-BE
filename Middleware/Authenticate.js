import jwt from 'jsonwebtoken';
import User from '../Models/schema.js'; 

export const Authenticate = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Assumes Bearer token

    if (!token) {
        return res.status(401).json({ message: 'Access Denied' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Fetch the user from the database
        const user = await User.findById(decoded.id).select('-password'); // Exclude password
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        // Attach user to request object
        req.user = user;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.error(error); // Log error for debugging
        res.status(401).json({ message: 'Invalid or expired token' });
    }
}
