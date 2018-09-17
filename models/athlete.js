const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create athelete schema & model
const AthleteSchema = new Schema({
  name: {
    type: String,
    required: [true, "field is required"]
  },
  dob: {
    type: Date,
    required: [true, "Date field is required"]
  },
  nationality: {
    type: String,
    required: [true, "nationality field is required"]
  },
  location: [
    {
      city: {
        type: String,
        required: [true, "City field is required"]
      },
      state: {
        type: String,
        required: [true, "State field is required"]
      },
      country: {
        type: String,
        required: [true, "Country field is required"]
      }
    }
  ],
  association: {
    type: String,
    required: [true, "association field is required"]
  },
  team: {
    type: String,
    required: [true, "team field is required"]
  },
  gender: {
    type: String,
    required: [true, "gender field is required"]
  },
  sports: {
    type: Array,
    required: [true, "sports field is required"]
  },
  about: {
    type: String,
    required: [true, "about field is required"]
  },
  interests: {
    type: Array,
    required: [true, "interests field is required"]
  },
  charities: {
    type: String,
    required: [true, "charities field is required"]
  },
  socialMedia: [
    {
      facebook: {
        type: String,
        required: [false, ""]
      },
      twitter: {
        type: String,
        required: [false, ""]
      },
      youtube: {
        type: String,
        required: [false, ""]
      },
      instagram: {
        type: String,
        required: [false, ""]
      },
      snapchat: {
        type: String,
        required: [false, ""]
      },
      twitch: {
        type: String,
        required: [false, ""]
      }
    }
  ],
  pets: {
    type: Array,
    required: [false, ""]
  },
  drinks: {
    type: Boolean,
    default: false
  },
  married: {
    type: Boolean,
    default: false
  },
  profileImage: {
    type: String,
    required: [false, ""]
  }
});

const Athelete = mongoose.model("athlete", AthleteSchema);
module.exports = Athelete;
