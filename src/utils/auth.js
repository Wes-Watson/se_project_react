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
  })
    .then(checkResponse)
    .then(() => {
      signIn({ email, password });
    });
}

function signIn({ email, password }) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(checkResponse)
    .then((data) => {
      localStorage.setItem("jwt", data.token);
      return data;
    });
}

function getUser(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

export { signIn, signUp, getUser };
