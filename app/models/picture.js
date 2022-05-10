// Import dependencies
const mongoose = require("mongoose")
const { Schema, model } = mongoose
const commentSchema = require("./comment")
const User = require("./user")

const picSchema = new Schema(
	{
		source: {
			type: JSON
		},
        description: {
            type: String
        },
		owner: {
			type: Schema.Types.ObjectId,
			ref: "User"
		},
        bird: {
            // ID to be captured from the API
            type: String
        },
		comments: [commentSchema]
	},
	{
		timestamps: true,
	}
)

module.exports = model("Picture", picSchema)
