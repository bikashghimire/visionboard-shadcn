import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";

const TodoList = () => {
  return (
    <div className="">
Calender <ScrollArea className="max-h-[400ox] mt-4 overflow-y-auto">
    <div className="flex flex-col gap-4">
    {/* List Item 1 */}
    <Card className="p-4">
        <div className="flex items-center gap-4">
            <Checkbox id="item1" checked/>
            <label htmlFor="item1" className="text-sm text-muted-foreground">Todo Item 1</label>
        </div>
    </Card>
        {/* List Item 1 */}
    <Card className="p-4">
        <div className="flex items-center gap-4">
            <Checkbox id="item1" />
            <label htmlFor="item1" className="text-sm text-muted-foreground">Todo Item 2</label>
        </div>
    </Card>
        {/* List Item 1 */}
    <Card className="p-4">
        <div className="flex items-center gap-4">
            <Checkbox id="item1" />
            <label htmlFor="item1" className="text-sm text-muted-foreground">Todo Item 1</label>
        </div>
    </Card>
        {/* List Item 1 */}
    <Card className="p-4">
        <div className="flex items-center gap-4">
            <Checkbox id="item1" checked/>
            <label htmlFor="item1" className="text-sm text-muted-foreground">Todo Item 1</label>
        </div>
    </Card>
        {/* List Item 1 */}
    <Card className="p-4">
        <div className="flex items-center gap-4">
            <Checkbox id="item1" checked/>
            <label htmlFor="item1" className="text-sm text-muted-foreground">Todo Item 1</label>
        </div>
    </Card>
        {/* List Item 1 */}
    <Card className="p-4">
        <div className="flex items-center gap-4">
            <Checkbox id="item1" checked/>
            <label htmlFor="item1" className="text-sm text-muted-foreground">Todo Item 1</label>
        </div>
    </Card>
        {/* List Item 1 */}
    <Card className="p-4">
        <div className="flex items-center gap-4">
            <Checkbox id="item1" />
            <label htmlFor="item1" className="text-sm text-muted-foreground">Todo Item 1</label>
        </div>
    </Card>
          {/* List Item 1 */}
    <Card className="p-4">
        <div className="flex items-center gap-4">
            <Checkbox id="item1" />
            <label htmlFor="item1" className="text-sm text-muted-foreground">Todo Item 1</label>
        </div>
    </Card>
          {/* List Item 1 */}
    <Card className="p-4">
        <div className="flex items-center gap-4">
            <Checkbox id="item1" />
            <label htmlFor="item1" className="text-sm text-muted-foreground">Todo Item 1</label>
        </div>
    </Card>
          {/* List Item 1 */}
    <Card className="p-4">
        <div className="flex items-center gap-4">
            <Checkbox id="item1" />
            <label htmlFor="item1" className="text-sm text-muted-foreground">Todo Item 1</label>
        </div>
    </Card>
</div>

</ScrollArea>
    
    </div>
  );
}
export default TodoList;