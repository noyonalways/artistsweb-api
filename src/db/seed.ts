import config from "@/config";
import User from "@/modules/user/user.model";

const admin = {
  name: config.ADMIN_NAME,
  email: config.ADMIN_EMAIL,
  password: config.ADMIN_PASSWORD,
  role: "admin",
};

const seedAdmin = async () => {
  const existingUser = await User.findOne({ email: admin.email });
  if (!existingUser) {
    await User.create(admin);
    // eslint-disable-next-line no-console
    console.log("Admin created successfully");
  } else {
    // eslint-disable-next-line no-console
    // console.log("Admin already exists");
  }
};

export default seedAdmin;
