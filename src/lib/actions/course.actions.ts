"use server";

import { TCreateCourseParams } from "@/types";
import Course from "@/app/database/course.model";
import { connectToDatabase } from "@/lib/mongoose";

// CRUD
export async function createCourse(params: TCreateCourseParams) {
  try {
    connectToDatabase();
    const course = await Course.create(params);
    return {
      success: true,
      data: JSON.parse(JSON.stringify(course)),
    };
  } catch (error) {
    console.log(error);
  }
}
