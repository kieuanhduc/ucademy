"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import slugify from "slugify";

import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

const formSchema = z.object({
    title: z.string().min(10,{
        message: "Tên khóa học không được để trống",
    }),
    slug: z.string().optional(),
});

function CourseAddNew() {

    const [isSubmitting,setIsSubmitting] = useState(false);


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            slug: "",
        },
    });

    const { watch, setValue } = form;
    const title = watch('title');

    useEffect(() => {
        setValue('slug',slugify(title,{lower: true,locale: "vi"}));
    },[title,setValue]);

    const onSubmit = (values: z.infer<typeof formSchema>) =>  {

        setIsSubmitting(true);

        const data = {
            title: values.title,
            slug: values.slug
        }

        // console.log(data);

        try{
            
        }catch(error){
            console.log(error);
        }finally{
            setIsSubmitting(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off">
                <div  className="grid grid-cols-2 gap-8 mt-10 mb-8">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tên khóa học *</FormLabel>
                                <FormControl>
                                    <Input placeholder="Tên khóa học" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="slug"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Đường dẫn khóa học</FormLabel>
                                <FormControl>
                                    <Input placeholder="khoa-hoc-lap-trinh" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button 
                    isLoading={isSubmitting} 
                    variant="primary"  
                    type="submit"
                    className="w-[120px]"
                    disabled={isSubmitting}
                >Tạo khóa học</Button>
            </form>
        </Form>
    );
}
export default CourseAddNew;
