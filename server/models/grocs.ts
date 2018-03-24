import * as mongoose from 'mongoose';

const grocsSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  url: String
});

const Grocs = mongoose.model('Grocs', grocsSchema);

export default Grocs;