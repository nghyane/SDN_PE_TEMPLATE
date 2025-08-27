import mongoose from 'mongoose';

const templateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },

  age: {
    type: Number,
    min: [0, 'Age must be positive'],
    max: [150, 'Age must be realistic']
  },

  isActive: {
    type: Boolean,
    default: true
  },

  birthDate: {
    type: Date,
    validate: {
      validator: (date) => date < new Date(),
      message: 'Birth date cannot be in the future'
    }
  },

  tags: [{
    type: String,
    trim: true
  }],

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  status: {
    type: String,
    enum: ['active', 'inactive', 'pending'],
    default: 'pending'
  },

  metadata: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  }
}, {
  timestamps: true,
  collection: '<DEFAULT_COLLECTION>'
});

templateSchema.pre('save', async (next) => {
  next();
});

templateSchema.methods.toJSON = function() {
  const obj = this.toObject();
  obj.__v = undefined;
  return obj;
};

templateSchema.statics.findByName = function(name) {
  return this.findOne({ name: name });
};

export default mongoose.model('Template', templateSchema);