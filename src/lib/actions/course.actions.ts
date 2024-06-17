"use server";

import { TCreateCourseParams ,TUpdateCourseParams} from "@/types";
import Course from "@/app/database/course.model";
import { connectToDatabase } from "../mongoose";
import { ICourse } from "@/app/database/course.model";
import { revalidatePath } from "next/cache";


export async function getAllCourses():Promise<ICourse[] | undefined> {
    try{
        connectToDatabase()
        const courses = await Course.find();
        return courses;
    }catch(error){
        console.log(error);
    }

}


export async function getCourseBySlug({ slug }: { slug: string }) {
    try{
        connectToDatabase()
        const findCourse = await Course.findOne({slug});
        return findCourse;
    }catch(error){
        console.log(error);
    }
}

// CRUD
export async function createCourse(params: TCreateCourseParams) {
  try {
    connectToDatabase();
    const existCource = await Course.findOne({ slug: params.slug });
    if(existCource){
        return {
            success: false,
            message: "Khóa học đã tồn tại"
        }
    }
    const course = await Course.create(params);
    return {
      success: true,
      data: JSON.parse(JSON.stringify(course)),
    };
  } catch (error) {
    console.log(error);
  }
}


export async function updateCourse(params: TUpdateCourseParams) {
    try {
      connectToDatabase();
      const findCourse = await Course.findOne({ slug: params.slug });
      if (!findCourse) return;
      await Course.findOneAndUpdate({ slug: params.slug }, params.updateData, {
        new: true,
      });
      revalidatePath("/");
      return {
        success: true,
        message: "Cập nhật khóa học thành công!",
      };
    } catch (error) {
      console.log(error);
    }
  }
  