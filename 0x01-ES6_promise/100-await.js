import uploadPhoto from './5-photo-reject'; // Adjust import path as needed
import createUser from './4-user-promise'; // Adjust import path as needed

export default async function asyncUploadUser() {
  try {
    const photoResponse = await uploadPhoto('guillaume.jpg'); // Call uploadPhoto function
    const userResponse = await createUser('Guillaume', 'Salva'); // Call createUser function

    // Return an object with both responses if successful
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // If any promise fails, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}
