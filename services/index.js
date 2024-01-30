

const { createUser } = require('./userService'); 


async function main() {
  try {
    const savedUser = await createUser('John Doe', 'john.doe@example.com', 'securepassword', '123 Main Street');
    
  } catch (error) {
    
    // Handle the error
    console.error('An error occurred:', error);
  }
}

// Call the main function
main();
