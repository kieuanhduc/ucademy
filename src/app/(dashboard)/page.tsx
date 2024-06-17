import CourseItem from "@/components/cource/CourseItem";
import Heading from "@/components/typography/Heading";
import { CourseGrid } from "@/components/common";

const page = () => {
    return <div>
        <Heading>Khám Phá</Heading>
        <CourseGrid>
            <CourseItem></CourseItem>
           <CourseItem></CourseItem>
           <CourseItem></CourseItem>
        </CourseGrid>
        
    </div>;
  };
  
  export default page;
  