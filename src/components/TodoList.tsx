"use client";

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Button } from "./ui/button";
import { format } from "date-fns";
import {  CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Calendar } from "./ui/calendar";

const TodoList = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [open, setOpen] = useState(false)

  return (
    <div className="">
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                      <Button className="w-full">
                        <CalendarIcon />
                        {date ? format(date, 'PPP') : <span>Pick a date</span>}
                    </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-auto">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(date) => {
                    setDate(date);
                    setOpen(false);
                    }}
                />
                </PopoverContent>
            </Popover>

        <ScrollArea className="max-h-[400ox] mt-4 overflow-y-auto">
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