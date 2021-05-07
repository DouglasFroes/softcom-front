import api from './api'
export default async function clapsApi(user: string, article: string) {
  try {
    const { data } = await api.post('/claps', {
      user,
      article
    })

    return data.total
  } catch (err) {
    return 0
  }
}
