import React from 'react'

export const Wedding = () => {
  return (
   <>
   <div>
<div class="bg-gray-400 p-44 flex justify-center content-center text-3xl">
  Wedding & Events
</div>

<div class="grid grid-cols-2 gap-2 bg-slate-200">
  <div class="image bg-slate-400 flex justify-center content-center p-2">
    <img src="https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png" alt="" />
  </div>
  <div class="p-4">
    <p class="mt-2">Lorem ipsum dolor sit amet, eu pro possim regione pertinacia, vel id feugait volumus disputationi. Labores aliquando ei vis, assum vidisse et per, essent perfecto praesent no vix. Dicat laudem ne eum, usu solum commodo splendide at. No laoreet oporteat suscipiantur usu, cum id quod latine docendi, in eam error labores deserunt. Alienum detracto cum cu.
</p>
<p class="mt-2">Voluptua consectetuer usu ei. Eu lorem soluta cotidieque est. Ubique nemore sententiae at quo, ex delectus gloriatur intellegat mea. Eos quem nominavi ne, his ei unum nullam honestatis. Sed tale sint fierent at, eu sea illud fabulas.
</p>
<p class="mt-2">Eu quo cetero oblique, no cum prima dicant mediocritatem. Recteque pertinacia necessitatibus mel in, nam cu commodo aperiri, facer ubique civibus eu per. </p>
  </div>
</div>
<div class="flex justify-center flex-col content-center p-12 text-center mb-5">
  <h2 class="text-2xl/[29px] mb-4">Wedding & Events Enquiry Form</h2>
  <p>Lorem ipsum dolor sit amet, eu pro possim regione pertinacia, vel id feugait volumus disputationi. Labores aliquando ei vis, assum vidisse et per, essent perfecto praesent no </p>
</div>
<div class="form mt-5">
  <form action="">
    <div class="grid grid-cols-2 gap-2 bg-slate-200 p-7">
  <div class="sm:col-span-4">
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900">First Name</label>
          <div class="mt-2">
            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Required</span>
              <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder=""/>
            </div>
          </div>
        </div>
  <div class="sm:col-span-4">
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
          <div class="mt-2">
            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Required</span>
              <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="" />
            </div>
          </div>
        </div>
  <div class="sm:col-span-4">
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Mobile Phone</label>
          <div class="mt-2">
            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Required</span>
              <input type="tel" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="" />
            </div>
          </div>
        </div>
  <div class="sm:col-span-4">
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
          <div class="mt-2">
            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Required</span>
              <input type="email" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="" />
            </div>
          </div>
        </div>
        <div class="col-span-full">
          <label for="about" class="block text-sm font-medium leading-6 text-gray-900">About</label>
          <div class="mt-2">
            <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
          <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
        </div>
    <button type="submit" class="mt-3 rounded-lg bg-black p-1 px-2 text-white">view more</button>
    </div>
  </form>
</div>
</div>
   </>
  )
}

// export default Wedding