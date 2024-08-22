const mapCardToModel = (card) => {
    return ({
    title: card.title,
    subtitle: card.subtitle,
    description: card.description,
    phone: card.phone,
    email: card.email,
    webUrl: card.webUrl,
    imageUrl:card.image.url,
    imageAlt: card.image.alt,
    country: card.address.country,
    state: card.address.state,
    city: card.address.city,
    street: card.address.street,
    houseNumber: card.address.houseNumber,
    zip: card.address.zip,
    })
}

export default mapCardToModel;