

const router = require("express").Router();
const cloudinary = require("../utlis/cloudinary");
const upload = require("../utlis/multer");
const User = require("../model/user");

router.post("/", upload.single("image"), async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // // Create new user
    // let user = new User({
    //   name: req.body.name,
    //   avatar: result.secure_url,
    //   cloudinary_id: result.public_id,
    // });
    // // Save user
    // await user.save();
    // res.json(user);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports=router;