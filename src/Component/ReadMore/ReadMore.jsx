import React from 'react'
import CardsAgency from './CardsAgency'

const ReadMore = () => {
  const cards = [
    {
      title: 'Leading',
      imageUrl: 'https://pngimg.com/d/globe_PNG24.png',
      description: 'InnovateTech Solutions is a leading provider of cutting-edge technology solutions specializing in AI-driven',
    },
    {
      title: 'Achivements',
      imageUrl: 'https://www.iconpacks.net/icons/2/free-paper-plane-icon-2563-thumb.png',
      description:"XYZ Company achieved significant revenue growth of 30% year-over-year and expanded into three "
    },
    {
      title: 'PartnerShip',
      imageUrl: 'https://www.freeiconspng.com/thumbs/headphones-png/headphones-png-19.png',
      description: 'InnovateTech has established strategic partnerships with industry leaders in cloud computing, data analytics',
    },
    {
      title: 'SEO',
      imageUrl: 'https://i.pinimg.com/474x/56/24/27/56242765e3874455e0e69bc5fddda849.jpg',
      description: 'InnovateTech employs advanced SEO strategies to maintain a strong online presence and visibility ',
    },
    {
      title: 'Goals',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyLE3TsxAW9ZlspZ180LzEwUOwyyMCrRyZWEMAkyQOkdWZ0Adw47gwUbAA2VjJfY3ViYk&usqp=CAU',
      description: 'InnovateTech aims to expand its global footprint by entering new markets and industries while maintaining',
    },
    {
      title: 'Focus',
      imageUrl: 'https://cdn-icons-png.freepik.com/512/420/420175.png',
      description: 'The company s primary focus is on leveraging emerging technologies such as machine learning, IoT',
    },
  ];  
  return (
    <div>

      <div className="container my-5">
      <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col-md-4">
            <CardsAgency
              title={card.title}
              imageUrl={card.imageUrl}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </div>

        

    </div>
  )
}

export default ReadMore
