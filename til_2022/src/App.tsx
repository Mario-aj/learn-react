import { Plus, XIcon } from '@/shared/ui/icons';

export function App() {
  return (
    <div className="flex flex-col items-center w-full h-screen gap-4 pt-10">
      <h1 className="mb-10 text-3xl font-bold text-gray-700 underline">
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
              className="p-1 text-gray-800 transition-colors duration-300 bg-gray-300 border-none rounded-full hover:bg-gray-400 active:bg-gray-500"
            >
              <Plus />
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder="00:00"
                aria-label="time-inputs"
                className="w-24 px-4 py-2 text-gray-800 border border-gray-400 border-solid rounded focus:outline-none"
              />
              <button
                type="button"
                className="absolute p-1 text-sm text-gray-800 transition-colors duration-300 bg-gray-200 border-none rounded-full right-2 bottom-3 hover:bg-gray-300"
              >
                <XIcon />
              </button>
            </div>
            <button
              type="button"
              className="p-1 text-gray-800 transition-colors duration-300 bg-gray-300 border-none rounded-full hover:bg-gray-400 active:bg-gray-500"
            >
              <Plus />
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
