"use client"

import { useState } from "react"
import { FaRegHeart } from "react-icons/fa6";

export default function AddToFavorite() {
  let value
  // Get the value from local storage if it exists
  value = localStorage.getItem("favoriteGames") || ""

  // Set the value received from the local storage to a local state
  const [favoriteGame, setFavoriteGame] = useState(value)

  // When user submits the form, save the favorite game to the local storage
  const addFavorite = () => {
    localStorage.setItem("favoriteGames", favoriteGame)
  }

  return (
        <FaRegHeart/>

  )
}