export const handleApiError = (error) => {
  if (error.response) {
    // Server responded with error
    const message = error.response.data?.message || 'An error occurred';
    const errors = error.response.data?.errors;
    
    if (errors && Array.isArray(errors)) {
      return errors.map(e => e.msg || e.message).join(', ');
    }
    
    return message;
  } else if (error.request) {
    // Request made but no response
    return 'No response from server. Please check your connection.';
  } else {
    // Error in request setup
    return error.message || 'An unexpected error occurred';
  }
};

export const isAuthError = (error) => {
  return error.response?.status === 401 || error.response?.status === 403;
};
