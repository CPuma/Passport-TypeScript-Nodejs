import bcrypt from 'bcrypt';
import { model, Schema, Document } from 'mongoose';

export interface IUser extends Document {
	email: string;
	password: string;
	// definimos el metodo que creamos para comparar PASSWORD
	comparePassword: (password: string) => Promise<boolean>;
}
const userSchema = new Schema({
	email: {
		type: String,
		unique: true,
		required: true,
		lowercase: true,
		trim: true
	},
	password: {
		type: String,
		required: true
	}
});

// metodo antes de guardar un USUARIO - para encryptar el PASSWORD
userSchema.pre<IUser>('save', async function(next) {
	// function() para no perder el Scope y acceder al userShema con THIS
	const user = this;
	if (!user.isModified('password')) return next;

	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(user.password, salt);
	user.password = hash;
	next();
});

// metodo Comparar Password
userSchema.methods.comparePassword = async function(password: string): Promise<boolean> {
	return await bcrypt.compare(password, this.password);
};

export default model<IUser>('User', userSchema);
