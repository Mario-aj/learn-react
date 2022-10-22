import { Plus } from './shared/ui/icons/plus';
import { XIcon } from './shared/ui/icons/XIcon';

export function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center pt-10 gap-4">
      <h1 className="text-3xl font-bold underline text-gray-700 mb-10">
        Dynamic Form with RHF and Zod!
      </h1>

      <form>
        <fieldset>
          <legend className="mb-8">
            Add times to build your work schedule
          </legend>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="border-none bg-gray-300 hover:bg-gray-400 active:bg-gray-500 transition-colors duration-300 text-gray-800 rounded-full p-1"
            >
              <Plus />
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder="00:00"
                aria-label="time-inputs"
                className="px-4 py-2 focus:outline-none border border-solid border-gray-400 rounded w-24 text-gray-800"
              />
              <button
                type="button"
                className="border-none absolute right-2 bottom-3 bg-gray-200 hover:bg-gray-300 transition-colors text-sm duration-300 text-gray-800 rounded-full p-1"
              >
                <XIcon />
              </button>
            </div>
            <button
              type="button"
              className="border-none bg-gray-300 hover:bg-gray-400 active:bg-gray-500 transition-colors duration-300 text-gray-800 rounded-full p-1"
            >
              <Plus />
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
