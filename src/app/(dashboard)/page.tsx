import CourseItem from "@/components/cource/CourseItem";
import Heading from "@/components/typography/Heading";
import { CourseGrid } from "@/components/common";
import { getAllCourses } from "@/lib/actions/course.actions";

const page = async() => {
    const courses = await getAllCourses() || []

    return <div>
        <Heading>Khám Phá</Heading>
        <CourseGrid>
            {courses.length > 0 && courses?.map(item => (
                <CourseItem key={item.slug} data={item}></CourseItem>
            ))}
         
        </CourseGrid>
        
    </div>;
  };
  
  export default page;
  