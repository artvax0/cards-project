const normalizeProfile = (profile) => ({
  'name': {
    'first': profile.first,
    'middle': profile.middle,
    'last': profile.last,
  },
  'phone': profile.phone,
  'image': {
    'url': profile.url,
    'alt': profile.alt,
  },
  'address': {
    'state': profile.state,
    'country': profile.country,
    'city': profile.city,
    'street': profile.street,
    'houseNumber': profile.houseNumber,
    'zip': profile.zip,
  },
})

export default normalizeProfile;