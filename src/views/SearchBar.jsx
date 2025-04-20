export default function SearchBar() {
  function search(formData) {
    const query = formData.get("search");
    console.log(`You're looking for '${query}'`);
  }
  return (
    <div className="mt-4">
      <form className="flex" action={search}>
        <label className="w-1/12 content-center">
          <svg
            fill="#000000"
            width="24px"
            height="24px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M27 24.57l-5.647-5.648a8.895 8.895 0 0 0 1.522-4.984C22.875 9.01 18.867 5 13.938 5 9.01 5 5 9.01 5 13.938c0 4.929 4.01 8.938 8.938 8.938a8.887 8.887 0 0 0 4.984-1.522L24.568 27 27 24.57zm-13.062-4.445a6.194 6.194 0 0 1-6.188-6.188 6.195 6.195 0 0 1 6.188-6.188 6.195 6.195 0 0 1 6.188 6.188 6.195 6.195 0 0 1-6.188 6.188z"></path>
            </g>
          </svg>
        </label>
        {/* TODO: place SVG inside form input */}
        <div className="w-10/12">
          <input
            name="search"
            className="border-2 border-gray-300 px-4 focus:border-sky-500 rounded-lg py-2 w-full"
            placeholder="Enter a name or party..."
            type="search"
          />
        </div>
        {/* TODO: place reset inside input and show only when text is entered */}
        <button type="reset" className="w-1/12">
          <svg
            fill="#000000"
            width="24px"
            height="24px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z"></path>
            </g>
          </svg>
        </button>
      </form>
    </div>
  );
}
