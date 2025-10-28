import SearchBar from "../SearchBar";

export default function SearchBarExample() {
  return (
    <div className="max-w-md">
      <SearchBar
        onChange={(value) => console.log("Search:", value)}
        onClear={() => console.log("Search cleared")}
      />
    </div>
  );
}
