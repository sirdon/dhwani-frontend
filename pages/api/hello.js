// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import users from "./users.json";
export default (req, res) => {
  setTimeout(() => {
    res.status(200).json({ users });
  }, 3000);
};
