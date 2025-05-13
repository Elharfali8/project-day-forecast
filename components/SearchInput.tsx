import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"


const SearchInput = () => {
  return (
      <div className=" w-full">
          <Input type="email" placeholder="Email" className="w-full max-w-xl" />
          <button className="absolute right-0 top-0 h-full px-4 bg-blue-500 text-white rounded-r-md ">
              <Search />
          </button>
    </div>
  )
}

export default SearchInput
