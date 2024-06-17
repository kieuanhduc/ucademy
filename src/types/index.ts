import { ICourse } from "@/app/database/course.model";

type TActiveLinkProps = {
    url: string;
    children: React.ReactNode;
  };
type TMenuItem = {
    url: string;
    title: string;
    icon: React.ReactNode;
  };
// User
type TCreateUserParams = {
    clerkId: string;
    username: string;
    email: string;
    name?: string;
    avatar?: string;
};

type TCreateCourseParams = {
    title:string;
    slug:string;
};

type TUpdateCourseParams = {
    slug:string;
    updateData: Partial<ICourse>;
}

export type { 
    TActiveLinkProps, 
    TCreateUserParams, 
    TMenuItem,
    TCreateCourseParams ,
    TUpdateCourseParams
};