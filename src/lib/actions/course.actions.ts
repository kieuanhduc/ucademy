"use server";

import { TCreateCourseParams } from "@/types";
import Course from "@/app/database/course.model";
import { connectToDatabase } from "../mongoose";


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
