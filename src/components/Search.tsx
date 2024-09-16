import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

interface PropsSearch {
    onSearch: (value: string) => void
}

const Search = ({ onSearch }: PropsSearch) => {
    const [search, setSearch] = useState<string>("")
    return (
        <div className="container-search">
            <input
                type="search"
                className="input-search"
                placeholder="Search..."
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value)
                    onSearch(e.target.value)
                }}
            />
            <FontAwesomeIcon icon={faSearch} className="icon-search" />
        </div>
    )
}

export default Search;