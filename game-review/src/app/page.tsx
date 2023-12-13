import { Nav } from "./components/Nav"
import Link from "next/link"

export default function Home() {
  return (
    <>
    <Nav/>
    <section className="bg-blue-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Welcome to GameReviewHub</h1>
        <p className="text-lg md:text-xl mb-8">Your ultimate destination for insightful video game reviews and recommendations.</p>
        <a href="/News" className="bg-white text-blue-500 py-2 px-6 rounded-full text-lg hover:bg-blue-600 hover:text-white">Explore Reviews</a>
      </div>
    </section>
    <section id="reviews" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Latest Reviews</h2>
        {/* Add your review cards here */}
        <div className="flex flex-wrap -mx-4">
          {/* Review Card Example */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://res.cloudinary.com/dmimages/image/upload/v1702508494/game-console-6603120_drkxyb.jpg" alt="Game Title" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Game Title</h3>
                <p className="text-gray-700">Embark on a digital odyssey where pixels dance with purpose, and every frame tells a story. This game isn't just an escape; it's an invitation to a world where imagination knows no bounds..</p>
                <a href="/News" className="text-blue-500 hover:underline">See More</a>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://res.cloudinary.com/dmimages/image/upload/v1702508576/fortnite-4129124_1920_spddvh.jpg" alt="Game Title" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Game Title</h3>
                <p className="text-gray-700">Dive into a symphony of pixels and polygons, where gameplay isn't just a journey — it's a sonnet of strategy, a dance of daring moves, and an orchestration of unforgettable moments.</p>
                <a href="/News" className="text-blue-500 hover:underline">See More</a>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://res.cloudinary.com/dmimages/image/upload/v1702508729/gamer-3163518_1920_ewwg4i.jpg" alt="Game Title" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Game Title</h3>
                <p className="text-gray-700">Unlock the gateway to a digital universe where every pixel is a brushstroke of adventure. This game isn't just a play; it's a canvas waiting for your story to unfold, your legend to be written.</p>
                <a href="/News" className="text-blue-500 hover:underline">See More</a>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://res.cloudinary.com/dmimages/image/upload/v1702508689/video-games-893225_1920_ujuasp.jpg" alt="Game Title" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Game Title</h3>
                <p className="text-gray-700">Step into the virtual realm, where innovation meets imagination. This game is more than pixels and code; it's an immersive experience, a thrilling narrative, and a challenge waiting to be conquered.</p>
                <a href="/News" className="text-blue-500 hover:underline">See More</a>
              </div>
            </div>
          </div>
          {/* Repeat the above card structure for each review */}
        </div>
      </div>
    </section>
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 GameReviewHub. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
}