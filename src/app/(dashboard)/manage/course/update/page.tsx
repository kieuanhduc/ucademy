
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
            <Heading>Cập nhật khóa học - {findCourse.title}</Heading>
            <CourseUpdate></CourseUpdate>
        </div>
    );
};

export default page