import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  descricao: String,
  finalizada: Boolean,
});
