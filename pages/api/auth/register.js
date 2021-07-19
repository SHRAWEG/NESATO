import bcrypt from 'bcrypt';
import { connectToDatabase } from '../../../util/mongodb';

export default async (req,res) => {
  const {method} = req
  const { username, password, email } = req.body;


  if (method == 'POST') {
    //Connection to the database
    const {db} = await connectToDatabase();

    //Username conflict
    const usernameConflict = await db.collection('usersprofile').findOne({
      username: { $regex: "^" + username + "$", $options: "i" }
    });

    //Email conflict
    const emailConflict = await db.collection('usersprofile').findOne({
      email: { $regex: "^" + email + "$", $options: "i" }
    });

    if (usernameConflict) {
      res.status(405).json({ error:true, message: "Username already taken" });
    }

    else {
      if (emailConflict) {
        res.status(406).json({ error:true, message: "Email address is already in use" });
      }

      else {
        //Encrypting password
        const hashedPassword = await bcrypt.hash(password, 12);

        //Inserting into the database
        const user = await db
          .collection('usersprofile')
          .insertOne({ email, password: hashedPassword, username })
          .then(({ ops }) => ops[0]);

          res.status(200).json({message: "success"});
          return;
        }
    }
  }
} 