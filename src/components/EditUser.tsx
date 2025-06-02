"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {  SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";


import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const formSchema = z.object({
  username: z.string().min(2, {message: "Username must be at least 2 characters!"}).max(50),
  email: z.string().email({message: "Invalid email address!"}),
  phone: z.string().min(10, {message: "Phone number must be at least 10 characters!"}).max(15, {message: "Phone number must be at most 15 characters!"}),
  location: z.string().min(2, {message: "Location must be at least 2 characters!"}).max(100, {message: "Location must be at most 100 characters!"}),
  role: z.enum(["user", "admin"], {message: "Role must be either user or admin!"}),


})

const EditUser = () => {
      // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "Rhuis Shests",
        email: "rhuis@gmail.com",
        phone: "+345 35543324267",
        location: "Brussels, Belgium",
        role: "user",

    },
  })

    // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div>
      <SheetContent>
        <SheetHeader>
        <SheetTitle className="mb-4">Edit User</SheetTitle>
        <SheetDescription asChild>
            <Form  {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public username.
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                            <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public email.
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                            <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public phone.
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                            <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public location.
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                            <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Role</FormLabel>
                            <FormControl>
                               <Select    value={field.value}
                                 onValueChange={field.onChange}
                                 defaultValue={field.value}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="admin">Admin</SelectItem>
                                    <SelectItem value="user">User</SelectItem>
                                </SelectContent>
                                </Select>

                            </FormControl>
                            <FormDescription>
                                Only verified users can be assigned as admins.
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
            </Form>
        </SheetDescription>
        </SheetHeader>
    </SheetContent>
    </div>
  );
}
export default EditUser;