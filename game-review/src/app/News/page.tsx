import { Nav } from "../components/Nav"


export default function Page() {
  return (
    <>
    <Nav/>
    <>
    <div>
        <h1 class="text-5xl flex justify-center">News</h1>
        
    </div>
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          class="rounded-t-lg"
          src="https://res.cloudinary.com/dmimages/image/upload/v1661801395/girl_warrior_xxt6by.jpg"
          alt="profile"
        />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
    </>
    </>
  )
}
