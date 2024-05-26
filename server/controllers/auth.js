import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import AuthSchema from '../modules/auth.js';


const refresh = async(req, res) => {
    const token = jwt.sign({ id: req.user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
    console.log('refresh controller userid',token)
    res.status(201).json({
        status: "OK",
        token
    });
}

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user exist
        const user = await AuthSchema.findOne({ email });
        if (user) {
            return res.status(500).json({ msg: "This email is already registered!" });
        }

        if (password.length < 6) {
            return res.status(500).json({ msg: "Password must be longer than 6 characters!" });
        }

        if (!isEmail(email)) {
            return res.status(500).json({ msg: "Not a valid email format!" });
        }

        // Hash password
        const passwordHash = await bcrypt.hash(password, 12);

        // Create new user
        const newUser = await AuthSchema.create({ username, email, password: passwordHash });

        // Create JWT token
        const token = jwt.sign({ id: newUser._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '0.01h' });
        const refreshToken = jwt.sign({ id: newUser._id }, "qeOUJz6FgEtJMKmDW6Mw3TiiFBBBQs2oDG8N8HKGCeJqKt2kynPx0RkcfS", { expiresIn: '1h' });

        res.status(201).json({
            status: "OK",
            newUser,
            token,
            refreshToken
        });

    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await AuthSchema.findOne({ email });
        if (!user) {
            return res.status(500).json({ msg: "No user found with this email" });
        }

        // Compare password
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(500).json({ msg: "Invalid password" });
        }

        // Create JWT token
        const token = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '0.01h' });
        const refreshToken = jwt.sign({ id: user._id }, "qeOUJz6FgEtJMKmDW6Mw3TiiFBBBQs2oDG8N8HKGCeJqKt2kynPx0RkcfS", { expiresIn: '1h' });

        res.status(201).json({
            status: "OK",
            user,
            token,
            refreshToken
        });

    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

function isEmail(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

export { register, login, refresh };
