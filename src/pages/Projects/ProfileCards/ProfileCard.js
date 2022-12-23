import React from 'react'
import Danny from '../../../img/Gallery/danny.jpg' 

function ProfileCard() {
  return (
    <>
        <div class="flex justify-center danny-Profile-Card">
            <div class="rounded-lg shadow-lg bg-white max-w-sm shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img class={Danny} src={Danny}/>
                <div class="p-6">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Danny Nguyen</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                </p>
                <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                </div>
            </div>
        </div> {/* END OF DANNY PROFILE CARD */}
    </>
  )
}

export default ProfileCard