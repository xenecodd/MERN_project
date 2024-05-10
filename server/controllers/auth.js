import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import AuthSchema from '../modules/auth.js';

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Kontrol etmek için kullanıcıyı bul
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

        // Şifreyi hashle
        const passwordHash = await bcrypt.hash(password, 12);

        // Yeni kullanıcı oluştur
        const newUser = await AuthSchema.create({ username, email, password: passwordHash });

        // JWT ile token oluştur
        const token = jwt.sign({ id: newUser._id }, "SECRET_KEY", { expiresIn: '1h' });

        res.status(201).json({
            status: "OK",
            newUser,
            token
        });

    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Kullanıcıyı bul
        const user = await AuthSchema.findOne({ email });
        if (!user) {
            return res.status(500).json({ msg: "No user found with this email" });
        }

        // Şifreyi karşılaştır
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(500).json({ msg: "Invalid password" });
        }

        // JWT ile token oluştur
        const token = jwt.sign({ id: user._id }, "SECRET_KEY", { expiresIn: '1h' });

        res.status(201).json({
            status: "OK",
            user,
            token
        });

    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

function isEmail(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

export { register, login };
