
import bcrypt from 'bcrypt';

export const generateRandomString = () => {

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1 = '';

    for (let i = 0; i < 18; i++) {
        result1 += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result1;
}

export const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(18);
    return await bcrypt.hash(password, salt).catch(error => { throw "error incriptacion" } );
};

export const ComparePassword = async ( password, userPaswword ) => {
    return await bcrypt.compare(password, userPaswword).catch(error => { throw "error" } );
};
