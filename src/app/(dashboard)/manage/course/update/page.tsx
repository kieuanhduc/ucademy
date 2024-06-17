
import React from 'react'
import Heading from '@/components/common/Heading'
import CourseUpdate from '@/components/cource/CourseUpdate';
import { getCourseBySlug } from '@/lib/actions/course.actions';


const page = async({ searchParams }:{
    searchParams: {
        slug: string;
    }
}) => {
    const { slug } = searchParams;

    const findCourse = await getCourseBySlug({slug});
    if (!findCourse) return null;

    return (
        <div>
            <Heading>Cập nhật khóa học</Heading>
            <CourseUpdate data={JSON.parse(JSON.stringify(findCourse))} />
        </div>
    );
};

export default page