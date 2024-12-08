const baseUrl = "http://localhost:3001";

function checkResponse(res) {
  return res.ok
    ? res.json()
    : Promise.reject(`Error: ${res.status}`, console.error());
}

function signUp({ name, avatar, email, password }) {
  return fetch(`${baseUrl}/signup`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then(checkResponse);
}

function signIn({ email, password }) {
  return fetch(`${baseUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
}

export { signIn, signUp };
