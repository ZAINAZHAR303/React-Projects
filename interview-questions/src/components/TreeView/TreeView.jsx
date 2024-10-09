import MenuList from "./Menu-List";


export default function TreeView({menus = []}){
    return (
        <div className="h-screen bg-blue-400 w-[40%] p-8 pl-0">
            <MenuList list={menus}  />
            
        </div>
    )
}