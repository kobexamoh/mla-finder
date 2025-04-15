export default function SearchBar() {
    function search(formData) {
        const query = formData.get("search");
        alert(`You're looking for '${query}'`);
    }
    return (
        <form action={search}>
            <input name="search" />
            <button type="submit">Search</button>
        </form>
    );
}