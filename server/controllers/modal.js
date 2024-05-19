import ModalModel from '../modules/modal.js';


export const createPost = async(req, res)=> {
        try {
        const{user, title, description} = req.body;
        const posts = await ModalModel.create({ user, title, description });

        res.status(201).json({
                status:"OK",
                posts
        })
        } catch (error) {
                res.status(500).json({msg:error.message})
        }
}

export const getPost = async (req, res) => {
    try {   
        const { user, title } = req.body;
        // Find documents that contain the given value in either user or title field
        let posts = await ModalModel.find({
            $or: [
                { user},
                { title}
            ]
        }).lean();

        if (!posts || posts.length === 0) {
            return res.status(404).json({ msg: "No post found" });
        }

        console.log(posts);

        res.status(200).json({
            status: "OK",
            posts
        });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}



export const getAllPosts = async (req, res) => {
        try {
            const posts = await ModalModel.find({});
            res.status(200).json({
                status: "OK",
                posts
            });
        } catch (err) {
            res.status(500).json({ msg: err.message })
        }
    };

export const deletePost = async (req, res) => {
        try {
            const { id } = req.params;
            await ModalModel.findByIdAndDelete(id);
            res.status(200).json({
                status: "OK",
                msg: "Post deleted successfully"
            });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
};

export const updatePost = async (req, res) => {
        try {
            const { id } = req.params;
            const { user, title, description } = req.body;
            
            // Güncellenecek postu bul ve güncelle
            const updatedPost = await ModalModel.findByIdAndUpdate(id, { user, title, description }, { new: true });
    
            if (!updatedPost) {
                return res.status(404).json({ msg: "Post not found" });
            }
    
            res.status(200).json({
                status: "OK",
                posts
            });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
};