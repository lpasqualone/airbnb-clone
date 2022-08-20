import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import cardData from "./cardData"

export default function App() {
  const cards = cardData.map(card => {
    return (
    <Card 
      key={card.id}
      item={card}
      />
    )
    })
    
    return (
      <div className="container">
      <Navbar />
      <Hero />
      <section className="cards-list">
          {cards}
      </section>
    </div>
  )
}

// img={card.coverImg}
// rating={card.stats.rating}
// reviewCount={card.stats.reviewCount}
// location={card.location}
// title={card.title}
// price={card.price}
// openSpots={card.openSpots}