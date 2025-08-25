import axios from 'axios';

const testRegistration = async () => {
  console.log('🚀 Starting registration process...\n');
  
  const email = 'rais.s@northeastern.edu'; // REPLACE WITH YOUR ACTUAL EMAIL
  const nuid = '002830773'; // My NUID 
  
  try {
    // First, try to register
    console.log('📝 Attempting to register...');
    const response = await axios.post(
      'https://challenge.generatenu.com/api/v1/member/register',
      { email, nuid }
    );
    
    console.log('✅ Registration successful!');
    console.log('📋 YOUR UUID:', response.data.id);
    console.log('\n⚠️  IMPORTANT: Copy the UUID above and paste it in alienApi.ts');
    
  } catch (error: any) {
    if (error.response?.status === 409) {
      console.log('⚠️  You are already registered! Fetching your existing ID...\n');
      
      // Try to get existing ID
      try {
        const getResponse = await axios.get(
          'https://challenge.generatenu.com/api/v1/member',
          { params: { email, nuid } }
        );
        
        console.log('✅ Found your existing registration!');
        console.log('📋 YOUR UUID:', getResponse.data.id);
        console.log('\n⚠️  IMPORTANT: Copy the UUID above and paste it in alienApi.ts');
        
      } catch (getError: any) {
        console.error('❌ Could not retrieve your ID:', getError.response?.data || getError.message);
        console.log('\nMake sure your email and NUID are correct!');
      }
    } else {
      console.error('❌ Registration failed:', error.response?.data || error.message);
    }
  }
};

// Run the test
testRegistration();