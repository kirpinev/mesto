const key = '037c14f8-74f5-4443-a201-4cab95df3460'
const url = 'https://nomoreparties.co/cohort6'
const headers = {
  authorization: key,
  'Content-Type': 'application/json'
}

export const getUserInfo = async () => {
  try {
    const res = await fetch(`${url}/users/me`, {
      headers
    })

    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

export const updateAvatar = async (values: { avatar?: string }) => {
  try {
    await fetch(`${url}/users/me/avatar `, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({
        avatar: values.avatar
      })
    })
  } catch (error) {
    console.log(error)
  }
}

export const updateUserInfo = async (values: {
  name?: string
  about?: string
}) => {
  try {
    await fetch(`${url}/users/me `, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({
        name: values.name,
        about: values.about
      })
    })
  } catch (error) {
    console.log(error)
  }
}

export const getPlaces = async () => {
  try {
    const res = await fetch(`${url}/cards`, {
      headers
    })

    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

export const addPlace = async (values: { place?: string; link?: string }) => {
  try {
    const res = await fetch(`${url}/cards`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        name: values.place,
        link: values.link
      })
    })

    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

export const addLike = async (id?: string) => {
  try {
    await fetch(`${url}/cards/like/${id}`, {
      method: 'PUT',
      headers
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleteLike = async (id?: string) => {
  try {
    await fetch(`${url}/cards/like/${id}`, {
      method: 'DELETE',
      headers
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleteCard = async (id?: string) => {
  try {
    await fetch(`${url}/cards/${id}`, {
      method: 'DELETE',
      headers
    })
  } catch (error) {
    console.log(error)
  }
}
