interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData): Promise<boolean> => {
  try {
    // Replace with your actual API endpoint
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return true;
  } catch (error) {
    console.error('Error submitting form:', error);
    return false;
  }
};

// Add more API utility functions as needed
export const fetchTeamMembers = async () => {
  // Implementation for fetching team members
};

export const fetchPartners = async () => {
  // Implementation for fetching partners
};

export const fetchInitiatives = async () => {
  // Implementation for fetching initiatives
}; 