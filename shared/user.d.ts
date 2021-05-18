export interface user {
  gender: string
  name: {
    title: string
    first: string
    last: string
  }
  location?: {
    street: string
    city: string
    state: string
    postcode: string
    coordinates: {
      latitude: string
      longitude: string
    }
    timezone?: {
      offset: string
      description: string
    }
  }
  email?: string
  dob?: {
    date: string
    age: number
  }
  phone?: string
  id: {
    name: string
    value: string
  }
  picture?: {
    large: string
    medium: string
    thumbnail: string
  }
  nat: string
}
