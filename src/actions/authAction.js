export function loginFinished(error, result) {
  if (error) {
    alert('Error logging in.');
  } else {
    if (result.isCancelled) {
      alert('Login cancelled.');
    } else {
      alert('Logged in');
    }
  }
}

export function logoutFinished() {
  alert('you logged out');
}
