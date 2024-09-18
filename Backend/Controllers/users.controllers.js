const UserModel = require('../Models/users.schema');
const bcrypt = require('bcryptjs');

const getUsers = async (req, res) => {
    try {
        const resp = await UserModel.find();
        res.json({
            status: 200,
            message: 'Users retrieved successfully',
            data: resp,
        });
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({
            status: 500,
            message: 'Internal server error'
        });
    }
};

const createUser = async (req, res) => {
    try {
        const { email, password, username } = req.body;
        const checkIfUserExist = await UserModel.findOne({ email });
        if (checkIfUserExist) {
            return res.status(409).json({
                code: 409,
                message: 'User email already exists',
            });
        }
        const encryptedPassword = await bcrypt.hash(password, 12);
        const newUser = new UserModel({
            email,
            password: encryptedPassword,
            username,
        });
        const resp = await newUser.save();
        res.status(201).json({
            code: 201,
            message: "User Created Successfully",
            data: resp,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            code: 500,
            message: err.message,
        });
    }
};
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const resp = await UserModel.findOne({ email })
        if (!resp) {
            res.json({
                code: 404,
                message: "Invalid User credentials",
            })
            return;
        }
        const isMatch = await bcrypt.compare(password, resp.password);
        if (!isMatch) {
            res.json({
                code: '404',
                message: 'Invalid email or password',
            })
        }
        res.json({
            code: 200,
            message: "Login Successful",
            data: resp
        })
    } catch (error) {
        console.log(error.message)
    }

}
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!userId) {
            return res.status(404).json({
                code: 404,
                message: 'Invalid Credentials',
            });
        }
        const resp = await UserModel.deleteOne({ _id: userId });
        if (resp.deletedCount === 0) {
            return res.status(404).json({
                code: 404,
                message: 'User not found',
            });
        }
        return res.status(200).json({
            code: 200,
            message: "User Deleted Successfully",
            data: resp
        });
    } catch (error) {
        console.error("Error deleting user:", error);
        return res.status(500).json({
            code: 500,
            message: "Internal Server Error",
        });
    }
};
const checkIfUserExist = async (req, res) => {
    try {
        const { email } = req.body;
        const resp = await UserModel.findOne({ email });
        if (!resp) {
            res.json({
                code: 404,
                message: "Invalid User credentials",
            })
            return;
        }
        res.json({
            code: 200,
            message: "Login Successful",
            data: resp
        })
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = { getUsers, createUser, loginUser, deleteUser, checkIfUserExist };
