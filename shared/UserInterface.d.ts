export interface IUser {
  gender: string
  name: {
    title: string
    first: string
    last: string
  }
  location?: {
    street: {
      name: string
      number: number
    }
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
    date: Date
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
