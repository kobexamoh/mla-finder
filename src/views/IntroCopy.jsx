import SearchBar from "./SearchBar";

export default function IntroCopy() {
    return (
        <section className="p-8 bg-gray-50 text-gray-800 rounded shadow mt-6 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-2">What's this tool?</h2>
            <ul className="list-disc pl-5 space-y-2">
               <li><strong>What is an MLA?</strong> A Member of the Legislative Assembly (MLA) represents a region in a province. Alberta has 87 of them.</li>
               <li><strong>What is a riding?</strong> An older term that kept its usage in the modern day, a riding is one's local voting area.</li>
               <li><strong>How do I find my MLA?</strong> Using this page! Use the search bar or filters to explore the MLAs.</li> 
            </ul>
            <div className="">
                <SearchBar />
            </div>
        </section>
    );
}